import { NextResponse } from 'next/server';
import type { MicrobeType, MicrobeRole } from '@/types/microbe';

export async function GET() {
  const stats = {
    types: ['bacteria', 'fungi'] as MicrobeType[],
    roles: ['beneficial', 'neutral', 'pathogenic'] as MicrobeRole[],
    totalSpecies: 20,
    lastUpdated: new Date().toISOString(),
  };

  return NextResponse.json({
    success: true,
    data: stats,
  });
}
