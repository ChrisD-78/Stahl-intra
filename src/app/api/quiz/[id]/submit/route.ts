import { NextRequest, NextResponse } from 'next/server'

// POST submit quiz results
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { user_name, answers, time_taken_seconds } = body

    // Mock response - database disabled
    return NextResponse.json({
      id: Date.now().toString(),
      quiz_id: id,
      user_name,
      score: 0,
      total_questions: answers?.length || 0,
      correct_answers: 0,
      percentage: 0,
      time_taken_seconds: time_taken_seconds || 0,
      completed_at: new Date().toISOString(),
      detailed_answers: []
    }, { status: 201 })
  } catch (error) {
    console.error('Failed to submit quiz:', error)
    return NextResponse.json(
      { error: 'Failed to submit quiz' },
      { status: 500 }
    )
  }
}
