export default {
  name: "navbar",
  title: "Navigation Bar",
  type: "document",
  fields: [
    {
      name: "navbar",
      title: "Navigation",
      type: "object",
      fields: [
        {
          name: "names",
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
          title: "Navigation",
        },
      ],
    },
    {
      name: "logo",
      title: "Navigation Logo",
      type: "image",
    },
  ],
};
