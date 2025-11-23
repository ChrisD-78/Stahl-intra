import { NextRequest, NextResponse } from 'next/server'

// POST mark recurring task as completed
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    // Mock response - database disabled
    return NextResponse.json({
      id: Date.now().toString(),
      recurring_task_id: id,
      ...body,
      completed_at: new Date().toISOString()
    }, { status: 201 })
  } catch (error) {
    console.error('Failed to mark task as completed:', error)
    return NextResponse.json(
      { error: 'Failed to mark task as completed' },
      { status: 500 }
    )
  }
}
