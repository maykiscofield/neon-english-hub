// src/data/lessons/future-forms.ts
import { Zap, Clock, Calendar, AlertCircle, Target, Rocket } from 'lucide-react';

export const futureFormsData = {
  id: 'b1-4.1-future-forms',
  title: '4.1 FUTURE FORMS (KARŞILAŞTIRMA)',
  
  // Üst kısımdaki neon formül kutucukları (Anlık, Planlı ve Kesin yapılar)
  formulas: {
    positive: [ // Will (Anlık Kararlar)
      { label: "Will + V1", detail: "Anlık / Tahmin", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Be Going To", detail: "Niyet / Plan", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Pres. Continuous", detail: "Kesin Randevu", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [ 
      { label: "Won't / Not Going To", detail: "Olumsuz Gelecek", color: "border-red-500/30 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.1)]" },
      { label: "Pres. Simple", detail: "Resmi Tarife", color: "border-emerald-500/30 text-emerald-400" }
    ],
    question: [
      { label: "Will / Are you...?", detail: "Soru Formu", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "Subject", detail: "Özne", color: "border-blue-500/30 text-blue-400" },
      { label: "Main Verb", detail: "Ana Fiil", color: "border-white/10 text-white" }
    ]
  },

  // Yapı Analizi & Çeviri Örnekleri
  examples: {
    positive: {
      parts: [
        { text: "I", color: "text-blue-400", underline: true },
        { text: "am meeting", color: "text-pink-400" },
        { text: "the CEO", color: "text-white" },
        { text: "at 10:00 tomorrow.", color: "text-emerald-400" }
      ],
      translation: "Yarın saat 10'da CEO ile buluşuyorum. (Kesit Randevu: Zaman ve yer belli.)"
    },
    negative: {
      parts: [
        { text: "Look at those clouds!", color: "text-white" },
        { text: "It", color: "text-blue-400" },
        { text: "is going to rain.", color: "text-purple-400", underline: true }
      ],
      translation: "Şu bulutlara bak! Yağmur yağacak. (Kanıta dayalı tahmin.)"
    },
    question: {
      parts: [
        { text: "What time", color: "text-white" },
        { text: "does", color: "text-emerald-400", underline: true },
        { text: "the train", color: "text-blue-400" },
        { text: "leave?", color: "text-pink-400" }
      ],
      translation: "Tren saat kaçta kalkıyor? (Resmi tarife/zaman çizelgesi.)"
    }
  },

  // Kullanım Senaryoları & Püf Noktaları
  scenarios: [
    { title: "Anlık Kararlar (Will)", icon: Zap, desc: "Konuşma anında verilen kararlar. 'I'll take the blue one'.", color: "from-blue-500/20 to-transparent" },
    { title: "Niyetler (Going To)", icon: Target, desc: "Önceden karar verilmiş ama detayları (yer/saat) kesinleşmemiş planlar.", color: "from-purple-500/20 to-transparent" },
    { title: "Resmi Zamanlar", icon: Clock, desc: "Uçak, tren, ders saatleri veya film başlangıçları (Present Simple).", color: "from-emerald-500/20 to-transparent" }
  ],

  // KRİTİK BİLGİLER & TUZAKLAR
  warnings: [
    {
      title: "Arrangement (Düzenleme) Farkı",
      wrong: "I will see the dentist tomorrow at 4 PM.",
      right: "I'm seeing the dentist tomorrow at 4 PM.",
      note: "Eğer bir başkasıyla randevulaştıysan veya yer/saat kesinse 'will' değil, Present Continuous kullanmalısın."
    },
    {
      title: "Tahmin: Opinion vs Evidence",
      wrong: "Look! He'll fall down!",
      right: "Look! He is going to fall down!",
      note: "Kendi fikrini söylüyorsan 'will' (I think will rain), ama gözünle bir kanıt görüyorsan 'be going to' kullanılır."
    },
    {
      title: "Gelecek Zaman 'Go' Fiili",
      wrong: "I'm going to go to London.",
      right: "I'm going to London.",
      note: "'Go' fiili ile 'be going to' kullanırken ikinci 'go' genellikle düşürülür, Present Continuous hali tercih edilir."
    }
  ],

  // Mini Alıştırma (6 Soruluk Püf Noktalı Set)
  challenge: {
    words: ["will", "am going to", "am meeting", "leaves", "is going to", "I'll"],
    questions: [
      {
        id: "q1",
        text: ["Wait! ", " help you with those heavy bags."],
        correct: "I'll",
        hint: "Konuşma anında teklif edilen bir yardım (Anlık karar).",
        visualFormula: "Will (Offer/Spontaneous)"
      },
      {
        id: "q2",
        text: ["I ", " my lawyer this afternoon at his office."],
        correct: "am meeting",
        hint: "Zaman ve yer belli; bu bir randevudur (Arrangement).",
        visualFormula: "Present Continuous (Fixed Arrangement)"
      },
      {
        id: "q3",
        text: ["Our flight ", " at 6 AM next Monday."],
        correct: "leaves",
        hint: "Uçuş saati gibi resmi bir tarifeden bahsediyoruz.",
        visualFormula: "Present Simple (Timetable)"
      },
      {
        id: "q4",
        text: ["I've decided. I ", " buy a new laptop next month."],
        correct: "am going to",
        hint: "Karar verilmiş bir niyet, ancak henüz randevulaşılmamış.",
        visualFormula: "Be Going To (Intention)"
      },
      {
        id: "q5",
        text: ["Watch out! That ladder ", " collapse!"],
        correct: "is going to",
        hint: "Tehlikeyi görüyorsun, kanıta dayalı bir tahmin var.",
        visualFormula: "Evidence-based Prediction"
      },
      {
        id: "q6",
        text: ["I think humanity ", " live on Mars in 2100."],
        correct: "will",
        hint: "Kişisel bir görüş ve uzak gelecek tahmini.",
        visualFormula: "Opinion-based Prediction"
      }
    ]
  }
};