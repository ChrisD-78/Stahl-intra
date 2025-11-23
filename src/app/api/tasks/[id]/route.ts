import { NextRequest, NextResponse } from 'next/server'

// PATCH update task
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json()
    const { id } = await params

    // Mock response - database disabled
    return NextResponse.json({
      id,
      ...body,
      updated_at: new Date().toISOString()
    })
  } catch (error) {
    console.error('Failed to update task:', error)
    return NextResponse.json(
      { error: 'Failed to update task' },
      { status: 500 }
    )
  }
}
