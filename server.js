// server.js - Express Backend Server with Groq API
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

// .env dosyasını yükle
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Neon English Hub API Server is running with Groq!',
    timestamp: new Date().toISOString()
  });
});

// Groq API endpoint
app.post('/api/gemini', async (req, res) => {
  try {
    const { prompt, userText } = req.body;

    // Validation
    if (!prompt || !userText) {
      return res.status(400).json({ 
        error: 'Prompt ve userText gerekli',
        details: 'Lütfen metin yazıp tekrar deneyin.' 
      });
    }

    // API Key kontrolü
    const GROQ_API_KEY = process.env.GROQ_API_KEY;

    if (!GROQ_API_KEY) {
      console.error('⚠️ GROQ_API_KEY bulunamadı!');
      return res.status(500).json({ 
        error: 'API key yapılandırması eksik',
        details: '.env dosyasında GROQ_API_KEY tanımlı olmalı' 
      });
    }

    console.log('✅ API isteği alındı, Groq\'a gönderiliyor...');
    console.log(`📝 Metin uzunluğu: ${userText.length} karakter`);

    // Groq API'ye istek
    const groqResponse = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile', // En yeni ve güçlü model
          messages: [
            {
              role: 'system',
              content: 'Sen profesyonel bir İngilizce öğretmenisin. Öğrencilerin yazılarını analiz edip Türkçe olarak detaylı, yapıcı ve profesyonel geri bildirim veriyorsun.'
            },
            {
              role: 'user',
              content: `${prompt}\n\n${userText}`
            }
          ],
          temperature: 0.7,
          max_tokens: 4096,
          top_p: 0.95,
        }),
      }
    );

    // Groq API hata kontrolü
    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      console.error('❌ Groq API Error:', errorText);
      
      return res.status(groqResponse.status).json({ 
        error: 'Groq API hatası',
        details: `Status: ${groqResponse.status} - ${errorText}`,
        message: 'API isteği başarısız oldu. Lütfen API key\'inizi kontrol edin.'
      });
    }

    const data = await groqResponse.json();
    
    // Yanıt kontrolü
    if (!data.choices || data.choices.length === 0) {
      console.error('❌ Groq boş yanıt döndü:', JSON.stringify(data));
      return res.status(500).json({ 
        error: 'Boş yanıt',
        details: 'Groq analiz yapamadı. Lütfen metninizi kontrol edip tekrar deneyin.',
        rawResponse: data
      });
    }

    console.log('✅ Groq başarıyla yanıt verdi');
    
    // Groq yanıtını Gemini formatına çevir (frontend uyumluluğu için)
    const formattedResponse = {
      candidates: [
        {
          content: {
            parts: [
              {
                text: data.choices[0].message.content
              }
            ]
          }
        }
      ]
    };
    
    return res.status(200).json(formattedResponse);

  } catch (error) {
    console.error('❌ Server error:', error);
    return res.status(500).json({ 
      error: 'Sunucu hatası', 
      message: error.message,
      details: 'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.'
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Endpoint bulunamadı',
    message: `${req.method} ${req.path} mevcut değil`,
    availableEndpoints: ['/api/health', '/api/gemini']
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: err.message 
  });
});

// Server'ı başlat
app.listen(PORT, () => {
  console.log('\n🚀 ================================');
  console.log(`✅ Neon English Hub API Server`);
  console.log(`🤖 AI Provider: Groq (Llama 3.1)`);
  console.log(`📡 Port: ${PORT}`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`🔑 Groq API Key: ${process.env.GROQ_API_KEY ? '✅ Tanımlı' : '❌ Eksik'}`);
  console.log('================================\n');
});