// src/componentes/ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar los datos a tu API o email
    console.log("Formulario enviado:", formData);
    setSuccess(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="contact-form-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="contact-form__title">Contacto</h2>

        <div className="contact-form__group">
          <label className="contact-form__label">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="contact-form__input"
            required
          />
          <p>Este campo es obligatorio</p>
        </div>

        <div className="contact-form__group">
          <label className="contact-form__label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-form__input"
            required
          />
          <p>Ingresa un email válido</p>
        </div>

        <div className="contact-form__group">
          <label className="contact-form__label">Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="contact-form__textarea"
            rows="5"
            required
          ></textarea>
          <p>Escribe un mensaje</p>
        </div>

        <button type="submit" className="contact-form__btn">
          Enviar
        </button>

        {success && (
          <p className="contact-form__success">
            ¡Mensaje enviado correctamente!
          </p>
        )}
      </form>
    </div>
  );
}
