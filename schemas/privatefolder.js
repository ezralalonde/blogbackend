export default {
  name: "privatefolder",
  title: "Folders",
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
      title: "Make this Folder Private",
      name: "private",
      type: "boolean",

      validation: (Rule) => Rule.required(),
    },
  ],
};
