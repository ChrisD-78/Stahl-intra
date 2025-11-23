import { NextResponse } from 'next/server'

// GET - Alle Benutzer abrufen (nur für Admins)
export async function GET() {
  try {
    // Mock data - database disabled
    return NextResponse.json({
      success: true,
      users: []
    })
  } catch (error) {
    console.error('Failed to fetch users:', error)
    return NextResponse.json(
      { success: false, error: 'Fehler beim Abrufen der Benutzer' },
      { status: 500 }
    )
  }
}
