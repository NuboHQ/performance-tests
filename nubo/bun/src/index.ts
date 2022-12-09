import { PrismaClient } from '@prisma/client/edge';

const prisma = new PrismaClient();

const port = Number(process.env.PORT) || 5000;

Bun.serve({
  async fetch(req) {
    const items = await prisma.items.findMany();

    return new Response(
      JSON.stringify({
        platform: 'nubo',
        total: items.length,
        items,
      }),
      {
        headers: { 'content-type': 'application/json' },
      },
    );
  },
  port,
});

console.log(`http://localhost:${port}`);
