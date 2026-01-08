import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext';
import confetti from 'canvas-confetti';

// 3 Aşamalı Saf B1+ Kelime Seti
const MATCH_PARTS = {
  1: [
    { id: 'b1-p1-1', word: 'Accurate', match: 'Doğru, kesin, hatasız' },
    { id: 'b1-p1-2', word: 'Significant', match: 'Önemli, kayda değer' },
    { id: 'b1-p1-3', word: 'Sustainable', match: 'Sürdürülebilir' },
    { id: 'b1-p1-4', word: 'Innovative', match: 'Yenilikçi' },
  ],
  2: [
    { id: 'b1-p2-1', word: 'Reluctant', match: 'İsteksiz, gönülsüz' },
    { id: 'b1-p2-2', word: 'Maintain', match: 'Sürdürmek, bakım yapmak' },
    { id: 'b1-p2-3', word: 'Consequence', match: 'Sonuç, netice' },
    { id: 'b1-p2-4', word: 'Efficient', match: 'Verimli, etkili' },
  ],
  3: [
    { id: 'b1-p3-1', word: 'Inevitable', match: 'Kaçınılmaz' },
    { id: 'b1-p3-2', word: 'Sophisticated', match: 'Gelişmiş, karmaşık' },
    { id: 'b1-p3-3', word: 'Precise', match: 'Tam, kesin, net' },
    { id: 'b1-p3-4', word: 'Outcome', match: 'Sonuç, netice, çıktı' },
  ]
};

interface MatchItem {
  id: string;
  content: string;
  type: 'word' | 'definition';
  pairId: string;
  isMatched: boolean;
}

export function MatchingGame() {
  const [items, setItems] = useState<MatchItem[]>([]);
  const [selected, setSelected] = useState<MatchItem | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [wrongMatch, setWrongMatch] = useState<string[]>([]);
  const [currentPart, setCurrentPart] = useState(1);
  const [isPartComplete, setIsPartComplete] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  
  const { updateProgress } = useLearning();

  const initializePart = (partNum: number) => {
    const data = MATCH_PARTS[partNum as keyof typeof MATCH_PARTS];
    const gameItems: MatchItem[] = [];

    data.forEach((item) => {
      gameItems.push({
        id: `word-${item.id}`,
        content: item.word,
        type: 'word',
        pairId: item.id,
        isMatched: false,
      });
      gameItems.push({
        id: `def-${item.id}`,
        content: item.match,
        type: 'definition',
        pairId: item.id,
        isMatched: false,
      });
    });
    
    setItems(gameItems.sort(() => Math.random() - 0.5));
    setSelected(null);
    setMatchedPairs([]);
    setWrongMatch([]);
    setIsPartComplete(false);
  };

  useEffect(() => {
    initializePart(currentPart);
  }, [currentPart]);

  const handleSelect = (item: MatchItem) => {
    if (item.isMatched || wrongMatch.includes(item.id)) return;
    if (!selected) { setSelected(item); return; }
    if (selected.id === item.id) { setSelected(null); return; }
    if (selected.type === item.type) { setSelected(item); return; }
    
    if (selected.pairId === item.pairId) {
      const newMatchedPairs = [...matchedPairs, selected.pairId];
      setMatchedPairs(newMatchedPairs);
      setItems(prev => prev.map(i => i.pairId === selected.pairId ? { ...i, isMatched: true } : i));
      setTotalScore(prev => prev + 10);
      updateProgress(selected.pairId, true);
      
      if (newMatchedPairs.length === items.length / 2) {
        setIsPartComplete(true);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#06b6d4'] });
      }
    } else {
      setWrongMatch([selected.id, item.id]);
      setTimeout(() => setWrongMatch([]), 500);
    }
    setSelected(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mb-8 border-b border-cyan-500/20 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 uppercase tracking-widest">
              PART {currentPart} OF 3
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight italic">Matching <span className="text-gray-500 font-light">Mode</span></h2>
          </div>
          <p className="text-gray-400 text-sm italic">B1+ Mastery: Link correct pairs</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="px-5 py-2 rounded-xl bg-white/[0.03] border border-white/10 shadow-lg">
            <span className="font-mono font-bold text-white text-xl tracking-tighter">{totalScore} <span className="text-[10px] text-gray-500 uppercase ml-1 font-sans">Pts</span></span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => {setCurrentPart(1); setTotalScore(0);}} className="hover:bg-cyan-500/10 text-gray-500">
            <RotateCcw className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isPartComplete ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 px-6 rounded-[32px] bg-[#0a0a0a] border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)]">
            <Trophy className="w-20 h-20 text-cyan-400 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]" />
            <h3 className="text-4xl font-black text-white mb-3 uppercase italic tracking-tighter">Part {currentPart} Cleared!</h3>
            <p className="text-gray-400 mb-10 text-lg font-medium">Stage {currentPart} is now mastered. Get ready for the next.</p>
            <Button 
              onClick={() => currentPart < 3 ? setCurrentPart(prev => prev + 1) : setCurrentPart(1)}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-black px-12 py-8 text-xl rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all uppercase tracking-widest"
            >
              {currentPart < 3 ? 'Proceed Next Stage' : 'Restart Game'} 
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {items.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleSelect(item)}
                className={`h-32 rounded-xl border-2 flex items-center justify-center p-4 text-center cursor-pointer font-bold text-lg transition-all duration-300 ${
                  item.isMatched ? 'opacity-0 pointer-events-none scale-90' :
                  wrongMatch.includes(item.id) ? 'bg-red-500/20 border-red-500 text-red-400 animate-shake' :
                  selected?.id === item.id ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] scale-105 z-10' :
                  'bg-[#111] border-gray-800 hover:border-cyan-500/50 text-gray-300'
                }`}
              >
                {item.content}
              </motion.button>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}