// İkon isimlerini eşleştirmek için yardımcı bir obje (Topics.tsx içinde kullanılacak)
export const lessonsData: Record<string, any> = {
  "1.1-question-forms": {
    title: "QUESTION FORMS (ASQ)",
    formulas: {
      "Olumlu": [
        { label: "Subject", value: "You / She", color: "blue" },
        { label: "Verb", value: "Speak / Works", color: "purple" }
      ],
      "Olumsuz": [
        { label: "Subject", value: "I / You / He", color: "blue" },
        { label: "Auxiliary", value: "Don't / Doesn't", color: "red" },
        { label: "Verb 1", value: "Work / Speak", color: "purple" }
      ],
      "Soru": [
        { label: "Auxiliary (A)", value: "Do / Does", color: "blue" },
        { label: "Subject (S)", value: "You / She", color: "purple" },
        { label: "Verb (Q)", value: "Study / Live", color: "pink" }
      ]
    },
    analysis: {
      sentence: "Does she work here?",
      parts: [
        { word: "Does", color: "blue" },
        { word: "she", color: "white" },
        { word: "work", color: "pink" },
        { word: "here?", color: "white" }
      ],
      translation: "O burada mı çalışıyor?"
    },
    scenarios: [
      { icon: "Info", title: "Genel Bilgi", desc: "Alışkanlıkları öğrenmek için kullanılır." },
      { icon: "Repeat", title: "Rutinler", desc: "Sık yapılan eylemler hakkında soru sormak içindir." },
      { icon: "Zap", title: "Beğeniler", desc: "Tercihleri sorgulamak için kullanılır." }
    ],
    traps: [
      { title: "THE DOES TRAP", wrong: "Does she works here?", right: "Does she work here?", note: "Does gelince -s takısı düşer." },
      { title: "DO MU ARE MI?", wrong: "Are you speak English?", right: "Do you speak English?", note: "Eylem varsa Do/Does kullanılır." }
    ],
    practice: {
      wordBank: ["Do", "Does", "play", "work"],
      questions: ["1. ____ you ____ basketball?", "2. ____ he ____ in a bank?"]
    }
  },
  "b1-2.1-perf-vs-past": {
     title: "PRESENT PERFECT VS PAST SIMPLE",
     // Buraya önceki mesajdaki 2.1 verilerini aynı formatta ekleyebilirsin...
  }
};