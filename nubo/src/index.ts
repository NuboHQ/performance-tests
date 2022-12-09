const port = Number(process.env.PORT) || 5000;

Bun.serve({
  fetch(req) {
    return new Response(JSON.stringify({ message: 'Nubo' }), {
      headers: { 'content-type': 'application/json' },
    });
  },
  port,
});

console.log(`http://localhost:${port}`);
