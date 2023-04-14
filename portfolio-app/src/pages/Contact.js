import { useState } from "react";
import { SendMail } from "./api/send-mail";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (event) => {
    setFormData({
      event.key:event.target.value;
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await SendMail(formData);
      alert(`Message sent successfully!`);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      alert(`An error has occured while sending this email`);
    }
  };

  return (
    <div className="contact-wrapper">
      <h1>CONNECT WITH ME</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          required
          onChange={(e) => {
            setFormData({...formData, name:e.target.value});
          }}
        />
       
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          onChange={(e) => {
            setFormData({...formData, email:e.target.value});
          }}
        />
        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
          onChange={(e) => {
            setFormData({...formData, message:e.target.value})
          }}
        ></textarea>{" "}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
