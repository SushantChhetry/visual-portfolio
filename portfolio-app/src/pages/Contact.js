import { useState, useEffect } from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { getRestaurants } from "./api/yelp";
import Link from "next/link";

// parallax
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

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
      <ParallaxProvider>
        <Parallax speed={10}>
          <div className="contact-title">
            <h1>Contact Me!</h1>
            <p>Send me a message and let's connect</p>
          </div>
        </Parallax>
      </ParallaxProvider>
      <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <br />
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

          <button type="submit" className="submit-btn">
            Send message
          </button>
        </form>
        <div className="ueats">
          <h1>Craving for Sushi?</h1>
          <p>Order using Doordash!</p>
        </div>
        <div className="loading">{loading && <p>Submitting...</p>}</div>
        {showPop && (
          <div className="submitted-message">
            <p>Your form has been submitted!</p>
            <button onClick={() => setShowPop(false)}>Close</button>
          </div>
        )}
      </div>
      <div className="social">
        <ul className="social-list">
          <li>
            <Link
              href={"https://github.com/SushantChhetry"}
              target="_blank"
              style={{ color: "black" }}
            >
              <BsGithub size={32} className="social-icons" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.linkedin.com/in/sushantchhetry/"}
              target="_blank"
              style={{ color: "black" }}
            >
              <BsLinkedin size={32} className="social-icons" />
            </Link>
          </li>
          <li>
            <Link
              href={"https://twitter.com/SushantChhetryy"}
              target="_blank"
              style={{ color: "black" }}
            >
              <BsTwitter size={32} className="social-icons" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
