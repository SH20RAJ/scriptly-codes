# AETHERA — Telegram AI Assistant Cloudflare Worker

AETHERA is a high-performance, serverless Telegram Bot built for Cloudflare Workers. It uses Cloudflare's built-in AI bindings to power a text-chat assistant (Llama-3) and an AI image generator (Stable Diffusion) without requiring any external keys.

## Purchase & Licensing
You can view details, purchase commercial licenses, or get support for this script on the [Scriptly Store Product Page](https://scriptly.store/products/aethera-telegram-ai-worker).

## Features
- **Serverless Scaling**: Runs instantly on Cloudflare edge locations with zero cold start.
- **Zero API Key Cost**: Uses Cloudflare's built-in free tier AI bindings (`@cf/meta/llama-3-8b-instruct` and `@cf/stabilityai/stable-diffusion-xl-base-1.0`).
- **Interactive Commands**: Supports text conversations and custom graphic creations via `/image <prompt>`.
- **Easy Customization**: Change models or customize system behaviors inside `index.js`.

## Setup & Installation

### 1. Prerequisites
- Install [Node.js](https://nodejs.org/) on your computer.
- Install Wrangler (Cloudflare Developer CLI) globally:
  ```bash
  npm install -g wrangler
  ```

### 2. Configure Wrangler
1. Open [wrangler.toml](file:///Users/shaswatraj/Desktop/earn/scriptly-codes/SELF_CREATED/Bots/aethera-telegram-ai-worker/wrangler.toml) in your editor.
2. Replace `YOUR_TELEGRAM_BOT_TOKEN` with your actual bot token received from [@BotFather](https://t.me/BotFather) on Telegram. Alternatively, upload it securely using wrangler secrets:
   ```bash
   wrangler secret put TELEGRAM_BOT_TOKEN
   ```

### 3. Deploy to Cloudflare
Run this command in the project directory to upload it to your Cloudflare account:
```bash
wrangler deploy
```
After a successful deployment, wrangler will output a live URL (e.g. `https://aethera-telegram-ai-worker.username.workers.dev`).

### 4. Setup Telegram Webhook
To connect your Telegram bot to the newly deployed worker, trigger this HTTP request in your browser or curl:
```bash
curl -F "url=https://<your-worker-url>/" https://api.telegram.org/bot<your-telegram-bot-token>/setWebhook
```
Test your bot on Telegram by typing `/start` or `/image a majestic mountain sunset`.

## Need Help?
- Get support at: [https://scriptly.store/support](https://scriptly.store/support)
- Find more templates at: [https://scriptly.store/](https://scriptly.store/)
