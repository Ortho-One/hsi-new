import { NextRequest, NextResponse } from 'next/server';
import { signAccessToken, getSecurityHeaders } from '@/lib/security';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Simulated account-enumeration safe credential check
    if (email === 'admin@haltinjuries.org' && password === 'HsiSecureAdmin2026!') {
      const token = await signAccessToken({
        sub: 'usr_admin_01',
        role: 'SUPER_ADMIN',
        permissions: ['READ_PHI', 'EXPORT_PHI', 'APPROVE_SOW', 'PROCESS_DONATION']
      });

      return NextResponse.json({
        success: true,
        accessToken: token,
        user: {
          name: 'HSI Administrator',
          role: 'SUPER_ADMIN',
          facility: 'Ortho-One Coimbatore'
        }
      }, { headers: getSecurityHeaders() });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid authentication credentials.' },
      { status: 401, headers: getSecurityHeaders() }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal security exception.' },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}
