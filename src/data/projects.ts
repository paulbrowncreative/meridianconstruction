import type { ImageMetadata } from 'astro';

/**
 * Project case studies. Each entry generates /projects/<slug>/ and appears in
 * the portfolio grid and home page preview.
 *
 * The list is intentionally empty: no verified project photography or details
 * were available when this site was built, and stock photos must never be
 * presented as Meridian's work. To add a project:
 *
 *   1. Put photos in src/assets/projects/<slug>/ (JPG or PNG, 2400px+ wide).
 *   2. Import them at the top of this file:
 *        import retailHero from '../assets/projects/novi-retail/hero.jpg';
 *   3. Add an entry below. Every field must be accurate and client-approved.
 */
export interface Project {
  slug: string;
  title: string;
  /** One of site.sectors */
  sector: string;
  /** City only, e.g. "Novi, MI" — get client approval before naming a tenant. */
  location: string;
  /** Service slugs from services.ts */
  services: string[];
  year?: number;
  sizeSqFt?: number;
  summary: string;
  /** Paragraphs for the detail page: challenge, approach, result. */
  body: string[];
  scope: string[];
  cover: { src: ImageMetadata; alt: string };
  gallery: { src: ImageMetadata; alt: string }[];
}

export const projects: Project[] = [];
