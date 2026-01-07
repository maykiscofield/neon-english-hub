// src/data/lessons/present-perfect-advanced.ts
import { Zap, Clock, ListTodo, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const presentPerfectAdvancedData = {
  // DİKKAT: Hatanın gitmesi için bu ID image_127e21.png'deki ile aynı yapıldı
  id: '6.3-pres-perf-particles', 
  title: '6.3 PRESENT PERFECT (JUST, ALREADY, YET)',
  
  formulas: {
    positive: [ 
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "have / has", detail: "Yard. Fiil", color: "border-purple-500/30 text-purple-400" },
      { label: "just / already", detail: "Zaman Zarfı", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_234,179,8,0.1)]" },
      { label: "Verb (V3)", detail: "Fiil (3. Hal)", color: "border-pink-500/30 text-pink-400" }
    ],
    negative: [ 
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "haven't / hasn't", detail: "Olumsuz Yardımcı", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Verb (V3)", detail: "Fiil (3. Hal)", color: "border-pink-500/30 text-pink-400" },
      { label: "YET", detail: "Henüz (Son Pozisyon)", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    question: [ 
      { label: "Have / Has", detail: "Giriş", color: "border-purple-500/30 text-purple-400" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "Verb (V3)", detail: "Fiil", color: "border-pink-500/30 text-pink-400" },
      { label: "YET?", detail: "Henüz (Soru)", color: "border-emerald-500/30 text-emerald-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-blue-400", underline: true },
        { text: "have already", color: "text-yellow-400" },
        { text: "seen", color: "text-pink-400" },
        { text: "that film.", color: "text-emerald-400" }
      ],
      translation: "O filmi çoktan izledim. (Beklenenden önce tamamlandı.)"
    },
    negative: {
      parts: [
        { text: "She", color: "text-blue-400", underline: true },
        { text: "hasn't", color: "text-red-400" },
        { text: "called", color: "text-pink-400" },
        { text: "me", color: "text-white" },
        { text: "yet.", color: "text-emerald-400" }
      ],
      translation: "Henüz beni aramadı. (Hala aramasını bekliyorum.)"
    },
    question: {
      parts: [
        { text: "Have", color: "text-purple-400", underline: true },
        { text: "you", color: "text-blue-400" },
        { text: "just", color: "text-yellow-400" },
        { text: "arrived?", color: "text-pink-400" }
      ],
      translation: "Az önce mi vardın?"
    }
  },

  scenarios: [
    { title: "Yeni Bitenler (Just)", icon: Sparkles, desc: "Saniyeler önce bitmiş, etkisi taze olaylar.", color: "from-blue-500/20 to-transparent" },
    { title: "Beklenti (Yet)", icon: Clock, desc: "Hala gerçekleşmemiş ama olması beklenen olaylar.", color: "from-emerald-500/20 to-transparent" },
    { title: "Erken Başarı (Already)", icon: CheckCircle2, desc: "Planlanandan daha hızlı biten eylemler.", color: "from-yellow-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Yet ve Already Çelişkisi",
      wrong: "I have finished my homework yet.",
      right: "I have already finished my homework.",
      note: "'Yet' sadece olumsuz ve sorularda; 'Already' ise olumlu cümlelerde kullanılır."
    },
    {
      title: "Sandviç Kuralı",
      wrong: "I just have finished my work.",
      right: "I have just finished my work.",
      note: "Just ve Already, yardımcı fiil ile ana fiilin arasına girmelidir."
    }
  ],

  challenge: {
    words: ["just", "already", "yet", "have", "haven't", "has"],
    questions: [
      {
        id: "q1",
        text: ["I ", " eaten. I'm full now."],
        correct: "have just",
        hint: "Eylemin yeni bittiğini (şu an tokum) vurguluyor.",
        visualFormula: "have + JUST + V3"
      },
      {
        id: "q2",
        text: ["Is it 10 PM already? I ", " started my homework yet!"],
        correct: "haven't",
        hint: "Cümlenin sonunda 'yet' varsa yapı olumsuz olmalıdır.",
        visualFormula: "Negative + V3 + YET"
      },
      {
        id: "q3",
        text: ["She's only 20, but she has ", " written two books."],
        correct: "already",
        hint: "Beklenenden çok daha erken bir başarı.",
        visualFormula: "has + ALREADY + V3"
      },
      {
        id: "q4",
        text: ["Have you finished the report ", "?"],
        correct: "yet",
        hint: "Soru cümlesinin sonunda beklenti soruluyor.",
        visualFormula: "Sentence Ending (Question)"
      },
      {
        id: "q5",
        text: ["Look! The rain has ", " stopped. Let's go out."],
        correct: "just",
        hint: "Eylemin saniyeler önce bittiği durum.",
        visualFormula: "has + JUST + V3"
      },
      {
        id: "q6",
        text: ["Don't worry, I've ", " paid the bills."],
        correct: "already",
        hint: "Çoktan halledilmiş bir iş.",
        visualFormula: "have + ALREADY + V3"
      }
    ]
  }
};