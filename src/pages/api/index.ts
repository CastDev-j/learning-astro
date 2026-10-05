// Endpoints
// https://docs.astro.build/en/guides/endpoints/
import type { APIRoute } from "astro";

export const ALL = (({ request }) => {
  return new Response(
    JSON.stringify({
      message: `This was a ${request.method}!`,
    }),
  );
}) satisfies APIRoute;
