import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // Validate required environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.CAPTACHA_SECRET_KEY) {
    return NextResponse.json(
      { error: "Missing server configuration. Check environment variables." },
      { status: 500 }
    );
  }

  const { username, phone, email, messageBody, recaptchaToken } = await req.json();

  // Validate input fields
  if (!recaptchaToken || !username || !phone || !email) {
    return NextResponse.json(
      { error: "Missing required fields. Please fill out the form completely." },
      { status: 400 }
    );
  }

  // Sanitize inputs
  const sanitize = (str: string) => str.replace(/[\r\n]+/g, " ").trim();
  const cleanUsername = sanitize(username);
  const cleanPhone = sanitize(phone);
  const cleanEmail = sanitize(email);
  const cleanMessage = sanitize(messageBody || "");

  // Verify the reCAPTCHA token
  const secretKey = process.env.CAPTACHA_SECRET_KEY;
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: secretKey, response: recaptchaToken }),
  });

  const verificationResult = await response.json();

  if (!verificationResult.success) {
    return NextResponse.json(
      { error: "reCAPTCHA verification failed. Please try again." },
      { status: 400 }
    );
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: messageBody ? "BrandPos Contact Form" : "BrandPos Order Form",
    text: `
    Username: ${cleanUsername}
    Phone: ${cleanPhone}
    Email: ${cleanEmail}
    Message: ${cleanMessage}`,
  };

  const confirmationEmailOptions = {
    from: process.env.EMAIL_USER,
    to: cleanEmail,
    subject: "Confirmation of your submission",
    text: `Dear ${cleanUsername},

    Thank you for getting in touch with BrandPos. We have received your details:
    
    Username: ${cleanUsername}
    Phone: ${cleanPhone}
    
    Message: ${cleanMessage}
    We will get back to you shortly.

    Best regards,
    BrandPos Team`,
  };

  try {
    // Send emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationEmailOptions);

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send emails. Please try again later." },
      { status: 500 }
    );
  }
}
