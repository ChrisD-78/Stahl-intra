import { NextRequest, NextResponse } from 'next/server'

// GET all completions for a specific recurring task
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    // Mock data - database disabled
    return NextResponse.json([])
  } catch (error) {
    console.error('Failed to fetch task completions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch task completions' },
      { status: 500 }
    )
  }
}
