const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const getWritingFeedback = async (prompt: string, userText: string) => {
  try {
    console.log('🔄 Backend istek:', `${API_BASE_URL}/api/gemini`);
    
    const response = await fetch(`${API_BASE_URL}/api/gemini`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, userText }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Yanıt alınamadı";

  } catch (error: any) {
    console.error("❌ Hata:", error);
    return `❌ Hata: ${error.message}`;
  }
};