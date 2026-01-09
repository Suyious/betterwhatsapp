# Better WhatsApp Web

This extension is a **personal usability improvement** for **WhatsApp Web**.

The main idea is to make WhatsApp Web more usable in **vertical / narrow window layouts**, which is a more natural orientation for chatting. To support this, the sidebar that always shows recent chats can be **toggled on and off**, allowing more space for the conversation view.

👉 **Current status:**
Only sidebar toggling and layout responsiveness are implemented so far.
More improvements are planned.

---

## Features

* Improves usability in vertical window layouts
* Toggleable floating chat sidebar
* Hide unnecessary tabs like MetaAI, Channels, Status
* Lightweight, CSS-first, no tracking

## Pending Features and bugs
- [ ] Sidebar should close right after any chat is opened
- [ ] Few necessary tabs (like settings) should not be hidden

---

## Setup (Chrome/Brave/Edge/Chromium based browsers that suppport chrome extensions)

1. Clone or download this repository
2. Install dependencies and build:
   ```bash
   npm install
   npm run build
   ```
3. Open Chrome and go to:
   ```
   chrome://extensions
   ```
4. Enable **Developer mode**
5. Click **Load unpacked**
6. Select the generated `dist/` folder

---

## Usage

1. Open **[https://web.whatsapp.com](https://web.whatsapp.com)**
2. Use the existing **Chats** button to toggle the sidebar
3. Resize the window vertically to benefit from the responsive layout
4. Install the site as a PWA optionally

---

## Notes

* This extension is for **personal use**
* No data is collected
* The codebase is intentionally simple and extensible
