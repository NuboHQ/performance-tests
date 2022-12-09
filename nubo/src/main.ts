import 'dotenv/config';
import express from 'express';
import { prisma } from './prisma';

(async () => {
  const port = parseInt(process.env.PORT || '5000');
  const app = express();

  app.get('/', (req, res) => {
    res.json({ message: 'Nubo' });
  });

  app.get('/items', async (req, res) => {
    const items = await prisma.items.findMany();

    res.send({
      platform: 'nubo',
      total: items.length,
      items,
    });
  });

  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
})();
