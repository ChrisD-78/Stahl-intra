import { NextRequest, NextResponse } from 'next/server'

// GET all chat groups
export async function GET() {
  try {
    // Mock data - database disabled
    return NextResponse.json([])
  } catch (error) {
    console.error('Failed to fetch chat groups:', error)
    return NextResponse.json(
      { error: 'Failed to fetch chat groups' },
      { status: 500 }
    )
  }
}

// POST create new chat group
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
    console.error('Failed to create chat group:', error)
    return NextResponse.json(
      { error: 'Failed to create chat group' },
      { status: 500 }
    )
  }
}
