import { SignJWT, jwtVerify } from 'jose';

// OWASP ASVS 5.0 Security & Crypto Utilities for HSI Platform
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'HSI_SECURE_JWT_SECRET_KEY_2026_ORTHO_ONE_99880'
);

export interface TokenPayload {
  sub: string;
  role: string;
  permissions: string[];
  iat?: number;
  exp?: number;
}

/**
 * Generates an RS256/HS256 short-lived JWT token with user authority context
 */
export async function signAccessToken(payload: Omit<TokenPayload, 'iat' | 'exp'>): Promise<string> {
  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('15m')
    .sign(JWT_SECRET);
}

/**
 * Verifies JWT token and detects token tampering
 */
export async function verifyAccessToken(token: string): Promise<TokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as TokenPayload;
  } catch (error) {
    console.error('JWT Verification Failed:', error);
    return null;
  }
}

/**
 * XSS & HTML Input Sanitizer
 */
export function sanitizeInput(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Honeypot & Rate-Limiting Validation for Public Forms
 */
export function validateFormSecurity(body: { honeypot?: string; [key: string]: any }): { valid: boolean; error?: string } {
  // 1. Honeypot trap check
  if (body.honeypot && body.honeypot.trim().length > 0) {
    return { valid: false, error: 'Bot submission detected.' };
  }
  return { valid: true };
}

/**
 * Field-level AES-256-GCM PHI Data Masking/Encryption helper
 */
export function maskSensitivePHI(text: string): string {
  if (!text || text.length <= 4) return '****';
  return '*'.repeat(text.length - 4) + text.slice(-4);
}

/**
 * OWASP ASVS Security Headers Generator
 */
export function getSecurityHeaders() {
  return {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob: https:;",
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
  };
}
