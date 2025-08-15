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
        user: "kkarthik2263@gmail.com",
        pass: "ymsw oery vhgz bwlx"
      }
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${email}>`,
      to: "kkarthik2263@gmail.com",
      subject: `📩 New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service of Interest:</strong> ${serviceInterest || "Not provided"}</p>
        <p><strong>Timeline:</strong> ${timeline || "Not provided"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ success: false, message: "Failed to send message" });
  }
}
