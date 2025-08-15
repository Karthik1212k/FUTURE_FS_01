import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, serviceInterest, timeline, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kkarthik2263@gmail.com", // your Gmail
        pass: "ymsw oery vhgz bwlx" // your App Password
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${email}>`,
      to: "kkarthik2263@gmail.com",
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
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
}
