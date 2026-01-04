import { Level } from '@/types/learning';
import { cn } from '@/lib/utils';

interface LevelBadgeProps {
  level: Level;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const levelConfig = {
  'pre-intermediate': {
    label: 'Pre-Intermediate',
    shortLabel: 'Pre-Int',
    color: 'bg-warning/10 text-warning border-warning/30',
  },
  'intermediate': {
    label: 'Intermediate',
    shortLabel: 'Int',
    color: 'bg-primary/10 text-primary border-primary/30',
  },
  'upper-intermediate': {
    label: 'Upper-Intermediate',
    shortLabel: 'Upper-Int',
    color: 'bg-secondary/10 text-secondary border-secondary/30',
  },
};

export function LevelBadge({ level, size = 'md', showLabel = true }: LevelBadgeProps) {
  const config = levelConfig[level];
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-md border',
        config.color,
        sizeClasses[size]
      )}
    >
      {showLabel ? config.label : config.shortLabel}
    </span>
  );
}
