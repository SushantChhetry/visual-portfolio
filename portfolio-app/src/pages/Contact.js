import { useState, useEffect } from "react";

const Contact = () => {
  const [showPop, setShowPop] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, message } = formData;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    };

    try {
      const response = await fetch("/api/send-mail", requestOptions);
      const data = await response.json();

      console.log("Message sent successfully:", data.message);
      setLoading(false);

      setShowPop(true);
    } catch (error) {
      console.log("Error sending message:", error);
      setLoading(false);
    }

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-wrapper">
      <h1>Contact us!</h1>
      <p>Please enter your information</p>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send message</button>
      </form>
      <div className="loading">{loading && <p>Submitting...</p>}</div>
      {showPop && (
        <div className="submitted-message">
          <p>Your form has been submitted!</p>
          <button onClick={() => setShowPop(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Contact;
