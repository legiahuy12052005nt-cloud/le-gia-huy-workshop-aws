const API_ENDPOINT = "https://e7202kmo0i.execute-api.us-east-1.amazonaws.com/prod";

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
            // Sử dụng cấu trúc Callback lồng nhau để đảm bảo ghi đè bộ đếm thành công trước khi redirect
            chrome.storage.local.get(['blockCount'], (data) => {
                let currentCount = data.blockCount || 0;
                let newCount = currentCount + 1;
                
                chrome.storage.local.set({ blockCount: newCount }, () => {
                    console.log(`[PhishShield] Đã ghi nhận số lượng mới: ${newCount}`);
                    
                    // Ghi vào ổ cứng thành công -> Lập tức bẻ lái sang trang cảnh báo
                    chrome.tabs.update(details.tabId, {
                        url: chrome.runtime.getURL(`warning.html?url=${encodeURIComponent(targetUrl)}`)
                    });
                });
            });
        }
    } catch (error) {
        console.error("[PhishShield Core Error]:", error);
    }
});