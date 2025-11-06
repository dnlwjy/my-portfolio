import { defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
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
    {
      name: 'orderRank',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (1, 2, 3, etc.)',
      validation: (Rule) => Rule.min(1).integer(),
      initialValue: 100,
    },
    { name: "question", title: "Question", type: "string" },
    { name: "answer", title: "Answer", type: "text" },
  ],
});