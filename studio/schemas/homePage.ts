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
        defineField({ name: "titlePlain", title: "Title (plain part)", type: "string", validation: (r) => r.required() }),
        defineField({ name: "titleItalic", title: "Title (italic part)", type: "string", validation: (r) => r.required() }),
        defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 3 }),
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
        defineField({
          name: "heroImage",
          title: "Hero Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
          ],
        }),
        defineField({
          name: "floatingCard",
          title: "Floating Card",
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 2 }),
          ],
        }),
      ],
    }),

    // ── Mission ────────────────────────────────────────
    defineField({
      name: "mission",
      title: "Mission Section",
      type: "object",
      fields: [
        defineField({ name: "icon", title: "Icon", type: "string" }),
        defineField({ name: "headline", title: "Headline", type: "string", validation: (r) => r.required() }),
        defineField({ name: "quote", title: "Quote", type: "text", rows: 4 }),
        defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
      ],
    }),

    // ── Sanctuary ──────────────────────────────────────
    defineField({
      name: "sanctuary",
      title: "Sanctuary Rules Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "intro", title: "Intro", type: "text", rows: 2 }),
        defineField({
          name: "rules",
          title: "Rules",
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

    // ── Trail Map ──────────────────────────────────────
    defineField({
      name: "trail",
      title: "Trail Map Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "intro", title: "Intro", type: "text", rows: 2 }),
        defineField({
          name: "mapImage",
          title: "Map Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
          ],
        }),
        defineField({
          name: "featuredRoute",
          title: "Featured Route",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "meta", title: "Meta (distance, difficulty)", type: "string" }),
          ],
        }),
        defineField({
          name: "bentoTiles",
          title: "Bento Tiles",
          type: "array",
          of: [
            {
              type: "object",
              name: "observation",
              title: "Observation",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "body", title: "Body", type: "string" }),
                defineField({ name: "icon", title: "Icon", type: "string" }),
              ],
              preview: { select: { title: "title" } },
            },
            {
              type: "object",
              name: "stat",
              title: "Stat",
              fields: [
                defineField({ name: "value", title: "Value", type: "string" }),
                defineField({ name: "label", title: "Label", type: "string" }),
              ],
              preview: { select: { title: "label", subtitle: "value" } },
            },
            {
              type: "object",
              name: "iconCallout",
              title: "Icon Callout",
              fields: [
                defineField({ name: "icon", title: "Icon", type: "string" }),
                defineField({ name: "label", title: "Label", type: "string" }),
              ],
              preview: { select: { title: "label" } },
            },
          ],
        }),
      ],
    }),

    // ── Contribute ─────────────────────────────────────
    defineField({
      name: "contribute",
      title: "Contribute Section",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "intro", title: "Intro", type: "text", rows: 2 }),
        defineField({
          name: "cards",
          title: "Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "icon", title: "Icon", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
                defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
                defineField({ name: "ctaHref", title: "CTA Link", type: "string" }),
              ],
              preview: { select: { title: "title" } },
            },
          ],
        }),
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
        defineField({
          name: "location",
          title: "Location",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "text", title: "Address", type: "string" }),
          ],
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "address", title: "Address", type: "string" }),
          ],
        }),
        defineField({
          name: "formLabels",
          title: "Form Labels",
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name Label", type: "string" }),
            defineField({ name: "email", title: "Email Label", type: "string" }),
            defineField({ name: "message", title: "Message Label", type: "string" }),
            defineField({ name: "submit", title: "Submit Label", type: "string" }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
