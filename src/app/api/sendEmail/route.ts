import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { firstName, lastName, email, phone, subject, message } = await request.json()
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'rajamancha989@gmail.com',
    subject: subject,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
        <h2 style="color: #007BFF;">New Contact Form Submission</h2>
        <p><strong>firstName:</strong> ${firstName}</p>
        <p><strong>lastName:</strong> ${lastName}</p>
        <p><strong>phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `,
  })

  if (error) {
    return Response.json({ error })
  }

  return Response.json(data)
}
