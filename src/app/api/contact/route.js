import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();
    
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'wdev.jahidhasan@gmail.com',
      subject: `Portfolio Message: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Message Received from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    try {
      await resend.emails.send({
        from: 'Md. Jahid Hasan <onboarding@resend.dev>',
        to: email,
        subject: 'Thank you for reaching out!',
        html: `
          <h3>Hi ${name},</h3>
          <p>Thank you for reaching out! I have received your message regarding <strong>"${subject}"</strong>.</p>
          <p>I will get back to you as soon as possible.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Md. Jahid Hasan</strong></p>
        `,
      });
    } catch (autoReplyError) {
      console.warn('Auto-reply failed (Domain verification required for external recipients):', autoReplyError.message);
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}