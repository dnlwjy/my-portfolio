import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CMSList from "@/components/CMSList"

const ProjectsPage = () => {
    return (
        <>
            <Header />
            <main className="py-10">
                <CMSList collection="projects" h1={true} />
            </main>
            <Footer />
        </>
    );
};

export default ProjectsPage;