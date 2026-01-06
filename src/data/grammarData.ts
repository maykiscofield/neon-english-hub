export const grammarData = {
  "present-simple-vs-continuous": {
    title: "Present Simple vs Continuous",
    formula: "S + V1 (s/es) + O",
    usage: [
      { situation: "Rutinler", example: "I drink coffee every morning.", icon: "☕" },
      { situation: "Genel Gerçekler", example: "The sun rises in the east.", icon: "☀️" },
      { situation: "Sürekli Durumlar", example: "I live in Gaziantep.", icon: "📍" }
    ],
    structure: [
      { type: "(+) Olumlu", pattern: "Subject + V1 (s/es)", color: "text-green-400" },
      { type: "(-) Olumsuz", pattern: "Subject + don't/doesn't + V1", color: "text-red-400" },
      { type: "(?) Soru", pattern: "Do/Does + Subject + V1?", color: "text-yellow-400" }
    ],
    commonMistakes: [
      {
        title: "The 'AM/IS/ARE' Trap",
        wrong: "I am play football every day.",
        right: "I play football every day.",
        explanation: "Geniş zamanda eylem bildiren fiillerin önüne 'am/is/are' yardımcı fiilleri getirilmez. Bu hata genellikle Present Continuous yapısıyla karıştırılmaktadır."
      }
    ],
    challenge: {
      words: ["works", "Do", "don't", "does", "play"],
      questions: [
        { 
          id: "q1", 
          text: ["1. My brother ", " in a big hospital."], 
          correct: "works", 
          hint: "Present Simple yapısında 3. tekil şahıs özneleri (He, She, It) fiilin sonuna '-s' takısı almalıdır.",
          visualFormula: "He/She/It + V1 (-s/es)",
          specificHints: {
            "don't": "Cümle olumlu bir yapıdadır. 'Don't' kullanımı anlamı olumsuza çevirir fakat burada fiil çekimi gereklidir.",
            "Do": "Bu bir soru cümlesi değildir, doğrudan bildirim cümlesidir. 'Do' kullanımı söz dizimsel olarak uygun değildir.",
            "play": "Gramatik olarak mümkün olsa da anlamsal bağlamda hastanede 'çalışmak' eylemi önceliklidir."
          }
        },
        { 
          id: "q2", 
          text: ["2. ", " you like swimming in the sea?"], 
          correct: "Do", 
          hint: "Soru yapısını oluşturmak için 'You' öznesi ile uyumlu yardımcı fiil kullanılmalıdır.",
          visualFormula: "Do + I/You/We/They + V1?",
          specificHints: {
            "does": "'Does' yardımcı fiili yalnızca 3. tekil şahıs özneleriyle kullanılır. 'You' öznesi ile uyumsuzdur.",
            "works": "Soru cümlesi doğrudan ana fiil ile başlayamaz. Cümle başında yardımcı fiil bulunması zorunludur.",
            "don't": "Cümle yapısı standart bir soru formundadır. Negatif soru amaçlanmadığı sürece 'Do' tercih edilmelidir."
          }
        },
        { 
          id: "q3", 
          text: ["3. They ", " watch TV in the evenings."], 
          correct: "don't", 
          hint: "'They' öznesini içeren olumsuz cümlelerde uygun yardımcı fiil yapısı seçilmelidir.",
          visualFormula: "I/You/We/They + don't + V1",
          specificHints: {
            "works": "Cümlede 'watch' ana fiili mevcuttur. İki ana fiilin ardışık kullanımı dil bilgisi kurallarına aykırıdır.",
            "does": "'They' çoğul bir öznedir. 'Does' ise sadece tekil şahıs çekimlerinde kullanılır.",
            "play": "Cümlede ana fiil (watch) zaten bulunmaktadır. Bu boşlukta bir yardımcı fiil (negatif belirteç) gereklidir."
          }
        },
        { 
          id: "q4", 
          text: ["4. Where ", " your father live?"], 
          correct: "does", 
          hint: "'Your father' (He) öznesi için soru yapısında ilgili yardımcı fiil kullanılmalıdır.",
          visualFormula: "Where + Does + He/She/It + V1?",
          specificHints: {
            "Do": "'Your father' tekil bir öznedir. Bu özne grubuyla 'Do' kullanımı gramatik bir hatadır.",
            "works": "Soru kelimesinden (Where) sonra yardımcı fiil gelmelidir. 'Works' bir ana fiildir.",
            "play": "Bu kullanımda cümle, soru formunu tamamlayacak yardımcı fiilden yoksun kalmaktadır."
          }
        },
        { 
          id: "q5", 
          text: ["5. I often ", " guitar in my room."], 
          correct: "play", 
          hint: "'I' öznesiyle kurulan geniş zaman cümlelerinde fiil ek almadan yalın halde kullanılır.",
          visualFormula: "I/You/We/They + V1",
          specificHints: {
            "works": "Anlamsal olarak gitarla kurulan bağlam 'çalmak' (play) fiilini gerektirir. Ayrıca 'I' öznesi '-s' takısı almaz.",
            "does": "'Does' yardımcı fiildir; olumlu bir cümlede ana fiilin yerini tutamaz.",
            "don't": "'Don't' kullanımı cümleyi ana fiilsiz bırakır ve anlamın tamamlanmasını engeller."
          }
        }
      ]
    }
  }
};