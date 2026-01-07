// src/data/lessons/passive-advanced.ts
import { Zap, Clock, ShieldCheck, AlertCircle, RefreshCw, Layers } from 'lucide-react';

export const passiveAdvancedData = {
  id: 'b1-5.2-passive-advanced',
  title: '5.2 PASSIVE (PERFECT & CONTINUOUS)',
  
  // Üst kısımdaki neon formül kutucukları
  formulas: {
    positive: [ // Present Perfect Passive (Sonuç Odaklı)
      { label: "Subject", detail: "Etkilenen Nesne", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "have / has + been", detail: "Yardımcı Yapı", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Verb (V3)", detail: "Fiilin 3. Hali", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [ // Present Continuous Passive (Süreç Odaklı)
      { label: "Subject", detail: "Etkilenen Nesne", color: "border-blue-500/30 text-blue-400" },
      { label: "am/is/are + being", detail: "Süreç Yardımcısı", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Verb (V3)", detail: "Fiilin 3. Hali", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [
      { label: "Have / Is / Are", detail: "Yardımcı Fiil", color: "border-purple-500/30 text-purple-400" },
      { label: "Subject", detail: "Etkilenen", color: "border-blue-500/30 text-blue-400" },
      { label: "been/being + V3", detail: "Pasif Yapı", color: "border-pink-500/30 text-pink-400" }
    ]
  },

  // Yapı Analizi & Çeviri Örnekleri
  examples: {
    positive: {
      parts: [
        { text: "The project", color: "text-blue-400", underline: true },
        { text: "has been", color: "text-purple-400" },
        { text: "completed", color: "text-pink-400" },
        { text: "successfully.", color: "text-emerald-400" }
      ],
      translation: "Proje başarıyla tamamlandı. (Perfect Passive: Eylem bitti, sonuç hazır.)"
    },
    negative: {
      parts: [
        { text: "Your computer", color: "text-blue-400", underline: true },
        { text: "is being", color: "text-emerald-400" },
        { text: "repaired", color: "text-pink-400" },
        { text: "right now.", color: "text-white" }
      ],
      translation: "Bilgisayarın şu an tamir ediliyor. (Continuous Passive: Eylem şu an yapılıyor.)"
    },
    question: {
      parts: [
        { text: "Has", color: "text-purple-400", underline: true },
        { text: "the problem", color: "text-blue-400" },
        { text: "been solved", color: "text-pink-400" },
        { text: "yet?", color: "text-emerald-400" }
      ],
      translation: "Sorun henüz çözüldü mü?"
    }
  },

  // Kullanım Senaryoları & Püf Noktaları
  scenarios: [
    { title: "Süreç Vurgusu", icon: RefreshCw, desc: "Bir işin şu an 'edilmekte' olduğunu belirtmek için (being + V3).", color: "from-emerald-500/20 to-transparent" },
    { title: "Sonuç Vurgusu", icon: ShieldCheck, desc: "Bir işin çoktan 'edilmiş' olduğunu ve etkisinin sürdüğünü belirtmek için (been + V3).", color: "from-blue-500/20 to-transparent" },
    { title: "Faili Gizleme", icon: Layers, desc: "İşi yapanın kim olduğu bilinmiyorsa veya önemsizse nesne cümlenin yıldızıdır.", color: "from-purple-500/20 to-transparent" }
  ],

  // KRİTİK BİLGİLER & TUZAKLAR
  warnings: [
    {
      title: "'Being' vs 'Been' Karışıklığı",
      wrong: "The cake has being eaten. / It is been made.",
      right: "The cake has been eaten. / It is being made.",
      note: "Have/Has her zaman 'been' ister; Am/Is/Are her zaman 'being' (ing takısı gibi düşün) ister."
    },
    {
      title: "Zaman Sinyallerine Dikkat",
      wrong: "The road has been cleaned right now.",
      right: "The road is being cleaned right now.",
      note: "'Now, at the moment' gibi ifadeler Continuous Passive gerektirir."
    },
    {
      title: "Geçmişin Geçmişi Pasif",
      wrong: "The letter has been sent before I arrived.",
      right: "The letter had been sent before I arrived.",
      note: "Geçmişteki bir andan daha önce bitmiş olaylar için 'had been' kullanılır."
    }
  ],

  // Mini Alıştırma (6 Soruluk Püf Noktalı Set)
  challenge: {
    words: ["has been stolen", "are being built", "is being repaired", "have been invited", "was being followed", "had been cancelled"],
    questions: [
      {
        id: "q1",
        text: ["Oh no! My phone ", "! I can't find it."],
        correct: "has been stolen",
        hint: "Eylem bitmiş ve etkisi (telefonun yokluğu) devam ediyor.",
        visualFormula: "Has been + V3 (Perfect)"
      },
      {
        id: "q2",
        text: ["Wait, my car ", " by the mechanic right now."],
        correct: "is being repaired",
        hint: "'Right now' eylemin şu an devam ettiğini gösterir.",
        visualFormula: "Is being + V3 (Continuous)"
      },
      {
        id: "q3",
        text: ["New apartments ", " in this street at the moment."],
        correct: "are being built",
        hint: "Çoğul nesne ve anlık devam eden bir inşaat süreci.",
        visualFormula: "Are being + V3"
      },
      {
        id: "q4",
        text: ["We ", " to the wedding next week."],
        correct: "have been invited",
        hint: "Davet edildik (geçmişte oldu, davet hala geçerli).",
        visualFormula: "Have been + V3"
      },
      {
        id: "q5",
        text: ["I felt like I ", " while walking home last night."],
        correct: "was being followed",
        hint: "Geçmişte o anda devam etmekte olan bir takip eylemi.",
        visualFormula: "Was being + V3"
      },
      {
        id: "q6",
        text: ["When we got there, the concert ", "."],
        correct: "had been cancelled",
        hint: "Biz varmadan daha önce iptal edilmiş (Geçmişin geçmişi).",
        visualFormula: "Had been + V3"
      }
    ]
  }
};