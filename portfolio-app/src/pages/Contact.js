import React from "react";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1>CONTACT ME</h1>
      <form>
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
