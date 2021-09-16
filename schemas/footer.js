export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "locallinks",
      title: "Local Links",
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
          title: "Names",
        },
      ],
    },

    {
      name: "officeinfo",
      title: "Office Information",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
