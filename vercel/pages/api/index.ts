import { NextRequest, NextResponse } from 'next/server';

export default (req: NextRequest) => {
  return NextResponse.json({
    name: 'Hello from Vercel Edge',
  });
};

export const config = {
  runtime: 'experimental-edge',
};
