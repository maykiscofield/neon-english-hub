import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react"; 
import { LearningProvider } from "@/contexts/LearningContext";
import Review from './pages/Review'; //
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Learn from "./pages/Learn";
import Games from "./pages/Games";
import Confusing from './pages/Confusing';
import NotFound from "./pages/NotFound";
import Topics from "@/pages/Topics";
import Writing from './pages/Writing';

const queryClient = new QueryClient();

const ScrollRestore = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Listelere (/topics veya /learn) girildiğinde zorla en üste ÇIKMA.
    // Bırak Topics.tsx içindeki useScrollRestore kendi hafızasındaki yeri bulsun.
    const isListPage = pathname === "/topics" || pathname === "/learn";
    
    if (!isListPage) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LearningProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollRestore /> 
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/review" element={<Review />} />
            <Route path="/games" element={<Games />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/:topicId" element={<Topics />} />
            <Route path="/confusing" element={<Confusing />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/writing" element={<Writing />} />
          </Routes>
        </BrowserRouter>
      </LearningProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;