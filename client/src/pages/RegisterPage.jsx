import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const base_url = import.meta.env.VITE_BASE_URL;

const RegisterPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const initialValues = {
    nombre: "",
    email: "",
    password: "",
    role: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string()
      .email("Email inválido")
      .required("El email es obligatorio"),
    password: Yup.string()
      .min(6, "Mínimo 6 caracteres")
      .required("La contraseña es obligatoria"),
    role: Yup.string().required("Selecciona un rol"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setError(null);

    try {
      const response = await fetch(`${base_url}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      console.log(data);
      setShowModal(true);
      resetForm();
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.log(`Error en el registro: ${err.message}`);
      setError(err.message || "No se pudo crear el usuario");
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
              <h2 className="contact-form__title">Crear Usuario</h2>

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
                <label htmlFor="password" className="contact-form__label">Contraseña</label>
                <Field type="password" name="password" className="contact-form__input" />
                <ErrorMessage name="password" component="div" className="contact-form__error" />
              </div>

              <div className="contact-form__group">
                <label htmlFor="role" className="contact-form__label">Tipo de Usuario</label>
                <Field as="select" name="role" className="contact-form__input">
                  <option value="" disabled>Seleccionar tipo</option>
                  <option value="admin">Admin</option>
                  <option value="usuario">Común</option>
                </Field>
                <ErrorMessage name="role" component="div" className="contact-form__error" />
              </div>

              <button className="contact-form__btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Registrando...' : 'Registrarme'}
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
            <h3>¡Usuario creado con éxito!</h3>
            <p>Redirigiendo al login...</p>
            <button className="modal-btn" onClick={() => setShowModal(false)}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterPage;