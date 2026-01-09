import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden">
      <Navbar />

      {/* Arka Plan Dekorasyonu (Grid ve Noise) */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      <div className="fixed top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />

      <main className="pt-32 pb-20 relative z-10 flex items-center justify-center min-h-[80vh]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          
          {/* Header Bölümü */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-heading text-8xl md:text-[150px] font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-white/10 uppercase italic tracking-tighter leading-none select-none">
              404
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_20px_rgba(var(--primary),0.8)] -mt-4 md:-mt-8" />
          </motion.div>

          {/* Mağara Adamı Animasyon Kutusu (Neon Frame) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            className="relative mx-auto w-full max-w-[500px] aspect-video bg-white rounded-[32px] overflow-hidden border-4 border-white/5 shadow-[0_0_50px_rgba(255,255,255,0.05)] group"
          >
            {/* Animasyonun kendisi */}
            <div 
              className="absolute inset-0 w-full h-full bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
                backgroundSize: 'cover',
              }}
            />
            
            {/* Üzerine Neon Glitch Efekti (Opsiyonel) */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Mesaj Bölümü */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
                LOOK LIKE <span className="text-primary">YOU'RE LOST</span>
              </h2>
              <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">
                The neural link to this page has been severed.
              </p>
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                asChild
                variant="neon"
                className="h-14 px-10 rounded-2xl font-black tracking-tighter uppercase italic shadow-[0_0_30px_rgba(var(--primary),0.3)] bg-primary text-black w-full sm:w-auto"
              >
                <Link to="/dashboard">
                  <Home className="w-5 h-5 mr-2" />
                  Return Dashboard
                </Link>
              </Button>

              <Button
                asChild
                variant="neon-outline"
                className="h-14 px-10 rounded-2xl border-white/10 hover:bg-white/5 font-black uppercase italic tracking-widest text-primary w-full sm:w-auto"
              >
                <Link to="/learn">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Keep Learning
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Alt Dekoratif Parlama */}
      <div className="fixed -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};

export default NotFound;