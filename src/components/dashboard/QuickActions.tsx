import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Gamepad2, RefreshCw, AlertTriangle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLearning } from '@/contexts/LearningContext';

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  variant: 'primary' | 'secondary' | 'warning';
  badge?: string;
  delay: number;
}

function ActionCard({ title, description, icon: Icon, href, variant, badge, delay }: ActionCardProps) {
  const variantClasses = {
    primary: 'hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]',
    secondary: 'hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.15)]',
    warning: 'hover:border-warning/50 hover:shadow-[0_0_30px_hsl(var(--warning)/0.15)]',
  };

  const iconClasses = {
    primary: 'text-primary bg-primary/10 border-primary/30',
    secondary: 'text-secondary bg-secondary/10 border-secondary/30',
    warning: 'text-warning bg-warning/10 border-warning/30',
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
            <div className={`p-3 rounded-lg border ${iconClasses[variant]}`}>
              <Icon className="w-6 h-6" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                  {title}
                </h3>
                {badge && (
                  <span className="px-2 py-0.5 text-xs font-medium bg-warning/20 text-warning rounded">
                    {badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            </div>
            
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function QuickActions() {
  const { getProblematicWords } = useLearning();
  const problematicCount = getProblematicWords().length;

  const actions: ActionCardProps[] = [
    {
      title: 'Continue Learning',
      description: 'Pick up where you left off with vocabulary lessons',
      icon: BookOpen,
      href: '/learn',
      variant: 'primary',
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
      title: 'Review Again',
      description: 'Deep review mode for words that need extra attention',
      icon: RefreshCw,
      href: '/review',
      variant: 'primary',
      badge: problematicCount > 0 ? `${problematicCount} words` : undefined,
      delay: 0.2,
    },
    {
      title: 'Confusing Words',
      description: 'Master commonly confused word pairs',
      icon: AlertTriangle,
      href: '/confusing',
      variant: 'warning',
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
