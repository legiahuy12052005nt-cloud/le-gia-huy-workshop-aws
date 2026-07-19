---
title: "Cấu hình browser extension (manifest v3)"
date: 2026-07-05
weight: 4
chapter: false
pre: " <b> 5.3.4. </b> "
---

Để hiện thực hóa khả năng phòng thủ chủ động ngay tại lớp thiết bị của người dùng (client edge), chúng em tiến hành xây dựng và cấu hình một tiện ích mở rộng trình duyệt (chrome extension) theo tiêu chuẩn bảo mật manifest v3 mới nhất. Các bước thiết lập mã nguồn thành phần bao gồm:

#### 1. Tạo tệp cấu hình tiện ích mở rộng (manifest.json)

Mọi tiện ích chrome extension đều bắt buộc phải có tệp tin này để khai báo thông tin nền tảng, phân cấp quyền hạn hệ thống và cấu hình chỉ định vòng đời chạy cho thành phần service worker ngầm. Chúng em mở công cụ lập trình visual studio code và khởi tạo tệp manifest.json với nội dung như sau:

```json
{
  "manifest_version": 3,
  "name": "PhishShield EndPoint Guardian",
  "version": "1.1.0",
  "author": "Team ILOVEAWS",
  "description": "Real-time threat intelligence network endpoint evaluation client developed by Team ILOVEAWS.",
  "permissions": [
    "webNavigation",
    "tabs",
    "storage"
  ],
  "host_permissions": [
    "http://*/*",
    "https://*/*"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon.png",
      "48": "icons/icon.png",
      "128": "icons/icon.png"
    }
  },
  "icons": {
    "16": "icons/icon.png",
    "48": "icons/icon.png",
    "128": "icons/icon.png"
  }
}
```

---

#### 2. Tạo tệp background.js

Đây chính là bộ não gác cổng ở client layer giúp bắt sự kiện và gửi dữ liệu lên aws cloud backend.

```javascript
const API_ENDPOINT = "[https://e7202kmo0i.execute-api.us-east-1.amazonaws.com/prod](https://e7202kmo0i.execute-api.us-east-1.amazonaws.com/prod)";
 
const EXCLUDED_SCHEMES = [
    "chrome://",
    "chrome-extension://",
    "aws.amazon.com",
    "console.aws.amazon.com"
];
 
chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
    if (details.frameId !== 0) return;
 
    const targetUrl = details.url;
    if (EXCLUDED_SCHEMES.some(scheme => targetUrl.startsWith(scheme) || targetUrl.includes(scheme))) {
        return;
    }
 
    try {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: targetUrl })
        });
 
        if (!response.ok) throw new Error(`Network response error: ${response.status}`);
        const result = await response.json();
 
        if (result && result.status === "MALICIOUS") {
            
            const data = await chrome.storage.local.get({ blockCount: 0 });
            const newCount = data.blockCount + 1;
            await chrome.storage.local.set({ blockCount: newCount });
 
            chrome.tabs.update(details.tabId, {
                url: chrome.runtime.getURL(`warning.html?url=${encodeURIComponent(targetUrl)}`)
            });
        }
    } catch (error) {
        console.error("[PhishShield Core Error]:", error);
    }
});
```

#### 3. Tạo trang ui cảnh báo lừa đảo warning.html

Khi phát hiện liên kết nguy hiểm, tiện ích mở rộng extension sẽ tự động điều hướng người dùng sang trang giao diện overlay cục bộ này để chặn đứng hoàn toàn hành vi truy cập trái phép.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Security Exception - PhishShield</title>
    <style>
        body { background-color: #1a0606; color: #f5c6c6; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; text-align: center; padding-top: 120px; margin: 0; }
        .container { border: 2px solid #e63946; display: inline-block; padding: 40px; background: #2b0e0e; border-radius: 8px; max-width: 550px; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }
        h1 { color: #e63946; font-size: 32px; margin-top: 0; letter-spacing: 1px; }
        p { font-size: 15px; line-height: 1.6; color: #ddb7b7; }
        .btn-safety { display: inline-block; margin-top: 25px; padding: 12px 24px; background-color: #e63946; color: #fff; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 14px; transition: background 0.2s; }
        .btn-safety:hover { background-color: #c92a36; }
    </style>
</head>
<body>
    <div class="container">
        <h1>ACCESS DENIED</h1>
        <p><strong>PhishShield Ecosystem</strong> has intercepted this navigation request. The destination URL exhibits high-risk indicators mapped to active phishing deployment nodes.</p>
        <p>In alignment with zero-trust protection matrices, active session establishment has been terminated to secure credential structures.</p>
        <a href="javascript:history.back()" class="btn-safety">Back to Safety</a>
    </div>
</body>
</html>
```

---

#### 4. Tạo tệp tương tác giao diện content.js

Tệp tin này đóng vai trò nhúng trực tiếp vào môi trường hiển thị của các trang mạng xã hội đích (ví dụ như nền tảng facebook) nhằm bóc tách các liên kết chuyển hướng lừa đảo. Khi nhận diện trạng thái nguy hiểm từ cổng cấu hình api phản hồi về, tập tin thực thi sẽ trực tiếp thay đổi thuộc tính đồ họa hiển thị của thẻ liên kết, đồng thời làm mờ bài viết chứa bẫy thông qua cơ chế liên tục theo dõi cây cấu trúc dom của đối tượng mutationobserver.

```javascript
const API_ENDPOINT = "[https://e7202kmo0i.execute-api.us-east-1.amazonaws.com/prod](https://e7202kmo0i.execute-api.us-east-1.amazonaws.com/prod)";
 
async function checkFacebookLinks() {
    const links = document.querySelectorAll("a[href*='[l.facebook.com/l.php](https://l.facebook.com/l.php)']");
    
    links.forEach(async (link) => {
        if (link.hasAttribute("data-phishshield-checked")) return;
        link.setAttribute("data-phishshield-checked", "true");
 
        try {
            const urlObj = new URL(link.href);
            const rawUrl = urlObj.searchParams.get("u");
            
            if (!rawUrl) return;
 
            const response = await fetch(API_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: rawUrl })
            });
 
            const result = await response.json();
 
            if (result && result.status === "MALICIOUS") {
                link.style.border = "2px dashed #ff3333";
                link.style.backgroundColor = "#ffe6e6";
                link.style.color = "#ff3333";
                link.innerHTML = `⚠️ [Chặn] ${link.innerHTML}`;
 
                const postContainer = link.closest("div[data-testid='fbfeed_story']") || link.closest("div[role='article']");
                if (postContainer) {
                    postContainer.style.opacity = "0.4";
                    postContainer.style.filter = "blur(1px)";
                }
            }
        } catch (error) {
            console.error("[PhishShield Scanner Error]:", error);
        }
    });
}
 
const observer = new MutationObserver(() => {
    checkFacebookLinks();
});
 
observer.observe(document.body, {
    childList: true,
    subtree: true
});
 
checkFacebookLinks();
```