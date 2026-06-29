# CRYPTOBULK - Telegram Crypto Price Alert Bot
# A high-performance Python script to check prices and send threshold alerts.
# Powered by pyTelegramBotAPI, CoinGecko API, and SQLite.
#
# For licensing, credits, or source, see: https://scriptly.store/products/cryptobulk-crypto-alert-bot

import os
import time
import sqlite3
import threading
import requests
import telebot

# Read configuration from environment variables or use defaults
TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "YOUR_TELEGRAM_BOT_TOKEN_HERE")
bot = telebot.TeleBot(TOKEN)

DB_FILE = "alerts.db"

# Initialize Database
def init_db():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS alerts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            chat_id INTEGER,
            symbol TEXT,
            target_price REAL,
            condition TEXT,
            active INTEGER DEFAULT 1
        )
    ''')
    conn.commit()
    conn.close()

# Help Command
@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
    help_text = (
        "📈 *Welcome to CryptoBulk Alert Bot!*\n\n"
        "I monitor crypto prices and alert you when targets are hit.\n\n"
        "*Commands*:\n"
        "• `/price <symbol>` - Check current price (e.g., `/price btc` or `/price eth`)\n"
        "• `/alert <symbol> <above/below> <price>` - Set an alert (e.g., `/alert btc above 65000`)\n"
        "• `/list` - View your active alerts\n"
        "• `/clear` - Remove all your active alerts\n\n"
        "_Crafted by @sh20raj_"
    )
    bot.reply_to(message, help_text, parse_mode="Markdown")

# Fetch price helper
def get_crypto_price(symbol):
    symbol = symbol.lower()
    mapping = {"btc": "bitcoin", "eth": "ethereum", "sol": "solana", "bnb": "binancecoin", "ada": "cardano"}
    coin_id = mapping.get(symbol, symbol)
    
    url = f"https://api.coingecko.com/api/v3/simple/price?ids={coin_id}&vs_currencies=usd"
    try:
        r = requests.get(url, timeout=10)
        data = r.json()
        if coin_id in data:
            return data[coin_id]["usd"]
    except Exception as e:
        print(f"Error fetching price: {e}")
    return None

# Price Command
@bot.message_handler(commands=['price'])
def check_price(message):
    args = message.text.split()
    if len(args) < 2:
        bot.reply_to(message, "⚠️ Usage: `/price <symbol>` (e.g., `/price btc`)", parse_mode="Markdown")
        return
    
    symbol = args[1]
    price = get_crypto_price(symbol)
    if price:
        bot.reply_to(message, f"🪙 *{symbol.upper()} Price*: `${price:,.2f} USD`", parse_mode="Markdown")
    else:
        bot.reply_to(message, "❌ Invalid symbol or API error. Use standard symbols (btc, eth, sol, bnb).")

# Alert Command
@bot.message_handler(commands=['alert'])
def set_alert(message):
    args = message.text.split()
    if len(args) < 4:
        bot.reply_to(message, "⚠️ Usage: `/alert <symbol> <above/below> <target_price>`", parse_mode="Markdown")
        return
    
    symbol = args[1].lower()
    condition = args[2].lower()
    try:
        target_price = float(args[3])
    except ValueError:
        bot.reply_to(message, "❌ Target price must be a number.")
        return
    
    if condition not in ["above", "below"]:
        bot.reply_to(message, "❌ Condition must be either 'above' or 'below'.")
        return
    
    # Verify symbol price works
    current = get_crypto_price(symbol)
    if not current:
        bot.reply_to(message, f"❌ Coin symbol '{symbol}' not recognized by CoinGecko.")
        return
    
    # Save alert to db
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute(
        "INSERT INTO alerts (chat_id, symbol, target_price, condition) VALUES (?, ?, ?, ?)",
        (message.chat.id, symbol, target_price, condition)
    )
    conn.commit()
    conn.close()
    
    msg = f"✅ *Alert Set!* I will notify you when *{symbol.upper()}* goes *{condition}* `${target_price:,.2f}` (Current: `${current:,.2f}`)"
    bot.reply_to(message, msg, parse_mode="Markdown")

# List alerts
@bot.message_handler(commands=['list'])
def list_alerts(message):
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute("SELECT symbol, condition, target_price FROM alerts WHERE chat_id = ? AND active = 1", (message.chat.id,))
    rows = c.fetchall()
    conn.close()
    
    if not rows:
        bot.reply_to(message, "ℹ️ You have no active alerts.")
        return
    
    lines = ["📝 *Your Active Alerts*:"]
    for row in rows:
        lines.append(f"• {row[0].upper()} goes *{row[1]}* `${row[2]:,.2f}`")
    bot.reply_to(message, "\n".join(lines), parse_mode="Markdown")

# Clear alerts
@bot.message_handler(commands=['clear'])
def clear_alerts(message):
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute("UPDATE alerts SET active = 0 WHERE chat_id = ?", (message.chat.id,))
    conn.commit()
    conn.close()
    bot.reply_to(message, "🗑️ All active alerts have been cleared.")

# Background checker thread
def check_alerts_loop():
    while True:
        try:
            conn = sqlite3.connect(DB_FILE)
            c = conn.cursor()
            c.execute("SELECT id, chat_id, symbol, target_price, condition FROM alerts WHERE active = 1")
            active_alerts = c.fetchall()
            
            # Cache prices in this iteration to avoid spamming public API
            symbols = list(set([row[2] for row in active_alerts]))
            prices = {}
            for s in symbols:
                price = get_crypto_price(s)
                if price:
                    prices[s] = price
            
            for alert_id, chat_id, symbol, target_price, condition in active_alerts:
                current_price = prices.get(symbol)
                if not current_price:
                    continue
                
                triggered = False
                if condition == "above" and current_price >= target_price:
                    triggered = True
                elif condition == "below" and current_price <= target_price:
                    triggered = True
                    
                if triggered:
                    alert_msg = f"🚨 *Crypto Alert Triggered!* 🚨\n\n*{symbol.upper()}* has gone *{condition}* target `${target_price:,.2f}`!\n\n🪙 Current Price: `${current_price:,.2f} USD`"
                    try:
                        bot.send_message(chat_id, alert_msg, parse_mode="Markdown")
                    except Exception as send_err:
                        print(f"Error sending message to {chat_id}: {send_err}")
                    
                    # Deactivate alert
                    c.execute("UPDATE alerts SET active = 0 WHERE id = ?", (alert_id,))
            
            conn.commit()
            conn.close()
        except Exception as loop_err:
            print(f"Error in alert monitoring loop: {loop_err}")
            
        time.sleep(60)

if __name__ == '__main__':
    init_db()
    
    # Start price checker daemon thread
    t = threading.Thread(target=check_alerts_loop, daemon=True)
    t.start()
    
    print("CryptoBulk alert bot is running...")
    while True:
        try:
            bot.polling(none_stop=True)
        except Exception as e:
            print(f"Bot polling exception: {e}")
            time.sleep(5)
