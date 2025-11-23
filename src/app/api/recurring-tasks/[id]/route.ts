import { NextRequest, NextResponse } from 'next/server'

// PATCH update recurring task
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
    console.error('Failed to update recurring task:', error)
    return NextResponse.json(
      { error: 'Failed to update recurring task' },
      { status: 500 }
    )
  }
}

// DELETE recurring task
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Mock response - database disabled
    return NextResponse.json({ success: true, id })
  } catch (error) {
    console.error('Failed to delete recurring task:', error)
    return NextResponse.json(
      { error: 'Failed to delete recurring task' },
      { status: 500 }
    )
  }
}
