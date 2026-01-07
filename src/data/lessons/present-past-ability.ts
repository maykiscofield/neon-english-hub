// src/data/lessons/present-past-ability.ts
import { Zap, Clock, Star, AlertCircle, CheckCircle2, Trophy } from 'lucide-react';

export const presentPastAbilityData = {
  id: 'b1-2.2-ability-advanced',
  title: '2.2 GEÇMİŞ VE GÜNÜMÜZ YETENEKLERİ',
  
  // Üst kısımdaki neon formül kutucukları
  formulas: {
    positive: [
      { label: "Subject", detail: "Özne (S)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Can / Could / Was Able To", detail: "Yetenek Modalı", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Verb (V1)", detail: "Yalın Fiil", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" },
      { label: "Object / Rest", detail: "Nesne / Kalan", color: "border-emerald-500/30 text-emerald-400" }
    ],
    negative: [
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "Can't / Couldn't / Wasn't Able", detail: "Olumsuz Modal", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Verb (V1)", detail: "Yalın Fiil", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [
      { label: "Can / Could / Were You Able To", detail: "Yardımcı Modal", color: "border-purple-500/30 text-purple-400" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "Verb (V1)", detail: "Yalın Fiil", color: "border-pink-500/30 text-pink-400" }
    ]
  },

  // Yapı Analizi & Çeviri Örnekleri
  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-blue-400", underline: true },
        { text: "was able to", color: "text-purple-400" },
        { text: "finish", color: "text-pink-400" },
        { text: "the exam on time.", color: "text-emerald-400" }
      ],
      translation: "Sınavı zamanında bitirmeyi başardım. (Zor bir görevin üstesinden gelmek)"
    },
    negative: {
      parts: [
        { text: "He", color: "text-blue-400", underline: true },
        { text: "could not", color: "text-red-400" },
        { text: "swim", color: "text-pink-400" },
        { text: "when he was young.", color: "text-purple-400" }
      ],
      translation: "Gençken yüzemezdi. (Geçmişteki genel bir yeteneksizlik)"
    },
    question: {
      parts: [
        { text: "Were you", color: "text-blue-400", underline: true },
        { text: "able to", color: "text-purple-400" },
        { text: "find", color: "text-pink-400" },
        { text: "your wallet?", color: "text-emerald-400" }
      ],
      translation: "Cüzdanını bulabildin mi? (Spesifik bir andaki başarı sorgusu)"
    }
  },

  // Kullanım Senaryoları (İkonlu Kartlar)
  scenarios: [
    { title: "Genel Yetenek", icon: Star, desc: "Geçmişte her zaman yapabildiğiniz genel beceriler için 'could' kullanılır.", color: "from-blue-500/20 to-transparent" },
    { title: "Zorlu Başarı", icon: Trophy, desc: "Geçmişte zor bir durumu tek seferliğine başarmak için 'managed to' veya 'was able to' kullanılır.", color: "from-pink-500/20 to-transparent" },
    { title: "Gelecek Planları", icon: Zap, desc: "Gelecekteki yetenekler için 'will be able to' yapısı tercih edilir.", color: "from-emerald-500/20 to-transparent" }
  ],

  // KRİTİK BİLGİLER & TUZAKLAR
  warnings: [
    {
      title: "Could vs. Was Able To",
      wrong: "The door was locked, but I could open it.",
      right: "The door was locked, but I was able to open it.",
      note: "Geçmişteki 'tek seferlik' zor başarılar için 'could' kullanılmaz. 'Managed to' veya 'Was able to' şarttır."
    },
    {
      title: "Perfect Tense Uyumu",
      wrong: "I haven't could call you.",
      right: "I haven't been able to call you.",
      note: "Present Perfect (have/has) ile 'can/could' asla yan yana gelmez, 'been able to' kullanılır."
    }
  ],

  // Mini Alıştırma (6 Soruluk Püf Noktalı Set)
  challenge: {
    words: ["could", "was able to", "managed to", "been able to", "couldn't", "be able to"],
    questions: [
      {
        id: "q1",
        text: ["My brother ", " play the piano well when he was young."],
        correct: "could",
        hint: "Geçmişteki genel bir yetenek.",
        visualFormula: "Subject + COULD + V1"
      },
      {
        id: "q2",
        text: ["The fire spread quickly, but everyone ", " escape."],
        correct: "was able to",
        hint: "Spesifik ve zor bir durumdan kurtulma başarısı.",
        visualFormula: "Subject + WAS ABLE TO + V1"
      },
      {
        id: "q3",
        text: ["I've been very busy, so I haven't ", " call you."],
        correct: "been able to",
        hint: "Present Perfect yapısı 'can/could' kabul etmez.",
        visualFormula: "HAVE + BEEN ABLE TO"
      },
      {
        id: "q4",
        text: ["Finally, after hours of trying, we ", " start the engine."],
        correct: "managed to",
        hint: "Çaba ve eforla gelen nihai başarı.",
        visualFormula: "Subject + MANAGED TO + V1"
      },
      {
        id: "q5",
        text: ["I looked everywhere, but I ", " find my keys."],
        correct: "couldn't",
        hint: "Olumsuzlarda 'couldn't' her durum için (genel/spesifik) uygundur.",
        visualFormula: "Subject + COULDN'T + V1"
      },
      {
        id: "q6",
        text: ["I hope I will ", " finish this project tonight."],
        correct: "be able to",
        hint: "Gelecek zaman kurgusunda yetenek bildirimi.",
        visualFormula: "WILL + BE ABLE TO"
      }
    ]
  }
};