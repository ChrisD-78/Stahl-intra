import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Benutzername und Passwort erforderlich' },
        { status: 400 }
      )
    }

    // Mock user data - database disabled
    const mockUser = {
      username: 'staho',
      password: 'staho1',
      displayName: 'Stadtholding',
      isAdmin: true,
      role: 'Admin'
    }

    // Case-insensitive username check
    if (username.toLowerCase() !== mockUser.username.toLowerCase()) {
      return NextResponse.json(
        { success: false, error: 'Benutzer nicht gefunden. Bitte überprüfen Sie den Benutzernamen.' },
        { status: 401 }
      )
    }

    // Password check
    if (password !== mockUser.password) {
      return NextResponse.json(
        { success: false, error: 'Falsches Passwort. Bitte versuchen Sie es erneut.' },
        { status: 401 }
      )
    }

    // Login erfolgreich
    return NextResponse.json({
      success: true,
      user: {
        id: '1',
        username: mockUser.username,
        displayName: mockUser.displayName,
        isAdmin: mockUser.isAdmin,
        role: mockUser.role
      }
    })

  } catch (error) {
    console.error('Login error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unbekannter Fehler'
    return NextResponse.json(
      { success: false, error: `Serverfehler beim Login: ${errorMessage}` },
      { status: 500 }
    )
  }
}
