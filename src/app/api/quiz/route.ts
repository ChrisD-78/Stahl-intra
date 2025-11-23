import { NextResponse } from 'next/server'

// GET all quizzes
export async function GET() {
  try {
    // Mock data - database disabled
    return NextResponse.json([])
  } catch (error) {
    console.error('Failed to fetch quizzes:', error)
    return NextResponse.json([])
  }
}
