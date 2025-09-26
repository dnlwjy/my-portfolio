import { defineType } from "sanity";

export const stack = defineType({
  name: "my-stack", // collection name
  title: "My Stack",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "description", title: "Description", type: "string" },
    { name: "image", title: "Image", type: "image" },
  ],
});