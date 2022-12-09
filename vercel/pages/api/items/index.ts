import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

const handler = async (req: NextRequest) => {
  const items = await prisma.items.findMany();

  return NextResponse.json({
    total: items.length,
    items,
  });
};

export const config = {
  runtime: 'experimental-edge',
};

export default handler;
