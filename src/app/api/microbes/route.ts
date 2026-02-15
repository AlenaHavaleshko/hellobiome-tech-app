import { NextResponse } from 'next/server';
import { microbes } from '@/data/microbes';

export async function GET() {
  try {
    
    return NextResponse.json({
      success: true,
      data: microbes,
      count: microbes.length,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch microbes' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, role } = body;

    let filtered = [...microbes];

    if (type && type !== 'all') {
      filtered = filtered.filter((m) => m.type === type);
    }

    if (role) {
      filtered = filtered.filter((m) => m.role === role);
    }

    return NextResponse.json({
      success: true,
      data: filtered,
      count: filtered.length,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}
