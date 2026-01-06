import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Brain, Zap, Headphones, ArrowLeft, Trophy, Timer, Volume2, Heart, Eye, Turtle, SkipForward, CheckCircle2, Bomb, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext'; // Kullanıcı seviyesini çekmek için
import confetti from 'canvas-confetti';

// --- TİP TANIMLAMALARI ---
type LevelType = 'Pre-Intermediate' | 'Intermediate' | 'Upper-Intermediate';

// --- LEVEL-BASED DATA ---
// Her seviye için ayrı içerik tanımlıyoruz
const GAME_CONTENT = {
  'Pre-Intermediate': {
    grammar: [
      { id: 1, question: "I ______ to music now.", options: ["listen", "listening", "am listening", "listens"], answer: "am listening" },
      { id: 2, question: "She ______ got a car.", options: ["have", "has", "is", "does"], answer: "has" },
      { id: 3, question: "There ______ two apples on the table.", options: ["is", "are", "be", "was"], answer: "are" },
    ],
    listening: [
      { id: 1, word: "Vacation", meaning: "Tatil", exampleEn: "We are going on a *vacation*.", exampleTr: "*Tatile* gidiyoruz." },
      { id: 2, word: "Delicious", meaning: "Lezzetli", exampleEn: "This cake is *delicious*.", exampleTr: "Bu kek *lezzetli*." },
      { id: 3, word: "Expensive", meaning: "Pahalı", exampleEn: "The car is too *expensive*.", exampleTr: "Araba çok *pahalı*." },
    ],
    matching: [
      { id: 1, word: 'Difficult', match: 'Zor' },
      { id: 2, word: 'Cheap', match: 'Ucuz' },
      { id: 3, word: 'Always', match: 'Her zaman' },
      { id: 4, word: 'Borrowed', match: 'Ödünç aldı' },
    ]
  },
  'Intermediate': {
    grammar: [
      { id: 1, question: "I ______ to the cinema yesterday.", options: ["go", "went", "gone", "going"], answer: "went" },
      { id: 2, question: "If I ______ you, I would study harder.", options: ["was", "am", "were", "be"], answer: "were" },
      { id: 3, question: "This car is ______ than that one.", options: ["fast", "fastest", "faster", "more fast"], answer: "faster" },
    ],
    listening: [
      { id: 1, word: "Opportunity", meaning: "Fırsat", exampleEn: "Don't miss this *opportunity*.", exampleTr: "Bu *fırsatı* kaçırma." },
      { id: 2, word: "Environment", meaning: "Çevre", exampleEn: "Protect the *environment*.", exampleTr: "*Çevreyi* koru." },
      { id: 3, word: "Necessary", meaning: "Gerekli", exampleEn: "Sleep is *necessary*.", exampleTr: "Uyku *gereklidir*." },
    ],
    matching: [
      { id: 1, word: 'Ambitious', match: 'Hırslı' },
      { id: 2, word: 'Reluctant', match: 'İsteksiz' },
      { id: 3, word: 'Predict', match: 'Tahmin etmek' },
      { id: 4, word: 'Obtain', match: 'Elde etmek' },
    ]
  },
  'Upper-Intermediate': {
    grammar: [
      { id: 1, question: "By next year, I ______ graduated.", options: ["will have", "will be", "have", "had"], answer: "will have" },
      { id: 2, question: "Hardly ______ entered the room when the phone rang.", options: ["I had", "had I", "have I", "did I"], answer: "had I" },
      { id: 3, question: "I regret ______ that to him.", options: ["to say", "said", "saying", "say"], answer: "saying" },
    ],
    listening: [
      { id: 1, word: "Consequence", meaning: "Sonuç, netice", exampleEn: "Every action has a *consequence*.", exampleTr: "Her eylemin bir *sonucu* vardır." },
      { id: 2, word: "Simultaneously", meaning: "Eş zamanlı", exampleEn: "It happened *simultaneously*.", exampleTr: "*Eş zamanlı* gerçekleşti." },
      { id: 3, word: "Inevitably", meaning: "Kaçınılmaz olarak", exampleEn: "*Inevitably*, it will rain.", exampleTr: "*Kaçınılmaz olarak* yağmur yağacak." },
    ],
    matching: [
      { id: 1, word: 'Inevitable', match: 'Kaçınılmaz' },
      { id: 2, word: 'Diligent', match: 'Gayretli' },
      { id: 3, word: 'Ambiguous', match: 'Muğlak' },
      { id: 4, word: 'Meticulous', match: 'Titiz' },
    ]
  }
};

// --- YARDIMCI: Cümledeki *kelimeyi* kalın yapan bileşen ---
const HighlightedText = ({ text, className = "" }: { text: string, className?: string }) => {
  const parts = text.split('*');
  return (
    <p className={className}>
      {parts.map((part, i) => 
        i % 2 === 1 ? <span key={i} className="font-bold text-white bg-white/10 px-1 rounded">{part}</span> : part
      )}
    </p>
  );
};

const Games = () => {
  // Kullanıcı seviyesini çekiyoruz. Yoksa varsayılan Pre-Intermediate.
  const { userProfile } = useLearning(); 
  const userLevel: LevelType = (userProfile?.level as LevelType) || 'Pre-Intermediate';
  
  // O seviyeye ait verileri al
  const currentLevelData = GAME_CONTENT[userLevel] || GAME_CONTENT['Pre-Intermediate'];

  const [activeGame, setActiveGame] = useState<string | null>(null);

  // --- OYUN SEÇİM MENÜSÜ ---
  const GameSelection = () => (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-4">
          <Gamepad2 className="w-4 h-4 text-pink-500 animate-pulse" />
          <span className="text-sm font-medium text-pink-400">Neon Arcade</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-glow">
          Practice Through Play
        </h1>
        <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-sm mt-2">
          Current Level: <span className="text-white font-bold">{userLevel}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <GameCard id="matching" title="Word Matching" desc="Kelimeleri anlamlarıyla eşleştir." icon={Brain} color="cyan" difficulty="Medium" />
        <GameCard id="fill-blank" title="Grammar Master" desc="Boşlukları doğru gramer ile doldur." icon={Zap} color="pink" difficulty="Hard" />
        
        {/* YENİ EKLENEN BOMB DEFUSAL KARTI */}
        <GameCard id="bomb" title="Bomb Defusal" desc="Süre bitmeden bombayı imha et! (+3sn / -5sn)" icon={Bomb} color="red" difficulty="Extreme" />
        
        <GameCard id="listening" title="Listening Quiz" desc="Dinle, yaz ve detaylı öğren." icon={Headphones} color="green" difficulty="Expert" />
      </div>
    </div>
  );

  const GameCard = ({ id, title, desc, icon: Icon, color, difficulty }: any) => {
    const colors: any = {
      cyan: "border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] text-cyan-400 bg-cyan-500/10",
      pink: "border-pink-500/30 hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] text-pink-400 bg-pink-500/10",
      yellow: "border-yellow-500/30 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] text-yellow-400 bg-yellow-500/10",
      green: "border-green-500/30 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] text-green-400 bg-green-500/10",
      red: "border-red-500/30 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] text-red-500 bg-red-500/10", // Kırmızı eklendi
    };

    return (
      <motion.div 
        whileHover={{ scale: 1.02, translateY: -5 }}
        className={`group relative overflow-hidden rounded-2xl bg-[#0a0a0a] border p-8 cursor-pointer transition-all ${colors[color].split(" ")[0]} ${colors[color].split(" ")[1]}`}
        onClick={() => setActiveGame(id)}
      >
        <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full -mr-8 -mt-8 ${colors[color].split(" ")[3]}`} />
        <div className="flex items-start justify-between mb-6">
          <div className={`p-3 rounded-xl ${colors[color].split(" ")[3]} ${colors[color].split(" ")[2]}`}>
            <Icon className="w-8 h-8" />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${colors[color].split(" ")[3]} ${colors[color].split(" ")[2]} border-opacity-20`}>
            {difficulty}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-6">{desc}</p>
        <div className={`flex items-center text-sm font-medium ${colors[color].split(" ")[2]}`}>
          <span>Play Now</span>
          <ArrowLeft className="w-4 h-4 ml-2 rotate-180 transition-transform group-hover:translate-x-2" />
        </div>
      </motion.div>
    );
  };

  // --- OYUN 1: MATCHING (DYNAMIC DATA) ---
  const MatchingGame = () => {
    const [items, setItems] = useState<any[]>([]);
    const [selected, setSelected] = useState<number[]>([]);
    const [matched, setMatched] = useState<number[]>([]);
    const [isWon, setIsWon] = useState(false);
    
    // Veriyi mevcut seviyeden al
    const DATA = currentLevelData.matching;

    useEffect(() => {
      const words = DATA.map(w => ({ id: w.id, text: w.word, type: 'word' }));
      const definitions = DATA.map(w => ({ id: w.id, text: w.match, type: 'def' }));
      const allItems = [...words, ...definitions].sort(() => Math.random() - 0.5);
      setItems(allItems);
    }, [DATA]);

    useEffect(() => {
      if (selected.length === 2) {
        const [first, second] = selected;
        if (items[first].id === items[second].id && items[first].type !== items[second].type) {
          setMatched([...matched, items[first].id]);
          setSelected([]);
          if (matched.length + 1 === DATA.length) {
            setIsWon(true);
            try { confetti(); } catch (e) {}
          }
        } else {
          setTimeout(() => setSelected([]), 800);
        }
      }
    }, [selected, items, matched, DATA]);

    const handleItemClick = (index: number) => {
      if (selected.length < 2 && !selected.includes(index) && !matched.includes(items[index].id)) {
        setSelected([...selected, index]);
      }
    };

    if (isWon) return <WinScreen score={DATA.length * 100} onBack={() => setActiveGame(null)} />;

    return (
      <GameLayout title="Matching" score={matched.length * 100} onExit={() => setActiveGame(null)}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {items.map((item, index) => {
            const isSelected = selected.includes(index);
            const isMatched = matched.includes(item.id);
            const isWrong = selected.length === 2 && isSelected && !isMatched;
            let style = "bg-[#111] border-gray-800 hover:border-cyan-500/50";
            if (isSelected) style = "bg-cyan-500/20 border-cyan-500 text-cyan-400";
            if (isWrong) style = "bg-red-500/20 border-red-500 text-red-400 animate-shake";
            if (isMatched) style = "opacity-0 pointer-events-none";

            return (
              <motion.div key={index} layout onClick={() => handleItemClick(index)} className={`h-32 rounded-xl border-2 flex items-center justify-center p-4 text-center cursor-pointer font-bold text-lg select-none transition-colors ${style}`}>
                {item.text}
              </motion.div>
            );
          })}
        </div>
      </GameLayout>
    );
  };

  // --- OYUN 2: FILL BLANK (DYNAMIC DATA) ---
  const FillBlankGame = () => {
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isFinished, setIsFinished] = useState(false);
    
    // Veriyi mevcut seviyeden al
    const QUESTIONS = currentLevelData.grammar;

    const handleAnswer = (option: string) => {
      if (selectedOption) return;
      setSelectedOption(option);
      const isCorrect = option === QUESTIONS[currentQ].answer;
      if (isCorrect) setScore(score + 20);
      setTimeout(() => {
        if (currentQ + 1 < QUESTIONS.length) {
          setCurrentQ(currentQ + 1);
          setSelectedOption(null);
        } else {
          setIsFinished(true);
          if (score + (isCorrect ? 20 : 0) >= 80) try { confetti(); } catch (e) {}
        }
      }, 1500);
    };

    if (isFinished) return <WinScreen score={score} onBack={() => setActiveGame(null)} />;
    const q = QUESTIONS[currentQ];

    return (
      <GameLayout title="Grammar" score={score} onExit={() => setActiveGame(null)}>
        <div className="w-full max-w-2xl text-center">
          <div className="mb-8 p-8 bg-[#111] rounded-2xl border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.1)]">
            <h3 className="text-2xl md:text-3xl font-medium leading-relaxed">
              {q.question.split('______').map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && <span className="inline-block w-32 border-b-2 border-pink-500 mx-2 text-pink-400 font-bold">{selectedOption || "?"}</span>}
                </span>
              ))}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {q.options.map((opt) => (
              <button key={opt} onClick={() => handleAnswer(opt)} disabled={!!selectedOption} className={`p-6 rounded-xl border-2 text-xl font-bold transition-all ${selectedOption === opt ? (opt === q.answer ? "bg-green-500/20 border-green-500 text-green-400" : "bg-red-500/20 border-red-500 text-red-400") : selectedOption && opt === q.answer ? "bg-green-500/20 border-green-500 text-green-400" : "bg-white/5 border-white/10 hover:bg-pink-500/20 hover:border-pink-500"}`}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      </GameLayout>
    );
  };

  // --- OYUN 3: BOMB DEFUSAL GAME (ESKİ SPEED CHALLENGE YERİNE) ---
  const BombGame = () => {
    const DATA = currentLevelData.matching; // Veri kaynağı
    
    const [timeLeft, setTimeLeft] = useState(15); // Başlangıç süresi
    const [score, setScore] = useState(0);
    const [currentWord, setCurrentWord] = useState(DATA[0]);
    const [options, setOptions] = useState<string[]>([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isExploded, setIsExploded] = useState(false); // Bomba patladı mı?
    const [shake, setShake] = useState(false); // Yanlış cevapta titreme

    const generateQuestion = () => {
      const randomPair = DATA[Math.floor(Math.random() * DATA.length)];
      setCurrentWord(randomPair);
      const wrongAnswers = DATA.filter(w => w.id !== randomPair.id).map(w => w.match).sort(() => 0.5 - Math.random()).slice(0, 3);
      setOptions([...wrongAnswers, randomPair.match].sort(() => 0.5 - Math.random()));
    };

    useEffect(() => {
      generateQuestion();
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) {
            clearInterval(timer);
            setIsGameOver(true);
            setIsExploded(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    const handleAnswer = (answer: string) => {
      if (answer === currentWord.match) {
        setScore(score + 10);
        setTimeLeft(prev => Math.min(prev + 3, 30)); // Doğru cevap: +3 Saniye (Max 30sn)
        generateQuestion();
        try { confetti({ particleCount: 20, spread: 40, origin: { y: 0.8 } }); } catch(e){}
      } else {
        setShake(true);
        setTimeout(() => setShake(false), 500);
        setTimeLeft(prev => Math.max(0, prev - 5)); // Yanlış cevap: -5 Saniye
        generateQuestion();
      }
    };

    if (isGameOver) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                {isExploded ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1.5 }} className="mb-6">
                        <Bomb className="w-32 h-32 text-red-600 animate-pulse" />
                    </motion.div>
                ) : (
                    <Trophy className="w-32 h-32 text-yellow-400 mb-6" />
                )}
                <h1 className="text-5xl font-bold text-white mb-4">{isExploded ? "BOOM! GAME OVER" : "Defused!"}</h1>
                <p className="text-2xl text-gray-400 mb-8">Final Score: <span className="text-red-500 font-bold">{score}</span></p>
                <Button onClick={() => setActiveGame(null)} size="lg" className="bg-red-600 hover:bg-red-700 font-bold px-8">
                    Return to Safety
                </Button>
            </div>
        );
    }

    return (
      <GameLayout title="Bomb Defusal" score={score} onExit={() => setActiveGame(null)}>
        <div className={`w-full max-w-lg text-center ${shake ? 'animate-shake' : ''}`}>
          
          {/* Bomb Timer Bar */}
          <div className="relative w-full h-8 bg-gray-900 rounded-full mb-8 overflow-hidden border-2 border-red-900/50">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 font-mono font-bold text-white tracking-widest">
                {timeLeft}s
            </div>
            <motion.div 
                initial={{ width: "100%" }} 
                animate={{ width: `${(timeLeft / 30) * 100}%` }} // 30sn max üzerinden oranla
                className={`h-full ${timeLeft < 5 ? 'bg-red-600 animate-pulse' : 'bg-red-500'}`} 
            />
          </div>

          <div className="mb-12 relative">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <AlertTriangle className="w-8 h-8 text-red-500 animate-bounce" />
             </div>
            <h2 className="text-5xl font-bold text-white mb-2">{currentWord.word}</h2>
            <p className="text-red-400/80 font-mono text-sm uppercase tracking-widest">Select correct meaning (+3s / -5s)</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(opt)} className="p-6 rounded-xl border-2 border-red-500/20 bg-red-500/5 hover:bg-red-500/20 hover:border-red-500 text-lg font-bold transition-all active:scale-95 text-gray-200">
                {opt}
              </button>
            ))}
          </div>
        </div>
      </GameLayout>
    );
  };

  // --- OYUN 4: LISTENING QUIZ (DYNAMIC DATA) ---
  const ListeningGame = () => {
    // Veriyi mevcut seviyeden al
    const WORDS = currentLevelData.listening;

    const [current, setCurrent] = useState(0);
    const [input, setInput] = useState("");
    const [score, setScore] = useState(0);
    const [mistakes, setMistakes] = useState(0); 
    const [lives, setLives] = useState(2); 
    const [isFinished, setIsFinished] = useState(false);
    const [feedbackState, setFeedbackState] = useState<"typing" | "wrong" | "revealed">("typing");
    const [usedSlowMode, setUsedSlowMode] = useState(false); 
    const inputRef = useRef<HTMLInputElement>(null);

    const currentWordData = WORDS[current];

    const playAudio = (rate = 0.9) => {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentWordData.word);
      utterance.lang = 'en-US';
      utterance.rate = rate; 
      if (rate < 0.9) setUsedSlowMode(true);
      window.speechSynthesis.speak(utterance);
      inputRef.current?.focus();
    };

    const handleSkip = () => {
      setScore(Math.max(0, score - 20)); 
      setFeedbackState("revealed");
    };

    const handleShowAnswer = () => {
      setScore(Math.max(0, score - 20));
      setFeedbackState("revealed");
    };

    const handleNextQuestion = () => {
      if (current + 1 < WORDS.length) {
        setCurrent(current + 1);
        setInput("");
        setMistakes(0);
        setLives(2);
        setUsedSlowMode(false); 
        setFeedbackState("typing");
      } else {
        setIsFinished(true);
        if (score > 50) try { confetti(); } catch(e){}
      }
    };

    const checkAnswer = (e: React.FormEvent) => {
      e.preventDefault();
      if (feedbackState === "revealed") {
        handleNextQuestion();
        return;
      }

      const cleanInput = input.trim().toLowerCase();
      const cleanWord = currentWordData.word.toLowerCase();

      if (cleanInput === cleanWord) {
        const pointsToAdd = usedSlowMode ? 10 : 20;
        setScore(score + pointsToAdd);
        setFeedbackState("revealed");
        try { confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } }); } catch(e){}
      } else {
        setMistakes(mistakes + 1);
        setScore(Math.max(0, score - 10)); 
        if (lives > 1) {
          setLives(lives - 1);
          setFeedbackState("wrong");
          setTimeout(() => setFeedbackState("typing"), 1000); 
        } else {
          setLives(0);
          setFeedbackState("revealed");
        }
      }
    };

    if (isFinished) return <WinScreen score={score} onBack={() => setActiveGame(null)} />;

    return (
      <GameLayout title="Listening" score={score} onExit={() => setActiveGame(null)}>
        <div className="w-full max-w-lg text-center">
          
          {feedbackState !== "revealed" && (
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(2)].map((_, i) => (
                <Heart key={i} className={`w-6 h-6 ${i < lives ? "text-red-500 fill-red-500" : "text-gray-700"}`} />
              ))}
            </div>
          )}

          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => playAudio(0.9)}
              className="w-24 h-24 rounded-full bg-green-500/10 border-2 border-green-500/50 flex items-center justify-center hover:scale-110 hover:bg-green-500/20 transition-all shadow-[0_0_50px_rgba(34,197,94,0.2)]"
              title="Play Normal"
            >
              <Volume2 className="w-10 h-10 text-green-400" />
            </button>
            <button 
              onClick={() => playAudio(0.5)}
              className={`w-16 h-16 rounded-full border-2 flex items-center justify-center hover:scale-110 transition-all mt-4 ${
                usedSlowMode 
                  ? "bg-yellow-500/20 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]" 
                  : "bg-yellow-500/10 border-yellow-500/50 hover:bg-yellow-500/20"
              }`}
              title="Play Slow (0.5x) - Points Halved!"
            >
              <Turtle className="w-6 h-6 text-yellow-400" />
            </button>
          </div>
          
          {feedbackState !== "revealed" ? (
            <>
              <p className="text-gray-400 mb-6">Click icons to listen. <span className="text-yellow-500 text-xs">(Turtle mode gives half points)</span></p>
              <form onSubmit={checkAnswer} className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className={`w-full bg-[#111] border-2 rounded-xl p-4 text-center text-2xl font-bold outline-none transition-all ${
                    feedbackState === 'wrong' ? 'border-red-500 text-red-500 animate-shake' : 'border-gray-700 focus:border-green-500'
                  }`}
                  placeholder="Type here..."
                  autoFocus
                />
                <Button type="submit" className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-6">
                  Check Answer
                </Button>
              </form>

              <div className="flex justify-between mt-4">
                <button onClick={handleSkip} className="text-gray-500 hover:text-white flex items-center text-sm">
                  <SkipForward className="w-4 h-4 mr-1" /> Skip (-20 pts)
                </button>
                
                {mistakes >= 1 && (
                  <motion.button 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    onClick={handleShowAnswer} 
                    className="text-yellow-500 hover:text-yellow-400 flex items-center text-sm"
                  >
                    <Eye className="w-4 h-4 mr-1" /> Show Answer (-20 pts)
                  </motion.button>
                )}
              </div>
            </>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#111] border border-green-500/30 rounded-2xl p-6 text-left shadow-[0_0_50px_rgba(34,197,94,0.15)]"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-gray-800 pb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
                <div>
                  <h3 className="text-3xl font-bold text-white">{currentWordData.word}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-green-400 italic">{currentWordData.meaning}</p>
                    {usedSlowMode && <span className="text-xs text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">Slow Mode (-10pts)</span>}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <HighlightedText text={currentWordData.exampleEn} className="text-gray-300 text-lg mb-1" />
                  <HighlightedText text={currentWordData.exampleTr} className="text-gray-500 text-sm" />
                </div>
              </div>

              <Button onClick={handleNextQuestion} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6">
                Next Word <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </Button>
            </motion.div>
          )}
        </div>
      </GameLayout>
    );
  };

  // --- ORTAK BİLEŞENLER ---
  const GameLayout = ({ title, score, onExit, children }: any) => (
    <div className="container mx-auto px-4 pt-24 pb-12 flex flex-col items-center min-h-screen">
      <div className="w-full max-w-4xl flex items-center justify-between mb-12">
        <Button variant="ghost" onClick={onExit} className="text-gray-400 hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" /> Exit
        </Button>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{title} Mode</h2>
        <div className="text-xl font-bold font-mono bg-white/5 px-4 py-2 rounded-lg border border-white/10">
          {score} PTS
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full flex justify-center">
        {children}
      </motion.div>
    </div>
  );

  const WinScreen = ({ score, onBack, title = "Level Complete!" }: any) => (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mb-8">
        <Trophy className="w-32 h-32 text-yellow-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.5)]" />
      </motion.div>
      <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
      <p className="text-2xl text-gray-400 mb-8">Total Score: <span className="text-yellow-400 font-bold">{score}</span></p>
      <Button onClick={onBack} size="lg" className="bg-white text-black hover:bg-gray-200 font-bold px-8">
        Back to Arcade
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans">
      <Navbar />
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeGame || "menu"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
          {!activeGame && <GameSelection />}
          {activeGame === 'matching' && <MatchingGame />}
          {activeGame === 'fill-blank' && <FillBlankGame />}
          {activeGame === 'bomb' && <BombGame />} {/* Speed yerine Bomb */}
          {activeGame === 'listening' && <ListeningGame />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Games;