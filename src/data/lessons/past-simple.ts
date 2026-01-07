// src/data/lessons/past-simple.ts
import { Zap, History, Footprints, AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

export const pastSimpleData = {
  // Topics.tsx'teki ID ile tam eşleşme
  id: '2.3-past-simple', 
  title: '2.3 PAST SIMPLE (GEÇMİŞ ZAMAN)',
  
  formulas: {
    positive: [ // Olumlu Cümle (Fiilin 2. Hali)
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "Verb (V2)", detail: "Düzenli (-ed) veya Düzensiz", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Past Time", detail: "Yesterday, last year...", color: "border-pink-500/30 text-pink-400" }
    ],
    negative: [ // Olumsuz Cümle (Did Not + V1)
      { label: "didn't", detail: "Past Yardımcısı", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Verb (V1)", detail: "Fiil normal haline döner!", color: "border-white/10 text-white" }
    ],
    question: [ // Soru Cümlesi (Did başa)
      { label: "Did", detail: "Soru Yardımcısı", color: "border-emerald-500/30 text-emerald-400" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "Verb (V1)", detail: "Fiil yine yalın kalır", color: "border-white/10 text-white" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-blue-400" },
        { text: "watched", color: "text-purple-400", underline: true },
        { text: "a great movie", color: "text-white" },
        { text: "yesterday.", color: "text-pink-400" }
      ],
      translation: "Dün harika bir film izledim. (Düzenli fiil: watch + ed)"
    },
    negative: {
      parts: [
        { text: "She", color: "text-blue-400" },
        { text: "didn't", color: "text-red-400", underline: true },
        { text: "go", color: "text-white", underline: true },
        { text: "to the party last night.", color: "text-white" }
      ],
      translation: "O dün gece partiye gitmedi. (Didn't geldiği için 'went' değil 'go' kullanılır.)"
    },
    question: {
      parts: [
        { text: "Did", color: "text-emerald-400", underline: true },
        { text: "you", color: "text-blue-400" },
        { text: "eat", color: "text-white" },
        { text: "dinner?", color: "text-white" }
      ],
      translation: "Akşam yemeği yedin mi? (Soru sorarken Did en başa gelir.)"
    }
  },

  scenarios: [
    { title: "Biten Eylemler", icon: Footprints, desc: "Geçmişte yapılmış ve o anda kalmış, günümüzle bağı kopmuş olaylar.", color: "from-blue-500/20 to-transparent" },
    { title: "Hikaye Anlatma", icon: History, desc: "Sırasıyla gerçekleşen geçmiş olaylar dizisini (Gittim, gördüm, aldım) anlatırken.", color: "from-purple-500/20 to-transparent" },
    { title: "Tarihi Gerçekler", icon: CheckCircle2, desc: "Eski zamanlarda yaşanmış genel gerçekleri ve biyografileri anlatmak için idealdir.", color: "from-emerald-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Did Varsa 'ed' Uçar! (ALTIN KURAL)",
      wrong: "I didn't watched the match.",
      right: "I didn't watch the match.",
      note: "'Did' veya 'Didn't' bir cümleye girdiğinde fiilin üzerindeki geçmiş zaman yükünü alır. Bu yüzden fiil her zaman 1. (yalın) haline döner."
    },
    {
      title: "Be Fiili (Was/Were) İstisnası",
      wrong: "Did you be at home yesterday?",
      right: "Were you at home yesterday?",
      note: "Am/Is/Are geçmişte Was/Were olur. Bu kelimeler 'Did' yardımcısına ihtiyaç duymaz, kendileri başa geçer."
    },
    {
      title: "Düzensiz Fiil Tuzağı",
      wrong: "I buyed a new car.",
      right: "I bought a new car.",
      note: "Bazı fiiller kurallara isyan eder ve -ed takısı almaz. Bunları ezberlemek gerekir (Go-Went, Eat-Ate gibi)."
    }
  ],

  challenge: {
    words: ["watched", "didn't see", "Did you enjoy", "went", "was", "didn't have"],
    questions: [
      {
        id: "q1",
        text: ["I ", " to London last summer with my family."],
        correct: "went",
        hint: "'Go' fiilinin geçmiş zamandaki düzensiz hali.",
        visualFormula: "Irregular V2"
      },
      {
        id: "q2",
        text: ["", " your holiday in Antalya?"],
        correct: "Did you enjoy",
        hint: "Soru sorarken yardımcı fiil + özne + yalın fiil.",
        visualFormula: "Did + Subj + V1"
      },
      {
        id: "q3",
        text: ["I'm sorry, I ", " your message yesterday."],
        correct: "didn't see",
        hint: "Olumsuzluk eki gelince fiil normal haline döner.",
        visualFormula: "Didn't + V1"
      },
      {
        id: "q4",
        text: ["The movie ", " very boring, so we left early."],
        correct: "was",
        hint: "Durum bildiren (Be) fiilinin geçmiş hali.",
        visualFormula: "Past of IS"
      },
      {
        id: "q5",
        text: ["They ", " a football match on TV last night."],
        correct: "watched",
        hint: "Düzenli bir fiil; sonuna ne gelmeli?",
        visualFormula: "Regular Verb + ed"
      },
      {
        id: "q6",
        text: ["We ", " enough time to finish the project."],
        correct: "didn't have",
        hint: "Vaktimiz yoktu (olumsuz gereklilik).",
        visualFormula: "Past Negation"
      }
    ]
  }
};