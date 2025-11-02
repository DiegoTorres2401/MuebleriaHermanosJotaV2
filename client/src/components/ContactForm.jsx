import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const schema = Yup.object().shape({
  nombre: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string().email("Email inválido").required("El email es obligatorio"),
  mensaje: Yup.string().required("El mensaje es obligatorio").min(10, "El mensaje debe tener al menos 10 caracteres"),
});

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const handlerSubmit = async (values, { resetForm }) => {
    setError(null);

    try {
      console.log('Formulario enviado:', values);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setShowModal(true); // Muestra el modal
      resetForm();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ nombre: "", email: "", mensaje: "" }}
        onSubmit={handlerSubmit}
        validationSchema={schema}
      >
        {({ isSubmitting }) => (
          <section className="contact-form-section">
            <Form className="contact-form">
              <h2 className="contact-form__title">Contáctanos</h2>

              <div className="contact-form__group">
                <label htmlFor="nombre" className="contact-form__label">Nombre</label>
                <Field type="text" name="nombre" className="contact-form__input" />
                <ErrorMessage name="nombre" component="div" className="contact-form__error" />
              </div>

              <div className="contact-form__group">
                <label htmlFor="email" className="contact-form__label">Email</label>
                <Field type="email" name="email" className="contact-form__input" />
                <ErrorMessage name="email" component="div" className="contact-form__error" />
              </div>

              <div className="contact-form__group">
                <label htmlFor="mensaje" className="contact-form__label">Mensaje</label>
                <Field as="textarea" name="mensaje" className="contact-form__textarea" />
                <ErrorMessage name="mensaje" component="div" className="contact-form__error" />
              </div>

              <div className="contact-form__txt">
                <Link className="contact-form__link" to="/politica-de-privacidad">Política de privacidad</Link>
                <Link className="contact-form__link" to="/terminos-y-condiciones">Términos y condiciones</Link>
              </div>

              <button className="contact-form__btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>

              {error && <p className="contact-form__error">{error}</p>}
            </Form>
          </section>
        )}
      </Formik>

      
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">✓</div>
            <h3>¡Formulario enviado con éxito!</h3>
            <p>Te contactaremos pronto</p>
            <button className="modal-btn" onClick={() => setShowModal(false)}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
