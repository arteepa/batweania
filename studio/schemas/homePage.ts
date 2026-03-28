import { defineType, defineField } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // ── Hero ───────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 4 }),
        defineField({
          name: "primaryCta",
          title: "Primary CTA",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
        }),
        defineField({
          name: "secondaryCta",
          title: "Secondary CTA",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
        }),
      ],
    }),

    defineField({
      name: "featuredImage",
      title: "Featured image (full width below hero)",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),

    // ── Ubicación (Mission) ─────────────────────────────
    defineField({
      name: "mission",
      title: "Ubicación Section (¿Por qué aquí?)",
      type: "object",
      fields: [
        defineField({ name: "headline", title: "Headline", type: "string", validation: (r) => r.required() }),
        defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
      ],
    }),

    // ── Misión (Sanctuary) ──────────────────────────────
    defineField({
      name: "sanctuary",
      title: "Misión Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "intro", title: "Intro", type: "text", rows: 2 }),
        defineField({
          name: "items",
          title: "Mission Items",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "images",
          title: "Images",
          type: "array",
          of: [
            {
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
              ],
            },
          ],
          validation: (r) => r.max(3),
        }),
      ],
    }),

    // ── Logros ─────────────────────────────────────────
    defineField({
      name: "logros",
      title: "¿Qué hemos logrado?",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "intro", title: "Intro", type: "text", rows: 2 }),
        defineField({
          name: "items",
          title: "Logros",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),

    // ── Voluntariado (Contribute) ───────────────────────
    defineField({
      name: "contribute",
      title: "Voluntariado Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "intro", title: "Intro", type: "text", rows: 2 }),
        defineField({ name: "body", title: "Body (HTML allowed)", type: "text", rows: 4 }),
        defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
        defineField({ name: "ctaHref", title: "CTA Link", type: "string" }),
      ],
    }),

    // ── Gallery ────────────────────────────────────────
    defineField({
      name: "gallery",
      title: "Gallery Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "images",
          title: "Images",
          type: "array",
          of: [
            {
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
              ],
            },
          ],
        }),
      ],
    }),

    // ── Contact ────────────────────────────────────────
    defineField({
      name: "contact",
      title: "Contact Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
        defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
        defineField({ name: "instagramHandle", title: "Instagram Handle (e.g. @parque.batweania)", type: "string" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
