import { NextRequest, NextResponse } from 'next/server';
import { validateFormSecurity, sanitizeInput, getSecurityHeaders } from '@/lib/security';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Honeypot check
    const secCheck = validateFormSecurity(body);
    if (!secCheck.valid) {
      return NextResponse.json({ success: false, error: secCheck.error }, { status: 400 });
    }

    const { organizationName, eventType, eventDate, location, expectedAthletes, contactPerson, phone, email, notes } = body;

    if (!organizationName || !contactPerson || !phone) {
      return NextResponse.json(
        { success: false, error: 'Organization name, contact person, and phone number are required.' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    const sanitizedData = {
      org: sanitizeInput(organizationName),
      event: sanitizeInput(eventType),
      date: sanitizeInput(eventDate),
      loc: sanitizeInput(location),
      athletes: Number(expectedAthletes) || 50,
      contact: sanitizeInput(contactPerson),
      phone: sanitizeInput(phone),
      email: sanitizeInput(email),
      notes: sanitizeInput(notes || '')
    };

    // Log request reference
    const requestId = `SOW_REQ_${Date.now()}`;

    return NextResponse.json({
      success: true,
      requestId,
      data: sanitizedData,
      message: 'SOW Mobile Care unit request dispatched to HSI Sports Operations, Coimbatore.'
    }, { headers: getSecurityHeaders() });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to process SOW request.' },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}
