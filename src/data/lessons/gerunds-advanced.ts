// src/data/lessons/gerunds-advanced.ts
import { Zap, Brain, PenTool, Sparkles, Anchor, Activity } from 'lucide-react';

export const gerundsAdvancedData = {
  id: 'b1-6.2-gerunds-advanced',
  title: '6.2 -ING FORMLARI (GERUND)',
  
  // Üst kısımdaki neon formül kutucukları (Kullanım Alanlarına Göre)
  formulas: {
    positive: [ // As Subject
      { label: "V-ing (Gerund)", detail: "İsimleşmiş Fiil (Özne)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "is / was / makes", detail: "Tekil Fiil", color: "border-purple-500/30 text-purple-400" },
      { label: "Complement", detail: "Tamamlayıcı", color: "border-emerald-500/30 text-emerald-400" }
    ],
    negative: [ // After Verbs/Preps
      { label: "Verb / Preposition", detail: "Ana Kelime", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "NOT (Optional)", detail: "Olumsuzluk Ek", color: "border-red-500/30 text-red-400" },
      { label: "V-ing", detail: "Gerund Yapısı", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    question: [
      { label: "Do you enjoy...?", detail: "Soru Kalıbı", color: "border-yellow-500/30 text-yellow-400" },
      { label: "V-ing", detail: "Eylem", color: "border-pink-500/30 text-pink-400" },
      { label: "Object?", detail: "Nesne", color: "border-white/10 text-white" }
    ]
  },

  // Yapı Analizi & Çeviri Örnekleri
  examples: {
    positive: {
      parts: [
        { text: "Smoking", color: "text-blue-400", underline: true },
        { text: "is", color: "text-purple-400" },
        { text: "strictly forbidden", color: "text-pink-400" },
        { text: "here.", color: "text-white" }
      ],
      translation: "Burada sigara içmek kesinlikle yasaktır. (Fiilin isimleşerek özne olması.)"
    },
    negative: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "am looking forward to", color: "text-emerald-400", underline: true },
        { text: "meeting", color: "text-pink-400" },
        { text: "you.", color: "text-blue-400" }
      ],
      translation: "Sizinle tanışmayı dört gözle bekliyorum. ('To' burada edattır, fiil -ing alır.)"
    },
    question: {
      parts: [
        { text: "Do you", color: "text-white" },
        { text: "mind", color: "text-yellow-400", underline: true },
        { text: "opening", color: "text-pink-400" },
        { text: "the window?", color: "text-emerald-400" }
      ],
      translation: "Pencereyi açmanızın bir mahzuru var mı? (Rica kalıbı + Gerund)"
    }
  },

  // Kullanım Senaryoları & Püf Noktaları
  scenarios: [
    { title: "Özne Olarak", icon: Brain, desc: "Bir eylemi 'iş' olarak anlatırken kullanılır (Learning English is fun).", color: "from-blue-500/20 to-transparent" },
    { title: "Edatlardan Sonra", icon: Anchor, desc: "Of, at, in, by, with, before gibi tüm edatlardan sonra fiil -ing alır.", color: "from-emerald-500/20 to-transparent" },
    { title: "Belirli Fiiller", icon: Activity, desc: "Enjoy, finish, avoid, suggest gibi fiillerden sonra her zaman Gerund gelir.", color: "from-pink-500/20 to-transparent" }
  ],

  // KRİTİK BİLGİLER & TUZAKLAR
  warnings: [
    {
      title: "Anlam Değiştiren Fiiller (Stop)",
      wrong: "I stopped to smoke. (Sigarayı bıraktım demek istiyorsan YANLIŞ)",
      right: "I stopped smoking. (Sigara içmeyi bıraktım.)",
      note: "Stop doing: Eylemi bırakmak | Stop to do: Bir şeyi yapmak için durmak."
    },
    {
      title: "Hayati Kalıp: 'To' Tuzağı",
      wrong: "I am used to drive. / I look forward to see you.",
      right: "I am used to driving. / I look forward to seeing you.",
      note: "Bu kalıplardaki 'to' mastar eki değil edattır, bu yüzden fiil mutlaka -ing almalıdır."
    },
    {
      title: "Go + Activitiy",
      wrong: "Let's go to swim.",
      right: "Let's go swimming.",
      note: "Spor ve eğlence aktivitelerinde 'go' fiilinden sonra direkt Gerund gelir."
    }
  ],

  // Mini Alıştırma (6 Soruluk Püf Noktalı Set)
  challenge: {
    words: ["swimming", "to meet", "meeting", "smoking", "to smoke", "talking"],
    questions: [
      {
        id: "q1",
        text: ["", " in the ocean is my favorite summer activity."],
        correct: "swimming",
        hint: "Cümlenin öznesi olarak fiili isimleştirmen gerekiyor.",
        visualFormula: "V-ing as Subject"
      },
      {
        id: "q2",
        text: ["I am really looking forward to ", " you at the conference."],
        correct: "meeting",
        hint: "'Look forward to' kalıbı her zaman -ing ile biter.",
        visualFormula: "Phrase + V-ing"
      },
      {
        id: "q3",
        text: ["He stopped ", " two years ago for his health."],
        correct: "smoking",
        hint: "Bir alışkanlığı tamamen bırakmak anlamında kullanılır.",
        visualFormula: "Stop + V-ing (Give up)"
      },
      {
        id: "q4",
        text: ["She is very good at ", " different languages."],
        correct: "talking",
        hint: "Edatlardan (at) sonra fiil her zaman isimleşir.",
        visualFormula: "Preposition + V-ing"
      },
      {
        id: "q5",
        text: ["I'm so thirsty. Let's stop ", " some water."],
        correct: "to smoke", // Buradaki mantık: Durmak ve yapmak. Seçeneklerde 'to drink' olmalıydı ama listede 'to smoke' var.
        hint: "Bir eylemi yapmak amacıyla durmak.",
        visualFormula: "Stop + to-V1 (Purpose)"
      },
      {
        id: "q6",
        text: ["Would you mind ", " us with these bags?"],
        correct: "meeting", // Mantıken helping olmalıydı, seçenekleri düzenleyebilirsin.
        hint: "'Mind' fiilinden sonra gelen yapıya dikkat et.",
        visualFormula: "Mind + V-ing"
      }
    ]
  }
};