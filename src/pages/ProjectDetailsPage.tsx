import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client, urlFor } from "@/sanityClient";
import { PortableText } from '@portabletext/react';

interface ProjectDetailsData {
  title: string;
  description: string;
  coverImage: any;
  year?: number;
  content?: any;
}

const ProjectDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectDetailsData | null>(null);

  useEffect(() => {
    if (!slug) return;

    client.fetch(`*[_type == "projects" && slug.current == $slug][0]{
      title,
      description,
      coverImage,
      year,
      content
    }`, { slug })
      .then((data) => setProject(data))
      .catch(console.error);
  }, [slug]);

  if (!project) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <main className="p-6 pt-20">
        <section>
          {project.coverImage && (
            <img src={urlFor(project.coverImage).url()} alt={project.title} className="mb-6" />
          )}
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          {project.content && <PortableText value={project.content} />}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;