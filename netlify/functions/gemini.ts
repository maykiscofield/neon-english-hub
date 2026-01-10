// netlify/functions/gemini.ts

export const handler = async (event: any) => {
  // Sadece POST isteklerine izin ver
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { prompt, userText } = JSON.parse(event.body);
    
    // API Key artık sunucu tarafında (Netlify Environment Variables) saklanacak
    const API_KEY = process.env.GOOGLE_API_KEY;

    if (!API_KEY) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Sunucu tarafında API Key bulunamadı.' }) };
    }

    // Google Gemini API'ye istek atıyoruz (Backend -> Google)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${prompt}\n\nÖğrenci Metni:\n${userText}` }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048
          }
        })
      }
    );

    const data = await response.json();

    // Google'dan dönen cevabı Frontend'e geri yolla
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // CORS sorununu çözer
      },
      body: JSON.stringify(data),
    };

  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};