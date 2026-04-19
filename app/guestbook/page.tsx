"use client";

import { useCallback, useMemo, useState } from "react";
import useSWR from "swr";

import GuestbookForm from "@/components/GuestbookForm";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { GuestbookEntry } from "@/src/data/guestbook";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

function initials(name: string) {
  const trimmed = name.trim();
  if (!trimmed) return "?";
  return trimmed[0]?.toUpperCase() ?? "?";
}

export default function GuestbookPage() {
  const { data, error, isLoading, mutate } = useSWR<GuestbookEntry[]>(
    "/api/guestbook",
    fetcher,
  );

  const entries = data ?? [];

  const pageSize = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(entries.length / pageSize));
  const safePage = Math.min(page, totalPages);

  const pagedEntries = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return entries.slice(start, start + pageSize);
  }, [entries, safePage]);

  const canPrev = safePage > 1;
  const canNext = safePage < totalPages;

  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const onCreated = useCallback(() => {
    setPage(1);
    void mutate();
  }, [mutate]);

  const onConfirmDelete = useCallback(async () => {
    if (!confirmDeleteId) return;

    try {
      setDeletingId(confirmDeleteId);
      const res = await fetch(`/api/guestbook/${confirmDeleteId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        // Keep it simple: just close dialog after failure.
        return;
      }

      setConfirmDeleteId(null);
      await mutate();
    } finally {
      setDeletingId(null);
    }
  }, [confirmDeleteId, mutate]);

  return (
    <main className="max-w-5xl mx-auto px-4 py-14 space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Guestbook</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Sổ lưu bút — để lại lời nhắn và xem các lời nhắn gần đây.
          </p>
        </div>
        <Badge variant="secondary">{entries.length} entries</Badge>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Gửi lời nhắn</CardTitle>
          <CardDescription>
            Validation: name 2-50 ký tự, message 1-500 ký tự.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <GuestbookForm onCreated={onCreated} />
        </CardContent>
      </Card>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Danh sách lời nhắn</CardTitle>
          <CardDescription>
            Hiển thị {pageSize} lời nhắn mỗi trang.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isLoading ? (
            <p className="text-sm text-muted-foreground">Đang tải...</p>
          ) : error ? (
            <p className="text-sm text-destructive">
              Không tải được dữ liệu guestbook.
            </p>
          ) : pagedEntries.length === 0 ? (
            <p className="text-sm text-muted-foreground">Chưa có lời nhắn.</p>
          ) : (
            <div className="grid gap-3">
              {pagedEntries.map((entry) => (
                <article
                  key={entry.id}
                  className="flex items-start justify-between gap-4 rounded-xl border bg-background p-4"
                >
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback>{initials(entry.name)}</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="text-sm font-semibold">{entry.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line">
                        {entry.message}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {new Date(entry.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setConfirmDeleteId(entry.id)}
                    disabled={deletingId === entry.id}
                  >
                    {deletingId === entry.id ? "Đang xóa..." : "Xóa"}
                  </Button>
                </article>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <Button
              variant="outline"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={!canPrev}
            >
              Trang trước
            </Button>

            <p className="text-sm text-muted-foreground">
              Trang {safePage}/{totalPages}
            </p>

            <Button
              variant="outline"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={!canNext}
            >
              Trang sau
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={Boolean(confirmDeleteId)}
        onOpenChange={() => {
          if (deletingId) return;
          setConfirmDeleteId(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Xác nhận xóa</DialogTitle>
            <DialogDescription>
              Bạn có chắc muốn xóa lời nhắn này không? Hành động này không thể
              hoàn tác.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setConfirmDeleteId(null)}
              disabled={Boolean(deletingId)}
            >
              Hủy
            </Button>
            <Button
              variant="destructive"
              onClick={onConfirmDelete}
              disabled={Boolean(deletingId)}
            >
              {deletingId ? "Đang xóa..." : "Xóa"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
