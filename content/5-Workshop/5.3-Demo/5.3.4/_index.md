---
title: "Browser Extension Configuration (Manifest V3)"
date: 2026-07-05
weight: 4
chapter: false
pre: " <b> 5.3.4. </b> "
---

To manifest proactive defense capabilities straight at the user's infrastructure edge (client edge), we proceed with constructing and configuring a dedicated browser expansion client (chrome extension) aligned with the modern secure manifest v3 standard specifications. The detailed development scripts comprise:

#### 1. Create extension configuration manifest (manifest.json)

Every chrome extension requires this critical baseline definition asset to broadcast core properties, claim secure system permissions, and bind background service worker cycles. We utilize the visual studio code editor to initialize the manifest.json file structure as follows:

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

#### 2. Create background.js file

This component serves as the gatekeeping brain at the client layer to capture navigation events and transmit analysis data directly to the aws cloud backend.

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
#### 3. Create warning user interface warning.html

When a malicious link is detected, the extension agent redirects the user to this localized safe overlay page layout to fully terminate the session and prevent further threat exposure.

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

#### 4. Create content.js file

This specific script file is injected directly onto targeted social networking portals (such as the facebook platform) to parse and evaluate suspicious redirect references. Upon receiving a malicious classification status from our central backend api gateway response, the script dynamically alters link styling properties and blurs the offending post container layouts by actively tracking tree node updates through a localized dom mutationobserver tracking routine loop.

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
                link.innerHTML = `⚠️ [Blocked] ${link.innerHTML}`;
 
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