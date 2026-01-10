import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Gamepad2, RefreshCw, AlertTriangle, ChevronRight, Library } from 'lucide-react';
import { useLearning } from '@/contexts/LearningContext';

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  variant: 'primary' | 'secondary' | 'warning' | 'purple' | 'danger'; // danger eklendi
  badge?: string;
  delay: number;
}

function ActionCard({ title, description, icon: Icon, href, variant, badge, delay }: ActionCardProps) {
  const variantClasses = {
    primary: 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]', // Yeşil Neon
    secondary: 'hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.15)]',
    warning: 'hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]', // Kehribar Neon
    purple: 'hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    danger: 'hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]', // Siber Kırmızı Neon
  };

  const iconClasses = {
    primary: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    secondary: 'text-secondary bg-secondary/10 border-secondary/30',
    warning: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    purple: 'text-purple-500 bg-purple-500/10 border-purple-500/30',
    danger: 'text-rose-400 bg-rose-500/10 border-rose-500/30', // Siber Kırmızı İkon
  };

  const textClasses = {
    primary: 'group-hover:text-emerald-400',
    secondary: 'group-hover:text-secondary',
    warning: 'group-hover:text-amber-400',
    purple: 'group-hover:text-purple-400',
    danger: 'group-hover:text-rose-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Link to={href}>
        <div className={`group relative p-6 rounded-xl bg-card/50 border border-border/50 transition-all duration-300 ${variantClasses[variant]}`}>
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg border ${iconClasses[variant]} group-hover:bg-opacity-20 transition-colors`}>
              <Icon className="w-6 h-6" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className={`font-heading font-semibold text-lg transition-colors ${textClasses[variant]}`}>
                  {title}
                </h3>
                {badge && (
                  <span className={`px-2 py-0.5 text-[10px] font-black uppercase rounded shadow-sm ${
                    variant === 'warning' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 
                    variant === 'danger' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' :
                    'bg-primary/20 text-primary'
                  }`}>
                    {badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground italic font-medium">
                {description}
              </p>
            </div>
            
            <ChevronRight className={`w-5 h-5 text-muted-foreground transition-all group-hover:translate-x-1 ${textClasses[variant]}`} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function QuickActions() {
  const { getProblematicWords, savedWords } = useLearning();
  
  const problematicCount = getProblematicWords ? getProblematicWords().length : 0;
  const savedCount = savedWords ? savedWords.length : 0;

  const actions: ActionCardProps[] = [
    {
      title: 'Continue Learning',
      description: 'Pick up where you left off with vocabulary lessons',
      icon: BookOpen,
      href: '/learn',
      variant: 'primary', // YEŞİL NEON
      delay: 0,
    },
    {
      title: 'Play Games',
      description: 'Practice with matching, fill-in-blank, and speed challenges',
      icon: Gamepad2,
      href: '/games',
      variant: 'secondary',
      delay: 0.1,
    },
    {
      title: 'Topic Library',
      description: 'Grammar, Tenses and special topics based on categories',
      icon: Library,
      href: '/topics',
      variant: 'purple',
      delay: 0.15,
    },
    {
      title: 'Review Again',
      description: 'Deep review mode for words that need extra attention',
      icon: RefreshCw,
      href: '/review',
      variant: 'warning', // KEHRİBAR NEON
      badge: problematicCount > 0 ? `${problematicCount} words` : undefined,
      delay: 0.2,
    },
    {
      title: 'Confusing Words',
      description: 'Master commonly confused word pairs and your saved list',
      icon: AlertTriangle,
      href: '/confusing',
      variant: 'danger', // SİBER KIRMIZI NEON
      badge: savedCount > 0 ? `${savedCount} saved` : undefined,
      delay: 0.3,
    },
  ];

  return (
    <div className="space-y-3">
      {actions.map((action) => (
        <ActionCard key={action.title} {...action} />
      ))}
    </div>
  );
}