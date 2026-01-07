// src/data/lessons/double-comparatives.ts
import { Zap, Scale, FastForward, AlertCircle, Quote, TrendingUp } from 'lucide-react';

export const doubleComparativesData = {
  // Bu ID'nin Topics.tsx dosyanızdaki ile birebir aynı olduğundan emin olun
  id: 'b1-7.2-double-comparatives', 
  title: '7.2 KARŞILAŞTIRMALAR (THE..., THE...)',
  
  // Üst kısımdaki neon formül kutucukları
  formulas: {
    positive: [ // Temel Yapı
      { label: "The + Comparative", detail: "Sıfat/Zarf (-er/more)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Subject + Verb", detail: "Özne + Fiil", color: "border-purple-500/30 text-purple-400" },
      { label: "the + Comparative", detail: "Sonuç Bölümü", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [ // Azalan Orantı
      { label: "The less", detail: "Daha az...", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "the more", detail: "...daha çok", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Verb phrase", detail: "Cümle yapısı", color: "border-white/10 text-white" }
    ],
    question: [ // Kısa Kalıplar (Short Forms)
      { label: "The more", detail: "Ne kadar çok", color: "border-yellow-500/30 text-yellow-400" },
      { label: "the merrier!", detail: "O kadar neşeli!", color: "border-blue-500/30 text-blue-400" },
      { label: "No Verb", detail: "Fiilsiz kullanım", color: "border-white/10 text-white" }
    ]
  },

  // Yapı Analizi & Çeviri Örnekleri
  examples: {
    positive: {
      parts: [
        { text: "The harder", color: "text-blue-400", underline: true },
        { text: "you study,", color: "text-white" },
        { text: "the luckier", color: "text-pink-400" },
        { text: "you get.", color: "text-emerald-400" }
      ],
      translation: "Ne kadar sıkı çalışırsan, o kadar şanslı olursun. (Doğru orantı vurgusu.)"
    },
    negative: {
      parts: [
        { text: "The more expensive", color: "text-red-400", underline: true },
        { text: "it is,", color: "text-white" },
        { text: "the less", color: "text-emerald-400" },
        { text: "I want it.", color: "text-purple-400" }
      ],
      translation: "Ne kadar pahalı olursa, onu o kadar az isterim. (Ters/Negatif etki.)"
    },
    question: {
      parts: [
        { text: "The earlier", color: "text-yellow-400", underline: true },
        { text: "we leave,", color: "text-white" },
        { text: "the sooner", color: "text-blue-400" },
        { text: "we arrive.", color: "text-pink-400" }
      ],
      translation: "Ne kadar erken çıkarsak, o kadar çabuk varırız."
    }
  },

  // Kullanım Senaryoları & Püf Noktaları
  scenarios: [
    { title: "Doğru Orantı", icon: TrendingUp, desc: "Bir şey değiştikçe diğerinin de ona paralel değiştiğini anlatır.", color: "from-blue-500/20 to-transparent" },
    { title: "Kısa Sloganlar", icon: Quote, desc: "Günlük dilde fiil kullanmadan pratik cevaplar verir (The more, the better).", color: "from-purple-500/20 to-transparent" },
    { title: "Hızlı Değişim", icon: FastForward, desc: "Sürecin hızına vurgu yapmak için idealdir.", color: "from-pink-500/20 to-transparent" }
  ],

  // KRİTİK BİLGİLER & TUZAKLAR
  warnings: [
    {
      title: "'The' Kullanımını Unutma",
      wrong: "More I learn, better I feel.",
      right: "The more I learn, the better I feel.",
      note: "Bu yapıda her iki cümlenin de başında mutlaka 'The' bulunmalıdır."
    },
    {
      title: "Comparative Derecesi",
      wrong: "The most you talk, the less I listen.",
      right: "The more you talk, the less I listen.",
      note: "Yapıda 'superlative' (most/best) değil, her zaman 'comparative' (more/better) kullanılır."
    },
    {
      title: "Sıfatın Yeri",
      wrong: "The I read more, the smarter I get.",
      right: "The more I read, the smarter I get.",
      note: "Karşılaştırma sıfatı her zaman 'The' kelimesinden hemen sonra gelmelidir."
    }
  ],

  // Mini Alıştırma (6 Soruluk Püf Noktalı Set)
  challenge: {
    words: ["the better", "the more", "the higher", "the less", "the faster", "the merrier"],
    questions: [
      {
        id: "q1",
        text: ["The more you practice, ", " you will speak."],
        correct: "the better",
        hint: "Pratik arttıkça konuşma kalitesi de artar.",
        visualFormula: "The more + the better"
      },
      {
        id: "q2",
        text: ["", " it gets, the harder it is to breathe."],
        correct: "the higher",
        hint: "Yükseklik arttıkça nefes almak zorlaşır.",
        visualFormula: "Height vs Breathing"
      },
      {
        id: "q3",
        text: ["The sooner you start, ", " you will finish."],
        correct: "the faster",
        hint: "Başlangıç hızı bitişi etkiler.",
        visualFormula: "Start vs Finish"
      },
      {
        id: "q4",
        text: ["How many people are coming? - ", "!"],
        correct: "the merrier",
        hint: "Ne kadar çok kişi, o kadar neşe (Kalıplaşmış ifade).",
        visualFormula: "Short Phrase"
      },
      {
        id: "q5",
        text: ["The more he eats, ", " active he becomes."],
        correct: "the less",
        hint: "Yemek miktarı arttıkça hareketliliğin azalması (Ters orantı).",
        visualFormula: "The more vs The less"
      },
      {
        id: "q6",
        text: ["", " you worry, the more you will enjoy life."],
        correct: "the less",
        hint: "Endişe azaldıkça hayat kalitesi artar.",
        visualFormula: "The less vs The more"
      }
    ]
  }
};