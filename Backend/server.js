import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, phone, serviceInterest, timeline, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kkarthik2263@gmail.com", // your Gmail
        pass: "ztwf wsnj irmn couu"     // your Google App Password
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
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
