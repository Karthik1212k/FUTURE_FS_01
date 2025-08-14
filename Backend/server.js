import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, serviceInterest, timeline, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER = kkarthik2263@gmail.com,
        pass: process.env.EMAIL_PASS = gwdm szum igjs fskv 
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service of Interest:</strong> ${serviceInterest}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
}
