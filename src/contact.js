import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email) newErrors.email = "Email is required.";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email))
      newErrors.email = "Invalid email address.";
    if (!form.phone) newErrors.phone = "Phone is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setErrors(foundErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="container">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Enter Your name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="abcd@gmail.com"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
        </div>
        <div className="row">
          <div className="field fullwidth">
            <label htmlFor="phone">Phone no.</label>
            <input
              name="phone"
              id="phone"
              type="text"
              placeholder="+91"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
        </div>
        <div className="row">
          <div className="field fullwidth">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Eneter your message here"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
        {submitted && <div className="success-msg">Pesan terkirim. Terima kasih!</div>}
      </form>
      <div className="map-block">
        <iframe
          title="School Map"
          src="https://www.google.com/maps?q=SMP+Negeri+1+Cibadak&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
