import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LearningProvider } from "@/contexts/LearningContext";

// Sayfa Importları
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Learn from "./pages/Learn";
import Games from "./pages/Games";
import Confusing from './pages/Confusing';
import Topics from "./pages/Topics";
import Review from "./pages/Review"; // 1. Review sayfasını import ettik
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LearningProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/games" element={<Games />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/confusing" element={<Confusing />} />
            
            {/* 2. YENİ ROTAYI BURAYA EKLEDİK */}
            <Route path="/review" element={<Review />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LearningProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;