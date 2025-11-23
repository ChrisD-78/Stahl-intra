import { NextRequest, NextResponse } from 'next/server'

// GET all completed trainings
export async function GET() {
  try {
    // Mock data - database disabled
    return NextResponse.json([])
  } catch (error) {
    console.error('Failed to fetch completed trainings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch completed trainings' },
      { status: 500 }
    )
  }
}

// POST mark training as completed
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Mock response - database disabled
    return NextResponse.json({
      id: Date.now().toString(),
      ...body,
      completed_at: new Date().toISOString()
    }, { status: 201 })
  } catch (error) {
    console.error('Failed to mark training as completed:', error)
    return NextResponse.json(
      { error: 'Failed to mark training as completed' },
      { status: 500 }
    )
  }
}

// DELETE completed training
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    // Mock response - database disabled
    return NextResponse.json({ success: true, id })
  } catch (error) {
    console.error('Failed to delete completed training:', error)
    return NextResponse.json(
      { error: 'Failed to delete completed training' },
      { status: 500 }
    )
  }
}
