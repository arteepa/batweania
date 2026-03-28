import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logoIcon",
      title: "Logo Icon (Material Symbol name)",
      type: "string",
      initialValue: "flutter_dash",
    }),
    defineField({
      name: "navItems",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "href", title: "Link", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "style",
              title: "Style",
              type: "string",
              options: { list: ["default", "emphasis"] },
              initialValue: "default",
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),
    defineField({
      name: "footerLinks",
      title: "Footer Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "href", title: "Link", type: "string", validation: (r) => r.required() }),
          ],
          preview: {
            select: { title: "label" },
          },
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon (Material Symbol name)", type: "string", validation: (r) => r.required() }),
            defineField({ name: "href", title: "Link", type: "string", validation: (r) => r.required() }),
          ],
          preview: {
            select: { title: "icon", subtitle: "href" },
          },
        },
      ],
    }),
    defineField({
      name: "copyrightLine",
      title: "Copyright Line (legacy — use Footer credit when possible)",
      type: "string",
    }),
    defineField({
      name: "footerCredit",
      title: "Footer credit",
      description:
        "Shown as: prefix + linked label (e.g. website donado por + tiemposmejores.org).",
      type: "object",
      fields: [
        defineField({
          name: "prefix",
          title: "Text before link",
          type: "string",
          initialValue: "website donado por",
        }),
        defineField({
          name: "linkLabel",
          title: "Link label",
          type: "string",
          initialValue: "tiemposmejores.org",
        }),
        defineField({
          name: "linkUrl",
          title: "Link URL",
          type: "url",
          initialValue: "https://tiemposmejores.org",
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
