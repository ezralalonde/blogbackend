export default {
  name: "navbar",
  title: "Navigation Bar",
  type: "document",
  fields: [
    {
      name: "Item",
      type: "object",
      fields: [
        { name: "name", type: "string", title: "Name" },
        { name: "url", type: "string", title: "URL" },
      ],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: "Item.name",
    },
  },
};
