export default {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",

      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },

      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",

      validation: (Rule) => Rule.required(),
    },
  ],
};
