import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Level } from '@/types/learning';

interface LevelCardProps {
  level: Level;
  title: string;
  subtitle: string;
  features: string[];
  color: string;
  delay: number;
}

const levels: LevelCardProps[] = [
  {
    level: 'pre-intermediate',
    title: 'Pre-Intermediate',
    subtitle: 'Building Foundations',
    features: [
      'Core vocabulary expansion',
      'Present Perfect basics',
      'Essential phrasal verbs',
      'Common collocations',
      'Everyday listening practice',
    ],
    color: 'warning',
    delay: 0,
  },
  {
    level: 'intermediate',
    title: 'Intermediate',
    subtitle: 'Expanding Horizons',
    features: [
      'Advanced vocabulary in context',
      'Past Perfect & Passive Voice',
      'Reported Speech mastery',
      'Complex sentence structures',
      'TV series comprehension',
    ],
    color: 'primary',
    delay: 0.1,
  },
  {
    level: 'upper-intermediate',
    title: 'Upper-Intermediate',
    subtitle: 'Achieving Fluency',
    features: [
      'Nuanced vocabulary usage',
      'Mixed conditionals',
      'Advanced tense distinctions',
      'Idiomatic expressions',
      'Native-speed listening',
    ],
    color: 'secondary',
    delay: 0.2,
  },
];

function LevelCard({ level, title, subtitle, features, color, delay }: LevelCardProps) {
  const isPrimary = color === 'primary';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative p-8 rounded-2xl border transition-all duration-300 ${
        isPrimary
          ? 'bg-primary/5 border-primary/30 hover:border-primary/50'
          : 'bg-card/50 border-border/50 hover:border-primary/30'
      }`}
    >
      {isPrimary && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <div className={`inline-block px-3 py-1 rounded-md text-sm font-medium mb-3 ${
          color === 'warning' ? 'bg-warning/10 text-warning' :
          color === 'primary' ? 'bg-primary/10 text-primary' :
          'bg-secondary/10 text-secondary'
        }`}>
          {subtitle}
        </div>
        <h3 className="font-heading text-2xl font-bold">{title}</h3>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
              color === 'warning' ? 'text-warning' :
              color === 'primary' ? 'text-primary' :
              'text-secondary'
            }`} />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to="/onboarding">
        <Button
          variant={isPrimary ? 'neon' : 'neon-outline'}
          className="w-full group"
        >
          Start at this level
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </motion.div>
  );
}

export function LevelsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-foreground">Choose Your </span>
            <span className="text-primary text-glow">Level</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Start where you are. Content adapts to your ability while 
            maintaining authentic English exposure.
          </motion.p>
        </div>

        {/* Level Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {levels.map((level) => (
            <LevelCard key={level.level} {...level} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          Not sure which level? Take our short listening-based diagnostic 
          during onboarding, and we'll recommend the best starting point for you.
        </motion.p>
      </div>
    </section>
  );
}
