// src/data/lessons/modals-obligation.ts
import { Zap, ShieldAlert, Info, AlertTriangle, Lightbulb, Scale } from 'lucide-react';

export const modalsObligationData = {
  id: 'b1-6.1-obligation-modals',
  title: '6.1 MODALS OF OBLIGATION (ZORUNLULUK)',
  
  formulas: {
    positive: [ // Strong Obligation (Must / Have to)
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "must / have to", detail: "Zorunluluk Modalı", color: "border-purple-500/30 text-purple-400 shadow-[0_0_168,85,247,0.1)]" },
      { label: "Verb (V1)", detail: "Yalın Fiil", color: "border-pink-500/30 text-pink-400 shadow-[0_0_236,72,153,0.1)]" }
    ],
    negative: [ // Prohibition vs No Necessity
      { label: "mustn't", detail: "YASAK!", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "don't have to", detail: "Zorunluluk Yok", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Verb (V1)", detail: "Fiil", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [ // Advice (Should / Ought to)
      { label: "Should", detail: "Tavsiye Modalı", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "Verb (V1)?", detail: "Fiil", color: "border-pink-500/30 text-pink-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "You", color: "text-blue-400", underline: true },
        { text: "must", color: "text-purple-400" },
        { text: "wear", color: "text-pink-400" },
        { text: "a seatbelt", color: "text-emerald-400" },
        { text: "in the car.", color: "text-white" }
      ],
      translation: "Arabada emniyet kemeri takmalısın. (Güçlü/Yasal Zorunluluk)"
    },
    negative: {
      parts: [
        { text: "You", color: "text-blue-400", underline: true },
        { text: "don't have to", color: "text-emerald-400" },
        { text: "pay", color: "text-pink-400" },
        { text: "today;", color: "text-white" },
        { text: "it's free.", color: "text-purple-400" }
      ],
      translation: "Bugün ödemek zorunda değilsin; ücretsiz. (Zorunluluk Yok)"
    },
    question: {
      parts: [
        { text: "Should", color: "text-yellow-400", underline: true },
        { text: "I", color: "text-blue-400" },
        { text: "apply", color: "text-pink-400" },
        { text: "for this job?", color: "text-emerald-400" }
      ],
      translation: "Bu işe başvurmalı mıyım? (Tavsiye İsteme)"
    }
  },

  scenarios: [
    { title: "İçsel Zorunluluk", icon: Zap, desc: "Must: Kişinin kendi kendine koyduğu kurallar (I must study).", color: "from-purple-500/20 to-transparent" },
    { title: "Dışsal Zorunluluk", icon: Scale, desc: "Have to: Kanunlar, kurallar veya başkasının dayatması.", color: "from-blue-500/20 to-transparent" },
    { title: "Güçlü Uyarı", icon: AlertTriangle, desc: "Had better: Yapmazsan kötü sonuçlanır dediğin durumlar.", color: "from-red-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Mustn't vs Don't Have To",
      wrong: "You mustn't come if you are tired.",
      right: "You don't have to come if you are tired.",
      note: "Mustn't 'yasaktır' demektir. Don't have to ise 'yapmana gerek yok' demektir. Karıştırmak anlamı bozar."
    },
    {
      title: "Had Better: Gizli Olumsuzluk",
      wrong: "You had better to go.",
      right: "You had better go. / You'd better not stay.",
      note: "Had better yapısından sonra 'to' gelmez. Olumsuzu 'had better not' şeklindedir."
    }
  ],

  challenge: {
    words: ["mustn't", "don't have to", "should", "had better", "must", "have to"],
    questions: [
      {
        id: "q1",
        text: ["You ", " smoke in the hospital. It is strictly forbidden."],
        correct: "mustn't",
        hint: "Kesin bir yasak söz konusu.",
        visualFormula: "Prohibition (Yasak)"
      },
      {
        id: "q2",
        text: ["Tomorrow is a holiday, so I ", " wake up early."],
        correct: "don't have to",
        hint: "Bir mecburiyetin olmadığını belirtiyor.",
        visualFormula: "No Necessity"
      },
      {
        id: "q3",
        text: ["You ", " see a doctor. That cough sounds terrible!"],
        correct: "should",
        hint: "İyi niyetli bir tavsiye veriliyor.",
        visualFormula: "Advice (Tavsiye)"
      },
      {
        id: "q4",
        text: ["It's getting late. You ", " leave now or you'll miss the train."],
        correct: "had better",
        hint: "Yapılmazsa kötü bir sonuç (treni kaçırmak) var.",
        visualFormula: "Strong Warning"
      },
      {
        id: "q5",
        text: ["In my country, all men ", " do military service."],
        correct: "have to",
        hint: "Yasalardan gelen dışsal bir zorunluluk.",
        visualFormula: "External Obligation"
      },
      {
        id: "q6",
        text: ["I ", " remember to buy a gift for my mom's birthday."],
        correct: "must",
        hint: "Kişinin kendine koyduğu bir görev/zorunluluk.",
        visualFormula: "Internal Obligation"
      }
    ]
  }
};