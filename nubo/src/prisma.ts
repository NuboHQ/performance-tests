import { PrismaClient, items } from '@prisma/client';

export type Item = items;

export const prisma = new PrismaClient();
