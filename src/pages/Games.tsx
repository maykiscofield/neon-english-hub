import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Zap, Timer, Brain, Headphones } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { MatchingGame } from '@/components/games/MatchingGame';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext';
import { Navigate } from 'react-router-dom';

type GameMode = 'matching' | 'fill-blank' | 'speed' | 'listening' | null;

const gameOptions = [
  {
    id: 'matching' as GameMode,
    title: 'Word Matching',
    description: 'Match words with their definitions',
    icon: Brain,
    color: 'primary',
  },
  {
    id: 'fill-blank' as GameMode,
    title: 'Fill in the Blank',
    description: 'Complete sentences with the right word',
    icon: Zap,
    color: 'secondary',
    comingSoon: true,
  },
  {
    id: 'speed' as GameMode,
    title: 'Speed Challenge',
    description: 'Test your vocabulary under time pressure',
    icon: Timer,
    color: 'warning',
    comingSoon: true,
  },
  {
    id: 'listening' as GameMode,
    title: 'Listening Quiz',
    description: 'Identify words from audio clips',
    icon: Headphones,
    color: 'success',
    comingSoon: true,
  },
];

const Games = () => {
  const { isOnboarded } = useLearning();
  const [activeGame, setActiveGame] = useState<GameMode>(null);

  if (!isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {activeGame === null ? (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
                  <Gamepad2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Game Mode</span>
                </div>
                <h1 className="font-heading text-4xl font-bold mb-4">
                  <span className="text-foreground">Practice Through </span>
                  <span className="text-primary text-glow">Play</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Adaptive challenges that scale with your progress, not your grammar level.
                </p>
              </motion.div>

              {/* Game Selection */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {gameOptions.map((game, index) => (
                  <motion.button
                    key={game.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => !game.comingSoon && setActiveGame(game.id)}
                    disabled={game.comingSoon}
                    className={`relative p-8 rounded-xl border text-left transition-all duration-300 ${
                      game.comingSoon
                        ? 'bg-card/30 border-border/30 opacity-60 cursor-not-allowed'
                        : 'bg-card/50 border-border/50 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]'
                    }`}
                  >
                    {game.comingSoon && (
                      <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded">
                        Coming Soon
                      </span>
                    )}
                    
                    <div className={`inline-flex p-4 rounded-xl bg-${game.color}/10 border border-${game.color}/30 mb-4`}>
                      <game.icon className={`w-8 h-8 text-${game.color}`} />
                    </div>
                    
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {game.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {game.description}
                    </p>
                  </motion.button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6"
              >
                <Button
                  variant="neon-ghost"
                  onClick={() => setActiveGame(null)}
                >
                  ← Back to Games
                </Button>
              </motion.div>

              {/* Active Game */}
              {activeGame === 'matching' && <MatchingGame />}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Games;
