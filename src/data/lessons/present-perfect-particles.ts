// src/data/lessons/present-perfect-particles.ts
import { Zap, Clock, FastForward, Timer, AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

export const presentPerfectParticlesData = {
  // Topics.tsx'teki ID ile tam eşleşme
  id: '6.3-present-perfect-particles', 
  title: '6.3 PRESENT PERFECT (JUST, ALREADY, YET)',
  
  formulas: {
    positive: [ // Just & Already (Olumlu Cümleler)
      { label: "have / has", detail: "Yardımcı Fiil", color: "border-blue-500/30 text-blue-400" },
      { label: "JUST / ALREADY", detail: "Have ve Fiil arasına girer!", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Verb 3", detail: "Fiilin 3. hali", color: "border-white/10 text-white" }
    ],
    negative: [ // Yet (Olumsuz ve Soru)
      { label: "haven't / hasn't", detail: "Olumsuz Yardımcı Fiil", color: "border-red-500/30 text-red-400" },
      { label: "Verb 3", detail: "Fiilin 3. hali", color: "border-white/10 text-white" },
      { label: "YET", detail: "Daima cümlenin EN SONUNA!", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" }
    ],
    question: [ // Yet (Soru)
      { label: "Have / Has", detail: "Başa gelir", color: "border-blue-500/30 text-blue-400" },
      { label: "... Verb 3 ...", detail: "Cümle devam eder", color: "border-white/10 text-white" },
      { label: "YET?", detail: "Hala mı? / Henüz mü?", color: "border-emerald-500/30 text-emerald-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I have", color: "text-white" },
        { text: "just", color: "text-purple-400", underline: true },
        { text: "finished", color: "text-white" },
        { text: "my homework.", color: "text-white" }
      ],
      translation: "Ödevimi az önce bitirdim. (Henüz oldu, dumanı üstünde!)"
    },
    negative: {
      parts: [
        { text: "She has", color: "text-white" },
        { text: "already", color: "text-purple-400", underline: true },
        { text: "seen", color: "text-white" },
        { text: "this movie.", color: "text-white" }
      ],
      translation: "O bu filmi çoktan izledi. (Beklenenden önce gerçekleşmiş.)"
    },
    question: {
      parts: [
        { text: "I haven't", color: "text-white" },
        { text: "eaten", color: "text-white" },
        { text: "lunch", color: "text-white" },
        { text: "yet.", color: "text-emerald-400", underline: true }
      ],
      translation: "Henüz öğle yemeği yemedim. (Şu ana kadar yapmadım ama yapacağım.)"
    }
  },

  scenarios: [
    { title: "Az Önce", icon: Clock, desc: "Eylemin saniyeler veya dakikalar önce gerçekleştiğini belirtmek için 'Just'.", color: "from-blue-500/20 to-transparent" },
    { title: "Hızlıca / Çoktan", icon: FastForward, desc: "Bir işin planlanandan önce bittiğini vurgulamak için 'Already'.", color: "from-purple-500/20 to-transparent" },
    { title: "Beklenti", icon: Timer, desc: "Bir işin şu ana kadar bitmediğini ama bitmesini beklediğimizi anlatmak için 'Yet'.", color: "from-emerald-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Yet'in Yeri Sabittir!",
      wrong: "I haven't yet seen him.",
      right: "I haven't seen him YET.",
      note: "Yet her zaman cümlenin en sonuna gider. Onu bir vagon gibi düşünün, lokomotifin en arkasında durur."
    },
    {
      title: "Just ve Already'nin Sandviç Kuralı",
      wrong: "Already I have eaten. / I have eaten just.",
      right: "I have ALREADY/JUST eaten.",
      note: "Bu iki kelime, yardımcı fiil (have/has) ile ana fiilin arasına girer. Onları 'sandviç iç harcı' gibi düşün."
    },
    {
      title: "Olumlu Cümlede Yet Kullanılmaz!",
      wrong: "I have eaten yet.",
      right: "I have already eaten. / I have just eaten.",
      note: "Yet sadece olumsuz (haven't) ve soru cümlelerini sever."
    }
  ],

  challenge: {
    words: ["just", "already", "yet", "have just", "has already", "haven't yet"],
    questions: [
      {
        id: "q1",
        text: ["Wait for me! I haven't finished ", "."],
        correct: "yet",
        hint: "Cümle sonu ve olumsuz bir yapı.",
        visualFormula: "Negative + End of Sentence"
      },
      {
        id: "q2",
        text: ["Would you like some coffee? No thanks, I ", " had one."],
        correct: "have just",
        hint: "Az önce içtiğini ve tok olduğunu belirtiyor.",
        visualFormula: "Sandwich Position + Recent action"
      },
      {
        id: "q3",
        text: ["Is the bus here ", "?"],
        correct: "yet",
        hint: "Soru cümlesi, otobüsün gelip gelmediğini merak ediyoruz.",
        visualFormula: "Question + End of Sentence"
      },
      {
        id: "q4",
        text: ["Don't tell him the news! I've ", " told him."],
        correct: "already",
        hint: "Onun zaten bildiğini, çoktan söylediğini anlatıyor.",
        visualFormula: "Earlier than expected"
      },
      {
        id: "q5",
        text: ["The train ", " left. You missed it by a minute!"],
        correct: "has just",
        hint: "Trenin 1 dakika önce gittiği durum (tekil özne).",
        visualFormula: "3rd Person + Just"
      }
    ]
  }
};