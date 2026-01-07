// src/data/lessons/future-predictions.ts
import { Zap, Target, HelpCircle, AlertCircle, TrendingUp, Sparkles } from 'lucide-react';

export const futurePredictionsData = {
  id: 'b1-4.2-future-predictions',
  title: '4.2 GELECEK TAHMİNLERİ (PROBABILITY)',
  
  // Üst kısımdaki neon formül kutucukları (Kesinlik Derecelerine Göre)
  formulas: {
    positive: [ // %100 - %90 Kesinlik
      { label: "Bound to / Due to", detail: "Kaçınılmaz / Planlı", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Will definitely", detail: "Kesin Tahmin", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Be likely to", detail: "Yüksek İhtimal", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    negative: [ // %50 ve Altı İhtimal
      { label: "Might / May / Could", detail: "Düşük Olasılık", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" },
      { label: "Unlikely to", detail: "Düşük İhtimal", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Won't probably", detail: "Zayıf İhtimal", color: "border-orange-500/30 text-orange-400" }
    ],
    question: [
      { label: "Do you think...?", detail: "Giriş Kalıbı", color: "border-yellow-500/30 text-yellow-400" },
      { label: "Is it likely that...?", detail: "Olasılık Sorusu", color: "border-blue-500/30 text-blue-400" },
      { label: "Will + S + V1?", detail: "Standart Soru", color: "border-white/10 text-white" }
    ]
  },

  // Yapı Analizi & Çeviri Örnekleri
  examples: {
    positive: {
      parts: [
        { text: "Technology", color: "text-white" },
        { text: "is bound to", color: "text-blue-400", underline: true },
        { text: "change", color: "text-pink-400" },
        { text: "our lives.", color: "text-emerald-400" }
      ],
      translation: "Teknolojinin hayatımızı değiştirmesi kaçınılmazdır. (%100 Kesinlik)"
    },
    negative: {
      parts: [
        { text: "It", color: "text-white" },
        { text: "is unlikely to", color: "text-red-400", underline: true },
        { text: "snow", color: "text-blue-400" },
        { text: "this weekend.", color: "text-purple-400" }
      ],
      translation: "Bu hafta sonu kar yağması pek olası değil. (Düşük ihtimal)"
    },
    question: {
      parts: [
        { text: "Is", color: "text-purple-400", underline: true },
        { text: "he", color: "text-blue-400" },
        { text: "likely to", color: "text-emerald-400" },
        { text: "pass", color: "text-pink-400" },
        { text: "the exam?", color: "text-white" }
      ],
      translation: "Sınavı geçme ihtimali yüksek mi?"
    }
  },

  // Kullanım Senaryoları & Olasılık Skalası
  scenarios: [
    { title: "Kaçınılmaz Son (Bound to)", icon: Target, desc: "Engellenemez, kesin gerçekleşecek durumlar için kullanılır.", color: "from-blue-500/20 to-transparent" },
    { title: "Kuvvetli İhtimal (Likely)", icon: TrendingUp, desc: "Gerçekleşme şansı %70-80 civarı olan güçlü tahminler.", color: "from-emerald-500/20 to-transparent" },
    { title: "Zayıf İhtimal (Might)", icon: Sparkles, desc: "Sadece bir 'belki' olan, kanıtı olmayan uzak ihtimaller.", color: "from-pink-500/20 to-transparent" }
  ],

  // KRİTİK BİLGİLER & TUZAKLAR
  warnings: [
    {
      title: "'Probably' Kelimesinin Yeri",
      wrong: "I probably will be late. / I won't be probably late.",
      right: "I will probably be late. / I probably won't be late.",
      note: "Probably; olumlu cümlede 'will'den sonra, olumsuz cümlede 'won't'tan önce gelir."
    },
    {
      title: "'May/Might' vs 'Could'",
      wrong: "It couldn't rain later. (İhtimal anlamında)",
      right: "It might not rain later.",
      note: "Gelecek ihtimali olumsuz yaparken 'couldn't' kullanılmaz; 'might not' veya 'may not' tercih edilir."
    },
    {
      title: "'Likely' Bir Sıfattır",
      wrong: "It likely rains tomorrow.",
      right: "It is likely to rain tomorrow.",
      note: "Likely kelimesi 'to be' fiili ve 'to' mastarı ile kullanılır (be likely to do)."
    }
  ],

  // Mini Alıştırma (6 Soruluk Püf Noktalı Set)
  challenge: {
    words: ["bound to", "definitely won't", "is likely to", "will probably", "might", "unlikely"],
    questions: [
      {
        id: "q1",
        text: ["With so much traffic, we are ", " be late for the meeting."],
        correct: "bound to",
        hint: "Mevcut durumdan dolayı kaçınılmaz bir sonuç var.",
        visualFormula: "Subject + ARE + BOUND TO + V1"
      },
      {
        id: "q2",
        text: ["I ", " finish the report by 5 PM, but I'm not sure."],
        correct: "will probably",
        hint: "Olumlu bir tahmin, zarfın 'will'den sonraki yerine dikkat et.",
        visualFormula: "Will + PROBABLY + V1"
      },
      {
        id: "q3",
        text: ["It is ", " that the prices will go down this year."],
        correct: "unlikely",
        hint: "Cümlenin başında 'It is...' yapısı varsa sıfat olan hali seç.",
        visualFormula: "It is UNLIKELY that..."
      },
      {
        id: "q4",
        text: ["Take an umbrella; it ", " rain later tonight."],
        correct: "might",
        hint: "Sadece bir olasılık, kesinlik yok.",
        visualFormula: "Subject + MIGHT + V1"
      },
      {
        id: "q5",
        text: ["She ", " pass the test because she hasn't studied at all."],
        correct: "definitely won't",
        hint: "Güçlü bir olumsuz tahmin; kesinlik zarfı 'won't'tan önce gelmeli.",
        visualFormula: "DEFINITELY + won't + V1"
      },
      {
        id: "q6",
        text: ["The team ", " win the championship this season."],
        correct: "is likely to",
        hint: "Kuvvetli bir ihtimali belirten yapıyı kullan.",
        visualFormula: "Subject + IS LIKELY TO + V1"
      }
    ]
  }
};