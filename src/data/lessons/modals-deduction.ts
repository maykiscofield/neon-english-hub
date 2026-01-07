// src/data/lessons/modals-deduction.ts
import { Zap, ShieldCheck, HelpCircle, AlertTriangle, History, Search } from 'lucide-react';

export const modalsDeductionData = {
  id: 'b1-7.1-modal-deduction', // Topics.tsx'teki ID ile eşleşmeli
  title: '7.1 TAHMİN VE ÇIKARIM (DEDUCTION)',
  
  // Üst kısımdaki neon formül kutucukları (Eminlik Derecesine Göre)
  formulas: {
    positive: [ // %95 Kesinlik (Must)
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "must (be)", detail: "Eminim (Doğru)", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "V1 / V-ing", detail: "Durum / Eylem", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [ // %95 İmkansızlık (Can't)
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "can't (be)", detail: "Eminim (Yanlış)", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "V1 / V-ing", detail: "Fiil", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [ // %50 Olasılık (Might/Could)
      { label: "might / could / may", detail: "Belki", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "be / V1?", detail: "Olasılık Sorgusu", color: "border-white/10 text-white" }
    ]
  },

  // Yapı Analizi & Çeviri Örnekleri
  examples: {
    positive: {
      parts: [
        { text: "He", color: "text-blue-400", underline: true },
        { text: "must be", color: "text-purple-400" },
        { text: "a developer;", color: "text-white" },
        { text: "he has three monitors.", color: "text-emerald-400" }
      ],
      translation: "O bir yazılımcı olmalı; üç monitörü var. (Güçlü kanıta dayalı çıkarım.)"
    },
    negative: {
      parts: [
        { text: "That", color: "text-white" },
        { text: "can't be", color: "text-red-400", underline: true },
        { text: "true.", color: "text-blue-400" },
        { text: "The server is offline.", color: "text-purple-400" }
      ],
      translation: "Bu doğru olamaz. Sunucu çevrimdışı. (İmkansızlık çıkarımı.)"
    },
    question: {
      parts: [
        { text: "It", color: "text-blue-400", underline: true },
        { text: "might have been", color: "text-emerald-400" },
        { text: "a bug", color: "text-pink-400" },
        { text: "in the code.", color: "text-white" }
      ],
      translation: "Kodda bir hata (bug) olmuş olabilir. (Geçmişe yönelik zayıf olasılık.)"
    }
  },

  // Kullanım Senaryoları & Püf Noktaları
  scenarios: [
    { title: "Mantıksal Çıkarım", icon: ShieldCheck, desc: "Eldeki verilerle bir sonucun 'mutlaka öyle' olduğunu söylemek (Must).", color: "from-purple-500/20 to-transparent" },
    { title: "Kesin Ret", icon: AlertTriangle, desc: "Bir durumun gerçekleşmesinin imkansız olduğuna inanmak (Can't).", color: "from-red-500/20 to-transparent" },
    { title: "Geçmişe Dönüş", icon: History, desc: "Geçmişte olmuş bitmiş olaylar hakkında tahmin yürütmek (Modal + Have + V3).", color: "from-blue-500/20 to-transparent" }
  ],

  // KRİTİK BİLGİLER & TUZAKLAR
  warnings: [
    {
      title: "Mustn't vs Can't Tuzağı",
      wrong: "It mustn't be true! (Çıkarım yaparken YANLIŞ)",
      right: "It can't be true! (DOĞRU)",
      note: "Çıkarım yaparken 'olamaz' demek için 'can't' kullanılır. 'Mustn't' sadece yasak bildirir."
    },
    {
      title: "Geçmiş Zaman Tahmini",
      wrong: "He must be at home yesterday.",
      right: "He must have been at home yesterday.",
      note: "Geçmiş tahminlerinde modal'dan sonra 'have + fiilin 3. hali' gelir."
    },
    {
      title: "Could be vs Can be",
      wrong: "It can be raining later.",
      right: "It could be raining later.",
      note: "Gelecek olasılıklarında 'can' yerine 'could', 'might' veya 'may' tercih edilir."
    }
  ],

  // Mini Alıştırma (6 Soruluk Mühendislik Odaklı Set)
  challenge: {
    words: ["must be", "can't be", "might have", "could be", "must have", "can't have"],
    questions: [
      {
        id: "q1",
        text: ["The lights are on and I hear music. They ", " at home."],
        correct: "must be",
        hint: "Güçlü kanıtlar (ışıklar, müzik) var.",
        visualFormula: "Logical Certainty (+)"
      },
      {
        id: "q2",
        text: ["You just ate a huge pizza! You ", " hungry again."],
        correct: "can't be",
        hint: "Az önce yemek yemiş olması acıkmasını imkansız kılıyor.",
        visualFormula: "Logical Certainty (-)"
      },
      {
        id: "q3",
        text: ["I'm not sure why the app crashed. It ", " been a memory leak."],
        correct: "might have",
        hint: "Geçmişteki bir olasılıktan (emin değilim) bahsediyoruz.",
        visualFormula: "Past Possibility"
      },
      {
        id: "q4",
        text: ["That woman is way too young. She ", " his grandmother!"],
        correct: "can't be",
        hint: "Mantıksal olarak imkansız bir durum.",
        visualFormula: "Impossible Deduction"
      },
      {
        id: "q5",
        text: ["The street is soaking wet. It ", " rained heavily last night."],
        correct: "must have",
        hint: "Geçmişteki bir eylemin şu an çok güçlü kanıtı (ıslak yerler) var.",
        visualFormula: "Past Certainty (+)"
      },
      {
        id: "q6",
        text: ["If you study hard, you ", " successful in the exam."],
        correct: "could be",
        hint: "Geleceğe yönelik bir ihtimal.",
        visualFormula: "Future Possibility"
      }
    ]
  }
};