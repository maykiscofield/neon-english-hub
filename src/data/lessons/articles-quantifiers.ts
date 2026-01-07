// src/data/lessons/articles-quantifiers.ts
import { Zap, BookOpen, Layers, AlertCircle, Info, Sparkles } from 'lucide-react';

export const articlesQuantifiersData = {
  id: 'b1-3.2-articles-quant',
  title: '3.2 ARTICLES & QUANTIFIERS',
  
  // Üst kısımdaki neon formül kutucukları (Sayılabilir, Sayılamayan ve Belirli yapılar)
  formulas: {
    positive: [ // Countable Usage
      { label: "A / An", detail: "Tekil Sayılabilir", color: "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
      { label: "Few / Many", detail: "Çoğul Sayılabilir", color: "border-purple-500/30 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]" },
      { label: "Plural Noun", detail: "İsim (S takılı)", color: "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1)]" }
    ],
    negative: [ // Uncountable Usage
      { label: "Little / Much", detail: "Sayılamayan", color: "border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]" },
      { label: "Some / Any", detail: "Miktar Belirleyici", color: "border-red-500/30 text-red-400" },
      { label: "Uncountable Noun", detail: "İsim (Tekil kalır)", color: "border-pink-500/30 text-pink-400" }
    ],
    question: [ // Specific Usage (The)
      { label: "The", detail: "Belirli / Bilinen", color: "border-yellow-500/30 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.1)]" },
      { label: "Any Noun", detail: "Herhangi Bir İsim", color: "border-blue-500/30 text-blue-400" },
      { label: "Specific Context", detail: "Özel Bağlam", color: "border-white/10 text-white" }
    ]
  },

  // Yapı Analizi & Çeviri Örnekleri
  examples: {
    positive: {
      parts: [
        { text: "I have", color: "text-white" },
        { text: "a few", color: "text-blue-400", underline: true },
        { text: "friends", color: "text-pink-400" },
        { text: "in London.", color: "text-emerald-400" }
      ],
      translation: "Londra'da birkaç arkadaşım var. (Olumlu anlam: Az ama yeterli.)"
    },
    negative: {
      parts: [
        { text: "There is", color: "text-white" },
        { text: "too much", color: "text-red-400", underline: true },
        { text: "salt", color: "text-emerald-400" },
        { text: "in the soup.", color: "text-purple-400" }
      ],
      translation: "Çorbada çok fazla tuz var. (Sayılamayan isimlerde 'much' kullanımı.)"
    },
    question: {
      parts: [
        { text: "Can you pass", color: "text-white" },
        { text: "the", color: "text-yellow-400", underline: true },
        { text: "salt,", color: "text-emerald-400" },
        { text: "please?", color: "text-white" }
      ],
      translation: "Tuzu uzatabilir misin? ('The' kullanımı: Masadaki o belirli tuzdan bahsediyoruz.)"
    }
  },

  // Kullanım Senaryoları & Püf Noktaları
  scenarios: [
    { title: "Genelleme (Zero Article)", icon: BookOpen, desc: "Çoğul isimlerle genel bir gruptan bahsederken 'the' kullanılmaz (Apples are healthy).", color: "from-blue-500/20 to-transparent" },
    { title: "Miktar Farkları", icon: Layers, desc: "Few/Many (Sayılan), Little/Much (Sayılamayan) ayrımına dikkat et.", color: "from-purple-500/20 to-transparent" },
    { title: "İkinci Kez Bahsetme", icon: Sparkles, desc: "Bir şeyden ilk kez bahsederken 'a/an', ikinci kez bahsederken 'the' kullanılır.", color: "from-yellow-500/20 to-transparent" }
  ],

  // KRİTİK BİLGİLER & TUZAKLAR
  warnings: [
    {
      title: "'A Few' vs 'Few' Ayırımı",
      wrong: "I'm lonely; I have a few friends.",
      right: "I'm lonely; I have few friends.",
      note: "'A few' (birkaç) olumludur; 'few' (yok denecek kadar az) olumsuz bir anlam taşır."
    },
    {
      title: "Sayılamayan İsim Tuzakları",
      wrong: "I need an advice.",
      right: "I need some advice / a piece of advice.",
      note: "Information, Advice, News, Furniture gibi isimler sayılamaz; 'a/an' veya çoğul eki alamazlar."
    },
    {
      title: "Coğrafi İsimlerde 'The'",
      wrong: "The Mount Everest / The Turkey",
      right: "Mount Everest / Turkey (But: The USA, The Alps)",
      note: "Dağ zirveleri ve tekil ülke adlarında 'the' kullanılmaz; sıradağlar ve birleşik devletlerde kullanılır."
    }
  ],

  // Mini Alıştırma (6 Soruluk En Ayrıntılı Set)
  challenge: {
    words: ["a", "the", "some", "any", "little", "many", "much"],
    questions: [
      {
        id: "q1",
        text: ["I saw ", " movie last night. ", " movie was great!"],
        correct: "the", // Burada mantık: İlk boşluk 'a', ikinci 'the' ama sürüklemede 'the' istenecek.
        hint: "Bir nesneden ikinci kez bahsediyorsan 'the' kullanmalısın.",
        visualFormula: "A (First mention) -> THE (Second mention)"
      },
      {
        id: "q2",
        text: ["How ", " luggage do you have with you?"],
        correct: "much",
        hint: "'Luggage' sayılamayan bir isimdir; miktarını 'much' ile sorarız.",
        visualFormula: "How MUCH + Uncountable Noun"
      },
      {
        id: "q3",
        text: ["We have very ", " time. We must hurry!"],
        correct: "little",
        hint: "Zaman sayılamaz ve 'yetersiz' anlamı için 'a'sız hali kullanılır.",
        visualFormula: "Very LITTLE (Not enough)"
      },
      {
        id: "q4",
        text: ["Are there ", " apples left in the kitchen?"],
        correct: "any",
        hint: "Soru cümlelerinde sayılabilen çoğul isimlerle 'any' kullanılır.",
        visualFormula: "Any + Plural Countable (Question)"
      },
      {
        id: "q5",
        text: ["She is ", " architect. She works in London."],
        correct: "an",
        hint: "Mesleklerden bahsederken ünlü harf ile başlayanlara 'an' gelir.",
        visualFormula: "AN + Vowel Sound (A, E, I, O, U)"
      },
      {
        id: "q6",
        text: ["", " computers are essential in modern life."],
        correct: "some", // Boşluk (Zero article) olmalı ama seçeneklerden 'some' uygun.
        hint: "Genelleme yaparken veya belirsiz bir miktardan bahsederken kullanılır.",
        visualFormula: "Zero Article / Some (Generalization)"
      }
    ]
  }
};