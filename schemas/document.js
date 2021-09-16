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
  ],
};
