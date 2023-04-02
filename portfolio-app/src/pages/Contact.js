import React from "react";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1>CONTACT ME</h1>
      <form>
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last name" />
        <input type="textarea" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
