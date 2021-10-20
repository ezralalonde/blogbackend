export default {
  name: "privatedocument",
  title: "Private Documents",
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
      name: "privatefolder",
      title: "Folder",
      type: "reference",
      to: { type: "privatefolder" },
    },
  ],
};
