const nodemailer = require('nodemailer');
const config = require('config.js');

module.exports = sendEmail;

async function sendEmail({ to, subject, html, from = config.EMAIL_FROM }) {
    const transporter = nodemailer.createTransport(config.SMTP_OPTIONS);
    await transporter.sendMail({ from, to, subject, html });
}