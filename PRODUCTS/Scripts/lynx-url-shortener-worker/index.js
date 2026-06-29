/**
 * LYNX - Telegram URL Shortener & Redirect Worker
 * Fully deployable serverless Telegram Bot + Link Redirector powered by Cloudflare Workers and KV.
 *
 * For licensing, credits, or source, see: https://scriptly.store/products/lynx-url-shortener-worker
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.substring(1); // Get path without leading slash

    // 1. Handle Redirects (GET /<slug>)
    if (request.method === 'GET' && path && path.length === 6) {
      const destination = await env.LYNX_KV.get(path);
      if (destination) {
        return Response.redirect(destination, 302);
      }
      return new Response('Link not found or expired', { status: 404 });
    }

    // 2. Handle Telegram Webhook (POST /)
    if (request.method === 'POST') {
      try {
        const payload = await request.json();
        if (payload.message) {
          await handleTelegramMessage(payload.message, env, url.origin);
        }
        return new Response('OK', { status: 200 });
      } catch (err) {
        console.error('Webhook error:', err);
        return new Response(err.toString(), { status: 500 });
      }
    }

    return new Response('Lynx URL Shortener Service is active.', { status: 200 });
  }
};

async function handleTelegramMessage(message, env, originUrl) {
  const chatId = message.chat.id;
  const text = message.text || '';
  const botToken = env.TELEGRAM_BOT_TOKEN;

  if (text.startsWith('/start')) {
    const welcome = `🔗 *Welcome to Lynx URL Shortener Bot!*\n\nI shorten long URLs and redirect them at ultra-fast speeds using Cloudflare edge locations.\n\n*Commands*:\n• Use \`/shorten <long_url>\` to create a short link.\n\n_Crafted by @sh20raj_`;
    await sendTelegramMessage(botToken, chatId, welcome);
    return;
  }

  if (text.startsWith('/shorten')) {
    const longUrl = text.replace('/shorten', '').trim();
    
    // Simple URL validation
    if (!longUrl || !longUrl.startsWith('http')) {
      await sendTelegramMessage(botToken, chatId, '⚠️ Please provide a valid URL starting with http:// or https://\n\nExample:\n`/shorten https://google.com`');
      return;
    }

    await sendTelegramMessage(botToken, chatId, '⚡ _Generating short link..._');

    try {
      // Generate a 6-character random alphanumeric slug
      const slug = generateRandomSlug(6);
      
      // Store in Cloudflare KV (Permanent)
      await env.LYNX_KV.put(slug, longUrl);

      const shortLink = `${originUrl}/${slug}`;
      const responseMsg = `✅ *URL Shortened successfully!*\n\n🔗 *Short Link*: ${shortLink}\n👉 *Destination*: ${longUrl}`;
      await sendTelegramMessage(botToken, chatId, responseMsg);
    } catch (kvErr) {
      console.error('KV Storage Error:', kvErr);
      await sendTelegramMessage(botToken, chatId, '❌ Failed to store short link in Cloudflare database.');
    }
    return;
  }
}

// Generate unique alphanumeric slug
function generateRandomSlug(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Helper to send Markdown text messages
async function sendTelegramMessage(token, chatId, text) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'Markdown'
    })
  });
}
