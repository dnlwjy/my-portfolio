import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div>
    <Navbar />
      <main>
        <div className="ml-16 md:ml-16"> {/* Add margin to accommodate sidebar */}
          <div className="max-w-[840px] mx-auto px-4">
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
