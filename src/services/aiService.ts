// src/services/aiService.ts

export const getWritingFeedback = async (prompt: string, userText: string) => {
  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, userText }),
    });

    // Detaylı error handling
    if (!response.ok) {
      let errorMessage = "Bağlantı hatası";
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorData.message || errorMessage;
      } catch {
        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();

    // Gemini yanıt yapısını kontrol et
    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    }

    // Alternatif yanıt yapıları
    if (data.text) {
      return data.text;
    }

    throw new Error("AI'dan geçerli bir yanıt alınamadı.");

  } catch (error: any) {
    console.error("API Hatası:", error);
    return `❌ Analiz yapılamadı: ${error.message}\n\nLütfen tekrar deneyin veya sistem yöneticinize başvurun.`;
  }
};