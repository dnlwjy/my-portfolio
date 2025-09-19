import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects"

const ProjectsPage = () => {

    return (
        <>
            <Navbar />
            <main className="py-20">
                <Projects
                    h1={true} />
            </main>
            <Footer />
        </>
    );
};

export default ProjectsPage;