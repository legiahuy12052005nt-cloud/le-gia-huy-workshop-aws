---
title: "Cấu hình discord protection bot"
date: 2026-07-05
weight: 6
chapter: false
pre: " <b> 5.3.6. </b> "
---

Để mở rộng không gian bảo vệ của hệ sinh thái lên các nền tảng truyền thông cộng đồng, chúng em tiến hành xây dựng và triển khai một con bot bảo vệ an ninh ứng dụng chat (discord bot). Thành phần này đóng vai trò giám sát, tự động bóc tách liên kết nguy hiểm và ngăn chặn hành vi rò rỉ thông tin danh tính (identity token leak) thời gian thực. Các bước thiết lập mã nguồn thành phần bao gồm:

#### 1. Khởi tạo tệp khai báo thư viện (package.json)

Chúng em tạo một thư mục dự án độc lập có tên là client-bot/, sau đó khởi tạo tệp tin package.json để định nghĩa các gói thư viện phụ thuộc cốt lõi bao gồm discord.js (giao tiếp với nền tảng discord), axios (gửi gói tin http request) và dotenv (quản lý biến môi trường).

```json
{
  "name": "phishshield-discord-bot",
  "version": "1.1.0",
  "description": "Asynchronous network threat evaluation bot for Discord channels by Team ILOVEAWS",
  "main": "bot.js",
  "scripts": {
    "start": "node bot.js"
  },
  "dependencies": {
    "axios": "^1.7.0",
    "discord.js": "^14.14.1",
    "dotenv": "^16.4.5"
  }
}
```

---

#### 2. Cấu hình tệp lưu trữ cấu hình bảo mật (.env)

Tệp cấu hình .env đóng vai trò cực kỳ quan trọng trong quản trị an toàn thông tin, giúp chúng em cô lập và ẩn đi mã bí mật token của bot cùng đường dẫn invoke url của api gateway. Việc này giúp ngăn ngừa rủi ro lộ lọt các khóa bảo mật hệ thống khi tiến hành đẩy mã nguồn lên các kho lưu trữ mã nguồn mở công khai như github.

```env
DISCORD_BOT_TOKEN=TOKEN_DISCORD_CUA_BAN
PHISHSHIELD_API_URL=[https://e7202kmo0i.execute-api.us-east-1.amazonaws.com/prod](https://e7202kmo0i.execute-api.us-east-1.amazonaws.com/prod)
```

---

#### 3. Xây dựng mã nguồn xử lý logic an ninh (bot.js)

Tệp tin bot.js đóng vai trò là bộ não điều phối chính của cấu phần này. Đoạn mã lập trình hướng sự kiện sẽ liên tục lắng nghe mọi tin nhắn xuất hiện trong các phòng chat, sử dụng các biểu thức chính quy (regular expression) để phát hiện chuỗi url hoặc chặn đứng các chuỗi token tài khoản chưa được mã hóa, sau đó gọi api về trung tâm xử lý dữ liệu aws cloud backend để đưa ra quyết định xóa tin nhắn độc hại ngay lập tức.

```javascript
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
 
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
 
const API_ENDPOINT = process.env.PHISHSHIELD_API_URL;
const URL_PATTERN = /(https?:\/\/[^\s]+)/g;
const TOKEN_PATTERN = /([a-zA-Z0-9\_-]{24}\.[a-zA-Z0-9\_]{6}\.[a-zA-Z0-9\_-]{27})/;
 
client.once('ready', () => {
    console.log(`[PhishShield Ingress Active]: Logged in as ${client.user.tag}`);
});
 
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
 
    if (TOKEN_PATTERN.test(message.content)) {
        try {
            await message.delete();
            await message.channel.send(`🚨 **[PhishShield Critical Alert]** Micro-session containment activated. Blocked an unencrypted identity token leak from <@${message.author.id}>.`);
            return;
        } catch (err) {
            console.error("[Token Interception Failure]:", err.message);
        }
    }
 
    const detectedUrls = message.content.match(URL_PATTERN);
    if (!detectedUrls) return;
 
    for (const targetUrl of detectedUrls) {
        try {
            const response = await axios.post(API_ENDPOINT, { url: targetUrl }, {
                headers: { 'Content-Type': 'application/json' }
            });
 
            if (response.data && response.data.status === 'MALICIOUS') {
                await message.delete();
                await message.channel.send(`🚨 **[PhishShield Protection Alert]** Malicious link intercepted from <@${message.author.id}>. Connection terminated to protect user endpoints.\n\`URL: ${targetUrl}\``);
                break;
            }
        } catch (err) {
            console.error("[API Ingress Connection Error]:", err.message);
        }
    }
});
 
client.login(process.env.DISCORD_BOT_TOKEN);
```

---

#### 4. Triển khai cài đặt các gói thư viện hệ thống

Chúng em tiến hành mở cửa sổ dòng lệnh git bash ngay tại thư mục phân hệ client-bot/ và thực thi câu lệnh quản lý gói để tự động tải về, biên dịch toàn bộ các thư viện phụ thuộc đã khai báo:

```bash
npm install
```

---

#### 5. Khởi chạy và kiểm tra trạng thái hoạt động của bot

Sau khi quá trình tải về hạ tầng hoàn tất thành công, chúng em tiến hành kích hoạt cho bot chạy thực tế bằng câu lệnh:

```bash
npm start
```

Khi màn hình cửa sổ dòng lệnh console hiển thị dòng chữ thông báo trạng thái kết nối thành công: `[PhishShield Ingress Active]: Logged in as...` chứng tỏ hệ thống đã hoàn toàn thông suốt, mạch liên kết dữ liệu bất đồng bộ giữa nền tảng ứng dụng ngoài và kiến trúc hạ tầng đám mây aws serverless đã sẵn sàng thực thi nhiệm vụ an ninh.

#### Thực nghiệm đánh chặn trực tiếp tại communication layer

Để đánh giá độ nhạy và khả năng phản xạ của thành phần gác cổng mạng xã hội, chúng em tiến hành thử nghiệm bắn phá kênh chat bằng hai kịch bản rủi ro an ninh phổ biến nhất hiện nay:

* **Kiểm thử liên kết lừa đảo (phishing link test):** Tiến hành dán thử đường dẫn liên kết độc hại giả lập http://vcb-bank-security-update.com vào phòng chat discord đã được cấu hình cài đặt bot gác cổng. Ngay lập tức, con bot sẽ tự động thực thi lệnh xóa bỏ tin nhắn chứa mối đe dọa, đồng thời bắn ra một thông điệp thông báo cảnh báo bảo mật trực quan đến toàn bộ thành viên trong phòng chat, song song với đó phân hệ backend aws tự động ghi nhận và số hóa dữ liệu bằng chứng độc hại về trung tâm dữ liệu đám mây.


* **Kiểm thử rò rỉ mã định danh (token leak test):** Tiến hành chat gửi một chuỗi văn bản giả lập cấu trúc token discord bảo mật tài khoản cá nhân (ví dụ cụ thể: MTg0OTU3NDk1NzM5MjA1NzM0.G3n4iS.PhishShieldEcosystemTokenLeakTest2026). Hệ thống bot bảo vệ lập tức nhận diện cấu trúc chuỗi nhạy cảm và hủy tin nhắn đó trong vòng một nốt nhạc, giúp bảo vệ cấu trúc thông tin phiên đăng nhập và ngăn chặn triệt để các hành vi quét lén, thu thập dữ liệu tự động từ các dòng mã độc infostealer ngầm.

