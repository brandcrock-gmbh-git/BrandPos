import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { username, phone, email, messageBody, recaptchaToken } = await req.json();
  let mailOptions = {};
  let confirmationEmailOptions = {};

  // Verify the reCAPTCHA token
  const secretKey = process.env.CAPTACHA_SECRET_KEY; // Your secret key
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  const response = await fetch(verifyUrl, {
    method: 'POST',
  });

  const verificationResult = await response.json();

  if (!verificationResult.success) {
    return NextResponse.json(
      { error: 'reCAPTCHA verification failed. Please try again.' },
      { status: 400 }
    );
  }

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options for sending to yourself
  if (messageBody) {
    mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "BrandPos Contact Form",
      text: `
      Username: ${username}
      Phone: ${phone}
      Email: ${email}
      Message: ${messageBody}`,
    };
  } else {
    mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "BrandPos Order Form",
      text: `
      Username: ${username}
      Phone: ${phone}`,
    };
  }

  // Email options for sending a confirmation email to the customer
  confirmationEmailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // Send confirmation to the user
    subject: "Confirmation of your submission",
    text: `Dear ${username},

      Thank you for getting in touch with BrandPos. We have received your details:
      
      Username: ${username}
      Phone: ${phone}
      
      Message: ${messageBody}
      We will get back to you shortly.

      Best regards,
      BrandPos Team`,
  };

  try {
    // Send the main email to yourself
    await transporter.sendMail(mailOptions);

    // Send the confirmation email to the customer
    await transporter.sendMail(confirmationEmailOptions);

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // Handle errors
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Failed to send emails", details: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to send emails", details: String(error) },
        { status: 500 }
      );
    }
  }
}
