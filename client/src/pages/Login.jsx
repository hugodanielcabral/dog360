import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signin } from '../api/users.api.js'
import { useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import dog from '../images/dog.png'

export const Login = () => {
  const navigate = useNavigate()

  const validateCorreo = (value) => {
    let error
    if (!value) {
      error = 'Campo requerido'
    } else if (value.length > 40) {
      error = 'El correo debe tener un máximo de 40 caracteres'
    } else if (!/^\S+@\S+\.\S+$/.test(value)) {
      error = 'El correo debe tener el formato correcto (correo@dominio.com)'
    }
    return error
  }

  const validateContrasenia = (value) => {
    let error
    if (!value) {
      error = 'Campo requerido'
    } else if (value.length < 5 || value.length > 15) {
      error = 'La contraseña debe tener entre 5 y 15 caracteres'
    }
    return error
  }

  return (
    <div className="flex flex-col justify-center max-w-md p-4 m-auto mt-24 bg-white rounded-lg shadow-lg bg-opacity-70">
      <div className="flex items-center justify-between ">
        <h2 className="text-3xl font-bold text-slate-900">Inicio de Usuario</h2>
        <img src={dog} alt="dog360" width={90} />
      </div>
      <Formik
        initialValues={{
          correo: '',
          contrasenia: '',
        }}
        onSubmit={async (values, actions) => {
          const response = await signin(values)
          if (response.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Sesión iniciada',
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              localStorage.setItem('isLoggedIn', 'true')
              localStorage.setItem('rol', response.data.rol)
              localStorage.setItem('usuario_id', response.data.id)
            }).then(() => {
              navigate('/')
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Credenciales incorrectas',
            })
          }
        }}
      >
        {({ isSubmitting }) => (
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
                className="text-sm text-red-500"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="block text-slate-900 opacity-90">
                Contraseña:
              </label>
              <Field
                type="password"
                name="contrasenia"
                validate={validateContrasenia}
                className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              />
              <ErrorMessage
                name="contrasenia"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
            <div className="flex flex-col gap-2 mt-6">
              <button
                type="submit"
                className="py-2 font-bold rounded-md bg-[#e3b7a0] focus:outline-none hover:shadow duration-100 hover:opacity-80 text-slate-900"
                disabled={isSubmitting}
              >
                Ingresar
              </button>
              <div className="text-center text-slate-900">
                <span>OR</span>
              </div>
                <Link to="/signup" className="py-2 font-bold rounded-md bg-[#e3b7a0] focus:outline-none hover:shadow duration-100 hover:opacity-80 text-slate-900 text-center">Crear Cuenta</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
