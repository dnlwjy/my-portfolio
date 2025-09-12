import Navbar from "@/components/Navbar";
import ProjectDetails from "@/components/ProjectDetails";

const ProjectDetails4 = () => {
  return (
    <>
    <Navbar />
    <main>
        <ProjectDetails 
        image="/image24.png"
        title="Project Details 4"
        description="desc for project details 4"
        year={2030}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        
    </main>
    </>
  );
};

export default ProjectDetails4;