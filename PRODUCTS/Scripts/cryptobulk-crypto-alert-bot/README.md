# CRYPTOBULK — Telegram Crypto Price Alert Bot

CryptoBulk is a high-performance Python daemon script that monitors cryptocurrency prices and alerts Telegram users in real-time when custom threshold targets (above/below) are hit. Supported by SQLite, it stores user alerts and runs asynchronously.

## Purchase & Licensing
You can view details, purchase commercial licenses, or get support for this script on the [Scriptly Store Product Page](https://scriptly.store/products/cryptobulk-crypto-alert-bot).

## Features
- **Real-Time Prices**: Live coin rates via CoinGecko Public API (No key required!).
- **Multi-Alert Setup**: Set alerts for multiple tokens (e.g. `/alert BTC above 60000`, `/alert ETH below 2500`).
- **Persistent Storage**: Saves user settings inside a lightweight SQLite database file.
- **Auto-Polling Loop**: Daemon thread monitors price limits every 60 seconds.

## Setup & Running Locally

### 1. Configure Telegram Bot
Create a new bot on Telegram via [@BotFather](https://t.me/BotFather) and copy your **Bot Token**.

### 2. Set Up Virtual Environment (Recommended)
Navigate to the project folder and configure a Python virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
Install pyTelegramBotAPI and requests libraries:
```bash
pip install -r requirements.txt
```

### 4. Run the Bot
Provide your token in the environment and start the Python script:
```bash
export TELEGRAM_BOT_TOKEN="YOUR_TELEGRAM_BOT_TOKEN_HERE"
python bot.py
```
Open Telegram, search for your bot, and send `/start` or `/help` to begin monitoring!

## Need Help?
- Get support at: [https://scriptly.store/support](https://scriptly.store/support)
- Find more templates at: [https://scriptly.store/](https://scriptly.store/)
