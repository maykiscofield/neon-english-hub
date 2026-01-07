// src/data/lessons/present-perfect-simple-vs-cont.ts
import { Zap, Clock, CheckCircle2, AlertCircle, HelpCircle, Activity } from 'lucide-react';

export const presentPerfectSimpleVsContData = {
  // KRİTİK: image_1366fe.png'deki hatayı çözmek için ID birebir aynı yapıldı
  id: 'b1-6.2-perf-simple-cont', 
  title: '6.2 PRESENT PERFECT SIMPLE VS. CONTINUOUS',
  
  formulas: {
    positive: [ // Continuous (Süreç/Eylem odaklı)
      { label: "Have / Has been", detail: "Yardımcı Fiil", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "V-ing", detail: "Eylem sürüyor", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" }
    ],
    negative: [ // Simple (Sonuç/Miktar odaklı)
      { label: "Have / Has", detail: "Yardımcı Fiil", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "V3", detail: "Eylem bitti / Sonuç", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    question: [ // Sorular
      { label: "How long...", detail: "Continuous sorar", color: "border-yellow-500/30 text-yellow-400" },
      { label: "How many / much...", detail: "Simple sorar", color: "border-white/10 text-white" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "have been painting", color: "text-blue-400", underline: true },
        { text: "the house", color: "text-white" },
        { text: "all day.", color: "text-purple-400" }
      ],
      translation: "Tüm gündür evi boyuyorum. (Vurgu: Boyama eyleminin ne kadar sürdüğü; hala ellerim boyalı olabilir.)"
    },
    negative: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "have painted", color: "text-emerald-400", underline: true },
        { text: "two rooms", color: "text-pink-400" },
        { text: "so far.", color: "text-white" }
      ],
      translation: "Şu ana kadar iki odayı boyadım. (Vurgu: Tamamlanan iş miktarı, sonuç.)"
    },
    question: {
      parts: [
        { text: "How long", color: "text-yellow-400", underline: true },
        { text: "have you been waiting", color: "text-blue-400" },
        { text: "for the bus?", color: "text-white" }
      ],
      translation: "Ne kadar süredir otobüs bekliyorsun?"
    }
  },

  scenarios: [
    { title: "Sürekli Eylemler", icon: Clock, desc: "Hala devam eden veya geçici olarak süregelen durumlar (Continuous).", color: "from-blue-500/20 to-transparent" },
    { title: "Tamamlanmış Başarılar", icon: CheckCircle2, desc: "Bitmiş bir işin sonucunu veya 'kaç tane' olduğunu anlatırken (Simple).", color: "from-emerald-500/20 to-transparent" },
    { title: "Kalıcı Durumlar", icon: Activity, desc: "Daha uzun süreli veya kalıcı görülen durumlar için genelde Simple tercih edilir.", color: "from-purple-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Miktar Varsa 'Continuous' Yasak!",
      wrong: "I've been drinking five coffees today.",
      right: "I've drunk five coffees today.",
      note: "Bir şeyin sayısını (kaç bardak, kaç sayfa vb.) belirtiyorsanız mutlaka Simple kullanmalısınız."
    },
    {
      title: "State Verbs (Durum Fiilleri)",
      wrong: "I've been knowing him for years.",
      right: "I've known him for years.",
      note: "Know, believe, want, like gibi 'durum' bildiren fiiller Continuous (-ing) ekini almaz."
    },
    {
      title: "Kısa Süreli vs. Uzun Süreli",
      wrong: "He has played football since he was 5.",
      right: "He has been playing football since he was 5.",
      note: "Süregelen bir yetenek veya alışkanlıktan bahsederken Continuous daha doğal duyulur."
    }
  ],

  challenge: {
    words: ["have been reading", "have read", "has been raining", "has rained", "have been knowing", "have known"],
    questions: [
      {
        id: "q1",
        text: ["I ", " this book for hours, but I'm only on page 50."],
        correct: "have been reading",
        hint: "Saatlerdir süren bir eylem (süreç vurgusu).",
        visualFormula: "Süreç (V-ing)"
      },
      {
        id: "q2",
        text: ["I ", " 50 pages of this book so far."],
        correct: "have read",
        hint: "Şu ana kadar biten miktar (sonuç vurgusu).",
        visualFormula: "Sonuç (Miktar)"
      },
      {
        id: "q3",
        text: ["Look! It ", " a lot. The ground is very wet."],
        correct: "has rained",
        hint: "Yağmur durmuş ama yerler ıslak (yakın geçmişteki sonucun kanıtı).",
        visualFormula: "Recent Result"
      },
      {
        id: "q4",
        text: ["It ", " for two days without stopping."],
        correct: "has been raining",
        hint: "İki gündür kesintisiz devam eden durum.",
        visualFormula: "Ongoing Action"
      },
      {
        id: "q5",
        text: ["I ", " Sarah since we were children."],
        correct: "have known",
        hint: "Know fiili durum bildirdiği için asla -ing almaz!",
        visualFormula: "State Verb Exception"
      },
      {
        id: "q6",
        text: ["How many emails ", " you sent today?"],
        correct: "have",
        hint: "'How many' (Kaç tane) sorusu daima Simple ile kullanılır.",
        visualFormula: "How Many + Simple"
      }
    ]
  }
};