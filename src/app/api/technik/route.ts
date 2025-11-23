import { NextRequest, NextResponse } from 'next/server'

// GET all technik inspections
export async function GET() {
  try {
    // Mock data - database disabled
    return NextResponse.json([])
  } catch (error) {
    console.error('Failed to fetch technik inspections:', error)
    return NextResponse.json(
      { error: 'Failed to fetch technik inspections' },
      { status: 500 }
    )
  }
}

// POST create new technik inspection
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
    console.error('Failed to create technik inspection:', error)
    return NextResponse.json(
      { error: 'Failed to create technik inspection' },
      { status: 500 }
    )
  }
}
