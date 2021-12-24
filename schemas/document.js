export default {
  name: "documents",
  title: "Public Documents",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",

      validation: (Rule) => Rule.required(),
    },
    {
      name: "document",
      title: "Document",
      type: "file",
      options: {
        storeOriginalFilename: true,
      },

      validation: (Rule) => Rule.required(),
    },
    {
      name: "privatefolder",
      title: "Folder",
      type: "reference",
      to: { type: "privatefolder" },

      validation: (Rule) => Rule.required(),
    },
  ],
};
