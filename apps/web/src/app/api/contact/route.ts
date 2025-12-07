import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { ContactEmail } from '@/components/contact-email';

const companyEmail = process.env.COMPANY_EMAIL;

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function POST(req: NextRequest) {
  if (!companyEmail) {
    console.error('COMPANY_EMAIL environment variable is not set.');
    return NextResponse.json(
      {
        error:
          'Server is not configured for sending emails. Please contact the administrator.',
      },
      { status: 500 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error('RESEND_API_KEY environment variable is not set.');
    return NextResponse.json(
      {
        error:
          'Server is not configured for sending emails. Please contact the administrator.',
      },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: 'Invalid input.', details: fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: companyEmail,
      replyTo: email,
      subject: `New message from ${name}`,
      react: ContactEmail({ name, email, message }),
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email.', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      { error: 'Failed to process request.', details: errorMessage },
      { status: 500 }
    );
  }
}
