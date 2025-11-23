import { NextRequest, NextResponse } from 'next/server'

// GET detailed quiz results
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Mock response - database disabled
    return NextResponse.json({
      success: true,
      quiz: null,
      results: []
    })
  } catch (error) {
    console.error('Failed to fetch quiz results:', error)
    return NextResponse.json(
      { success: false, error: 'Fehler beim Abrufen der Quiz-Ergebnisse' },
      { status: 500 }
    )
  }
}
