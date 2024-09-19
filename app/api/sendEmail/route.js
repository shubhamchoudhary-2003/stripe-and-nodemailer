import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, userId, apiKey } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "powrsofficial@gmail.com",
        pass: "mrnb eptw copm wuce", 
      },
    });

    const mailOption = {
      from: "powrsofficial@gmail.com",
      to: "shubhamera484@gmail.com",
      to:email,
      subject: "New Contact Form Submission",
      html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone Number:</strong> ${apiKey}</p>
      <p><strong>key:</strong> ${userId}</p>
  
      `,
    };

    await transporter.sendMail(mailOption);

    return new Response(
      JSON.stringify({ message: "Email Sent Successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          Location: "/success",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to Send Email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
