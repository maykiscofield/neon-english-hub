// src/data/lessons/ability-permission.ts
import { Zap, UserCheck, History, AlertCircle, HelpCircle, MessageCircle, HandHelping } from 'lucide-react';

export const abilityPermissionData = {
  // Topics.tsx'teki ID ile tam eşleşme
  id: '5.1-ability-permission', 
  title: '5.1 YETENEK VE İZİN (CAN / COULD)',
  
  formulas: {
    positive: [ // Present Ability (Şimdiki Yetenek)
      { label: "Can", detail: "Yapabilirim (Şu an)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Verb 1", detail: "Fiil (Hiç ek almaz)", color: "border-white/10 text-white" }
    ],
    negative: [ // Past Ability (Geçmiş Yetenek)
      { label: "Could", detail: "Yapabilirdim (Eskiden)", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Verb 1", detail: "Fiil (Yine yalın!)", color: "border-white/10 text-white" }
    ],
    question: [ // Polite Request (Kibar Rica)
      { label: "Could you...?", detail: "Yapar mısınız? (Çok kibar)", color: "border-emerald-500/30 text-emerald-400" },
      { label: "Please", detail: "Nezaket ekler", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "can", color: "text-blue-400", underline: true },
        { text: "speak", color: "text-white" },
        { text: "three languages fluently.", color: "text-blue-400" }
      ],
      translation: "Üç dili akıcı bir şekilde konuşabiliyorum. (Şu anki yeteneğim.)"
    },
    negative: {
      parts: [
        { text: "When I was five, I", color: "text-white" },
        { text: "could", color: "text-purple-400", underline: true },
        { text: "swim", color: "text-white" },
        { text: "very well.", color: "text-purple-400" }
      ],
      translation: "Beş yaşındayken çok iyi yüzebiliyordum. (Geçmişteki yeteneğim.)"
    },
    question: {
      parts: [
        { text: "Could you", color: "text-emerald-400", underline: true },
        { text: "open", color: "text-white" },
        { text: "the window, please?", color: "text-yellow-400" }
      ],
      translation: "Pencereyi açabilir misiniz, lütfen? (Çok nazik bir rica.)"
    }
  },

  scenarios: [
    { title: "Şu Anki Gücümüz", icon: Zap, desc: "Fiziksel veya zihinsel olarak şu an yapabildiğimiz her şey (I can run fast).", color: "from-blue-500/20 to-transparent" },
    { title: "Eski Günler", icon: History, desc: "Çocukken veya eskiden sahip olduğunuz ama belki şu an olmayan yetenekler (I could jump high).", color: "from-purple-500/20 to-transparent" },
    { title: "Nezaket ve İzin", icon: HandHelping, desc: "Yabancılardan bir şey isterken veya izin alırken 'Could' kullanmak sizi profesyonel gösterir.", color: "from-emerald-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Asla 'to' Kullanma!",
      wrong: "I can to play guitar.",
      right: "I can play guitar.",
      note: "Can ve Could birer 'Modal'dır. Arkasından gelen fiil hiçbir ek almaz, 'to' ile bağlanmaz."
    },
    {
      title: "Can't vs Couldn't",
      wrong: "Yesterday I can't find my keys.",
      right: "Yesterday I couldn't find my keys.",
      note: "Eğer olay geçmişte (dün, geçen yıl vb.) geçiyorsa olumsuzluk takısı 'couldn't' olmalıdır."
    },
    {
      title: "Soru Sorma Nazikliği",
      wrong: "Can you help me? (Kaba değil ama samimi)",
      right: "Could you help me? (Çok daha kibar)",
      note: "Tanımadığınız birine veya resmi bir yerde soru sorarken 'Could' tercih edin."
    }
  ],

  challenge: {
    words: ["can", "could", "can't", "couldn't", "Could you", "Can I"],
    questions: [
      {
        id: "q1",
        text: ["I'm sorry, I ", " come to the meeting tomorrow. I'm busy."],
        correct: "can't",
        hint: "Gelecek/Şu an için olumsuz bir durum.",
        visualFormula: "Present Inability"
      },
      {
        id: "q2",
        text: ["When he was young, he ", " run 10 kilometers."],
        correct: "could",
        hint: "Gençliğindeki (geçmişteki) bir yeteneği.",
        visualFormula: "Past Ability"
      },
      {
        id: "q3",
        text: ["", " help me with these bags, please?"],
        correct: "Could you",
        hint: "Birisinden yardım isterken kullanılan en kibar kalıp.",
        visualFormula: "Polite Request"
      },
      {
        id: "q4",
        text: ["She is a genius. She ", " solve any math problem."],
        correct: "can",
        hint: "Dahi birinin şu anki yeteneği.",
        visualFormula: "General Ability"
      },
      {
        id: "q5",
        text: ["I searched everywhere, but I ", " find my phone last night."],
        correct: "couldn't",
        hint: "Dün gece (geçmişte) yapılamayan bir eylem.",
        visualFormula: "Past Inability"
      },
      {
        id: "q6",
        text: ["Excuse me, ", " use your phone for a second?"],
        correct: "Can I", // Veya Could I
        hint: "İzin isterken kullanılan temel kalıp.",
        visualFormula: "Permission Request"
      }
    ]
  }
};