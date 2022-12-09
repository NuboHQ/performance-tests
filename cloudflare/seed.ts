const MAX = 1;
let sql = 'DELETE FROM Items;';

for (let i = 1; i < MAX + 1; i++) {
  sql += `\nINSERT INTO Items (ItemID, ItemMessage) VALUES (${i}, 'This is test ${i}.');`;
}

await Deno.writeTextFile('items.sql', sql);
