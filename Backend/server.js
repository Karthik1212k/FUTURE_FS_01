// server.js
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ POST route to send mail
app.post("/contact", async (req, res) => {
  const { name, email, phone, serviceInterest, timeline, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    // ✅ Configure Nodemailer with Gmail App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kkarthik2263@gmail.com", // your Gmail address
        pass: "ymsw oery vhgz bwlx" // <-- Replace with valid App Password
      }
    });

    // ✅ Email Content
    const mailOptions = {
      from: `"Portfolio Contact" <${email}>`,
      to: "kkarthik2263@gmail.com", // recipient
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

    // ✅ Send Email
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully from ${email}`);
    res.status(200).json({ success: true, message: "Message sent successfully" });

  } catch (error) {
    console.error("❌ Email sending error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
