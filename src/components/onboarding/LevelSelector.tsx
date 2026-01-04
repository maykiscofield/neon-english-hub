import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext';
import { Level } from '@/types/learning';

interface LevelOption {
  level: Level;
  title: string;
  description: string;
  examples: string[];
}

const levelOptions: LevelOption[] = [
  {
    level: 'pre-intermediate',
    title: 'Pre-Intermediate',
    description: 'You can understand simple sentences and express basic ideas. Ready to build stronger foundations.',
    examples: [
      'I can order food at a restaurant',
      'I understand the main point of simple texts',
      'I can describe my daily routine',
    ],
  },
  {
    level: 'intermediate',
    title: 'Intermediate',
    description: 'You can hold conversations on familiar topics and understand the main ideas in complex texts.',
    examples: [
      'I can discuss opinions on various topics',
      'I understand most TV shows with subtitles',
      'I can write detailed emails',
    ],
  },
  {
    level: 'upper-intermediate',
    title: 'Upper-Intermediate',
    description: 'You can engage in most conversations fluently and understand nuanced language.',
    examples: [
      'I can follow fast-paced discussions',
      'I understand idioms and cultural references',
      'I can express subtle differences in meaning',
    ],
  },
];

export function LevelSelector() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const { completeOnboarding } = useLearning();
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedLevel) {
      completeOnboarding(selectedLevel);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Level Selection</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Where should we </span>
            <span className="text-primary text-glow">start?</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Choose the level that best matches your current English ability. 
            Don't worry—you can always adjust later.
          </p>
        </motion.div>

        {/* Level Options */}
        <div className="space-y-4 mb-8">
          {levelOptions.map((option, index) => (
            <motion.div
              key={option.level}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedLevel(option.level)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                  selectedLevel === option.level
                    ? 'bg-primary/10 border-primary/50 shadow-[0_0_30px_hsl(var(--primary)/0.2)]'
                    : 'bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card/80'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedLevel === option.level
                      ? 'border-primary bg-primary'
                      : 'border-muted-foreground'
                  }`}>
                    {selectedLevel === option.level && (
                      <Check className="w-4 h-4 text-primary-foreground" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading text-xl font-semibold">
                        {option.title}
                      </h3>
                      {option.level === 'intermediate' && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded">
                          Recommended
                        </span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-3">
                      {option.description}
                    </p>
                    
                    <ul className="space-y-1">
                      {option.examples.map((example) => (
                        <li key={example} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <Button
            variant="neon"
            size="xl"
            onClick={handleContinue}
            disabled={!selectedLevel}
            className="group min-w-[200px]"
          >
            Continue
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Skip Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          We'll monitor your performance and suggest adjustments if needed.
        </motion.p>
      </div>
    </div>
  );
}
