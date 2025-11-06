import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CMSList from "@/components/CMSList";
import ItemCard2 from "@/components/ui/ItemCard2";
import LoadingScreen from "@/components/ui/LoadingScreen";

const HomePage = () => {
  const [loading, setLoading] = useState(() => {
    // Only show loading on first visit
    const hasVisited = sessionStorage.getItem('homepage-visited');
    return !hasVisited;
  });

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('homepage-visited');
    
    if (!hasVisited) {
      // First visit - show loading screen
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('homepage-visited', 'true');
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 300);

      return () => clearTimeout(timer);
    } else {
      // Subsequent visits - no loading screen, just scroll to top
      setLoading(false);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CMSList collection="stack" CardComponent={ItemCard2} heading="My Stack" cols={3} maxItems={6} ViewAll={false} />
        <CMSList collection="projects" maxItems={4} featuredOnly />
        <CMSList collection="shop" maxItems={4} showPrice={true} featuredOnly />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;