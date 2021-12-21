export default {
  name: "homepage",
  title: "Home Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",

      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },

      validation: (Rule) => Rule.required(),
    },
  ],
};
