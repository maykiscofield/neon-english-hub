// src/data/lessons/reporting-passive.ts
import { Zap, Megaphone, FileText, AlertCircle, Search, MessageSquare } from 'lucide-react';

export const reportingPassiveData = {
  id: 'b1-8.2-reporting-passive', 
  title: '8.2 PASSIVE WITH REPORTING VERBS',
  
  formulas: {
    positive: [ // Personal Construction (He is said to...)
      { label: "Subject", detail: "Hakkında konuşulan", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "is / are + V3", detail: "said, thought, known", color: "border-purple-500/30 text-purple-400" },
      { label: "to + V1", detail: "Eylem", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [ // Impersonal Construction (It is said that...)
      { label: "It is + V3", detail: "It is believed", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "that", detail: "Bağlaç", color: "border-yellow-500/30 text-yellow-400" },
      { label: "Full Clause", detail: "Tam Cümle", color: "border-white/10 text-white" }
    ],
    question: [ // Past Reporting (To have V3)
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "is thought", detail: "Sanılıyor", color: "border-purple-500/30 text-purple-400" },
      { label: "to have + V3", detail: "Geçmiş Eylem", color: "border-red-500/30 text-red-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "The hacker", color: "text-blue-400", underline: true },
        { text: "is believed", color: "text-purple-400" },
        { text: "to be", color: "text-pink-400" },
        { text: "in Europe.", color: "text-white" }
      ],
      translation: "Hacker'ın Avrupa'da olduğuna inanılıyor. (Kişisel yapı: Özne başa geldi.)"
    },
    negative: {
      parts: [
        { text: "It is said", color: "text-emerald-400", underline: true },
        { text: "that", color: "text-yellow-400" },
        { text: "AI", color: "text-blue-400" },
        { text: "will replace", color: "text-white" },
        { text: "some jobs.", color: "text-pink-400" }
      ],
      translation: "Yapay zekanın bazı işlerin yerini alacağı söyleniyor. (Genel yapı: It is said that...)"
    },
    question: {
      parts: [
        { text: "The server", color: "text-blue-400", underline: true },
        { text: "is thought", color: "text-purple-400" },
        { text: "to have crashed", color: "text-red-400" },
        { text: "due to heat.", color: "text-white" }
      ],
      translation: "Sunucunun sıcaklık nedeniyle çöktüğü düşünülüyor. (Geçmişe yönelik raporlama.)"
    }
  },

  scenarios: [
    { title: "Söylentiler", icon: Megaphone, desc: "Kesin olmayan, genel kanıya dayalı durumları aktarmak için kullanılır.", color: "from-blue-500/20 to-transparent" },
    { title: "Resmi Raporlar", icon: FileText, desc: "Akademik ve teknik metinlerde nesnellik sağlamak için idealdir.", color: "from-purple-500/20 to-transparent" },
    { title: "Gizli Özne", icon: Search, desc: "İddianın sahibini belirtmeden bilgi paylaşmanıza olanak tanır.", color: "from-pink-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Geçmiş Zaman Ayrımı",
      wrong: "He is said to escape last night.",
      right: "He is said to have escaped last night.",
      note: "Eğer raporlanan eylem geçmişte olduysa 'to have + V3' yapısı şarttır."
    },
    {
      title: "'That' Bağlacını Unutma",
      wrong: "It is thought he is rich.",
      right: "It is thought that he is rich.",
      note: "Impersonal (It is...) yapıda 'that' bağlacı köprü görevi görür."
    }
  ],

  challenge: {
    words: ["is said to be", "it is believed", "to have stolen", "are reported to", "is thought", "that"],
    questions: [
      {
        id: "q1",
        text: ["", " that the company is going bankrupt."],
        correct: "it is believed",
        hint: "Cümlenin başında 'that' varsa bu kalıbı kullan.",
        visualFormula: "IT IS + V3 + THAT"
      },
      {
        id: "q2",
        text: ["The CEO ", " very wealthy."],
        correct: "is said to be",
        hint: "Kişisel yapı; CEO hakkında genel bir duyum.",
        visualFormula: "Subject + IS SAID TO + V1"
      },
      {
        id: "q3",
        text: ["The suspect is thought ", " the diamonds yesterday."],
        correct: "to have stolen",
        hint: "Eylem geçmişte (yesterday) bittiği için geçmiş pasif mastarı kullan.",
        visualFormula: "TO HAVE + V3"
      },
      {
        id: "q4",
        text: ["It is reported ", " the new law will change next year."],
        correct: "that",
        hint: "Raporlama fiilinden sonra gelen bağlaç.",
        visualFormula: "It is reported + THAT"
      },
      {
        id: "q5",
        text: ["Hundreds of people ", " have lost their homes."],
        correct: "are reported to",
        hint: "Çoğul özne (people) ile başlayan raporlama cümlesi.",
        visualFormula: "ARE + V3 + TO HAVE V3"
      },
      {
        id: "q6",
        text: ["The new software ", " to be much faster than the old one."],
        correct: "is thought",
        hint: "Yazılım hakkında şu anki genel düşünce.",
        visualFormula: "Present Reporting"
      }
    ]
  }
};