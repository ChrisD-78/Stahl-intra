import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Mock data - database disabled
    return NextResponse.json([])
  } catch (error) {
    console.error('Failed to fetch global leaderboard:', error)
    return NextResponse.json(
      { error: 'Failed to fetch global leaderboard' },
      { status: 500 }
    )
  }
}
