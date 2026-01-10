// src/services/aiService.ts

export const getWritingFeedback = async (prompt: string, userText: string) => {
  try {
    // DÜZELTME BURADA: Artık '.netlify/functions/gemini' değil, '/api/gemini' diyoruz.
    const response = await fetch('/api/gemini', {
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

    if (data.candidates && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    }

    throw new Error("AI cevap veremedi.");

  } catch (error: any) {
    console.error("API Hatası:", error.message);
    return "Analiz yapılamadı. Lütfen tekrar deneyin.";
  }
};