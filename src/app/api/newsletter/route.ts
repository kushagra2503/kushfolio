import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json()

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Check if Gmail App Password is configured
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD
    if (!gmailAppPassword) {
      console.error('GMAIL_APP_PASSWORD environment variable is not set')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact administrator.' },
        { status: 500 }
      )
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'radhikayash2@gmail.com',
        pass: gmailAppPassword
      }
    })

    // Email content
    const mailOptions = {
      from: 'radhikayash2@gmail.com',
      to: email,
      subject: 'Welcome to the Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Hii ${name}! 👋</h2>
          <p style="color: #666; line-height: 1.6;">
            Thank you for subscribing to our newsletter! We're excited to have you on board.
          </p>
          <p style="color: #666; line-height: 1.6;">
            You'll be the first to know about new projects, articles, and updates.
          </p>
          <br>
          <p style="color: #666; line-height: 1.6;">
            Best regards,<br>
            Yashree
          </p>
        </div>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Welcome email sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to send welcome email' },
      { status: 500 }
    )
  }
}
