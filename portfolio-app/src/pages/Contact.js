import React from "react";
import nodemailer from "nodemailer";

const Contact = () => {
  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  return (
    <div className="contact-wrapper">
      <h1>CONNECT WITH ME</h1>
      <form onSubmit={handleSubmit}>
        <label for="firstname">First Name:</label>
        <input type="text" placeholder="first name" required />
        <label for="lastname">Last Name:</label>
        <input type="text" placeholder="last name" />
        <label for="email">Email:</label>
        <input type="email" placeholder="email" required />
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>{" "}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
