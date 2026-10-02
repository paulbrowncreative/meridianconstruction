import type { APIRoute } from 'astro';

// Non-production builds disallow everything; production points at the sitemap.
export const GET: APIRoute = ({ site }) => {
  const body =
    import.meta.env.PUBLIC_NOINDEX === 'true'
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
