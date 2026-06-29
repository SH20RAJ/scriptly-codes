/**
 * AETHERA - Telegram AI Assistant Cloudflare Worker
 * Fully deployable serverless Telegram Bot powered by Cloudflare AI.
 * Handles text intelligence (Llama-3) and image generation (Stable Diffusion).
 *
 * For licensing, credits, or source, see: https://scriptly.store/products/aethera-telegram-ai-worker
 */

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Only POST updates are allowed', { status: 405 });
    }

    try {
      const payload = await request.json();
      if (payload.message) {
        await handleMessage(payload.message, env);
      }
      return new Response('OK', { status: 200 });
    } catch (err) {
      console.error('Error handling request:', err);
      return new Response(err.toString(), { status: 500 });
    }
  }
};

async function handleMessage(message, env) {
  const chatId = message.chat.id;
  const text = message.text || '';
  const botToken = env.TELEGRAM_BOT_TOKEN;

  if (text.startsWith('/start')) {
    const welcome = `🤖 Welcome to *Aethera AI Assistant*!\n\nI am a serverless chatbot powered by Cloudflare AI.\n\n*Commands*:\n• Write anything to chat with me.\n• Use \`/image <description>\` to generate an AI image.\n\n_Crafted by @sh20raj_`;
    await sendTelegramMessage(botToken, chatId, welcome);
    return;
  }

  if (text.startsWith('/image')) {
    const prompt = text.replace('/image', '').trim();
    if (!prompt) {
      await sendTelegramMessage(botToken, chatId, '⚠️ Please provide a prompt. Example: `/image a cute white cat playing with wool`');
      return;
    }

    await sendTelegramMessage(botToken, chatId, '🎨 _Generating your artwork, please wait..._');

    try {
      // Call Cloudflare Stable Diffusion AI Model
      const aiResponse = await env.AI.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {
        prompt: prompt
      });

      // Send image as a photo attachment to Telegram
      await sendTelegramPhoto(botToken, chatId, aiResponse, prompt);
    } catch (aiErr) {
      console.error('AI Image Error:', aiErr);
      await sendTelegramMessage(botToken, chatId, '❌ Failed to generate image. Please try again later.');
    }
    return;
  }

  // Fallback to Text Generation (Llama 3)
  try {
    const aiResponse = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
      messages: [
        { role: 'system', content: 'You are Aethera, a helpful and elegant AI assistant on Telegram.' },
        { role: 'user', content: text }
      ]
    });

    const responseText = aiResponse.response || '🤖 Sorry, I could not formulate a response.';
    await sendTelegramMessage(botToken, chatId, responseText);
  } catch (textErr) {
    console.error('AI Text Error:', textErr);
    await sendTelegramMessage(botToken, chatId, '❌ Sorry, I had an error processing your thought.');
  }
}

// Helper to send text messages
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

// Helper to send generated binary photos
async function sendTelegramPhoto(token, chatId, imageBuffer, caption) {
  const url = `https://api.telegram.org/bot${token}/sendPhoto`;
  
  const formData = new FormData();
  formData.append('chat_id', chatId);
  
  // Convert binary buffer to Blob
  const blob = new Blob([imageBuffer], { type: 'image/png' });
  formData.append('photo', blob, 'artwork.png');
  formData.append('caption', caption);

  await fetch(url, {
    method: 'POST',
    body: formData
  });
}
