
{/*
  This site is fully hand-coded by Daniel Wijaya.
  Built with React, Tailwind CSS, and 💻.
*/}

import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  
  return (
      <div>
        <Navbar />
        <main>
            <ProjectCaseStudy projectId={id} />
          <Footer />
        </main>
      </div>
  );
};

export default ProjectDetail;
