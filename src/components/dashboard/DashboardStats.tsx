import { motion } from 'framer-motion';
import { Flame, Target, BookOpen, TrendingUp } from 'lucide-react';
import { useLearning } from '@/contexts/LearningContext';

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
  subtext?: string;
  color: 'primary' | 'secondary' | 'success' | 'warning';
  delay: number;
}

function StatCard({ icon: Icon, label, value, subtext, color, delay }: StatCardProps) {
  const colorClasses = {
    primary: 'text-primary bg-primary/10 border-primary/30',
    secondary: 'text-secondary bg-secondary/10 border-secondary/30',
    success: 'text-success bg-success/10 border-success/30',
    warning: 'text-warning bg-warning/10 border-warning/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <p className="font-heading text-3xl font-bold">{value}</p>
          {subtext && (
            <p className="text-xs text-muted-foreground mt-1">{subtext}</p>
          )}
        </div>
        <div className={`p-3 rounded-lg border ${colorClasses[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
}

export function DashboardStats() {
  const { userProfile, progress } = useLearning();
  
  const totalReviewed = progress.size;
  const problematicCount = Array.from(progress.values()).filter(p => p.isProblematic).length;
  const masteredCount = Array.from(progress.values()).filter(p => p.streak >= 5).length;

  const stats = [
    {
      icon: Flame,
      label: 'Current Streak',
      value: userProfile?.streak || 0,
      subtext: 'days in a row',
      color: 'warning' as const,
    },
    {
      icon: BookOpen,
      label: 'Words Reviewed',
      value: totalReviewed,
      subtext: `${masteredCount} mastered`,
      color: 'primary' as const,
    },
    {
      icon: Target,
      label: 'Weekly Goal',
      value: `${userProfile?.weeklyProgress || 0}/${userProfile?.weeklyGoal || 50}`,
      subtext: 'words this week',
      color: 'success' as const,
    },
    {
      icon: TrendingUp,
      label: 'Needs Review',
      value: problematicCount,
      subtext: 'problematic words',
      color: 'secondary' as const,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={stat.label} {...stat} delay={index * 0.1} />
      ))}
    </div>
  );
}
