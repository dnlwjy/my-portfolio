import { defineType } from "sanity";

export const stack = defineType({
  name: "stack",
  title: "Stack",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "logo", title: "Logo", type: "image" },
    { name: "category", title: "Category", type: "string" },
  ],
});
