// src/data/lessons/reported-speech.ts
import { Zap, MessageSquare, Undo2, AlertCircle, HelpCircle, Repeat } from 'lucide-react';

export const reportedSpeechData = {
  // KRİTİK: image_13765f.png'deki hatayı çözmek için ID birebir aynı yapıldı
  id: 'b1-9.2-reported-speech', 
  title: '9.2 DOLAYLI ANLATIM (REPORTED SPEECH)',
  
  formulas: {
    positive: [ // Statements (Düz Cümleler)
      { label: "Reporting Phrase", detail: "He said / She told me", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "(that)", detail: "Bağlaç (İsteğe bağlı)", color: "border-white/10 text-white" },
      { label: "Backshifted Clause", detail: "Bir derece geçmiş zaman", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" }
    ],
    negative: [ // Questions (Sorular)
      { label: "Asked", detail: "Soru fiili", color: "border-emerald-500/30 text-emerald-400" },
      { label: "if / whether", detail: "...olup olmadığını", color: "border-yellow-500/30 text-yellow-400" },
      { label: "Statement Order", detail: "Düz cümle sırası", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" }
    ],
    question: [ // Time Changes (Zaman Değişimi)
      { label: "Now -> Then", detail: "Şimdi -> O zaman", color: "border-pink-500/30 text-pink-400" },
      { label: "Today -> That day", detail: "Bugün -> O gün", color: "border-blue-500/30 text-blue-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "She said,", color: "text-blue-400" },
        { text: "\"I am", color: "text-white", underline: true },
        { text: "happy.\"", color: "text-white" },
        { text: "→ She said she", color: "text-emerald-400" },
        { text: "was", color: "text-purple-400", underline: true },
        { text: "happy.", color: "text-emerald-400" }
      ],
      translation: "O, mutlu olduğunu söyledi. (Am -> Was dönüşümüne dikkat!)"
    },
    negative: {
      parts: [
        { text: "He asked,", color: "text-blue-400" },
        { text: "\"Where do", color: "text-white", underline: true },
        { text: "you live?\"", color: "text-white" },
        { text: "→ He asked where I", color: "text-emerald-400" },
        { text: "lived.", color: "text-purple-400", underline: true }
      ],
      translation: "Nerede yaşadığımı sordu. (Soru sırası kalkar, düz cümle olur.)"
    },
    question: {
      parts: [
        { text: "They told us,", color: "text-blue-400" },
        { text: "\"We will", color: "text-white", underline: true },
        { text: "call you.\"", color: "text-white" },
        { text: "→ They said they", color: "text-emerald-400" },
        { text: "would", color: "text-purple-400", underline: true },
        { text: "call us.", color: "text-emerald-400" }
      ],
      translation: "Bizi arayacaklarını söylediler. (Will -> Would dönüşümü.)"
    }
  },

  scenarios: [
    { title: "Haber Aktarma", icon: Repeat, desc: "Bir arkadaşınızın veya bir yetkilinin söylediklerini başkasına anlatırken.", color: "from-blue-500/20 to-transparent" },
    { title: "Röportajlar", icon: MessageSquare, desc: "Soru-cevap şeklindeki görüşmeleri yazıya veya anlatıma dökerken kullanılır.", color: "from-purple-500/20 to-transparent" },
    { title: "Geçmiş Hikayeler", icon: Undo2, desc: "Eskiden yaşanmış diyalogları anlatırken zaman akışını korumak için şarttır.", color: "from-pink-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Say vs. Tell Farkı",
      wrong: "He told that he was tired.",
      right: "He said that he was tired / He told ME that...",
      note: "Tell fiili her zaman kime söylendiğini (me, him, Ali) belirtmek zorundadır. Say tek başına kullanılabilir."
    },
    {
      title: "Soru İşareti Tuzağı",
      wrong: "She asked where was I?",
      right: "She asked where I was.",
      note: "Dolaylı sorularda 'do/does/did' yardımcı fiilleri atılır ve soru işareti kullanılmaz. Cümle artık bir 'soru' değil, 'bilgi aktarımıdır'."
    },
    {
      title: "Değişmeyen Modal'lar",
      wrong: "She said she woulded help.",
      right: "She said she would help.",
      note: "Would, could, should, might ve ought to dolaylı anlatımda değişmez, aynı kalır."
    }
  ],

  challenge: {
    words: ["was", "had been", "would", "if I liked", "where she lived", "told me"],
    questions: [
      {
        id: "q1",
        text: ["Direct: \"I am busy.\" -> He said he ", " busy."],
        correct: "was",
        hint: "Am/Is/Are -> Was/Were dönüşümü yapılır.",
        visualFormula: "Present Simple -> Past Simple"
      },
      {
        id: "q2",
        text: ["Direct: \"I will help.\" -> She said she ", " help."],
        correct: "would",
        hint: "Will gelecek zaman kipi bir derece geçmişe çekilir.",
        visualFormula: "Will -> Would"
      },
      {
        id: "q3",
        text: ["Direct: \"Do you like pizza?\" -> He asked ", " pizza."],
        correct: "if I liked",
        hint: "Yes/No sorularında 'if' köprüsü kurulur ve fiil V2 olur.",
        visualFormula: "If + Subject + V2"
      },
      {
        id: "q4",
        text: ["Direct: \"I have finished.\" -> Ali said he ", " finished."],
        correct: "had been", // Veya had, verilere göre
        hint: "Present Perfect -> Past Perfect dönüşümü.",
        visualFormula: "Have + V3 -> Had + V3"
      },
      {
        id: "q5",
        text: ["Ali ", " that he was going to be late."],
        correct: "told me",
        hint: "Eğer bir dinleyici (me) varsa bu fiil kullanılır.",
        visualFormula: "Verb + Object (me/him)"
      },
      {
        id: "q6",
        text: ["Direct: \"Where does she live?\" -> I asked ", "."],
        correct: "where she lived",
        hint: "Yardımcı fiili (does) at ve ana fiili geçmişe çek.",
        visualFormula: "Wh- + Subject + V2"
      }
    ]
  }
};