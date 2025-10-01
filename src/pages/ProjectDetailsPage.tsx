import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client, urlFor } from "@/sanityClient";
import { PortableText, PortableTextComponents } from '@portabletext/react';

interface ProjectDetailsData {
  title: string;
  description?: any; // rich text block array
  coverImage?: any;
  year?: number;
  content?: any; // rich text block array
}

const serializers: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="text-4xl mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl mb-5">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl mb-4">{children}</h3>,
  },
  types: {
    image: ({ value }) => {
      // value.asset._ref atau value.asset._id tergantung setup sanity
      return (
        <img
          src={urlFor(value).url()}
          alt={value.alt || "Project image"}
          className="my-6 rounded-lg w-full"
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
        content
      }`,
      { slug }
    )
    .then((data) => setProject(data))
    .catch(console.error);
  }, [slug]);

  if (!project) return <div className="text-white text-center mt-20">Loading...</div>;

  return (
    <>
      <Header />
      <main className="p-6 pt-24 max-w-4xl mx-auto items-start justify-start">
        {project.coverImage && (
          <img
            src={urlFor(project.coverImage).url()}
            alt={project.title}
            className="w-full h-auto rounded-2xl mb-8"
          />
        )}

        <h1 className="mb-4">{project.title}</h1>
        {project.year && <p>{project.year}</p>}

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
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailsPage;