import { NextResponse } from 'next/server'

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ userName: string }> }
) {
  try {
    const { userName } = await params
    
    if (!userName) {
      return NextResponse.json({ error: 'User name is required' }, { status: 400 })
    }

    // Mock response - database disabled
    return NextResponse.json({ 
      success: true, 
      deletedCount: 0,
      message: `Quiz-Ergebnisse für ${userName} wurden gelöscht`
    })
  } catch (error) {
    console.error('Failed to delete quiz results:', error)
    return NextResponse.json(
      { error: 'Failed to delete quiz results' },
      { status: 500 }
    )
  }
}
