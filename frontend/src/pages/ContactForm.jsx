import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fcekkwb",          // ✅ Your service ID
        "template_gwi21y9",         // ✅ Your template ID
        form.current,
        "tRNxHK6nGKeMJo5PY"         // ✅ Your public key
      )
      .then((result) => {
        console.log("✅ Email sent", result.text);
        alert("Your Order placed")
        navigate("/products");     // ⬅️ Navigate after success
      })
      .catch((error) => {
        console.error("❌ Failed", error.text);
      });
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <input type="text" name="user_name" placeholder="Name" />
      <input type="email" name="user_email" placeholder="Email" />
      <textarea name="message" placeholder="name" />
      <textarea name="message" placeholder="product Name" />
      <textarea name="message" placeholder="name" />
      <textarea name="message" placeholder="Adress" />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
