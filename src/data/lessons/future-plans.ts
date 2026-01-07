// src/data/lessons/future-plans.ts
import { Zap, Calendar, Target, AlertCircle, HelpCircle, ClipboardCheck, PhoneCall } from 'lucide-react';

export const futurePlansData = {
  id: '4.1-future-plans', 
  title: '4.1 GELECEK ZAMAN PLANLARI (FUTURE PLANS)',
  
  formulas: {
    positive: [ // Be Going To (Niyet / Kafadaki Plan)
      { label: "am / is / are", detail: "Yardımcı Fiil", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "going to", detail: "Ecek / Acak (Niyet)", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Verb 1", detail: "Ana Fiil (Yalın)", color: "border-white/10 text-white" }
    ],
    negative: [ // Present Continuous (Kesinleşmiş Randevu)
      { label: "am / is / are", detail: "Yardımcı Fiil", color: "border-blue-500/30 text-blue-400" },
      { label: "V-ing", detail: "Şimdiki Zaman yapısı", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Future Time", detail: "Zaman zarfı şart!", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [ // Farkı Anla
      { label: "Intention", detail: "Going to (Karar verdim)", color: "border-yellow-500/30 text-yellow-400" },
      { label: "Arrangement", detail: "Continuous (Bilet aldım/Randevulaştım)", color: "border-emerald-500/30 text-emerald-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "am going to", color: "text-purple-400", underline: true },
        { text: "buy", color: "text-white" },
        { text: "a new laptop next month.", color: "text-blue-400" }
      ],
      translation: "Gelecek ay yeni bir laptop alacağım. (Kafamdaki niyet, henüz para biriktiriyor olabilirim.)"
    },
    negative: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "am meeting", color: "text-emerald-400", underline: true },
        { text: "the doctor", color: "text-white" },
        { text: "at 2 PM tomorrow.", color: "text-pink-400", underline: true }
      ],
      translation: "Yarın saat 2'de doktorla buluşuyorum. (Kesin randevu, ajandada yazılı.)"
    },
    question: {
      parts: [
        { text: "Are you", color: "text-white" },
        { text: "going to", color: "text-purple-400" },
        { text: "stay", color: "text-white" },
        { text: "at home tonight?", color: "text-white" }
      ],
      translation: "Bu gece evde mi kalacaksın? (Kafandaki planı soruyorum.)"
    }
  },

  scenarios: [
    { title: "Kafadaki Niyetler", icon: Target, desc: "Henüz harekete geçmediğiniz ama yapmaya karar verdiğiniz planlar (Going to).", color: "from-purple-500/20 to-transparent" },
    { title: "Kesin Randevular", icon: Calendar, desc: "Başkasıyla sözleştiğiniz, bilet aldığınız kesin olaylar (Present Continuous).", color: "from-emerald-500/20 to-transparent" },
    { title: "Görünür Kanıtlar", icon: ClipboardCheck, desc: "Gördüğünüz bir kanıta dayanarak tahmin yürütürken (Look at those clouds! It's going to rain).", color: "from-blue-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Will vs Going To Tuzağı",
      wrong: "I will visit my aunt tomorrow. (Planlıysa)",
      right: "I am going to visit my aunt tomorrow.",
      note: "'Will' o an verilen ani kararlar içindir. Önceden planlanan her şey için 'Going to' kullanılır."
    },
    {
      title: "Zaman Zarfı Unutma!",
      wrong: "I'm flying to Paris.",
      right: "I'm flying to Paris NEXT WEEK.",
      note: "Şimdiki zaman yapısını gelecek için kullanırken mutlaka 'yarın, haftaya' gibi bir zaman belirtmelisiniz; yoksa şu an uçtuğunuz sanılır."
    },
    {
      title: "Gonna Kısaltması",
      wrong: "I am gonna to go. (Yanlış kullanım)",
      right: "I'm gonna go.",
      note: "Konuşma dilinde 'Going to' yerine 'Gonna' diyebilirsin ama sonrasına 'to' koyma."
    }
  ],

  challenge: {
    words: ["am going to", "am meeting", "is going to rain", "are you doing", "gonna", "will"],
    questions: [
      {
        id: "q1",
        text: ["I've decided. I ", " start a diet on Monday."],
        correct: "am going to",
        hint: "Kişisel bir karar ve niyet.",
        visualFormula: "Subject + am/is/are + going to"
      },
      {
        id: "q2",
        text: ["I can't come. I ", " my dentist at 4 o'clock."],
        correct: "am meeting",
        hint: "Saat verilmiş bir randevu.",
        visualFormula: "Present Continuous for Arrangement"
      },
      {
        id: "q3",
        text: ["Look at the black clouds! It ", "."],
        correct: "is going to rain",
        hint: "Görünür bir kanıt var.",
        visualFormula: "Prediction with Evidence"
      },
      {
        id: "q4",
        text: ["What ", " tonight? Do you have a plan?"],
        correct: "are you doing",
        hint: "Birinin kesin planını sormak.",
        visualFormula: "Present Cont. Question"
      },
      {
        id: "q5",
        text: ["Next year, we ", " travel around Europe."],
        correct: "are going to",
        hint: "Gelecek yılı hedefleyen bir niyet.",
        visualFormula: "Future Intention"
      },
      {
        id: "q6",
        text: ["Wait! I'm ", " tell you a secret."],
        correct: "gonna",
        hint: "Konuşma dilinde hızlı niyet belirtme.",
        visualFormula: "Going to = Gonna"
      }
    ]
  }
};