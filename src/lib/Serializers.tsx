import { PortableTextComponents } from '@portabletext/react';
import { urlFor } from "@/sanityClient";

const serializers: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2 className='mt-8'>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h6: ({ children }) => <h6 className="mt-6 mb-[-10px]">{children}</h6>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 pl-4 py-3 border-l-4 font-inter text-[20px] border-darkgray bg-white/2 text-white">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => {
      return (
        <img
          src={urlFor(value).url()}
          alt={value.alt || "Project image"}
          className="rounded-lg my-4 border border-white/5"
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
    link: ({ value, children }) => (
    <a
      href={value?.href}
      className="text-white hover:underline"
      target={value?.blank ? "_blank" : "_self"}
      rel={value?.blank ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  },
};

export default serializers;