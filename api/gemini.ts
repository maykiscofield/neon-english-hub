// api/gemini.ts

export default async function handler(req: any, res: any) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS request için
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Sadece POST kabul et
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, userText } = req.body;

    if (!prompt || !userText) {
      return res.status(400).json({ error: 'Prompt ve userText gerekli' });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
      console.error('⚠️ GEMINI_API_KEY bulunamadı!');
      return res.status(500).json({ error: 'API key yapılandırması eksik' });
    }

    console.log('✅ API isteği alındı, Gemini\'ye gönderiliyor...');

    // Gemini API'ye istek
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${prompt}\n\n${userText}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          }
        }),
      }
    );

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('❌ Gemini API Error:', errorText);
      return res.status(geminiResponse.status).json({ 
        error: 'Gemini API hatası',
        details: errorText 
      });
    }

    const data = await geminiResponse.json();
    console.log('✅ Gemini yanıt verdi');
    return res.status(200).json(data);

  } catch (error: any) {
    console.error('❌ Server error:', error);
    return res.status(500).json({ 
      error: 'Sunucu hatası', 
      message: error.message 
    });
  }
}