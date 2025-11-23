import { NextRequest, NextResponse } from 'next/server'

// GET all dashboard infos
export async function GET() {
  try {
    // Mock data - database disabled
    return NextResponse.json([])
  } catch (error) {
    console.error('Failed to fetch dashboard infos:', error)
    return NextResponse.json(
      { error: 'Failed to fetch dashboard infos' },
      { status: 500 }
    )
  }
}

// POST create new dashboard info
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Mock response - database disabled
    return NextResponse.json({
      id: Date.now().toString(),
      ...body,
      created_at: new Date().toISOString()
    }, { status: 201 })
  } catch (error) {
    console.error('Failed to create dashboard info:', error)
    return NextResponse.json(
      { 
        error: 'Failed to create dashboard info', 
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
}

// DELETE dashboard info
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
    console.error('Failed to delete dashboard info:', error)
    return NextResponse.json(
      { error: 'Failed to delete dashboard info' },
      { status: 500 }
    )
  }
}
