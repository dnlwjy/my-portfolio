import { defineType } from "sanity";

export const projects = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    {
      name: "description",
      title: "Description",
      type: "text" // tetap pakai text untuk ringkas, atau ganti richText di bawah
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }, // untuk rich text: bold, italic, headings
        { type: "image" }, // untuk menyisipkan gambar
        {
          type: "object", // untuk custom link
          name: "link",
          fields: [
            { name: "text", type: "string", title: "Link Text" },
            { name: "href", type: "url", title: "URL" },
          ],
        },
      ],
    },
    { name: "coverImage", title: "Cover Image", type: "image" },
    { name: "price", title: "Price", type: "number" },
  ],
});