import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import LinkButton from "@/components/ui/LinkButton";
import Tag from "@/components/ui/Tag";
import Footer from "@/components/Footer";
import { client, urlFor } from "@/sanityClient";
import { PortableText, PortableTextComponents } from '@portabletext/react';
import CMSList from "@/components/CMSList";
import LoadingScreen from "@/components/ui/LoadingScreen";

interface ProjectDetailsData {
  title: string;
  description?: any;
  coverImage?: any;
  year?: number;
  content?: any;
  tags?: string[];
}

const serializers: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="font-normal">{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h6: ({ children }) => <h6 className="my-6">{children}</h6>,
  },
  types: {
    image: ({ value }) => {
      return (
        <img
          src={urlFor(value).url()}
          alt={value.alt || "Project image"}
          className="rounded-lg mt-4 mb-12 border border-white/5"
        />
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code className="bg-gray-800 px-1 py-0.5 rounded">{children}</code>,
  },
};

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
    year,
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
      <LoadingScreen/>
    );

  return (
    <>
      <Header />
      <main>
        <section
          id={project.title || "project-details"}
          className="flex flex-col py-40 mx-auto items-start gap-20">

          <div className="flex flex-col gap-6">
            <LinkButton
              title="‹  Back"
              link="/projects"
              style={{ fontSize: "14px" }}
            />

            <h1>{project.title}</h1>

            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag, i) => (
                <Tag key={i} title={tag} />
              ))}
              {project.year && <Tag title={project.year.toString()} />}
            </div>

          </div>

          {project.coverImage && (
            <img
              src={urlFor(project.coverImage).url()}
              alt={project.title}
              className="w-full rounded-2xl border border-white/5"
            />
          )}

          <div className="flex flex-col gap-4">
            {project.description && (
              <PortableText
                value={project.description}
                components={serializers}
              />
            )}

            {project.content && (
              <PortableText
                value={project.content}
                components={serializers}
              />
            )}
          </div>
        </section>

        <section>
          <CMSList collection="projects" maxItems={2} />
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;