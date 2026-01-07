// src/data/lessons/present-simple-continuous-b1.ts
import { Zap, Clock, Eye, TrendingUp, Brain } from 'lucide-react';

export const presentSimpleContinuousB1Data = {
  id: 'b1-1.1-state-verbs',
  title: '1.1 PRESENT SIMPLE & PRESENT CONTINUOUS',
  
  // Üst kısımdaki neon formül kutucukları
  formulas: {
    positive: [
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Verb (s/es) / am-is-are + ing", detail: "Zaman Çekimi", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Object", detail: "Nesne (O)", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    negative: [
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400" },
      { label: "don't-doesn't / isn't-aren't", detail: "Yardımcı Fiil", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Verb (V1) / Verb + ing", detail: "Fiil", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" },
      { label: "Object", detail: "Nesne (O)", color: "border-emerald-500/30 text-emerald-400" }
    ],
    question: [
      { label: "Do-Does / Am-Is-Are", detail: "Yardımcı Fiil", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400" },
      { label: "Verb / Verb + ing", detail: "Ana Fiil", color: "border-pink-500/30 text-pink-400" },
      { label: "Object", detail: "Nesne (O)", color: "border-emerald-500/30 text-emerald-400" }
    ]
  },

  // Ortadaki renkli cümle analizi ve çeviri kısmı
  examples: {
    positive: {
      parts: [
        { text: "He", color: "text-blue-400", underline: true },
        { text: "gets up", color: "text-purple-400" },
        { text: "early.", color: "text-emerald-400" }
      ],
      translation: "O her zaman erken kalkar. (Genel Rutin)"
    },
    negative: {
      parts: [
        { text: "It", color: "text-blue-400", underline: true },
        { text: "doesn't", color: "text-red-400" },
        { text: "look", color: "text-pink-400" },
        { text: "good.", color: "text-emerald-400" }
      ],
      translation: "İyi görünmüyor. (Geniş Zaman - Durum Bildirimi)"
    },
    question: {
      parts: [
        { text: "Are", color: "text-purple-400", underline: true },
        { text: "they", color: "text-blue-400" },
        { text: "smiling", color: "text-pink-400" },
        { text: "in the photo?", color: "text-emerald-400" }
      ],
      translation: "Fotoğrafta gülüyorlar mı? (Şu anki eylem)"
    }
  },

  // Üçlü senaryo kartları
  scenarios: [
    { title: "Rutinler", icon: Clock, desc: "Always, usually, never gibi zarflarla yapılan alışkanlıklar.", color: "from-blue-500/20 to-transparent" },
    { title: "Fotoğraf Tasviri", icon: Zap, desc: "Fotoğraftaki donmuş anları veya videoları anlatırken kullanılır.", color: "from-pink-500/20 to-transparent" },
    { title: "Değişen Trendler", icon: TrendingUp, desc: "Giderek artan veya azalan toplumsal eğilimler (getting worried vb.)", color: "from-emerald-500/20 to-transparent" }
  ],

  // Kritik uyarı ve tuzak kutuları
  warnings: [
    {
      title: "Durum Fiilleri (Stative Verbs)",
      wrong: "I am loving taking selfies!",
      right: "I love taking selfies!",
      note: "Know, like, want gibi fiiller hareket bildirmediği için -ing takısı almaz."
    },
    {
      title: "Have ve Look Ayrımı",
      wrong: "I am having a perfect life.",
      right: "I have a perfect life. / I'm having fun.",
      note: "Sahiplik bildirirken Simple, eylem/süreç bildirirken Continuous kullanılır."
    }
  ],

  // Alttaki interaktif sürükle-bırak alıştırması
  challenge: {
    // Sürükle-bırak havuzundaki tüm kelimeler
    words: ["is showing", "love", "Do", "are reading", "don't usually watch", "am becoming", "work"],
    questions: [
      {
        id: "q1",
        text: ["Sarah ", " me her holiday photos right now."],
        correct: "is showing",
        hint: "'Right now' anlık bir eylemi işaret eder, bu yüzden Continuous seçmelisin.",
        visualFormula: "Subject + IS + V-ing"
      },
      {
        id: "q2",
        text: ["They ", " the food in Italy."],
        correct: "love",
        hint: "Duygu bildiren 'love' bir durum fiilidir (stative), asla -ing almaz.",
        visualFormula: "Subject + V1 (State Verb)"
      },
      {
        id: "q3",
        text: ["", " they work late on weekdays?"],
        correct: "Do",
        hint: "'On weekdays' bir rutindir. Soru sormak için yardımcı fiil gerekir.",
        visualFormula: "DO + Subject + V1"
      },
      {
        id: "q4",
        text: ["Look! They ", " magazines in the photo."],
        correct: "are reading",
        hint: "Fotoğraf tasvirleri ve 'Look!' ünlemi her zaman Continuous gerektirir.",
        visualFormula: "Subject + ARE + V-ing"
      },
      {
        id: "q5",
        text: ["We ", " TV in the mornings."],
        correct: "don't usually watch",
        hint: "'Usually' bir sıklık zarfıdır ve rutin bildirir. Olumsuz yapıya dikkat et.",
        visualFormula: "Subject + don't + Verb"
      },
      {
        id: "q6",
        text: ["I ", " more interested in photography these days."],
        correct: "am becoming",
        hint: "'These days' (bugünlerde) ifadesi değişen bir trendi/süreci anlatır.",
        visualFormula: "Subject + AM + V-ing"
      }
    ]
  }
};