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

  useEffect(() => {
    if (!slug) return;

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

      .then((data) => setProject(data))
      .catch(console.error);
  }, [slug]);

  if (!project)
    return (
      <LoadingScreen />
    );

  return (
    <>
      <Header />
      <main>
        <section
          id={project.title || "project-details"}
          className="flex flex-col pt-40 mx-auto items-start gap-20">

          <div className="flex flex-col gap-10">

            <AnimationGroup
              delay={100}
            >
              <h1>
                {project.title}
              </h1>
            </AnimationGroup>

            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag, i) => (
                <AnimationGroup
                  delay={i * 100 + 200}
                  direction="up">
                  <Tag key={i} title={tag} />
                </AnimationGroup>
              ))}

            </div>

            <AnimationGroup delay={200} className="flex items-center gap-6 my-5">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-full">
                <ProjectSupport title="Role" description={project.role || "-"} />
                <ProjectSupport title="Client" description={project.client || "-"} />
                <ProjectSupport title="Year" description={project.year || "-"} />
                <ProjectSupport title="Website" description={project.website || "-"} />
            </div>
             </AnimationGroup>
            
            <AnimationGroup
              delay={500}
            >
              {project.coverImage && (
                <img
                  src={urlFor(project.coverImage).url()}
                  alt={project.title}
                  className="w-full rounded-2xl border border-white/5"
                />
              )}
            </AnimationGroup>

            <AnimationGroup
              delay={500}
              className="flex flex-col gap-4">

              {project.content && (
                <PortableText
                  value={project.content}
                  components={Serializers}
                />
              )}
            </AnimationGroup>
          </div>
        </section>

        <section>
          <CMSList collection="projects" maxItems={2} excludeSlug={slug} />
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;