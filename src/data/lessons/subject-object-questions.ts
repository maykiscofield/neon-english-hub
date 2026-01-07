// src/data/lessons/subject-object-questions.ts
import { Zap, HelpCircle, Info, MoveRight, AlertCircle, Brain } from 'lucide-react';

export const subjectObjectQuestionsData = {
  id: 'b1-1.2-subj-obj-ques',
  title: '1.2 SUBJECT AND OBJECT QUESTIONS',
  
  // Üst kısımdaki neon formül kutucukları (image_1137a8.jpg'deki sekmeler)
  formulas: {
    positive: [ // Subject Questions (Özne Soruları)
      { label: "Who / What", detail: "Soru Kelimesi (Özne)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Main Verb (-s/-ed)", detail: "Ana Fiil (Yardımcı Fiil YOK)", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" },
      { label: "Object / Rest", detail: "Nesne veya Kalan", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    negative: [ // Object Questions (Nesne Soruları)
      { label: "Who / What", detail: "Soru Kelimesi (Nesne)", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "do / does / did", detail: "Yardımcı Fiil (Aux)", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "Verb (V1)", detail: "Yalın Fiil", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [ // Questions with Prepositions (Edatlı Sorular)
      { label: "Question Word", detail: "Soru Kelimesi", color: "border-purple-500/30 text-purple-400" },
      { label: "Auxiliary", detail: "Yard. Fiil", color: "border-red-500/30 text-red-400" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "Verb + Prep", detail: "Fiil + Edat (at/with/to)", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ]
  },

  // Ortadaki renkli cümle analizi ve çeviri kısmı
  examples: {
    positive: {
      parts: [
        { text: "Who", color: "text-blue-400", underline: true },
        { text: "told", color: "text-pink-400" },
        { text: "you?", color: "text-emerald-400" }
      ],
      translation: "Sana kim söyledi? (Özne Sorusu: 'Who' burada işi yapan kişidir.)"
    },
    negative: {
      parts: [
        { text: "Who", color: "text-purple-400", underline: true },
        { text: "did", color: "text-red-400" },
        { text: "you", color: "text-blue-400" },
        { text: "tell?", color: "text-pink-400" }
      ],
      translation: "Kime söyledin? (Nesne Sorusu: Söyleyen kişi 'You', etkilenen 'Who'.)"
    },
    question: {
      parts: [
        { text: "Who", color: "text-purple-400", underline: true },
        { text: "did you", color: "text-blue-400" },
        { text: "go with?", color: "text-pink-400" }
      ],
      translation: "Kiminle gittin? (Edat her zaman cümlenin en sonunda kalır.)"
    }
  },

  // Üçlü senaryo kartları (image_1137a8.jpg'deki orta bölüm)
  scenarios: [
    { title: "İşi Yapanı Bulma", icon: Zap, desc: "Subject Questions: Eğer sorunun cevabı işi yapan özne ise yardımcı fiil (do/did) kullanılmaz.", color: "from-blue-500/20 to-transparent" },
    { title: "Etkileneni Bulma", icon: HelpCircle, desc: "Object Questions: İşi yapan bellidir; kime veya neye yapıldığını sorarken standart soru yapısı kullanılır.", color: "from-purple-500/20 to-transparent" },
    { title: "Edatların Yeri", icon: Info, desc: "Edatlı sorularda (with, about, to) edat genellikle cümlenin en sonunda kalır.", color: "from-pink-500/20 to-transparent" }
  ],

  // Kritik uyarı ve tuzak kutuları
  warnings: [
    {
      title: "Yardımcı Fiil Tuzağı",
      wrong: "Who did tell you?",
      right: "Who told you?",
      note: "Özne sorularında 'do, does, did' kesinlikle kullanılmaz. Fiil, cümlenin zamanına göre çekimlenir."
    },
    {
      title: "Nesne Sorusu Çekimi",
      wrong: "What does she likes?",
      right: "What does she like?",
      note: "Yardımcı fiil (does/did) varken ana fiil her zaman yalın (V1) kalmalıdır."
    }
  ],

  // Mini Alıştırma (6 Soruluk Gelişmiş Set)
  challenge: {
    words: ["interviewed", "did", "see", "phoned", "won", "happened"],
    questions: [
      {
        id: "q1",
        text: ["Who ", " him? (Cevap: Mona)"],
        correct: "interviewed",
        hint: "Cevap Mona (Özne) olduğu için yardımcı fiil kullanma.",
        visualFormula: "Subject QW + V2"
      },
      {
        id: "q2",
        text: ["What ", " you see at the museum?"],
        correct: "did",
        hint: "İşi yapan belli (You), bu bir nesne sorusudur.",
        visualFormula: "QW + DID + Subj + V1"
      },
      {
        id: "q3",
        text: ["Who ", " you an hour ago? (Cevap: My boss)"],
        correct: "phoned",
        hint: "Arayan kişiyi (Özne) arıyoruz. Yardımcı fiilsiz direkt fiil kullan.",
        visualFormula: "Who + V2"
      },
      {
        id: "q4",
        text: ["Which team ", " the match last night?"],
        correct: "won",
        hint: "Kazanan takımı (Özne) arıyoruz.",
        visualFormula: "Which team + V2"
      },
      {
        id: "q5",
        text: ["Who did you ", " to the cinema with?"],
        correct: "see",
        hint: "Nesne sorusu; 'did' kullanılmış, fiili yalın (V1) bırak.",
        visualFormula: "DID + Subj + V1"
      },
      {
        id: "q6",
        text: ["What ", " at the end of the movie?"],
        correct: "happened",
        hint: "Olan olayı (Özne) arıyoruz.",
        visualFormula: "What + V2"
      }
    ]
  }
};