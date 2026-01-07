import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { LevelsSection } from '@/components/landing/LevelsSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="relative min-h-screen noise">
      <HeroSection />
      <FeaturesSection />
      <LevelsSection />
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Start Today</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Ready to </span>
              <span className="text-primary text-glow">Level Up</span>
              <span className="text-foreground">?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Master English with our unique spiral curriculum and neon-powered learning experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/onboarding">
                <Button variant="neon" size="xl" className="group w-full sm:w-auto">
                  Begin Your Journey
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              {/* Kütüphaneye doğrudan gitmek için opsiyonel bir buton */}
              <Link to="/topics">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Explore Library
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-heading font-bold uppercase italic">
                <span className="text-primary">Neon</span>
                <span className="text-foreground"> English Hub</span>
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Science-based learning. Neon-styled mastery.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Pre-Intermediate</span>
              <span>•</span>
              <span>Intermediate</span>
              <span>•</span>
              <span>Upper-Intermediate</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;