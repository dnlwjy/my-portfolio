import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CMSList from "@/components/CMSList";
import { SiteMetaData } from "@/components/SiteMetaData";

const ProjectsPage = () => {
    return (
        <>
            <SiteMetaData
                title="Projects | Daniel Wijaya"
                description="Explore my projects and case studies."
                url="https://danielwijaya.com/projects"
                image="https://danielwijaya.com/og-projects.png"
            />

            <Header />
            <main className="py-10">
                <CMSList collection="projects" title1="Selected" title2="Projects" />
            </main>
            <Footer />
        </>
    );
};

export default ProjectsPage;