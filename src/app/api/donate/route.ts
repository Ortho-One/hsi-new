import { NextRequest, NextResponse } from 'next/server';
import { validateFormSecurity, getSecurityHeaders } from '@/lib/security';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate honeypot bot trap
    const secCheck = validateFormSecurity(body);
    if (!secCheck.valid) {
      return NextResponse.json({ success: false, error: secCheck.error }, { status: 400 });
    }

    const { amount, donorName, email, phone, isCSR, companyName } = body;

    if (!amount || amount < 100) {
      return NextResponse.json(
        { success: false, error: 'Minimum donation amount is ₹100.' },
        { status: 400, headers: getSecurityHeaders() }
      );
    }

    // 2. Generate Payment Gateway Order Payload (Razorpay/Stripe simulation)
    const orderId = `HSI_DON_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    return NextResponse.json({
      success: true,
      orderId,
      amount,
      currency: 'INR',
      merchantName: 'Ortho Aid Charitable Trust — HSI Initiative',
      taxBenefit: '80G Exemption Applicable',
      message: 'Payment order generated securely.'
    }, { headers: getSecurityHeaders() });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to initialize payment gateway.' },
      { status: 500, headers: getSecurityHeaders() }
    );
  }
}
