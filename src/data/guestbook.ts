export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string; // ISO
}

type GuestbookGlobal = typeof globalThis & {
  __guestbookEntries?: GuestbookEntry[];
};

const guestbookGlobal = globalThis as GuestbookGlobal;

if (!guestbookGlobal.__guestbookEntries) {
  guestbookGlobal.__guestbookEntries = [
    {
      id: "1",
      name: "Nguyễn Trần Ngọc Vân",
      message: "MSSV 2212490 — Bài lab rất bổ ích!",
      createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    },
    {
      id: "2",
      name: "Nguyễn Trần Ngọc Vân",
      message: "MSSV 2212490 — Next.js App Router khá thú vị.",
      createdAt: new Date(Date.now() - 1000 * 60 * 40).toISOString(),
    },
    {
      id: "3",
      name: "Nguyễn Trần Ngọc Vân",
      message: "MSSV 2212490 — Mình đã hiểu thêm về fetch cache và revalidate.",
      createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    },
  ];
}

export const guestbookEntries = guestbookGlobal.__guestbookEntries;
