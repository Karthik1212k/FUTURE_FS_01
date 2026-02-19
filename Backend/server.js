import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Check for environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ MISSING ATTRIBUTES: EMAIL_USER or EMAIL_PASS is not set in .env file.");
} else {
  console.log("✅ Credentials loaded for:", process.env.EMAIL_USER);
  console.log("🔑 Password length:", process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0);
}

app.post("/contact", async (req, res) => {
  const { name, email, phone, serviceInterest, timeline, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS.replace(/\s+/g, '') // Remove spaces if present
      }
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${email}>`,
      to: process.env.EMAIL_USER, // Send to yourself
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
    };

    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent successfully from ${email}`);
    res.status(200).json({ success: true, message: "Message sent successfully" });

  } catch (error) {
    console.error("❌ Error sending email:", error);

    if (error.code === 'EAUTH') {
      res.status(500).json({ success: false, message: "Authentication failed. Check EMAIL_PASS in .env file." });
    } else {
      res.status(500).json({ success: false, message: "Failed to send message: " + error.message });
    }
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
