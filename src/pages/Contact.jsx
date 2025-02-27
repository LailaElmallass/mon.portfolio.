import React, { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu peux ajouter une logique pour envoyer le formulaire (ex. via une API)
    console.log("Formulaire soumis :", formData);
    // Réinitialiser le formulaire après soumission
    setFormData({ name: "", email: "", message: "" });
    alert("Message envoyé ! (Simulation)");
  };

  return (
    <div className="contact-container">
      <h1>Contactez-moi 📬</h1>
      <p>Envoyez-moi un message pour discuter de vos projets ou idées !</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;