// src/data/lessons/indefinite-pronouns.ts
import { Zap, Users, Box, MapPin, AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

export const indefinitePronounsData = {
  // Topics.tsx'teki ID ile tam eşleşme
  id: '1.3-indefinite-pronouns', 
  title: '1.3 BELGİSİZ ZAMİRLER (INDEFINITE PRONOUNS)',
  
  formulas: {
    positive: [ // Some- Grubu (Olumlu Cümleler)
      { label: "Some-", detail: "Birileri / Bir şeyler", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "+ body/one / thing / where", detail: "Kişi / Eşya / Yer", color: "border-purple-500/30 text-purple-400" }
    ],
    negative: [ // Any- ve No- Grubu (Olumsuzlar)
      { label: "Any-", detail: "Hiçbiri (Not ile kullanılır)", color: "border-emerald-500/30 text-emerald-400" },
      { label: "No-", detail: "Hiçbiri (Fiil olumlu olmalı!)", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" }
    ],
    question: [ // Every- Grubu (Herkes/Her şey)
      { label: "Every-", detail: "Herkes / Her yer", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "Singular Verb", detail: "Daima TEKİL fiil (is/has)", color: "border-white/10 text-white" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "Someone", color: "text-blue-400", underline: true },
        { text: "is", color: "text-white" },
        { text: "knocking", color: "text-white" },
        { text: "on the door.", color: "text-white" }
      ],
      translation: "Birisi kapıyı çalıyor. (Kimin çaldığını tam bilmiyoruz ama 'birisi' var.)"
    },
    negative: {
      parts: [
        { text: "I have", color: "text-white" },
        { text: "nothing", color: "text-red-400", underline: true },
        { text: "to wear", color: "text-white" },
        { text: "for the party.", color: "text-white" }
      ],
      translation: "Parti için giyecek hiçbir şeyim yok. (Cümle yapısı olumlu ama anlam olumsuz.)"
    },
    question: {
      parts: [
        { text: "Is", color: "text-white" },
        { text: "anywhere", color: "text-emerald-400", underline: true },
        { text: "open", color: "text-white" },
        { text: "at this hour?", color: "text-white" }
      ],
      translation: "Bu saatte açık herhangi bir yer var mı?"
    }
  },

  scenarios: [
    { title: "Kişiler", icon: Users, desc: "Biri (Someone), Hiç kimse (No one), Herkes (Everyone).", color: "from-blue-500/20 to-transparent" },
    { title: "Eşyalar", icon: Box, desc: "Bir şey (Something), Hiçbir şey (Anything), Her şey (Everything).", color: "from-purple-500/20 to-transparent" },
    { title: "Mekanlar", icon: MapPin, desc: "Bir yer (Somewhere), Hiçbir yer (Anywhere), Her yer (Everywhere).", color: "from-emerald-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Tekil Olma Kuralı (HAYAT KURTARAN)",
      wrong: "Everybody ARE happy.",
      right: "Everybody IS happy.",
      note: "Türkçede 'Herkes mutlular' demeyiz, İngilizcede de 'Everybody' kelimesini 'He/She/It' gibi düşünmelisin. Her zaman TEKİL fiil alır."
    },
    {
      title: "Double Negative (Çifte Olumsuzluk) Yasak!",
      wrong: "I don't have nothing.",
      right: "I have nothing. / I don't have anything.",
      note: "İçinde 'No' olan kelimeler (Nobody, Nothing vb.) zaten olumsuzdur. Yanına bir de 'don't/not' getirirsen anlam bozulur."
    },
    {
      title: "Any- vs. Some- Karşılaştırması",
      wrong: "Do you need something? (Genel soru)",
      right: "Do you need anything?",
      note: "Normal sorularda 'Any-' kullanılır. 'Some-' sadece bir şey ikram ederken (Would you like some...?) kullanılır."
    }
  ],

  challenge: {
    words: ["Something", "Anything", "Nobody", "Everywhere", "Someone", "Somewhere"],
    questions: [
      {
        id: "q1",
        text: ["I'm bored. There is ", " to do here."],
        correct: "nothing",
        hint: "Sıkıldıysan yapılacak bir şey yoktur. Cümle olumlu ama anlam olumsuz olmalı.",
        visualFormula: "Meaning: Negation"
      },
      {
        id: "q2",
        text: ["Is ", " home? Hello?"],
        correct: "anybody",
        hint: "Soru cümlelerinde 'hiç kimse/herhangi biri' anlamında kullanılır.",
        visualFormula: "Question Form"
      },
      {
        id: "q3",
        text: ["", " smells delicious! What are you cooking?"],
        correct: "Something",
        hint: "Güzel bir koku geliyorsa 'bir şeyler' pişiyordur.",
        visualFormula: "Positive Context"
      },
      {
        id: "q4",
        text: ["I've looked ", " for my keys but I can't find them."],
        correct: "everywhere",
        hint: "Aradığın şeyi bulamıyorsan 'her yere' bakmışsındır.",
        visualFormula: "Complete Coverage"
      },
      {
        id: "q5",
        text: ["Don't tell ", " our secret."],
        correct: "anybody",
        hint: "Olumsuz bir emir (Don't) cümlesinde 'hiç kimse'.",
        visualFormula: "Negative + Any-"
      },
      {
        id: "q6",
        text: ["", " in the class passed the exam. The teacher is very happy."],
        correct: "Everyone",
        hint: "Öğretmen mutluysa 'herkes' geçmiş olmalı.",
        visualFormula: "Group Subject"
      }
    ]
  }
};