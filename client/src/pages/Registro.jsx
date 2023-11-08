import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signup } from "../api/users.api.js";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Registro = () => {
  const navigate = useNavigate();

  const validateNombre = (value) => {
    let error;
    if (!value) {
      error = 'Campo requerido';
    } else if (value.length < 3 || value.length > 30) {
      error = 'El nombre debe tener entre 3 y 30 caracteres';
    }
    return error;
  };

  const validateApellido = (value) => {
    let error;
    if (!value) {
      error = 'Campo requerido';
    } else if (value.length < 3 || value.length > 30) {
      error = 'El apellido debe tener entre 3 y 30 caracteres';
    }
    return error;
  };

  const validateContrasenia = (value) => {
    let error;
    if (!value) {
      error = 'Campo requerido';
    } else if (value.length < 5 || value.length > 15) {
      error = 'La contraseña debe tener entre 5 y 15 caracteres';
    }
    return error;
  };

  const validateCorreo = (value) => {
    let error;
    if (!value) {
      error = 'Campo requerido';
    } else if (value.length > 40) {
      error = 'El correo debe tener un máximo de 40 caracteres';
    } else if (!/^\S+@\S+\.\S+$/.test(value)) {
      error = 'El correo debe tener el formato correcto (correo@dominio.com)';
    }
    return error;
  };

  return (
    <div className="bg-white bg-opacity-70 rounded-lg shadow-lg max-w-md m-auto p-4 flex flex-col justify-center mt-28">
      <h2 className="text-3xl font-bold mb-4 text-slate-900">
        Registro de Usuario
      </h2>
      <Formik
        initialValues={{
          nombre: '',
          apellido: '',
          correo: '',
          contrasenia: '',
          estado: 0,
          rol: 'CLIENTE',
        }}
        onSubmit={async (values, actions) => {
          const response = await signup(values);
          if (response.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Usuario creado',
            }).then(() => {
              actions.resetForm();
              navigate('/signin');
            });
          } else if (response.status === 409) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El correo ya existe',
            });
          } else {
            alert('Error al crear usuario');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex flex-col">
              <label className="block text-slate-900 opacity-90">Nombre:</label>
              <Field
                type="text"
                name="nombre"
                validate={validateNombre}
                className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              />
              <ErrorMessage name="nombre" component="div" className="text-red-500 text-sm mt-1" />

              <label className="block text-slate-900 mt-2 opacity-90">Apellido:</label>
              <Field
                type="text"
                name="apellido"
                validate={validateApellido}
                className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              />
              <ErrorMessage name="apellido" component="div" className="text-red-500 text-sm mt-1" />

              <label className="block text-slate-900 mt-2 opacity-90">Correo:</label>
              <Field
                type="email"
                name="correo"
                validate={validateCorreo}
                className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              />
              <ErrorMessage name="correo" component="div" className="text-red-500 text-sm mt-1" />

              <label className="block text-slate-900 mt-2 opacity-90">Contraseña:</label>
              <Field
                type="password"
                name="contrasenia"
                validate={validateContrasenia}
                className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              />
              <ErrorMessage name="contrasenia" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#65451f] p-2 rounded-md mt-4 hover:opacity-80 m-auto text-sm focus:outline-none"
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
