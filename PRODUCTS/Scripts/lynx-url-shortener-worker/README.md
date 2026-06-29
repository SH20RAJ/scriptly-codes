# LYNX — Telegram URL Shortener & Redirect Worker

LYNX is a high-performance serverless Telegram Bot and link redirection service built for Cloudflare Workers. It uses Cloudflare KV (Key-Value) storage to save shortened URLs, redirecting users at ultra-fast speeds from edge locations.

## Purchase & Licensing
You can view details, purchase commercial licenses, or get support for this script on the [Scriptly Store Product Page](https://scriptly.store/products/lynx-url-shortener-worker).

## Features
- **Ultra-Fast Redirects**: Sub-millisecond redirects served from Cloudflare's nearest edge location.
- **Telegram Bot Integration**: Shorten links directly inside Telegram using the `/shorten` command.
- **Permanent Cloudflare KV Storage**: Secure database storage hosted on Cloudflare's globally distributed Key-Value platform.
- **Completely Serverless**: Zero hosting costs and zero server maintenance.

## Setup & Deployment

### 1. Prerequisites
- Install [Node.js](https://nodejs.org/) on your computer.
- Install Wrangler (Cloudflare CLI) globally:
  ```bash
  npm install -g wrangler
  ```
- Create a new Telegram bot via [@BotFather](https://t.me/BotFather) to get your **Bot Token**.

### 2. Configure Cloudflare KV
Run the following command in your terminal to create a KV namespace:
```bash
wrangler kv:namespace create LYNX_KV
```
Copy the output namespace `id` and paste it inside the `[[kv_namespaces]]` section of [wrangler.toml](file:///Users/shaswatraj/Desktop/earn/scriptly-codes/SELF_CREATED/Bots/lynx-url-shortener-worker/wrangler.toml).

### 3. Deploy to Cloudflare
Replace your bot token in `wrangler.toml` or upload it securely via wrangler secrets:
```bash
wrangler secret put TELEGRAM_BOT_TOKEN
```
Deploy the worker:
```bash
wrangler deploy
```
Wrangler will output your live URL (e.g. `https://lynx-url-shortener-worker.username.workers.dev`).

### 4. Setup Telegram Webhook
Link your bot to the worker endpoint:
```bash
curl -F "url=https://<your-worker-url>/" https://api.telegram.org/bot<your-telegram-bot-token>/setWebhook
```
Send `/shorten https://google.com` to your Telegram bot and click the generated short link to verify!

## Need Help?
- Get support at: [https://scriptly.store/support](https://scriptly.store/support)
- Find more templates at: [https://scriptly.store/](https://scriptly.store/)
