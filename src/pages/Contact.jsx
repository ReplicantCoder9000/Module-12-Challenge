import React from "react";
import "../customStyles.css"; // Use "../" to move up one directory and access customStyles.css

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <p>You can reach me at alex@example.com</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
