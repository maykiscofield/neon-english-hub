// src/data/lessons/adverbs-frequency.ts
import { Zap, Clock, Calendar, AlertCircle, HelpCircle, Repeat } from 'lucide-react';

export const adverbsFrequencyData = {
  // Topics.tsx'teki ID ile tam eşleşme (image_1384ff.png'deki sıraya göre)
  id: '1.2-adverbs-frequency', 
  title: '1.2 SIKLIK ZARFLARI VE İFADELERİ',
  
  formulas: {
    positive: [ // Temel Zarflar (always, often, usually...)
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "Adverb", detail: "always, often, never...", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Main Verb", detail: "Asıl Fiil", color: "border-pink-500/30 text-pink-400" }
    ],
    negative: [ // "Be" Fiili ile Kullanım
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "am / is / are", detail: "Be Fiili", color: "border-emerald-500/30 text-emerald-400" },
      { label: "Adverb", detail: "Fiilden sonra gelir", color: "border-purple-500/30 text-purple-400" }
    ],
    question: [ // Sıklık İfadeleri (once a week, every day...)
      { label: "Subject + Verb", detail: "Cümle Yapısı", color: "border-white/10 text-white" },
      { label: "Expression", detail: "Cümlenin sonunda", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-blue-400" },
        { text: "usually", color: "text-purple-400", underline: true },
        { text: "drink", color: "text-pink-400" },
        { text: "coffee in the morning.", color: "text-white" }
      ],
      translation: "Genellikle sabahları kahve içerim. (Zarf, asıl fiilden ÖNCE gelir.)"
    },
    negative: {
      parts: [
        { text: "He", color: "text-blue-400" },
        { text: "is", color: "text-emerald-400" },
        { text: "always", color: "text-purple-400", underline: true },
        { text: "late", color: "text-white" },
        { text: "for work.", color: "text-white" }
      ],
      translation: "O işe her zaman geç kalır. (Zarf, 'be' fiilinden SONRA gelir.)"
    },
    question: {
      parts: [
        { text: "We go to the gym", color: "text-white" },
        { text: "twice a week.", color: "text-yellow-400", underline: true }
      ],
      translation: "Haftada iki kez spor salonuna gideriz. (Uzun ifadeler cümlenin sonundadır.)"
    }
  },

  scenarios: [
    { title: "Günlük Rutinler", icon: Clock, desc: "Sabah kalkıştan akşam yatışa kadar yaptığınız işlerin sıklığını anlatırken.", color: "from-blue-500/20 to-transparent" },
    { title: "Alışkanlıklar", icon: Repeat, desc: "Sigara içmek, kitap okumak veya hobilerinizden bahsederken kullanılır.", color: "from-purple-500/20 to-transparent" },
    { title: "Planlama", icon: Calendar, desc: "Toplantıların veya etkinliklerin ne sıklıkla yapıldığını belirtmek için idealdir.", color: "from-yellow-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Double Negative Tuzağı",
      wrong: "I don't never eat meat.",
      right: "I never eat meat.",
      note: "'Never' zaten olumsuz bir anlam katar, cümlede ayrıca 'don't/doesn't' kullanılması anlatım bozukluğuna yol açar."
    },
    {
      title: "Sıralama Hatası",
      wrong: "Always I am happy.",
      right: "I am always happy.",
      note: "Sıklık zarfları (always, often vb.) normalde cümlenin en başında olmaz; özne ve fiil arasına veya 'be'den sonraya yerleşir."
    },
    {
      title: "How Often Sorusu",
      wrong: "What often do you cook?",
      right: "How often do you cook?",
      note: "Bir eylemin sıklığını sormak için kullanılan tek kalıp 'How often'dır."
    }
  ],

  challenge: {
    words: ["always", "never", "once a month", "sometimes", "usually", "every day"],
    questions: [
      {
        id: "q1",
        text: ["I ", " forget my keys. I need to be more careful!"],
        correct: "always",
        hint: "Eğer dikkatli olman gerekiyorsa bunu 'her zaman' yapıyorsundur.",
        visualFormula: "Subject + ADVERB + Verb"
      },
      {
        id: "q2",
        text: ["She is ", " angry. She is a very calm person."],
        correct: "never",
        hint: "Sakin biriyse 'asla' kızmaz.",
        visualFormula: "Be + ADVERB"
      },
      {
        id: "q3",
        text: ["I brush my teeth ", "."],
        correct: "every day",
        hint: "Cümlenin en sonunda kullanılan zaman ifadesi.",
        visualFormula: "Expression at the end"
      },
      {
        id: "q4",
        text: ["We ", " go to the cinema on Fridays."],
        correct: "usually",
        hint: "Genelde yapılan bir rutin.",
        visualFormula: "Subject + Adverb + Verb"
      },
      {
        id: "q5",
        text: ["How often do you visit your dentist? - ", "."],
        correct: "once a month",
        hint: "Sıklık sorusuna verilen net bir periyot cevabı.",
        visualFormula: "Frequency Expression"
      },
      {
        id: "q6",
        text: ["They ", " play football because they don't like it."],
        correct: "sometimes", // Veya never/rarely, bağlama göre.
        hint: "Sevmiyorlarsa çok nadir veya hiç yapmazlar.",
        visualFormula: "Negative Context"
      }
    ]
  }
};