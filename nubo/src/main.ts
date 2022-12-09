import 'dotenv/config';
import express from 'express';
import { prisma } from './prisma';
import type { Item } from './prisma';

(async () => {
  const port = Number(process.env.PORT) || 5000;
  const app = express();

  app.get('/', (req, res) => {
    res.json({ message: 'Nubo' });
  });

  app.get('/items', async (req, res) => {
    const items = await prisma.items.findMany();

    res.json({
      platform: 'nubo',
      total: items.length,
      items,
    });
  });

  app.get('/add-items/:min/:max', async (req, res) => {
    const MIN = parseInt(req.params.min);
    const TOTAL = parseInt(req.params.max);
    const items: Item[] = [];

    await prisma.items.deleteMany();

    for (let i = MIN; i < TOTAL + 1; i++) {
      items.push({ id: i as any, message: `Test message ${i}` });
    }

    await prisma.items.createMany({ data: items });

    res.json({
      platform: 'nubo',
      total: items.length,
    });
  });

  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
})();
