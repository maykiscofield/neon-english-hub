// src/data/lessons/obligation-permission.ts
import { Zap, ShieldAlert, FileText, AlertCircle, HelpCircle, Ban, CheckCircle2 } from 'lucide-react';

export const obligationPermissionData = {
  // Topics.tsx'teki ID ile tam eşleşme
  id: '5.2-obligation-permission', 
  title: '5.2 ZORUNLULUK VE İZİN',
  
  formulas: {
    positive: [ // External Obligation (Yasa / Kural)
      { label: "Have to / Has to", detail: "Dışarıdan gelen zorunluluk", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Verb 1", detail: "Fiil yalın kalır", color: "border-white/10 text-white" }
    ],
    negative: [ // Prohibition (Yasak) vs No Necessity (Gerek Yok)
      { label: "Mustn't", detail: "YASAK! (Asla yapma)", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Don't have to", detail: "Gerek yok (İsteğe bağlı)", color: "border-emerald-500/30 text-emerald-400" }
    ],
    question: [ // Permission (İzin)
      { label: "Can / May", detail: "İzin istersen başa gelir", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "At work, I", color: "text-white" },
        { text: "have to", color: "text-blue-400", underline: true },
        { text: "wear", color: "text-white" },
        { text: "a uniform.", color: "text-blue-400" }
      ],
      translation: "İş yerinde üniforma giymek zorundayım. (Benim kararım değil, patronun kuralı.)"
    },
    negative: {
      parts: [
        { text: "You", color: "text-white" },
        { text: "mustn't", color: "text-red-400", underline: true },
        { text: "smoke", color: "text-white" },
        { text: "in the hospital.", color: "text-red-400" }
      ],
      translation: "Hastanede sigara içmemelisin / içmek yasaktır. (Kesin yasak!)"
    },
    question: {
      parts: [
        { text: "Tomorrow is Sunday, so I", color: "text-white" },
        { text: "don't have to", color: "text-emerald-400", underline: true },
        { text: "wake up early.", color: "text-white" }
      ],
      translation: "Yarın Pazar, bu yüzden erken kalkmama gerek yok. (İstersem kalkarım ama zorunlu değil.)"
    }
  },

  scenarios: [
    { title: "Resmi Kurallar", icon: FileText, desc: "Trafik kuralları, okul yönetmelikleri veya iş yeri prosedürleri (Have to).", color: "from-blue-500/20 to-transparent" },
    { title: "Kesin Yasaklar", icon: Ban, desc: "Tehlike arz eden veya kurallara aykırı eylemleri durdururken (Mustn't).", color: "from-red-500/20 to-transparent" },
    { title: "Kişisel Kararlar", icon: ShieldAlert, desc: "Kendinize koyduğunuz 'Bunu yapmalıyım' hedefleri (Must).", color: "from-purple-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Mustn't vs. Don't Have To (HAYATİ FARK!)",
      wrong: "You don't have to park here. (Yasak demek isterken)",
      right: "You mustn't park here!",
      note: "'Don't have to' derseniz, 'Park edebilirsin ama istersen etme' demiş olursunuz. Yasak bildirmek için sadece Mustn't kullanılır."
    },
    {
      title: "Has To Kullanımı",
      wrong: "He have to go now.",
      right: "He HAS to go now.",
      note: "He, She, It özneleri ile 'have' yerine 'has' kullanılır."
    },
    {
      title: "Soru Sorma",
      wrong: "Must I go? (Kullanılır ama eski dildir)",
      right: "Do I have to go? (Güncel ve yaygın)",
      note: "Soru sorarken 'Do/Does ... have to' kalıbı günlük konuşmada çok daha doğaldır."
    }
  ],

  challenge: {
    words: ["have to", "mustn't", "don't have to", "has to", "can", "must"],
    questions: [
      {
        id: "q1",
        text: ["You ", " touch that wire! It's very dangerous."],
        correct: "mustn't",
        hint: "Tehlike var, kesin bir yasak durumu.",
        visualFormula: "Danger / Prohibition"
      },
      {
        id: "q2",
        text: ["I ", " finish this report today. The boss wants it tomorrow."],
        correct: "have to",
        hint: "Dışarıdan (patrondan) gelen bir zorunluluk.",
        visualFormula: "External Obligation"
      },
      {
        id: "q3",
        text: ["The museum is free. We ", " buy a ticket."],
        correct: "don't have to",
        hint: "Zorunluluğun olmadığı, seçme şansının olduğu durum.",
        visualFormula: "Lack of Necessity"
      },
      {
        id: "q4",
        text: ["He is sick, so he ", " stay in bed."],
        correct: "has to",
        hint: "He öznesi ile kullanılan zorunluluk kipi.",
        visualFormula: "3rd Person + Has to"
      },
      {
        id: "q5",
        text: ["", " I use your computer for a minute?"],
        correct: "Can",
        hint: "İzin istemek için kullanılan en temel kelime.",
        visualFormula: "Asking Permission"
      },
      {
        id: "q6",
        text: ["It's a secret. You ", " tell anyone!"],
        correct: "mustn't",
        hint: "Sır olduğu için söylememen gerekiyor (yasak).",
        visualFormula: "Strong Negative"
      }
    ]
  }
};