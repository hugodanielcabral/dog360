import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signin } from "../api/users.api.js";
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Login = () => {
  const navigate = useNavigate()

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

  const validateContrasenia = (value) => {
    let error;
    if (!value) {
      error = 'Campo requerido';
    } else if (value.length < 5 || value.length > 15) {
      error = 'La contraseña debe tener entre 5 y 15 caracteres';
    }
    return error;
  }
 

  return (
    <div className="bg-white bg-opacity-70 rounded-lg shadow-lg max-w-md m-auto p-4 flex flex-col justify-center mt-28">
      <h2 className="text-3xl font-bold mb-4 text-slate-900">
        Inicio de Usuario
      </h2>
      <Formik initialValues={{
        correo: "",
        contrasenia: ""
      }}
      onSubmit={async (values, actions) => {
        const response = await signin(values);
        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Sesión iniciada',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            localStorage.setItem('isLoggedIn', 'true')
            navigate('/')
          })
        }else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Credenciales incorrectas',
          })
          actions.resetForm();
        }
      }}>
        {({isSubmitting}) => (
          <Form>
            <div className="flex flex-col">
              <label className="block text-slate-900 opacity-90">Correo:</label>
              <Field
                type="email"
                name="correo"
                validate={validateCorreo}
                className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              />
              <ErrorMessage
                name="correo"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="block text-slate-900 opacity-90">Contraseña:</label>
              <Field
                type="password"
                name="contrasenia"
                validate={validateContrasenia}
                className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              />
              <ErrorMessage
                name="contrasenia"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col">

            <button
              type="submit"
              className="bg-[#65451f] p-2 rounded-md mt-4 hover:opacity-80 m-auto text-sm focus:outline-none"
              disabled={isSubmitting}
            >
              Ingresar
            </button>
            <Link to="/signup" className="bg-[#65451f] p-2 rounded-md mt-2 hover:opacity-80 m-auto text-sm focus:outline-none">Crear Cuenta</Link>
            </div>
          </Form>
        )}


      </Formik>
    </div>
  )
}
