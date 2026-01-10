import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen, Gamepad2, BarChart3, RefreshCw, Zap, PencilLine } from 'lucide-react';
import { cn } from '@/lib/utils';

// Her bölüme özel neon renkleri
const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: BarChart3, color: '#06b6d4' }, // Cyan
  { href: '/learn', label: 'Learn', icon: BookOpen, color: '#10b981' },         // Emerald
  { href: '/writing', label: 'Writing', icon: PencilLine, color: '#00f2ff' },   // Ice Blue (İkon PencilLine yapıldı)
  { href: '/games', label: 'Games', icon: Gamepad2, color: '#a855f7' },         // Purple
  { href: '/review', label: 'Review', icon: RefreshCw, color: '#f59e0b' },       // Amber
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:bg-primary/30 transition-colors" />
              <Zap className="w-5 h-5 text-primary relative z-10" />
            </div>
            <span className="font-heading font-bold text-lg italic uppercase tracking-tighter">
              <span className="text-primary">Preparatory</span>
              <span className="text-white">Master</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link key={item.href} to={item.href}>
                  <button
                    className={cn(
                      "relative px-4 py-2 rounded-xl text-[10px] font-black uppercase italic tracking-widest transition-all duration-500 flex items-center gap-2 border",
                      isActive 
                        ? "bg-white/[0.03]" 
                        : "text-gray-500 border-transparent hover:bg-white/[0.02]"
                    )}
                    style={{
                      color: isActive ? item.color : undefined,
                      borderColor: isActive ? `${item.color}40` : undefined,
                      boxShadow: isActive ? `0 0 20px ${item.color}15` : undefined,
                    } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = item.color;
                        e.currentTarget.style.borderColor = `${item.color}30`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '';
                        e.currentTarget.style.borderColor = 'transparent';
                      }
                    }}
                  >
                    <Icon 
                      size={16} 
                      style={{ color: isActive ? item.color : 'inherit' }} 
                    />
                    {item.label}

                    {/* Aktif Indicator (Alt Çizgi) */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-glow-indicator"
                        className="absolute -bottom-[1px] left-2 right-2 h-[2px] blur-[0.5px]"
                        style={{ 
                          backgroundColor: item.color, 
                          boxShadow: `0 0 10px ${item.color}` 
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden glass border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black uppercase italic tracking-widest transition-all",
                    isActive ? "bg-white/5" : "text-gray-500"
                  )}
                  style={{ color: isActive ? item.color : undefined }}
                >
                  <Icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}