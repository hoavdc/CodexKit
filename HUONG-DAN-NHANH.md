# Hướng Dẫn Nhanh — CodexKit

> Bản hướng dẫn tiếng Việt dành cho người dùng văn phòng. Xem [README.md](README.md) để biết chi tiết đầy đủ.

---

## CodexKit là gì?

CodexKit là bộ quy trình (skills) giúp bạn sử dụng AI hiệu quả hơn trong công việc hàng ngày — viết email, tóm tắt báo cáo, quản lý dự án, phân tích tài chính, và nhiều hơn nữa.

**Không cần biết lập trình.** Bạn chỉ cần copy–paste prompt vào Codex hoặc ChatGPT.

---

## Cài đặt nhanh (3 phút)

### Cách 1: Tải bản release (đơn giản nhất)

1. Vào [Releases](https://github.com/your-org/codexkit/releases) → tải file `.zip` mới nhất
2. Giải nén vào thư mục dự án của bạn
3. Xong! Mở file `skill-finder.md` để bắt đầu

### Cách 2: Chạy script cài đặt

**Windows (PowerShell):**
```powershell
.\scripts\install-skills.ps1
```

**macOS / Linux:**
```bash
./scripts/install-skills.sh
```

---

## Bắt đầu từ đâu?

### Bước 1: Xem bảng tra cứu

Mở file **[skill-finder.md](skill-finder.md)** — tìm tình huống công việc của bạn → biết dùng skill nào.

### Bước 2: Chọn workspace phù hợp

| Bộ phận | Workspace |
|---------|-----------|
| Quản lý dự án (PMO) | `workspaces/project-management-office/` |
| Tài chính | `workspaces/finance/` |
| Nhân sự | `workspaces/hr/` |
| Pháp lý | `workspaces/legal/` |
| Marketing | `workspaces/marketing/` |
| Vận hành | `workspaces/operations/` |

### Bước 3: Dùng playbook để bắt đầu ngay

Playbooks là các prompt mẫu bạn có thể copy–paste trực tiếp:

| Tôi cần… | Playbook |
|-----------|----------|
| Viết recap cuộc họp | `playbooks/meeting-to-actions.md` |
| Tổng hợp status | `playbooks/status-synthesis.md` |
| Viết memo quyết định | `playbooks/write-decision-memo.md` |

---

## 5 Skill phổ biến nhất cho văn phòng

| # | Skill | Tác dụng |
|---|-------|----------|
| 1 | `codexkit-email-composer` | Viết email chuyên nghiệp từ ghi chú |
| 2 | `codexkit-report-summarizer` | Tóm tắt báo cáo dài thành key points |
| 3 | `codexkit-meeting-action-router` | Biến notes cuộc họp thành action items |
| 4 | `codexkit-inbox-priority-triage` | Phân loại inbox theo mức ưu tiên |
| 5 | `codexkit-presentation-outliner` | Dàn ý slide trình bày |

---

## Cách dùng một Skill

1. Mở file `SKILL.md` trong thư mục skill
2. Đọc phần **"When to use"** để đảm bảo đúng skill
3. Xem phần **"Examples"** để lấy prompt mẫu
4. Copy prompt, thay `[paste ...]` bằng nội dung thực tế
5. Paste vào Codex hoặc ChatGPT → nhận kết quả

### Ví dụ cụ thể

Bạn cần viết email nhắc vendor:

```text
Act as a business communication specialist.
Draft a polite follow-up email to our vendor (Acme Corp)
asking for updated pricing by end of this week.
Context: We sent the original request 5 days ago, no response yet.
Tone: professional but firm.
```

---

## Cần hỗ trợ?

- Xem **[skill-finder.md](skill-finder.md)** — bảng tra cứu đầy đủ
- Xem **[README.md](README.md)** — hướng dẫn chi tiết bằng tiếng Anh
- Mỗi skill có phần **Examples** với prompt mẫu sẵn sàng sử dụng
