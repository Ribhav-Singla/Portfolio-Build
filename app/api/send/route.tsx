import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || '';

export async function POST(req: NextRequest) {
  const { email, subject, message }: { email: string; subject: string; message: string } = await req.json();
  console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    // Type casting error as any to avoid TypeScript issues. Ideally, handle specific error types.
    return NextResponse.json({ error: (error as Error).message });
  }
}
