import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSuccess(true);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="contact-form-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="contact-form__title">Contacto</h2>
        <input
          className="contact-form__input"
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          className="contact-form__input"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="contact-form__textarea"
          name="mensaje"
          placeholder="Mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
        />
        <button className="contact-form__btn" type="submit">Enviar</button>
        {success && <p className="contact-form__success">Mensaje enviado con éxito!</p>}
      </form>
    </div>
  );
};

export default ContactForm;
