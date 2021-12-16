export default {
  name: "documents",
  title: "Documents",
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
      name: "folder",
      title: "Folder",
      type: "reference",
      to: { type: "folder" },

      validation: (Rule) => Rule.required(),
    },
  ],
};
