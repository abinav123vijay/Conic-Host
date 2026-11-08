import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.json(
    {
      status: 'healthy',
      service: 'conic-business-dashboard',
      timestamp: new Date().toISOString()
    },
    {
      headers: {
        'Cache-Control': 'no-store'
      }
    }
  );
}
