// src/data/lessons/subj-obj-questions.ts
import { Zap, UserSearch, Target, AlertCircle, HelpCircle, ArrowRightLeft, ShieldQuestion } from 'lucide-react';

export const subjectObjectQuestionsData = {
  // Topics.tsx'teki ID ile tam eşleşme
  id: '4.3-subj-obj-questions', 
  title: '4.3 ÖZNE VE NESNE SORULARI',
  
  formulas: {
    positive: [ // Subject Questions (Özne Soruları)
      { label: "Who / What", detail: "Özneyi sorar", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Verb (s / ed)", detail: "Yardımcı fiil (do/did) YOK!", color: "border-purple-500/30 text-purple-400" },
      { label: "Object", detail: "Cümlenin kalanı", color: "border-white/10 text-white" }
    ],
    negative: [ // Object Questions (Nesne Soruları)
      { label: "Wh- Word", detail: "Nesneyi sorar", color: "border-emerald-500/30 text-emerald-400" },
      { label: "do / does / did", detail: "Yardımcı fiil ŞART!", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "Subject + Verb", detail: "ASQ Kuralı", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [ // Hızlı Kontrol
      { label: "Özne mi?", detail: "Düz cümle gibi kur", color: "border-blue-500/30 text-blue-400" },
      { label: "Nesne mi?", detail: "Soru kalıbını kullan", color: "border-emerald-500/30 text-emerald-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "Who", color: "text-blue-400", underline: true },
        { text: "broke", color: "text-purple-400", underline: true },
        { text: "the window?", color: "text-white" }
      ],
      translation: "Pencereyi kim kırdı? (Özne sorusu: Pencereyi kıran kişiyi arıyoruz. Did kullanmadık!)"
    },
    negative: {
      parts: [
        { text: "What", color: "text-emerald-400", underline: true },
        { text: "did", color: "text-yellow-400", underline: true },
        { text: "Ali", color: "text-pink-400" },
        { text: "break?", color: "text-white" }
      ],
      translation: "Ali neyi kırdı? (Nesne sorusu: Ali'nin neyi kırdığını arıyoruz. Did kullandık!)"
    },
    question: {
      parts: [
        { text: "Someone loves you.", color: "text-white" },
        { text: "→ Who", color: "text-blue-400" },
        { text: "loves", color: "text-purple-400" },
        { text: "you?", color: "text-white" }
      ],
      translation: "Birisi seni seviyor. → Seni kim seviyor?"
    }
  },

  scenarios: [
    { title: "Eylemi Kim Yaptı?", icon: UserSearch, desc: "Cümlenin başındaki kişiyi bilmiyorsak 'Who/What' kelimesini o kişinin yerine koyun ve cümleyi bozmayın.", color: "from-blue-500/20 to-transparent" },
    { title: "Neye Maruz Kaldı?", icon: Target, desc: "Cümlenin sonundaki şeyi arıyorsak klasik 'Wh- + do/did + Subj + Verb' formülünü kullanın.", color: "from-emerald-500/20 to-transparent" },
    { title: "Karşılaştırma", icon: ArrowRightLeft, desc: "Özne soruları 'Kim yaptı?', Nesne soruları 'Kime yaptı?' diye sorar.", color: "from-purple-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Özne Sorularında 'Did' Yasaktır!",
      wrong: "Who did see you? (Kim seni gördü?)",
      right: "Who saw you?",
      note: "Eğer soru kelimesi (Who/What) bizzat işi yapan kişiyse, araya do/does/did girmez. Fiil direkt 2. halde veya -s takısıyla gelir."
    },
    {
      title: "Cevaba Göre Karar Ver",
      wrong: "What does happened?",
      right: "What happened?",
      note: "Cevabın 'Something happened' (Özne başta) ise yardımcı fiil kullanma."
    }
  ],

  challenge: {
    words: ["Who called", "Who did you call", "What happened", "What did happen", "Who lives", "Who does live"],
    questions: [
      {
        id: "q1",
        text: ["Someone rang the bell. ", " the bell?"],
        correct: "Who rang",
        hint: "Zili çalan kişiyi (Özneyi) soruyoruz.",
        visualFormula: "Subject Question (No DID)"
      },
      {
        id: "q2",
        text: ["You talked to someone. ", " to?"],
        correct: "Who did you talk",
        hint: "Konuştuğun kişiyi (Nesneyi) soruyoruz.",
        visualFormula: "Object Question (Needs DID)"
      },
      {
        id: "q3",
        text: ["Something fell on the floor. ", " on the floor?"],
        correct: "What fell",
        hint: "Düşen şeyi (Özneyi) soruyoruz.",
        visualFormula: "What + V2"
      },
      {
        id: "q4",
        text: ["You bought something. ", " buy?"],
        correct: "What did you",
        hint: "Aldığın şeyi (Nesneyi) soruyoruz.",
        visualFormula: "Wh- + DID + Subj"
      },
      {
        id: "q5",
        text: ["", " in that big house?"],
        correct: "Who lives",
        hint: "O evde yaşayan kişiyi soruyoruz.",
        visualFormula: "Who + Verb(-s)"
      },
      {
        id: "q6",
        text: ["Something smells good. ", " good?"],
        correct: "What smells",
        hint: "Güzel kokan şeyi (Özneyi) arıyoruz.",
        visualFormula: "Subject is 'What'"
      }
    ]
  }
};