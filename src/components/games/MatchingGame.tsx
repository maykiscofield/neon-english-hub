import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VocabularyWord } from '@/types/learning';
import { getRandomWords } from '@/data/vocabulary';
import { useLearning } from '@/contexts/LearningContext';

interface MatchItem {
  id: string;
  content: string;
  type: 'word' | 'definition';
  wordId: string;
  isMatched: boolean;
}

export function MatchingGame() {
  const [items, setItems] = useState<MatchItem[]>([]);
  const [selected, setSelected] = useState<MatchItem | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [wrongMatch, setWrongMatch] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const { userProfile, updateProgress } = useLearning();

  const initializeGame = () => {
    const words = getRandomWords(4, userProfile?.level);
    
    const gameItems: MatchItem[] = [];
    
    words.forEach((word) => {
      gameItems.push({
        id: `word-${word.id}`,
        content: word.word,
        type: 'word',
        wordId: word.id,
        isMatched: false,
      });
      gameItems.push({
        id: `def-${word.id}`,
        content: word.definition.length > 60 
          ? word.definition.slice(0, 60) + '...' 
          : word.definition,
        type: 'definition',
        wordId: word.id,
        isMatched: false,
      });
    });
    
    // Shuffle
    setItems(gameItems.sort(() => Math.random() - 0.5));
    setSelected(null);
    setMatchedPairs([]);
    setWrongMatch([]);
    setScore(0);
    setIsComplete(false);
  };

  useEffect(() => {
    initializeGame();
  }, [userProfile?.level]);

  const handleSelect = (item: MatchItem) => {
    if (item.isMatched || wrongMatch.includes(item.id)) return;
    
    if (!selected) {
      setSelected(item);
      return;
    }
    
    if (selected.id === item.id) {
      setSelected(null);
      return;
    }
    
    if (selected.type === item.type) {
      setSelected(item);
      return;
    }
    
    // Check for match
    if (selected.wordId === item.wordId) {
      // Correct match
      const newMatchedPairs = [...matchedPairs, selected.wordId];
      setMatchedPairs(newMatchedPairs);
      setItems(prev => prev.map(i => 
        i.wordId === selected.wordId ? { ...i, isMatched: true } : i
      ));
      setScore(prev => prev + 10);
      updateProgress(selected.wordId, true);
      
      if (newMatchedPairs.length === items.length / 2) {
        setIsComplete(true);
      }
    } else {
      // Wrong match
      setWrongMatch([selected.id, item.id]);
      updateProgress(selected.wordId, false);
      updateProgress(item.wordId, false);
      setTimeout(() => setWrongMatch([]), 500);
    }
    
    setSelected(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-heading text-2xl font-bold mb-1">Match Words & Definitions</h2>
          <p className="text-muted-foreground">Pair each word with its correct definition</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
            <span className="text-sm text-muted-foreground">Score: </span>
            <span className="font-heading font-bold text-primary">{score}</span>
          </div>
          
          <Button variant="neon-outline" size="sm" onClick={initializeGame}>
            <RotateCcw className="w-4 h-4 mr-2" />
            New Game
          </Button>
        </div>
      </div>

      {/* Game Complete */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-8 p-8 rounded-xl bg-success/10 border border-success/30 text-center"
          >
            <Trophy className="w-12 h-12 text-success mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold mb-2">Excellent!</h3>
            <p className="text-muted-foreground mb-4">
              You matched all pairs correctly! Final score: {score}
            </p>
            <Button variant="neon" onClick={initializeGame}>
              Play Again
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Words Column */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Words</h4>
          {items
            .filter(item => item.type === 'word')
            .map(item => (
              <motion.button
                key={item.id}
                onClick={() => handleSelect(item)}
                disabled={item.isMatched}
                className={`w-full p-4 rounded-lg border text-left transition-all duration-200 ${
                  item.isMatched
                    ? 'bg-success/10 border-success/30 opacity-60'
                    : wrongMatch.includes(item.id)
                    ? 'bg-destructive/10 border-destructive/50 animate-shake'
                    : selected?.id === item.id
                    ? 'bg-primary/10 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
                    : 'bg-card/50 border-border/50 hover:border-primary/30'
                }`}
                whileHover={!item.isMatched ? { scale: 1.02 } : {}}
                whileTap={!item.isMatched ? { scale: 0.98 } : {}}
              >
                <span className="font-heading font-semibold text-lg">
                  {item.content}
                </span>
                {item.isMatched && (
                  <Check className="inline-block w-4 h-4 ml-2 text-success" />
                )}
              </motion.button>
            ))}
        </div>

        {/* Definitions Column */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Definitions</h4>
          {items
            .filter(item => item.type === 'definition')
            .map(item => (
              <motion.button
                key={item.id}
                onClick={() => handleSelect(item)}
                disabled={item.isMatched}
                className={`w-full p-4 rounded-lg border text-left transition-all duration-200 ${
                  item.isMatched
                    ? 'bg-success/10 border-success/30 opacity-60'
                    : wrongMatch.includes(item.id)
                    ? 'bg-destructive/10 border-destructive/50'
                    : selected?.id === item.id
                    ? 'bg-primary/10 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
                    : 'bg-card/50 border-border/50 hover:border-primary/30'
                }`}
                whileHover={!item.isMatched ? { scale: 1.02 } : {}}
                whileTap={!item.isMatched ? { scale: 0.98 } : {}}
              >
                <span className="text-sm text-muted-foreground">
                  {item.content}
                </span>
                {item.isMatched && (
                  <Check className="inline-block w-4 h-4 ml-2 text-success" />
                )}
              </motion.button>
            ))}
        </div>
      </div>
    </div>
  );
}
