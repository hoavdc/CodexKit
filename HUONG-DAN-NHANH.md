# Hướng Dẫn Nhanh - CodexKit

> Hướng dẫn tiếng Việt dành cho người dùng văn phòng và người không biết code. Xem thêm [README.md](README.md) nếu cần chi tiết kỹ thuật.

## CodexKit là gì?

CodexKit là bộ skills, templates, automations và starter workspaces giúp bạn dùng OpenAI Codex và ChatGPT cho công việc hằng ngày: viết email, tóm tắt họp, tạo daily brief, quản lý dự án, phân tích tài chính, xử lý ticket hỗ trợ, lập kế hoạch onboarding, viết SOP, và nhiều việc văn phòng khác.

Bạn không cần biết lập trình. Bạn chỉ cần cài skills, mở `skill-finder.md`, chọn tình huống công việc, rồi gọi skill phù hợp trong Codex hoặc dùng nội dung với ChatGPT.

## Có gì trong v0.10.0?

- 90 skills
- 9 playbooks
- 18 templates
- 14 automation recipes
- 9 starter workspaces

## Cài đặt nhanh

### Cách 1: Dùng bản release zip

1. Mở trang [GitHub Releases](https://github.com/hoavdc/CodexKit/releases).
2. Tải `codexkit-starter-pack-v0.10.0.zip`.
3. Giải nén vào một thư mục bất kỳ.
4. Trên Windows, bấm đúp `START-HERE-WINDOWS.cmd`.
5. Trên macOS/Linux, chạy:

```bash
bash ./START-HERE.sh
```

6. Khởi động lại Codex.
7. Gõ `/skills` trong Codex để kiểm tra skills đã xuất hiện.

### Cách 2: Cài từ repo

Windows PowerShell:

```powershell
.\scripts\install-skills.ps1
```

macOS / Linux:

```bash
bash ./scripts/install-skills.sh
```

## Bắt đầu từ đâu?

### 1. Mở skill finder

Mở [skill-finder.md](skill-finder.md) và tìm theo tình huống:

- Tôi cần viết email.
- Tôi cần tóm tắt cuộc họp.
- Tôi cần tạo daily brief.
- Tôi cần viết status report.
- Tôi cần phân tích support tickets.
- Tôi cần tạo onboarding checklist.
- Tôi cần viết SOP.

### 2. Chọn starter workspace

| Nhu cầu | Workspace |
|---------|-----------|
| Quản lý dự án | `workspaces/project-management-office/` |
| Tài chính | `workspaces/finance-performance-desk/` |
| Nhân sự | `workspaces/hr-people-ops-hub/` |
| Pháp lý | `workspaces/legal-ops-desk/` |
| Vận hành | `workspaces/operations-control-hub/` |
| Marketing | `workspaces/marketing-growth-studio/` |
| Onboarding nhân sự | `workspaces/team-onboarding/` |
| Startup / founder | `workspaces/startup-launch/` |
| Họp team hằng tuần | `workspaces/weekly-team-sync/` |

Bạn cũng có thể tạo workspace nhanh:

```powershell
.\scripts\quick-start.ps1 -List
.\scripts\quick-start.ps1 -Starter team-onboarding -Destination .\my-onboarding
```

### 3. Dùng các skill phổ biến

| Skill | Dùng để làm gì |
|-------|----------------|
| `codexkit-daily-brief-generator` | Tạo bản tóm tắt công việc trong ngày từ lịch, task, tin nhắn |
| `codexkit-meeting-summary-generator` | Tóm tắt họp thành quyết định, action items, owners |
| `codexkit-email-composer` | Viết email chuyên nghiệp từ ghi chú thô |
| `codexkit-report-summarizer` | Tóm tắt báo cáo dài thành key points |
| `codexkit-support-ticket-summarizer` | Tóm tắt ticket hỗ trợ khách hàng |
| `codexkit-sales-forecast-analyzer` | Phân tích pipeline và dự báo doanh số |
| `codexkit-onboarding-checklist-creator` | Tạo checklist onboarding theo vai trò |
| `codexkit-sop-writer` | Viết quy trình SOP rõ ràng, có owner và bước thực hiện |

## Ví dụ prompt

```text
Use codexkit-meeting-summary-generator.
Summarize these meeting notes into:
- decisions
- action items
- owners
- due dates
- open questions
- a short follow-up message

Meeting notes:
[paste notes here]
```

```text
Use codexkit-daily-brief-generator.
Create my daily brief from this calendar and task list.
Highlight top 3 priorities, meeting prep, follow-ups, and risks.

Calendar:
[paste calendar]

Tasks:
[paste tasks]
```

## Lưu ý an toàn

- Với email nhạy cảm, pháp lý, nhân sự, tài chính hoặc hợp đồng, hãy xem lại trước khi gửi.
- Với dữ liệu khách hàng, hãy xóa thông tin cá nhân không cần thiết.
- Với phân tích tài chính hoặc pháp lý, dùng CodexKit để hỗ trợ chuẩn bị, không thay thế chuyên gia.

## Cần xem thêm

- [README.md](README.md)
- [skill-finder.md](skill-finder.md)
- [workspaces/README.md](workspaces/README.md)
- [RELEASE-v0.10.0.md](RELEASE-v0.10.0.md)
