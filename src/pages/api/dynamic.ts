// Server Endpoints (API Routes)
// https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes
import type { APIRoute } from "astro";

export const prerender = false;

export const ALL = (({ request }) => {
  const requestID = crypto.randomUUID();

  return new Response(
    JSON.stringify({
      message: `This was a ${request.method}!`,
      requestID,
    }),
  );
}) satisfies APIRoute;
