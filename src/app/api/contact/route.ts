import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;

    // Create email content
    const emailContent = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: "rishith@narsinghdass.com",
      subject: "New Contact Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    // Check if we're in development mode
    const isDevelopment = process.env.NODE_ENV === "development";

    if (isDevelopment) {
      // In development, just log the email content
      console.log("==========================================");
      console.log("📧 Email would be sent in production mode");
      console.log("==========================================");
      console.log("To:", emailContent.to);
      console.log("From:", emailContent.from);
      console.log("Subject:", emailContent.subject);
      console.log("Message:", emailContent.text);
      console.log("==========================================");
    } else {
      // In production, actually send the email
      // Log SMTP configuration (without password)
      console.log("SMTP Configuration:");
      console.log("Host:", process.env.SMTP_HOST);
      console.log("Port:", process.env.SMTP_PORT);
      console.log("Secure:", process.env.SMTP_SECURE);
      console.log("User:", process.env.SMTP_USER);

      // Create transporter with detailed configuration
      const transportConfig = {
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        // Debug options
        debug: true,
        logger: true
      };

      console.log("Creating transporter with config:", JSON.stringify({
        ...transportConfig,
        auth: { ...transportConfig.auth, pass: "********" } // Hide password in logs
      }));

      const transporter = nodemailer.createTransport(transportConfig);

      // Verify connection configuration
      try {
        await transporter.verify();
        console.log("SMTP connection verified successfully");
      } catch (verifyError: any) {
        console.error("SMTP connection verification failed:", verifyError);
        throw new Error(`SMTP verification failed: ${verifyError.message || 'Unknown error'}`);
      }

      // Send the email
      console.log("Sending email to:", emailContent.to);
      const info = await transporter.sendMail(emailContent);
      console.log("Email sent successfully:", info.messageId);
    }

    return NextResponse.json({
      success: true,
      message: isDevelopment
        ? "Email logged successfully (development mode)"
        : "Email sent successfully!",
    });
  } catch (error: any) {
    console.error("Email handling error:", error);
    // Return more detailed error information
    return NextResponse.json(
      {
        success: false,
        message: "Error processing your request",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
