import { motion } from 'framer-motion';
import { RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { WordCard } from '@/components/vocabulary/WordCard';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext';
import { getWordById } from '@/data/vocabulary';
import { Navigate, Link } from 'react-router-dom';

const Review = () => {
  const { isOnboarded, getProblematicWords } = useLearning();
  const problematicIds = getProblematicWords();
  const problematicWords = problematicIds
    .map(id => getWordById(id))
    .filter(Boolean);

  if (!isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 border border-warning/30 mb-4">
              <RefreshCw className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium text-warning">Review Again</span>
            </div>
            <h1 className="font-heading text-3xl font-bold mb-2">
              Deep Review Mode
            </h1>
            <p className="text-muted-foreground">
              Extra attention for words that need it most
            </p>
          </motion.div>

          {problematicWords.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="font-heading text-2xl font-semibold mb-2">
                All Clear!
              </h2>
              <p className="text-muted-foreground mb-6">
                You don't have any problematic words right now. 
                Keep practicing to maintain your progress!
              </p>
              <Link to="/learn">
                <Button variant="neon">
                  Continue Learning
                </Button>
              </Link>
            </motion.div>
          ) : (
            <>
              {/* Alert */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-warning/5 border border-warning/30 mb-8"
              >
                <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">
                    {problematicWords.length} word{problematicWords.length > 1 ? 's' : ''} need extra attention
                  </p>
                  <p className="text-sm text-muted-foreground">
                    These words have been answered incorrectly 3 or more times. 
                    Review them carefully before continuing.
                  </p>
                </div>
              </motion.div>

              {/* Words List */}
              <div className="space-y-6">
                {problematicWords.map((word, index) => (
                  word && (
                    <motion.div
                      key={word.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <WordCard word={word} />
                    </motion.div>
                  )
                ))}
              </div>

              {/* Action */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-8"
              >
                <Link to="/games">
                  <Button variant="neon" size="lg">
                    Practice These Words
                  </Button>
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Review;
