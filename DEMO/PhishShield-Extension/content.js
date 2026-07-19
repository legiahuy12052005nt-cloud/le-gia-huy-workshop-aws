const API_ENDPOINT = "https://e7202kmo0i.execute-api.us-east-1.amazonaws.com/prod";

async function checkFacebookLinks() {
    const links = document.querySelectorAll("a[href*='l.facebook.com/l.php']");
    
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