import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, phone, serviceInterest, timeline, message } = req.body;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return res.status(500).json({ success: false, message: 'Server configuration error: Missing email credentials.' });
    }

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
        return res.status(200).json({ success: true, message: "Message sent successfully" });

    } catch (error) {
        console.error("❌ Error sending email:", error);
        if (error.code === 'EAUTH') {
            return res.status(500).json({ success: false, message: "Authentication failed. Check EMAIL_PASS." });
        }
        return res.status(500).json({ success: false, message: "Failed to send message: " + error.message });
    }
}
