import { defineType } from "sanity";

export const contact = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    { name: "label", title: "Label", type: "string" },
    { name: "value", title: "Value", type: "string" },
  ],
});
