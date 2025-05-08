
{/*
  This site is fully hand-coded by Daniel Wijaya.
  Built with React, Tailwind CSS, and 💻.
*/}

import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import ProjectsContent from "@/components/ProjectsContent";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#121212] text-white">
        <Navbar />
        <div className="ml-16 md:ml-16"> {/* Add margin to accommodate sidebar */}
          <div className="max-w-[840px] mx-auto px-4">
            <ProjectsContent />
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProjectsPage;
