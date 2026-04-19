# CHECKLIST CHỤP ẢNH MINH CHỨNG — BTH3 (ctk46-lab01)

Mục tiêu: bạn chỉ việc làm theo thứ tự, chụp đủ ảnh minh chứng cho từng yêu cầu ở từng phần.

## 0) Chuẩn bị (chụp 1 ảnh)

**Ảnh 00 — chứng minh chạy được project**

- **Tên ảnh**: `00_run_home.png`
- **Chụp ở đâu**: mở `http://localhost:3000/`
- **Chụp gì**: màn hình trang chủ đang chạy.

> Gợi ý chạy server:
>
> - Dev: `npm run dev`
> - Prod (để quan sát cache rõ hơn): `npm run build` rồi `npm run start`
>
> Lưu ý: nhiều yêu cầu (đặc biệt phần cache) dễ quan sát hơn ở chế độ prod.

## Quy ước đặt tên ảnh

- Đặt theo dạng: `P<phần>_<câu>_<mô-tả>.png`
- Ví dụ: `P1_1_fetch_default_headers.png`.

## Phần 1: Data Fetching — Server-side

### (1) Thử thay fetch() bằng fetch(url, { cache: 'no-store' }) trong getPosts()

**Lưu ý quan trọng (để kết quả cache không bị sai):**

- Không bật checkbox **Disable cache** trong tab Network.
- Không dùng hard refresh (Ctrl+F5). Chỉ reload bình thường (F5 hoặc Ctrl+R).

**Ảnh P1.1A — fetch mặc định (không no-store) + Network/Headers**

- **Tên ảnh**: `P1_1A_fetch_default_headers.png`
- **Chuẩn bị**:
  1. Mở file [app/blog/page.tsx](app/blog/page.tsx)
  2. Trong `getPosts()`, đổi dòng fetch thành `fetch(url)`
  3. Chạy prod: `npm run build` rồi `npm run start`
- **Chụp ở đâu**: mở `http://localhost:3000/blog`
- **Thao tác DevTools**:
  1. DevTools → tab **Network**
  2. Tick **Preserve log**
  3. Reload trang 3–5 lần
  4. Click request của `/blog` (Document hoặc request có `?_rsc=`)
  5. Mở tab **Headers**
- **Chụp gì**: khung **Headers** (ưu tiên thấy `Request URL` + `Response Headers`).

**Ảnh P1.1B — fetch no-store + Network/Headers**

- **Tên ảnh**: `P1_1B_fetch_no_store_headers.png`
- **Chuẩn bị**:
  1. Mở file [app/blog/page.tsx](app/blog/page.tsx)
  2. Đổi lại thành `fetch(url, { cache: "no-store" })`
  3. Chạy lại prod: `npm run build` rồi `npm run start`
- **Chụp ở đâu**: vẫn là `http://localhost:3000/blog`
- **Thao tác DevTools**: làm y như ảnh P1.1A
- **Chụp gì**: khung **Headers** của request `/blog`.

**Ảnh P1.1C — ảnh code dòng fetch để đối chiếu**

- **Tên ảnh**: `P1_1C_code_getPosts_fetch.png`
- **Chụp ở đâu**: trong VS Code
- **Chụp gì**: đoạn `getPosts()` trong [app/blog/page.tsx](app/blog/page.tsx) (chụp thấy rõ `fetch(...)`).

---

### (2) Trang chi tiết bài viết hiển thị comments

**Ảnh P1.2A — UI comments trên /blog/1**

- **Tên ảnh**: `P1_2A_blog_detail_comments_ui.png`
- **Chụp ở đâu**: mở `http://localhost:3000/blog/1`
- **Chụp gì**: kéo xuống thấy rõ tiêu đề `Comments (n)` và vài comment (name/email/body).

**Ảnh P1.2B — code gọi API comments**

- **Tên ảnh**: `P1_2B_code_getComments.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: hàm `getComments()` trong [app/blog/[id]/page.tsx](app/blog/%5Bid%5D/page.tsx) (thấy URL `/posts/${id}/comments`).

---

### (3) Chạy song song getPost() và getUser() bằng Promise.all()

**Ảnh P1.3A — code Promise.all**

- **Tên ảnh**: `P1_3A_code_promise_all.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: đoạn `Promise.all([...])` trong [app/blog/[id]/page.tsx](app/blog/%5Bid%5D/page.tsx) (thấy rõ có `getPost(...)` và `getUser(...)`).

**Ảnh P1.3B — UI có thông tin tác giả**

- **Tên ảnh**: `P1_3B_blog_detail_author_ui.png`
- **Chụp ở đâu**: `http://localhost:3000/blog/1`
- **Chụp gì**: phần hiển thị `Tác giả: ... (email)`.

## Phần 2: API Routes (Route Handlers)

### (1) PUT /api/guestbook/[id]

**Ảnh P2.1A — GET danh sách để lấy id**

- **Tên ảnh**: `P2_1A_api_get_list.png`
- **Chụp ở đâu**: mở `http://localhost:3000/api/guestbook`
- **Chụp gì**: JSON list (thấy rõ 1 entry có `id`).

**Ảnh P2.1B — Terminal gọi PUT cập nhật entry**

- **Tên ảnh**: `P2_1B_terminal_put_update.png`
- **Chụp ở đâu**: Terminal PowerShell
- **Lệnh mẫu**:
  - `Invoke-RestMethod -Method Put -Uri http://localhost:3000/api/guestbook/<ID> -ContentType 'application/json' -Body '{"name":"Nguyễn Trần Ngọc Vân","message":"MSSV 2212490 — cập nhật qua PUT"}'`
- **Chụp gì**: màn hình terminal hiện JSON trả về sau PUT.

**Ảnh P2.1C — code endpoint PUT**

- **Tên ảnh**: `P2_1C_code_put_route.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: function `PUT` trong [app/api/guestbook/[id]/route.ts](app/api/guestbook/%5Bid%5D/route.ts).

---

### (2) Validation trong POST (name 2–50, message 1–500) + error message

**Ảnh P2.2A — POST lỗi vì name/message sai**

- **Tên ảnh**: `P2_2A_terminal_post_validation_error.png`
- **Chụp ở đâu**: Terminal PowerShell
- **Lệnh mẫu (cố tình sai)**:
  - `Invoke-RestMethod -Method Post -Uri http://localhost:3000/api/guestbook -ContentType 'application/json' -Body '{"name":"A","message":""}'`
- **Chụp gì**: terminal thể hiện lỗi 400 và/hoặc message lỗi.

**Ảnh P2.2B — code validation**

- **Tên ảnh**: `P2_2B_code_post_validation.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: phần validate trong [app/api/guestbook/route.ts](app/api/guestbook/route.ts) (điều kiện length + message lỗi).

---

### (3) GET /api/guestbook?limit=5

**Ảnh P2.3A — limit trên browser**

- **Tên ảnh**: `P2_3A_api_get_limit_5.png`
- **Chụp ở đâu**: `http://localhost:3000/api/guestbook?limit=5`
- **Chụp gì**: JSON chỉ trả về tối đa 5 entries.

**Ảnh P2.3B — code parse limit**

- **Tên ảnh**: `P2_3B_code_get_limit.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: phần xử lý query `limit` trong [app/api/guestbook/route.ts](app/api/guestbook/route.ts).

## Phần 3: Client-side Data Fetching

### (1) Loading cho từng nút Xóa

**Ảnh P3.1A — UI nút “Đang xóa...”**

- **Tên ảnh**: `P3_1A_guestbook_delete_loading.png`
- **Chụp ở đâu**: `http://localhost:3000/guestbook`
- **Cách làm để dễ thấy loading**:
  1. DevTools → Network → Throttling = `Slow 3G`
  2. Bấm `Xóa` 1 entry → confirm dialog → ngay lúc request đang chạy
- **Chụp gì**: nút đổi sang `Đang xóa...` và bị disable.

**Ảnh P3.1B — code state deletingId**

- **Tên ảnh**: `P3_1B_code_deleting_state.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: đoạn state `deletingId` + nút render `Đang xóa...` trong [app/guestbook/page.tsx](app/guestbook/page.tsx).

---

### (2) Dùng SWR thay useEffect/useState

**Ảnh P3.2A — code useSWR**

- **Tên ảnh**: `P3_2A_code_use_swr.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: đoạn `useSWR("/api/guestbook", ...)` trong [app/guestbook/page.tsx](app/guestbook/page.tsx).

**Ảnh P3.2B — package.json có dependency swr**

- **Tên ảnh**: `P3_2B_package_swr.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: mục dependencies có `swr` trong [package.json](package.json).

**Ảnh P3.2C — Terminal chứng minh SWR đã được cài**

- **Tên ảnh**: `P3_2C_terminal_npm_ls_swr.png`
- **Chụp ở đâu**: Terminal
- **Lệnh**: `npm ls swr`
- **Chụp gì**: output hiển thị `swr@...`.

**Ảnh P3.2D — So sánh lượng code trước & sau (để nộp báo cáo)**

- **Tên ảnh**: `P3_2D_compare_before_after.png`
- **Chụp ở đâu**: VS Code (chụp ngay mục này trong checklist) hoặc bạn copy đoạn so sánh này vào báo cáo.
- **Nội dung so sánh gợi ý**:
  - **Trước (useEffect + useState):** thường cần `useState(entries)`, `useState(loading)`, `useState(error)`, 1 `useEffect()` để fetch + `setState`, và 1 hàm `refetch()` khi cần reload.
  - **Sau (useSWR):** chỉ cần 1 dòng `useSWR("/api/guestbook", fetcher)` để có `data/error/isLoading` và dùng `mutate()` để refetch.

---

### (3) Phân trang 5 entries/trang + Trang trước/Trang sau

**Ảnh P3.3A — UI phân trang**

- **Tên ảnh**: `P3_3A_guestbook_pagination_ui.png`
- **Chụp ở đâu**: `http://localhost:3000/guestbook`
- **Chụp gì**: thấy rõ 2 nút `Trang trước`/`Trang sau` + dòng `Trang x/y`.

> Nếu bạn chưa có đủ >5 lời nhắn để xuất hiện nhiều trang:
>
> - Có thể bấm gửi thêm vài lời nhắn bằng form UI, hoặc dùng Terminal POST nhanh qua API.
> - Mục tiêu: tổng số entries >= 6 để thấy `Trang 1/2`.

**Ảnh P3.3B — code pageSize=5**

- **Tên ảnh**: `P3_3B_code_page_size_5.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: đoạn `pageSize = 5` và logic slice trong [app/guestbook/page.tsx](app/guestbook/page.tsx).

## Phần 4: Server Actions & Form Handling

### (1) Contact reset form sau submit thành công

**Ảnh P4.1A — UI trạng thái thành công + nút “Gửi tin nhắn khác”**

- **Tên ảnh**: `P4_1A_contact_success_reset_ui.png`
- **Chụp ở đâu**: `http://localhost:3000/contact` (hoặc section Liên hệ trên trang chủ)
- **Cách làm**:
  1. Điền form và bấm `Gửi tin nhắn`
  2. Khi hiện thông báo thành công + nút `Gửi tin nhắn khác`
- **Chụp gì**: trạng thái thành công.

**Ảnh P4.1B — Sau khi bấm “Gửi tin nhắn khác” quay lại form trống**

- **Tên ảnh**: `P4_1B_contact_reset_to_form.png`
- **Chụp ở đâu**: `http://localhost:3000/contact`
- **Cách làm**:
  1. Ở trạng thái thành công (đã có nút `Gửi tin nhắn khác`), bấm nút đó
  2. Form hiện lại, các ô input/textarea trống
- **Chụp gì**: giao diện form đã reset.

---

### (2) Guestbook: không cho gửi lời nhắn trùng trong 1 phút

**Ảnh P4.2A — UI báo lỗi khi gửi trùng**

- **Tên ảnh**: `P4_2A_guestbook_duplicate_error_ui.png`
- **Chụp ở đâu**: `http://localhost:3000/guestbook`
- **Cách làm**:
  1. Nhập `Tên` = `Nguyễn Trần Ngọc Vân`
  2. Nhập `Lời nhắn` = `MSSV 2212490 — test trùng 1 phút`
  3. Bấm `Gửi lời nhắn`
  4. Ngay lập tức (trong vòng 1 phút) nhập y chang 2 trường và bấm `Gửi lời nhắn` lần nữa
- **Chụp gì**: Alert lỗi hiển thị nội dung:
  `Không cho phép gửi lời nhắn trùng lặp (cùng name + message) trong vòng 1 phút`

**Ảnh P4.2B — code check trùng (1 phút)**

- **Tên ảnh**: `P4_2B_code_guestbook_duplicate_check.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: hàm `isDuplicateWithinOneMinute(...)` và đoạn `if (isDuplicateWithinOneMinute...) return { ok: false, error: ... }` trong [app/guestbook/actions.ts](app/guestbook/actions.ts).

---

### (3) useFormStatus() + Submit button tái sử dụng

**Ảnh P4.3A — code `SubmitButton` dùng `useFormStatus()`**

- **Tên ảnh**: `P4_3A_code_useFormStatus_submit_button.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: file [components/SubmitButton.tsx](components/SubmitButton.tsx) (thấy `useFormStatus()` và logic `pending ? pendingText : children`).

**Ảnh P4.3B — `SubmitButton` được tái sử dụng ở nhiều form**

- **Tên ảnh**: `P4_3B_code_submitbutton_reuse.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: chụp 2 vị trí import/usage:
  - [components/GuestbookForm.tsx](components/GuestbookForm.tsx) (thấy `<SubmitButton ...>Gửi lời nhắn</SubmitButton>`)
  - [components/ContactForm.tsx](components/ContactForm.tsx) (thấy `<SubmitButton ...>Gửi tin nhắn</SubmitButton>`)

**Ảnh P4.3C — UI trạng thái pending (nút đổi chữ và disable)**

- **Tên ảnh**: `P4_3C_ui_submit_pending.png`
- **Chụp ở đâu**: `http://localhost:3000/contact` hoặc `http://localhost:3000/guestbook`
- **Cách làm**:
  1. Mở DevTools → Network → Throttling = `Slow 3G`
  2. Bấm submit
- **Chụp gì**: nút chuyển sang `Đang gửi...` (hoặc `Đang gửi...` theo `pendingText`) và bị disable trong lúc request đang chạy.

---

## Phần 5: shadcn/ui — Component Library

### (1) Dialog xác nhận trước khi xóa (thay confirm)

**Ảnh P5.1A — UI dialog confirm xóa**

- **Tên ảnh**: `P5_1A_dialog_confirm_delete.png`
- **Chụp ở đâu**: `http://localhost:3000/guestbook`
- **Cách làm**: bấm `Xóa` 1 entry
- **Chụp gì**: dialog mở ra (có nút Hủy/Xóa).

**Ảnh P5.1B — code dùng Dialog**

- **Tên ảnh**: `P5_1B_code_dialog_usage.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: đoạn `<Dialog ...>` trong [app/guestbook/page.tsx](app/guestbook/page.tsx).

---

### (2) Avatar cho About và guestbook entries

**Ảnh P5.2A — UI avatar ở About**

- **Tên ảnh**: `P5_2A_about_avatar_ui.png`
- **Chụp ở đâu**: `http://localhost:3000/` kéo tới phần `Giới thiệu`
- **Chụp gì**: avatar hiển thị chữ cái.

**Ảnh P5.2B — UI avatar ở guestbook**

- **Tên ảnh**: `P5_2B_guestbook_avatar_ui.png`
- **Chụp ở đâu**: `http://localhost:3000/guestbook`
- **Chụp gì**: avatar cho mỗi entry.

**Ảnh P5.2C — code import Avatar**

- **Tên ảnh**: `P5_2C_code_avatar_imports.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**:
  - [components/About.tsx](components/About.tsx)
  - [app/guestbook/page.tsx](app/guestbook/page.tsx)

---

### (3) Nâng cấp Contact dùng Input/Textarea/Button/Label từ shadcn

**Ảnh P5.3A — UI contact form (shadcn components)**

- **Tên ảnh**: `P5_3A_contact_form_shadcn_ui.png`
- **Chụp ở đâu**: `http://localhost:3000/contact`
- **Chụp gì**: form với các field + button.

**Ảnh P5.3B — code ContactForm import ui components**

- **Tên ảnh**: `P5_3B_code_contact_shadcn_imports.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: các import `Input/Textarea/Label/Button` trong [components/ContactForm.tsx](components/ContactForm.tsx).

---

### (4) Thử 2–3 component mới

**Ảnh P5.4A — UI dùng Card/Badge/Separator (và Alert nếu chụp được)**

- **Tên ảnh**: `P5_4A_guestbook_shadcn_components_ui.png`
- **Chụp ở đâu**: `http://localhost:3000/guestbook`
- **Chụp gì**: Card bao form + Badge tổng entries + Separator.

> Nếu bạn muốn chụp thêm `Alert` (để minh chứng component này cũng được dùng), hãy submit form với dữ liệu sai (ví dụ Tên = `A`, Lời nhắn = rỗng) để hiện alert lỗi rồi chụp thêm 1 ảnh (hoặc chụp chung nếu bố cục đủ rõ).

**Ảnh P5.4B — code import Card/Badge/Separator/Alert**

- **Tên ảnh**: `P5_4B_code_more_components.png`
- **Chụp ở đâu**: VS Code
- **Chụp gì**: import các component trong [app/guestbook/page.tsx](app/guestbook/page.tsx) và [components/GuestbookForm.tsx](components/GuestbookForm.tsx).

## Mẹo chụp nhanh (Windows)

- Chụp vùng: `Win + Shift + S`
- Chụp toàn màn hình: `PrtScn` (tùy máy)
- Khi chụp terminal, phóng to font terminal (Ctrl + lăn chuột) để dễ đọc.
