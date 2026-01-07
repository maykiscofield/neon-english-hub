// src/data/lessons/present-perfect-for-since.ts
import { Zap, Timer, History, Calendar, AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

export const presentPerfectForSinceData = {
  // Topics.tsx'teki ID ile tam eşleşme
  id: '5.3-present-perfect-for-since', 
  title: '5.3 PRESENT PERFECT (FOR & SINCE)',
  
  formulas: {
    positive: [ // Ana Yapı (Have/Has + V3)
      { label: "have / has", detail: "I,We,They (Have) | He,She,It (Has)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Verb 3", detail: "Fiilin 3. Hali (Past Participle)", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" }
    ],
    negative: [ // For (Süreç Bildirir)
      { label: "FOR", detail: "Ne kadar süredir? (10 yıldır, 2 saattir)", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Duration", detail: "Zaman miktarı (sayı + birim)", color: "border-white/10 text-white" }
    ],
    question: [ // Since (Başlangıç Bildirir)
      { label: "SINCE", detail: "Ne zamandan beri? (2010'dan beri, dünden beri)", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "Point in Time", detail: "Eylemin başladığı o an", color: "border-white/10 text-white" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "have lived", color: "text-blue-400", underline: true },
        { text: "in this city", color: "text-white" },
        { text: "for", color: "text-emerald-400", underline: true },
        { text: "ten years.", color: "text-white" }
      ],
      translation: "On yıldır bu şehirde yaşıyorum. (Hala oradayım, süreç devam ediyor.)"
    },
    negative: {
      parts: [
        { text: "She", color: "text-white" },
        { text: "hasn't seen", color: "text-purple-400", underline: true },
        { text: "him", color: "text-white" },
        { text: "since", color: "text-yellow-400", underline: true },
        { text: "Monday.", color: "text-white" }
      ],
      translation: "Pazartesi'den beri onu görmedi. (En son Pazartesi gördü, o andan bugüne kadar görmedi.)"
    },
    question: {
      parts: [
        { text: "How long", color: "text-emerald-400", underline: true },
        { text: "have you", color: "text-blue-400" },
        { text: "had", color: "text-white" },
        { text: "this car?", color: "text-white" }
      ],
      translation: "Ne zamandır bu arabaya sahipsin?"
    }
  },

  scenarios: [
    { title: "Geçmişten Günümüze", icon: History, desc: "Geçmişte başlayan ve hala bitmemiş, ucu bugüne dokunan olaylar.", color: "from-blue-500/20 to-transparent" },
    { title: "Zaman Ölçümü", icon: Timer, desc: "Bir durumun üzerinden ne kadar zaman geçtiğini vurgulamak istediğimizde.", color: "from-emerald-500/20 to-transparent" },
    { title: "Hayat Tecrübeleri", icon: Calendar, desc: "Belirli bir tarihten bugüne kadar yaptıklarımızı veya yapmadıklarımızı anlatırken.", color: "from-purple-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "For vs. Since (ALTIN AYRIM)",
      wrong: "I have lived here since 5 years.",
      right: "I have lived here FOR 5 years.",
      note: "Eğer bir 'süre' (gün, ay, yıl sayısı) veriyorsan FOR; eylemin 'başladığı anı' (Pazartesi, 1995, sabah) veriyorsan SINCE kullan."
    },
    {
      title: "V3 Formunu Unutma!",
      wrong: "I have see that movie.",
      right: "I have SEEN that movie.",
      note: "Bu zamanda fiiller her zaman 3. halindedir. Düzenliler -ed alır, düzensizleri (see-seen gibi) ezberlemek gerekir."
    },
    {
      title: "Has To vs. Has + V3",
      wrong: "He have played football.",
      right: "He HAS played football.",
      note: "He, She, It özneleriyle her zaman HAS kullanılır. Karıştırmamak için 'S' takısı kuralını hatırla."
    }
  ],

  challenge: {
    words: ["for", "since", "have known", "has been", "haven't finished", "How long"],
    questions: [
      {
        id: "q1",
        text: ["I ", " my best friend for 15 years."],
        correct: "have known",
        hint: "Know fiilinin 3. hali ile uzun süreli bir arkadaşlık.",
        visualFormula: "Have + V3"
      },
      {
        id: "q2",
        text: ["It hasn't rained ", " last month."],
        correct: "since",
        hint: "Geçen ay bir başlangıç noktasıdır, süreç değil.",
        visualFormula: "Starting Point"
      },
      {
        id: "q3",
        text: ["We have been here ", " two hours."],
        correct: "for",
        hint: "İki saatlik bir zaman dilimi (miktar) belirtiliyor.",
        visualFormula: "Duration"
      },
      {
        id: "q4",
        text: ["", " have you been a teacher?"],
        correct: "How long",
        hint: "Süreyi sormak için kullanılan ana soru kalıbı.",
        visualFormula: "Duration Question"
      },
      {
        id: "q5",
        text: ["She ", " ill since yesterday."],
        correct: "has been",
        hint: "She öznesi ile durum bildiren (be) fiili.",
        visualFormula: "Has + Been"
      },
      {
        id: "q6",
        text: ["I ", " my homework yet."],
        correct: "haven't finished",
        hint: "Henüz (yet) bitirilmemiş bir eylem.",
        visualFormula: "Negative Perfect"
      }
    ]
  }
};