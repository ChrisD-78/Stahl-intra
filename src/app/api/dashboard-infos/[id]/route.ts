import { NextResponse } from 'next/server'

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { title, content, is_popup } = await request.json()
    const { id } = await params

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
    }

    // Mock response - database disabled
    return NextResponse.json({ 
      success: true, 
      data: {
        id,
        title,
        content,
        is_popup: is_popup || false,
        updated_at: new Date().toISOString()
      }
    })
  } catch (error) {
    console.error('Failed to update dashboard info:', error)
    return NextResponse.json({ 
      error: 'Failed to update dashboard info',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
