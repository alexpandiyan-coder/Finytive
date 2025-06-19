require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/resume', async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, 
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Contact Form: ${subject}`,
            html: `
                <h3>New Contact from Finytive Website</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('❌ Email send error:', error.message);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
