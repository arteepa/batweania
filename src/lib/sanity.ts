import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = import.meta.env.SANITY_PROJECT_ID;

export const client: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset: import.meta.env.SANITY_DATASET ?? "production",
      apiVersion: import.meta.env.SANITY_API_VERSION ?? "2024-01-01",
      useCdn: true,
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) throw new Error("Sanity client not configured — set SANITY_PROJECT_ID");
  return builder.image(source);
}

export async function sanityFetch<T>(query: string): Promise<T | null> {
  if (!client) return null;
  return client.fetch<T>(query);
}

// ── Types ──────────────────────────────────────────────

interface CTA {
  label: string;
  href: string;
}

interface FloatingCard {
  icon: string;
  title: string;
  body: string;
}

interface SanityImage {
  asset: { _ref: string };
  alt?: string;
}

export interface HomePageDoc {
  hero: {
    badgeIcon: string;
    badgeText: string;
    titlePlain: string;
    titleItalic: string;
    subtitle: string;
    primaryCta: CTA;
    secondaryCta: CTA;
    heroImage: SanityImage;
    floatingCard: FloatingCard;
  };
  mission: {
    icon: string;
    headline: string;
    quote: string;
    body: string;
  };
  sanctuary: {
    title: string;
    intro: string;
    rules: string[];
    images: SanityImage[];
  };
  trail: {
    title: string;
    intro: string;
    mapImage: SanityImage;
    featuredRoute: { title: string; meta: string };
    bentoTiles: Array<
      | { _type: "observation"; title: string; body: string; icon: string }
      | { _type: "stat"; value: string; label: string }
      | { _type: "iconCallout"; icon: string; label: string }
    >;
  };
  contribute: {
    title: string;
    intro: string;
    cards: Array<{
      icon: string;
      title: string;
      body: string;
      ctaLabel: string;
      ctaHref: string;
    }>;
  };
  gallery: {
    title: string;
    images: SanityImage[];
  };
  contact: {
    title: string;
    intro: string;
    location: { label: string; text: string };
    email: { label: string; address: string };
    formLabels: { name: string; email: string; message: string; submit: string };
  };
}

export interface SiteSettingsDoc {
  siteName: string;
  logoIcon: string;
  navItems: Array<{ label: string; href: string; style: "default" | "emphasis" }>;
  footerLinks: Array<{ label: string; href: string }>;
  socialLinks: Array<{ icon: string; href: string }>;
  copyrightLine: string;
}

// ── Queries ────────────────────────────────────────────

export const homePageQuery = `*[_type == "homePage" && _id == "homePage"][0]`;
export const siteSettingsQuery = `*[_type == "siteSettings" && _id == "siteSettings"][0]`;
