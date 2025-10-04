import { defineType } from "sanity";

export const stack = defineType({
  name: "stack",
  title: "My Stack",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "coverImage", title: "Cover Image", type: "image" },
  ],
});
