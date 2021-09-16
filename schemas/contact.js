export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "contact",
      title: "Contact",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "officehours",
      title: "Office Hours",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "personnel",
      title: "Personnel",
      type: "object",
      fields: [
        {
          name: "name",
          type: "array",

          of: [
            {
              type: "object",
              fields: [
                { name: "name", type: "string", title: "Name" },
                { name: "number", type: "string", title: "Number" },
              ],
            },
          ],
          title: "Names",
        },
      ],
    },
  ],
};
