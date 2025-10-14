import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ShopDetailsPage from "./pages/ShopDetailsPage";
import ShopPage from "./pages/ShopPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <Sonner />
      <BrowserRouter>
        <div className="max-w-[900px] p-6 mx-auto overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:slug" element={<ShopDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;