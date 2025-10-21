import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Tag from "@/components/ui/Tag";
import Footer from "@/components/Footer";
import { client, urlFor } from "@/sanityClient";
import { PortableText } from '@portabletext/react';
import CMSList from "@/components/CMSList";
import LoadingScreen from "@/components/ui/LoadingScreen";
import AnimationGroup from "@/components/ui/AnimationGroup";
import Serializers from "@/lib/Serializers";
import ProjectSupport from "@/components/ui/ProjectSupport";

interface ProjectDetailsData {
  title: string;
  description: any;
  coverImage: any;
  role: string;
  client: string;
  year: number;
  website: string;
  content: any;
  tags: string[];
}

const ProjectDetailsPage = () => {

  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectDetailsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    setIsLoading(true);
    setProject(null);

    client.fetch(
      `*[_type == "projects" && slug.current == $slug][0]{
    title,
    description,
    coverImage,
    role,
    client,
    year,
    website,
    tags,
    content
  }`,
      { slug }
    )
      .then((data) => {
        setProject(data);
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setIsLoading(false);
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, 300);
      })
      .catch(console.error);
  }, [slug]);

  if (isLoading || !project)
    return (
      <LoadingScreen />
    );

  return (
    <>
      <Header />
      <main>
        <section id={project.title} className="flex flex-col mx-auto md:pt-40 pt-28 gap-10 w-full">

          <AnimationGroup className="flex flex-col gap-4" delay={100}>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag, i) => (
                <Tag key={i} title={tag} />))}
            </div>

            <h1>{project.title}</h1>
          </AnimationGroup>

          <AnimationGroup delay={300} className="grid md:grid-cols-2 grid-cols-1 gap-10 w-full my-10">
            <ProjectSupport title="Role" description={project.role || "-"} />
            <ProjectSupport title="Client" description={project.client || "-"} />
            <ProjectSupport title="Year" description={project.year || "-"} />
            <ProjectSupport title="Website" description={project.website || "-"} />
          </AnimationGroup>

          <AnimationGroup delay={500}>
            {project.coverImage && (
              <img
                src={urlFor(project.coverImage).url()}
                alt={project.title}
                className="w-full rounded-2xl border border-white/5 mb-5"
              />
            )}
          </AnimationGroup>

          <AnimationGroup
            delay={300}>

            {project.content && (
              <PortableText
                value={project.content}
                components={Serializers}
              />
            )}
          </AnimationGroup>
        </section>

        <CMSList collection="projects" heading="More Projects" maxItems={2} excludeSlug={slug} />

      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;