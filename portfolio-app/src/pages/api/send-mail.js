import nodemailer from "nodemailer";

export async function SendMail({ name, email, message }) {
  let options = {
    host: "smtp.office365.com",
    port: "587",
    secure: "false", // true for 465, false for other ports
    auth: {
      user: "",
      pass: "",
    },
  };

  //create a reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(options);

  let mailOptions = {
    from: `"${name}" <${email}>`, // sender address
    to: "sushantchhetry@outlook.com", //Receiver address
    subject: `"${name}" send a message from your portfolio site`, //email subject line
    text: message, //email body
    html: `<p>${message}</p>`, //html body
  };

  //send mail with the defined transport object
  let info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
}
