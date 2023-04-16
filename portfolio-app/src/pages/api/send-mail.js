import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: "sushantchhetry@outlook.com",
    to: "sushantchhetry@outlook.com",
    subject: `New message from ${name}`,
    text: message + " email:" + email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log("Error sending message:", error);
    res.status(500).json({ message: "Error sending message" });
  }
}
