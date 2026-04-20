import { defineType } from "sanity";

export const personalInfo = defineType({
  name: "personalInfo",
  title: "Personal Info",
  type: "document",
  orderings: [
    {
      title: 'Manual order',
      name: 'manualOrder',
      by: [
        {field: 'orderRank', direction: 'asc'}
      ]
    }
  ],
  fields: [
    { name: 'orderRank',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (1, 2, 3, etc.)',
      validation: (Rule) => Rule.min(1).integer(),
      initialValue: 100,
    },
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
  ],
});