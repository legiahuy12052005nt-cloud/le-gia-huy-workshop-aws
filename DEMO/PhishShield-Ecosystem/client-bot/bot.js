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