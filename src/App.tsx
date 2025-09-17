import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContactPage from "./pages/Contact";
import ProjectDetails1 from "./pages/ProjectDetails1";
import ProjectDetails2 from "./pages/ProjectDetails2";
import ProjectDetails3 from "./pages/ProjectDetails3";
import ProjectDetails4 from "./pages/ProjectDetails4";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <div className="max-w-[900px] mx-auto">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project1" element={<ProjectDetails1 />} />
          <Route path="/project2" element={<ProjectDetails2 />} />
          <Route path="/project3" element={<ProjectDetails3/>} />
          <Route path="/project4" element={<ProjectDetails4 />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;