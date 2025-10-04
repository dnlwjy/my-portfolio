import { defineType } from "sanity";

export const projects = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "coverImage", title: "Cover Image", type: "image" },
    {
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.min(2020).max(new Date().getFullYear())
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.max(4),
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },
        {
          type: "object",
          name: "link",
          fields: [
            { name: "text", type: "string", title: "Link Text" },
            { name: "href", type: "url", title: "URL" },
          ],
        },
      ],
    },
  ],
});