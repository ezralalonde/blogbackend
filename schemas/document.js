export default {
  name: "documents",
  title: "Documents",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "document",
      title: "Document",
      type: "file",
      options: {
        storeOriginalFilename: true,
      },
    },
    {
      name: "folder",
      title: "Folder",
      type: "reference",
      to: { type: "folder" },
    },
  ],
};
