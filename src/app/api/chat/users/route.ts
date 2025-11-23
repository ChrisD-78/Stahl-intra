import { NextRequest, NextResponse } from 'next/server'

// GET all chat users
export async function GET() {
  try {
    // Mock data - database disabled
    return NextResponse.json([])
  } catch (error) {
    console.error('Failed to fetch chat users:', error)
    return NextResponse.json(
      { error: 'Failed to fetch chat users' },
      { status: 500 }
    )
  }
}

// POST create or update chat user
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
    console.error('Failed to create/update chat user:', error)
    return NextResponse.json(
      { error: 'Failed to create/update chat user' },
      { status: 500 }
    )
  }
}
