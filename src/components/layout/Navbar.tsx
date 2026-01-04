import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen, Gamepad2, BarChart3, RefreshCw, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  { href: '/learn', label: 'Learn', icon: BookOpen },
  { href: '/games', label: 'Games', icon: Gamepad2 },
  { href: '/review', label: 'Review', icon: RefreshCw },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:bg-primary/30 transition-colors" />
              <Zap className="w-5 h-5 text-primary relative z-10" />
            </div>
            <span className="font-heading font-bold text-lg">
              <span className="text-primary">Preparatory</span>
              <span className="text-foreground">Master</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link key={item.href} to={item.href}>
                  <Button
                    variant={isActive ? 'neon-outline' : 'neon-ghost'}
                    size="sm"
                    className={cn(
                      'relative',
                      isActive && 'border-primary/50'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 rounded-md bg-primary/10 -z-10"
                        transition={{ type: 'spring', duration: 0.5 }}
                      />
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="neon-ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden glass border-b border-border/50"
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
                >
                  <Button
                    variant={isActive ? 'neon-outline' : 'neon-ghost'}
                    className="w-full justify-start"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
