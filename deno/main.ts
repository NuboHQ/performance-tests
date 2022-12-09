import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
import { Application } from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import postgres from 'https://deno.land/x/postgresjs@v3.3.2/mod.js';

const sql = postgres(Deno.env.get('DATABASE_URL')!);
const port = Number(Deno.env.get('PORT')) || 5000;
const app = new Application();

// ----------------------------------------------------------------------
console.log('INSERT START');
const MIN = 1;
const TOTAL = 1;
const newItems = [];

await sql`DELETE FROM items`;

for (let i = MIN; i < TOTAL + 1; i++) {
  newItems.push({ id: i, message: `Test message ${i}` });
}

await sql`insert into items ${sql(newItems, 'id', 'message')}`;
console.log('INSERT DONE');
// ----------------------------------------------------------------------

// {
//   const result = await client.queryObject(`
//     CREATE TABLE items (
//       id NUMERIC PRIMARY KEY,
//       message TEXT
//     );
// `);
//   console.log(result);
// }

// {
//   const result = await client.queryObject(
//     'INSERT INTO items(id, message) VALUES ($id, $message)',
//     { id: 1, message: 'Test message 1' },
//   );
//   console.log(result);
// }

// {
//   await client.queryObject('DROP TABLE items');
// }

app.use(async (ctx) => {
  if (ctx.request.url.pathname === '/items') {
    const items = await sql`select * from items`;

    ctx.response.headers.set('content-type', 'application/json');
    ctx.response.body = JSON.stringify({
      total: items.length,
      items,
    });

    return;
  }

  ctx.response.body = 'Deno Deploy';
});

console.log(`http://localhost:${port}`);

await app.listen({ port });
