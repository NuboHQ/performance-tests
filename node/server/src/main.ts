import 'dotenv/config';
import express from 'express';
import { prismaRailway, prismaRender } from './prisma';

(async () => {
  const port = parseInt(process.env.PORT || '5000');
  const app = express();
  const platform = process.env.PLATFORM || 'local';

  app.get('/', (req, res) => {
    const now = new Date();

    res.send({
      platform,
      time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
    });
  });

  app.get('/cities/railway', async (req, res) => {
    const limit = parseInt((req.query.limit as any) || '0') || 100;
    const now = new Date();
    const cities = await prismaRailway.city.findMany({ take: limit });

    res.send({
      platform,
      database: {
        provider: 'railway',
        type: 'mysql',
      },
      time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
      total: cities.length,
      cities,
    });
  });

  app.get('/cities/render', async (req, res) => {
    const limit = parseInt((req.query.limit as any) || '0') || 100;
    const now = new Date();
    const cities = await prismaRender.city.findMany({ take: limit });

    res.send({
      platform,
      database: {
        provider: 'render',
        type: 'postgres',
      },
      time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
      total: cities.length,
      cities,
    });
  });

  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log('platform:', platform);
  });
})();
