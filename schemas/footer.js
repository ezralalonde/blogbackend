export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "items",
      type: "array",

      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "url", type: "string", title: "URL" },
          ],
        },
      ],
      title: "Items",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
