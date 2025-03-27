import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: Request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.CAPTACHA_SECRET_KEY) {
    return NextResponse.json(
      { error: "Missing server configuration. Check environment variables." },
      { status: 500 }
    );
  }

  let formData;
  try {
    formData = await req.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON format." }, { status: 400 });
  }

  const { username, phone, IsBusinessOwner, email, messageBody, recaptchaToken, locale } = formData;

  if (!recaptchaToken || !username || !phone) {
    return NextResponse.json(
      { error: "Missing required fields. Please fill out the form completely." },
      { status: 400 }
    );
  }

  const sanitize = (str: string) => str.replace(/[\r\n]+/g, " ").trim();
  const cleanUsername = sanitize(username);
  const cleanIsBusinessOwner = sanitize(IsBusinessOwner ? "Yes" : "No");
  const cleanPhone = sanitize(phone);
  const cleanEmail = email ? sanitize(email) : "";
  const cleanMessage = sanitize(messageBody || "");

  // Optional: Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
  }

  const secretKey = process.env.CAPTACHA_SECRET_KEY;
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: secretKey, response: recaptchaToken }),
  });

  const verificationResult = await response.json();

  if (!verificationResult.success) {
    return NextResponse.json(
      { error: "reCAPTCHA verification failed." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Prepare the email content
  let emailText = "";
  if (cleanUsername) emailText += `Name: ${cleanUsername}\n`;
  if (cleanEmail) emailText += `Email: ${cleanEmail}\n`;
  if (cleanPhone) emailText += `Phone: ${cleanPhone}\n`;
  if (cleanIsBusinessOwner) emailText += `Is Business Owner: ${cleanIsBusinessOwner}\n`;
  if (cleanMessage) emailText += `Message: ${cleanMessage}\n`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: emailText.trim(),
  };

  try {
    await transporter.sendMail(mailOptions);

    const messages = {
    
      en: { success: "Message sent successfully" },
      de: { success: "Nachricht erfolgreich gesendet" },
    };


    const responseLocale: keyof typeof messages = locale === "de" ? "de" : "en";

    return NextResponse.json({ message: messages[responseLocale].success });
  } catch (error) {
    const messages = {
      en: { error: "Failed to send message." },
      de: { error: "Nachricht konnte nicht gesendet werden." },
    };

    console.log("Locale received:", locale); // Debug the locale value

    const responseLocale: keyof typeof messages = locale === "de" ? "de" : "en";

    return NextResponse.json(
      { error: messages[responseLocale].error },
      { status: 500 }
    );
  }
}
