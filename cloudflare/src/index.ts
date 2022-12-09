export interface Env {
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env) {
    const { pathname } = new URL(request.url);

    if (pathname === '/items') {
      const { results } = await env.DB.prepare('SELECT * FROM Items').all();

      return Response.json({ total: results?.length, items: results });
    }

    return new Response('Cloudflare');
  },
};
