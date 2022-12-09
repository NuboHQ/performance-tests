# Cloudflare

```
wrangler d1 execute items --file=./schema.sql
wrangler d1 execute items --file=./items.sql
wrangler d1 execute items --command='SELECT * FROM Items'
wrangler d1 execute items --command='DELETE FROM Items WHERE ItemId=1'
```
