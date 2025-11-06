import { defineType } from "sanity";

export const stack = defineType({
  name: "stack",
  title: "My Stack",
  type: "document",
  fields: [
    { 
      name: "order", 
      title: "Display Order", 
      type: "number", 
      initialValue: 0,
      description: "Lower numbers appear first (0, 1, 2, etc.)"
    },
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "coverImage", title: "Cover Image", type: "image" },
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
  ],
});