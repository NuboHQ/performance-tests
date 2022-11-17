import { PrismaClient as PrismaClientRailway } from '../generated/railway';
import { PrismaClient as PrismaClientRender } from '../generated/render';

export type { City } from '../generated/railway';

export type PrismaType = 'railway' | 'render';

export const prismaRailway = new PrismaClientRailway({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_RAILWAY,
    },
  },
});
export const prismaRender = new PrismaClientRender({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_RENDER,
    },
  },
});
