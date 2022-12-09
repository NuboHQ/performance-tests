const schema = await Deno.readTextFile('prisma/schema.prisma');

console.log(JSON.stringify({ schema }));
