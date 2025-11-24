import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/perfil");
    }
  }, [isAuthenticated, navigate]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email inválido")
      .required("El email es obligatorio"),
    password: Yup.string()
      .min(6, "Mínimo 6 caracteres")
      .required("La contraseña es obligatoria"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setError(null);

    try {
      await login(values);
      setShowModal(true);
      resetForm();
      setTimeout(() => {
        navigate("/perfil");
      }, 2000);
    } catch (error) {
      console.log(`Error en el login: ${error.message}`);
      setError(error.message || "No se pudo iniciar sesión");
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <section className="contact-form-section">
            <Form className="contact-form">
              <h2 className="contact-form__title">Iniciar Sesión</h2>

              <div className="contact-form__group">
                <label htmlFor="email" className="contact-form__label">Email</label>
                <Field type="email" name="email" className="contact-form__input" />
                <ErrorMessage name="email" component="div" className="contact-form__error" />
              </div>

              <div className="contact-form__group">
                <label htmlFor="password" className="contact-form__label">Contraseña</label>
                <Field type="password" name="password" className="contact-form__input" />
                <ErrorMessage name="password" component="div" className="contact-form__error" />
              </div>

              <button className="contact-form__btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Ingresando...' : 'Ingresar'}
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
            <h3>¡Inicio de sesión exitoso!</h3>
            <p>Redirigiendo...</p>
            <button className="modal-btn" onClick={() => setShowModal(false)}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage