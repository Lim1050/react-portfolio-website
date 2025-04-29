import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-content">
      <form action="">
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastname" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email" required />
        <textarea type="text" name="message" id=""></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
