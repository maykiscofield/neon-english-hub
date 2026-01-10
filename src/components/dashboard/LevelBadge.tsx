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
    // DEĞİŞİKLİK BURADA: Learn sayfasıyla uyumlu Emerald (Yeşil) yapıldı
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.1)]',
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
    sm: 'px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter',
    md: 'px-3 py-1 text-xs font-bold uppercase tracking-tight',
    lg: 'px-4 py-1.5 text-sm font-bold uppercase',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border italic transition-all duration-300',
        config.color,
        sizeClasses[size]
      )}
    >
      {showLabel ? config.label : config.shortLabel}
    </span>
  );
}