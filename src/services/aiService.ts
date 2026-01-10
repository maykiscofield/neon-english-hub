/**
 * Writing Lab - Netlify Function Üzerinden Çalışan Servis
 */
export const getWritingFeedback = async (prompt: string, userText: string) => {
  try {
    // Artık Google'a değil, kendi Netlify fonksiyonumuza istek atıyoruz
    // Localde çalışırken: /.netlify/functions/gemini
    // Canlıda çalışırken: /.netlify/functions/gemini
    const response = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, userText }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Bağlantı hatası");
    }

    const data = await response.json();

    // Veri yapısı Google'dan gelenle aynı formatta döner
    if (data.candidates && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    }

    throw new Error("AI boş cevap döndürdü.");

  } catch (error: any) {
    console.error("Netlify Function Hatası:", error.message);
    return "Analiz yapılamadı. Lütfen daha sonra tekrar deneyin.";
  }
};