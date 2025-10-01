import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CMSList from "@/components/CMSList"

const ProjectsPage = () => {
    return (
        <>
            <Header />
            <main className="py-20">
                <CMSList collection="projects" title1="Selected" title2="Projects"/>
            </main>
            <Footer />
        </>
    );
};

export default ProjectsPage;