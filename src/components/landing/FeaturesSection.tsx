import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Brain, 
  Gamepad2, 
  Headphones, 
  RefreshCw, 
  Target,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Dictionary-First Learning',
    description: 'Build accurate mental representations with English-only definitions, IPA transcriptions, and contextual examples before diving into content.',
    color: 'primary',
  },
  {
    icon: Headphones,
    title: 'Listening-First Approach',
    description: 'Develop natural comprehension through authentic audio from TV series and music, with optional subtitles for support.',
    color: 'secondary',
  },
  {
    icon: Brain,
    title: 'Cognitive Science Foundation',
    description: 'Spaced repetition, active recall, and error-based learning work together to maximize long-term retention.',
    color: 'primary',
  },
  {
    icon: Target,
    title: 'Level-Aware Content',
    description: 'Pre-Intermediate to Upper-Intermediate paths with authentic content adapted to your current ability.',
    color: 'secondary',
  },
  {
    icon: Gamepad2,
    title: 'Adaptive Game Challenges',
    description: 'Word matching, fill-in-blanks, comprehension tests, and speed challenges that scale with your progress.',
    color: 'primary',
  },
  {
    icon: RefreshCw,
    title: 'Smart Review System',
    description: 'Problematic words get extra attention with simplified explanations, additional examples, and targeted practice.',
    color: 'secondary',
  },
  {
    icon: Sparkles,
    title: 'Interactive Word Assist',
    description: 'Click any word anywhere to instantly see definitions, pronunciations, and usage notes without breaking your flow.',
    color: 'primary',
  },
  {
    icon: TrendingUp,
    title: 'Deep Analytics',
    description: 'Track accuracy, vocabulary strength, grammar patterns, and improvement trends over time.',
    color: 'secondary',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
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
            <span className="text-foreground">Built on </span>
            <span className="text-primary text-glow">Learning Science</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Every feature is designed to maximize comprehension and retention, 
            not just engagement metrics.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-card/80"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-lg bg-${feature.color}/10 border border-${feature.color}/30 mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
