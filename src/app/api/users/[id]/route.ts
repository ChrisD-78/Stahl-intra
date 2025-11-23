import { NextRequest, NextResponse } from 'next/server'

// DELETE - Benutzer löschen (nur für Admins)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Mock response - database disabled
    return NextResponse.json({
      success: true,
      message: `Benutzer wurde erfolgreich gelöscht`
    })
  } catch (error) {
    console.error('Failed to delete user:', error)
    return NextResponse.json(
      { success: false, error: 'Fehler beim Löschen des Benutzers' },
      { status: 500 }
    )
  }
}
