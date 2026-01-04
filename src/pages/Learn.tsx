import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { WordCard } from '@/components/vocabulary/WordCard';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext';
import { getWordsByLevel } from '@/data/vocabulary';
import { Navigate } from 'react-router-dom';

const Learn = () => {
  const { userProfile, isOnboarded } = useLearning();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }

  const words = getWordsByLevel(userProfile?.level || 'intermediate');
  const currentWord = words[currentIndex];

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % words.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="font-heading text-3xl font-bold mb-2">
              Vocabulary Learning
            </h1>
            <p className="text-muted-foreground">
              Dictionary-first approach: understand before you use
            </p>
          </motion.div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="text-sm text-muted-foreground">
              Word {currentIndex + 1} of {words.length}
            </span>
            <div className="flex-1 max-w-xs h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
              />
            </div>
          </motion.div>

          {/* Word Card */}
          {currentWord && (
            <motion.div
              key={currentWord.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <WordCard word={currentWord} />
            </motion.div>
          )}

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between mt-8"
          >
            <Button
              variant="neon-outline"
              onClick={goPrev}
              disabled={words.length <= 1}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {words.slice(0, 5).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'bg-primary w-6'
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
              {words.length > 5 && (
                <span className="text-xs text-muted-foreground">...</span>
              )}
            </div>

            <Button
              variant="neon"
              onClick={goNext}
              disabled={words.length <= 1}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            <Volume2 className="inline w-4 h-4 mr-1" />
            Click the speaker icons to hear British and American pronunciations
          </motion.p>
        </div>
      </main>
    </div>
  );
};

export default Learn;
