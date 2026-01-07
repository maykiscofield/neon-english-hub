import { Zap, Activity, Heart, Anchor, AlertCircle, HelpCircle, GraduationCap } from 'lucide-react';

export const gerundFormsData = {
  // ID, Topics.tsx ve index.ts ile tam eşleşmesi için güncellendi
  id: '6.2-ing-forms-gerund', 
  title: '6.2 -ING FORMLARI (GERUND)',
  
  formulas: {
    positive: [ // Özne Olarak (Subject)
      { label: "Verb + ING", detail: "Eylemin adı (Örn: Swimming)", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "is / was", detail: "Tekil yardımcı fiil", color: "border-white/10 text-white" },
      { label: "Adjective", detail: "Nasıl olduğunu açıklar", color: "border-purple-500/30 text-purple-400" }
    ],
    negative: [ // Fiilden Sonra (After Certain Verbs)
      { label: "Verb", detail: "Enjoy, Like, Finish...", color: "border-emerald-500/30 text-emerald-400" },
      { label: "Verb + ING", detail: "O işi yapmayı...", color: "border-blue-500/30 text-blue-400" }
    ],
    question: [ // Edatlardan Sonra (After Prepositions)
      { label: "Preposition", detail: "At, In, On, After, Before", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "Verb + ING", detail: "Daima -ING gelir!", color: "border-pink-500/30 text-pink-400" }
    ]
  },

  examples: {
    positive: {
      parts: [
        { text: "Swimming", color: "text-blue-400", underline: true },
        { text: "is", color: "text-white" },
        // HATA DÜZELTİLDİ: Formül rengiyle (purple) eşleşmesi için text-purple-400 yapıldı
        { text: "the best exercise for your body.", color: "text-purple-400" } 
      ],
      translation: "Yüzmek vücudun için en iyi egzersizdir. (Eylemin kendisi artık bir isim, yani özne oldu.)"
    },
    negative: {
      parts: [
        { text: "I", color: "text-white" },
        { text: "enjoy", color: "text-emerald-400" },
        { text: "coding", color: "text-blue-400", underline: true },
        { text: "late at night.", color: "text-white" }
      ],
      translation: "Gece geç saatlerde kod yazmaktan keyif alırım. (Enjoy fiili kendisinden sonra eylemi isimleştirir.)"
    },
    question: {
      parts: [
        { text: "She is good", color: "text-white" },
        { text: "at", color: "text-yellow-400", underline: true },
        { text: "learning", color: "text-pink-400", underline: true },
        { text: "new languages.", color: "text-white" }
      ],
      translation: "O, yeni diller öğrenmekte iyidir. (Edattan sonra gelen fiil kural gereği -ing alır.)"
    }
  },

  scenarios: [
    { title: "Hobi ve Beğeniler", icon: Heart, desc: "Bir şeyi yapmayı sevmek veya sevmemek (Love, Hate, Like, Mind).", color: "from-pink-500/20 to-transparent" },
    { title: "Eylem İsimleri", icon: Activity, desc: "Bir eylemin bizzat kendisinden bir nesne gibi bahsederken.", color: "from-blue-500/20 to-transparent" },
    { title: "Zaman Sıralaması", icon: Anchor, desc: "Before/After kullanarak bir işten önce veya sonra yapılanları anlatırken.", color: "from-emerald-500/20 to-transparent" }
  ],

  warnings: [
    {
      title: "Şimdiki Zamanla Karıştırma!",
      wrong: "I am reading. (Gerund değil, şimdiki zaman)",
      right: "Reading is fun. (Gerund - Özne)",
      note: "Eğer -ing takısı am/is/are ile geliyorsa 'yapıyorum' demektir. Eğer yalnızsa eylemin 'adı' demektir."
    },
    {
      title: "Edat Mıknatısı",
      wrong: "I'm interested in to learn history.",
      right: "I'm interested in LEARNING history.",
      note: "İngilizcede edatlardan (in, on, at, of, for...) sonra asla 'to' gelmez, her zaman -ing gelir."
    },
    {
      title: "Görünmez Özne",
      wrong: "Smoke here is forbidden.",
      right: "SMOKING here is forbidden.",
      note: "Cümleye fiille başlayamazsın. Eğer eylem cümlenin öznesiyse mutlaka -ing takısıyla başlamalıdır."
    }
  ],

  challenge: {
    words: ["Running", "listening", "to see", "working", "buying", "Before starting"],
    questions: [
      {
        id: "q1",
        text: ["", " is my favorite way to lose weight."],
        correct: "Running",
        hint: "Cümle başında özne olarak eylem ismi.",
        visualFormula: "Subject position"
      },
      {
        id: "q2",
        text: ["I'm tired of ", " in this office."],
        correct: "working",
        hint: "'Of' bir edattır, edattan sonra fiil nasıl gelir?",
        visualFormula: "Preposition + -ING"
      },
      {
        id: "q3",
        text: ["Do you like ", " to music while coding?"],
        correct: "listening",
        hint: "Like fiilinden sonra gelen eylem.",
        visualFormula: "Verb + -ING"
      },
      {
        id: "q4",
        text: ["", " the project, we should check the requirements."],
        correct: "Before starting",
        hint: "Zaman bildiren edat ile başlangıç.",
        visualFormula: "Prepositional Phrase"
      },
      {
        id: "q5",
        text: ["He suggested ", " a new computer."],
        correct: "buying",
        hint: "Suggest fiili her zaman -ing ile kullanılır.",
        visualFormula: "Specific Verb Rule"
      }
    ]
  }
};