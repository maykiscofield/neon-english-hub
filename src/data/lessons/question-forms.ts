// src/data/lessons/question-forms.ts
import { Zap, MessageCircle, HelpCircle, AlertCircle, RefreshCcw, UserCheck } from 'lucide-react';

export const questionFormsData = {
  // ÖNEMLİ: Topics.tsx'teki ID (1.1-question-forms) ile birebir aynı
  id: '1.1-question-forms', 
  title: '1.1 SORU FORMLARI (ASQ KURALI)',
  
  formulas: {
    positive: [ // Yes/No Questions (Yardımcı Fiil ile başlayanlar)
      { label: "Auxiliary", detail: "Do / Is / Can / Have", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Subject", detail: "Özne (I, You, Ali)", color: "border-purple-500/30 text-purple-400" },
      { label: "Main Verb", detail: "Ana Fiil (V1)", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [ // Wh- Questions (Soru Kelimesi ile başlayanlar)
      { label: "Wh- Word", detail: "What / Where / Why", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "ASQ", detail: "Yardımcı + Özne + Fiil", color: "border-yellow-500/30 text-yellow-400" },
      { label: "Object", detail: "Nesne / Tamlayıcı", color: "border-white/10 text-white" }
    ],
    question: [ // "Be" (Am/Is/Are) İstisnası
      { label: "Am / Is / Are", detail: "Yardımcı fiil yok", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "Adj / Noun", detail: "Sıfat / İsim", color: "border-white/10 text-white" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "Do", color: "text-blue-400", underline: true },
        { text: "you", color: "text-purple-400" },
        { text: "understand", color: "text-pink-400" },
        { text: "the lesson?", color: "text-white" }
      ],
      translation: "Dersi anlıyor musun? (Aux + Subj + Verb kuralı.)"
    },
    negative: {
      parts: [
        { text: "Where", color: "text-emerald-400", underline: true },
        { text: "does", color: "text-blue-400" },
        { text: "your sister", color: "text-purple-400" },
        { text: "work?", color: "text-pink-400" }
      ],
      translation: "Kız kardeşin nerede çalışıyor? (Wh- + ASQ kuralı.)"
    },
    question: {
      parts: [
        { text: "Are", color: "text-red-400", underline: true },
        { text: "they", color: "text-blue-400" },
        { text: "ready", color: "text-white" },
        { text: "for the trip?", color: "text-white" }
      ],
      translation: "Gezi için hazırlar mı? (Be fiili kendisi başa gelir.)"
    }
  },

  scenarios: [
    { title: "Bilgi İsteme", icon: MessageCircle, desc: "Birinden spesifik bir bilgi almak için Wh- sorularını kullanın.", color: "from-blue-500/20 to-transparent" },
    { title: "Onay Alma", icon: UserCheck, desc: "Evet veya Hayır cevabı almak için yardımcı fiili başa çekin.", color: "from-purple-500/20 to-transparent" },
    { title: "Zaman Uyumu", icon: RefreshCcw, desc: "Soru sorarken ana fiilin daima yalın halde (V1) kalmasına dikkat edin.", color: "from-pink-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Üçüncü Tekil Şahıs Tuzağı",
      wrong: "Does she likes pizza?",
      right: "Does she like pizza?",
      note: "Soru cümlesinde 'Does' varsa, fiildeki -s takısı düşer. Fiil her zaman yalın kalır."
    },
    {
      title: "Be vs Do Karmaşası",
      wrong: "Do you hungry?",
      right: "Are you hungry?",
      note: "Eğer cümlede bir eylem (gitmek, yemek vb.) yoksa 'Do' değil, 'Am/Is/Are' kullanılır."
    },
    {
      title: "Kelime Sırası",
      wrong: "What you are doing?",
      right: "What are you doing?",
      note: "Wh- kelimesinden sonra mutlaka yardımcı fiil gelmelidir; özne değil."
    }
  ],

  challenge: {
    words: ["do you", "does he", "are they", "is she", "can you", "where do"],
    questions: [
      {
        id: "q1",
        text: ["What ", " study at university?"],
        correct: "does he",
        hint: "He öznesi ile kullanılan yardımcı fiil.",
        visualFormula: "Wh- + Auxiliary + Subject"
      },
      {
        id: "q2",
        text: ["", " speak Spanish fluently?"],
        correct: "can you",
        hint: "Yetenek sorarken kullanılan modal.",
        visualFormula: "Ability Question"
      },
      {
        id: "q3",
        text: ["", " from Turkey or Italy?"],
        correct: "are they",
        hint: "Durum/Köken sorarken 'Be' fiili kullanımı.",
        visualFormula: "BE + Subject"
      },
      {
        id: "q4",
        text: ["", " you usually spend your weekends?"],
        correct: "where do",
        hint: "Mekan sormak için Wh- kelimesi ve yardımcı fiil.",
        visualFormula: "Where + Do"
      },
      {
        id: "q5",
        text: ["Why ", " late every morning?"],
        correct: "is she",
        hint: "Durum bildiren (late) bir Wh- sorusu.",
        visualFormula: "Why + Is"
      },
      {
        id: "q6",
        text: ["", " want to come with us?"],
        correct: "do you",
        hint: "Geniş zamanda 'You' için temel soru girişi.",
        visualFormula: "Do + Subject"
      }
    ]
  }
};