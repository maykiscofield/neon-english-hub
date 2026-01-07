// src/data/lessons/narrative-tenses.ts
import { Zap, Clock, History, AlertCircle, BookOpen, Layers } from 'lucide-react';

export const narrativeTensesData = {
  id: 'b1-3.1-narrative-tenses',
  title: '3.1 NARRATIVE TENSES',
  
  // Üst kısımdaki neon formül kutucukları (Past Simple, Continuous, Perfect karması)
  formulas: {
    positive: [
      { label: "Past Simple", detail: "Ana Eylemler (V2)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Past Continuous", detail: "Arka Plan (was/were + ing)", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Past Perfect", detail: "En Eski Olay (had + V3)", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [
      { label: "didn't + V1", detail: "Bitmiş Eylem", color: "border-blue-500/30 text-blue-400" },
      { label: "wasn't/weren't + ing", detail: "Süreç", color: "border-purple-500/30 text-purple-400" },
      { label: "hadn't + V3", detail: "Daha Önceki", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [
      { label: "Did + S + V1?", detail: "Olay Sorgusu", color: "border-blue-500/30 text-blue-400" },
      { label: "Was/Were + S + ing?", detail: "Süreç Sorgusu", color: "border-purple-500/30 text-purple-400" },
      { label: "Had + S + V3?", detail: "Öncelik Sorgusu", color: "border-pink-500/30 text-pink-400" }
    ]
  },

  // Yapı Analizi & Çeviri Örnekleri
  examples: {
    positive: {
      parts: [
        { text: "When I arrived,", color: "text-blue-400", underline: true },
        { text: "they", color: "text-white" },
        { text: "had already started", color: "text-pink-400" },
        { text: "the meeting.", color: "text-emerald-400" }
      ],
      translation: "Vardığımda toplantıyı çoktan başlatmışlardı. (Past Perfect: Ben varmadan önce olan olay.)"
    },
    negative: {
      parts: [
        { text: "It", color: "text-white", underline: true },
        { text: "was raining", color: "text-purple-400" },
        { text: "while we", color: "text-white" },
        { text: "were walking", color: "text-purple-400" },
        { text: "home.", color: "text-emerald-400" }
      ],
      translation: "Eve yürürken yağmur yağıyordu. (Past Continuous: Arka plandaki uzun süreli durum.)"
    },
    question: {
      parts: [
        { text: "Did you see", color: "text-blue-400", underline: true },
        { text: "him while you", color: "text-white" },
        { text: "were waiting", color: "text-purple-400" },
        { text: "for the bus?", color: "text-emerald-400" }
      ],
      translation: "Otobüs beklerken onu gördün mü? (Kesintiye uğrayan eylem.)"
    }
  },

  // Püf Noktaları ve Hikaye Anlatım Senaryoları
  scenarios: [
    { title: "Ana Olaylar (Simple)", icon: Zap, desc: "Hikayeyi ilerleten, birbirini takip eden kısa ve net eylemler.", color: "from-blue-500/20 to-transparent" },
    { title: "Arka Plan (Continuous)", icon: Clock, desc: "Olayın geçtiği sahneyi kuran, atmosferi anlatan uzun süreli eylemler.", color: "from-purple-500/20 to-transparent" },
    { title: "Zaman Tüneli (Perfect)", icon: History, desc: "Anlatılan andan daha önce olup bitmiş olaylar (Hikaye içinde geçmişin geçmişi).", color: "from-pink-500/20 to-transparent" }
  ],

  // KRİTİK BİLGİLER & TUZAKLAR
  warnings: [
    {
      title: "Ardışık Eylemler vs. Arka Plan",
      wrong: "I was opening the door and entered.",
      right: "I opened the door and entered.",
      note: "Eğer eylemler arka arkaya geliyorsa hepsi Past Simple olur. Biri diğerinin fonu değilse Continuous kullanma."
    },
    {
      title: "The 'Before' Trap (Past Perfect)",
      wrong: "He went out before I arrived.",
      right: "He had gone out before I arrived.",
      note: "İki olaydan hangisinin daha önce olduğunu vurgulamak istiyorsan, ilk olanı mutlaka Past Perfect yapmalısın."
    }
  ],

  // Mini Alıştırma (6 Soruluk Hikaye Bazlı Set)
  challenge: {
    words: ["opened", "was raining", "had left", "were sitting", "arrived", "hadn't seen"],
    questions: [
      {
        id: "q1",
        text: ["The sun was shining and the birds ", " in the trees."],
        correct: "were sitting",
        hint: "Hikayenin başındaki atmosferi/arka planı kuruyoruz.",
        visualFormula: "Arka Plan (Past Continuous)"
      },
      {
        id: "q2",
        text: ["Suddenly, someone ", " the door loudly."],
        correct: "opened",
        hint: "Hikayeyi ilerleten ani ve ana bir olay.",
        visualFormula: "Ana Eylem (Past Simple)"
      },
      {
        id: "q3",
        text: ["When I got to the station, the train ", " already."],
        correct: "had left",
        hint: "Ben varmadan önce gerçekleşen bir olay (Geçmişin geçmişi).",
        visualFormula: "Daha Önceki Olay (Past Perfect)"
      },
      {
        id: "q4",
        text: ["It ", " heavily when we decided to go out."],
        correct: "was raining",
        hint: "Karar anımızda devam etmekte olan uzun süreli durum.",
        visualFormula: "Süregelen Durum (Past Continuous)"
      },
      {
        id: "q5",
        text: ["They recognized her immediately, even though they ", " her for years."],
        correct: "hadn't seen",
        hint: "Tanıma anından önceki uzun bir süreci anlatıyor.",
        visualFormula: "Öncelik/Süreç (Past Perfect)"
      },
      {
        id: "q6",
        text: ["I ", " home very late last night."],
        correct: "arrived",
        hint: "Tamamlanmış, basit bir geçmiş zaman eylemi.",
        visualFormula: "Bitmiş Eylem (Past Simple)"
      }
    ]
  }
};