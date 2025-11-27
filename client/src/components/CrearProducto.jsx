import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const base_url = import.meta.env.VITE_BASE_URL;

const CrearProductoPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  // Validación Yup
  const schema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio"),
    price: Yup.number()
      .required("El precio es obligatorio")
      .positive("El precio debe ser un número positivo"),
    description: Yup.string()
      .required("La descripción es obligatoria")
      .min(10, "La descripción debe tener al menos 10 caracteres"),
    image: Yup.string().url("Debe ser una URL válida").required("La URL de la imagen es obligatoria"),
    ficha: Yup.string().required("La ficha técnica es obligatoria"),
    garantia: Yup.string().required("La garantía es obligatoria"),
  });

  const handleSubmit = async (values, { resetForm }) => {
   setError(null);

    try {
      const res = await fetch(`${base_url}/productos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        alert("Producto creado con éxito");
        resetForm();
        navigate("/productos");
      } else {
        setError("Error al crear el producto. Inténtalo de nuevo.");
      }
    } catch (err) {
      setError("Ocurrió un error al intentar crear el producto.");
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        price: "",
        description: "",
        image: "",
        ficha: "",
        garantia: "",
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <section className="contact-form-section">
          <Form className="contact-form">
            <h2 className="contact-form__title">Crear Producto</h2>

            <div className="contact-form__group">
              <label htmlFor="name" className="contact-form__label">Nombre</label>
              <Field type="text" name="name" id="name" className="contact-form__input" />
              <ErrorMessage name="name" component="div" className="contact-form__error" />
            </div>

            <div className="contact-form__group">
              <label htmlFor="price" className="contact-form__label">Precio</label>
              <Field type="number" name="price" id="price" className="contact-form__input" />
              <ErrorMessage name="price" component="div" className="contact-form__error" />
            </div>

            <div className="contact-form__group">
              <label htmlFor="description" className="contact-form__label">Descripción</label>
              <Field as="textarea" name="description" id="description" className="contact-form__textarea" />
              <ErrorMessage name="description" component="div" className="contact-form__error" />
            </div>

            <div className="contact-form__group">
              <label htmlFor="image" className="contact-form__label">URL de la Imagen</label>
              <Field type="text" name="image" id="image" className="contact-form__input" />
              <ErrorMessage name="image" component="div" className="contact-form__error" />
            </div>

            <div className="contact-form__group">
              <label htmlFor="ficha" className="contact-form__label">Ficha Técnica</label>
              <Field as="textarea" name="ficha" id="ficha" className="contact-form__textarea" />
              <ErrorMessage name="ficha" component="div" className="contact-form__error" />
            </div>

            <div className="contact-form__group">
              <label htmlFor="garantia" className="contact-form__label">Garantía</label>
              <Field type="text" name="garantia" id="garantia" className="contact-form__input" />
              <ErrorMessage name="garantia" component="div" className="contact-form__error" />
            </div>

            <button type="submit" className="contact-form__btn" disabled={isSubmitting}>
              {isSubmitting ? "Creando..." : "Crear Producto"}
            </button>

            {error && <p className="contact-form__error">{error}</p>}
          </Form>
        </section>
      )}
    </Formik>
  );
};

export default CrearProductoPage;
