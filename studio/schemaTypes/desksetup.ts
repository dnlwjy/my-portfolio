import { defineType } from "sanity";

export const desksetup = defineType({
  name: "desk-setup", // collection name
  title: "Desk Setup",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "description", title: "Description", type: "string" },
    { name: "image", title: "Image", type: "image" },
  ],
});