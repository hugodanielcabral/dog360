import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signup } from '../api/users.api.js'
import { useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import dog from '../images/dog.png'

export const Registro = () => {
  const navigate = useNavigate()

  const validateNombre = (value) => {
    let error
    if (!value) {
      error = 'Campo requerido'
    } else if (value.length < 3 || value.length > 30) {
      error = 'El nombre debe tener entre 3 y 30 caracteres'
    }
    return error
  }

  const validateApellido = (value) => {
    let error
    if (!value) {
      error = 'Campo requerido'
    } else if (value.length < 3 || value.length > 30) {
      error = 'El apellido debe tener entre 3 y 30 caracteres'
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

  return (
    <div className="max-w-md p-4 m-auto mt-12 bg-white rounded-lg shadow-lg bg-opacity-70">
      <div className="flex items-center justify-between ">
        <h2 className="text-3xl font-bold text-slate-900">
          Registro de Usuario
        </h2>
        <img src={dog} alt="dog360" width={90} />
      </div>
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
          const response = await signup(values)
          if (response.status === 200) {
            Swal.fire({
              icon: 'success',
              title: 'Usuario creado',
            }).then(() => {
              actions.resetForm()
              navigate('/signin')
            })
          } else if (response.status === 409) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El correo ya existe',
            })
          } else {
            alert('Error al crear usuario')
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
              <ErrorMessage
                name="nombre"
                component="div"
                className="mt-1 text-sm text-red-500"
              />

              <label className="block text-slate-900 opacity-90">
                Apellido:
              </label>
              <Field
                type="text"
                name="apellido"
                validate={validateApellido}
                className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              />
              <ErrorMessage
                name="apellido"
                component="div"
                className="mt-1 text-sm text-red-500"
              />

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
                className="mt-1 text-sm text-red-500"
              />

              <label className="block text-slate-900 opacity-90">
                Contraseña:
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
                className="mt-1 text-sm text-red-500"
              />
            </div>
            <div className="flex flex-col gap-2 mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="py-2 font-bold rounded-md bg-[#e3b7a0] focus:outline-none hover:shadow duration-100 hover:opacity-80 text-slate-900"
              >
                Crear Cuenta
              </button>
              <div className="text-center text-slate-900">
                <span>OR</span>
              </div>
                <Link to="/signin" className="py-2 font-bold rounded-md bg-[#e3b7a0] focus:outline-none hover:shadow duration-100 hover:opacity-80 text-slate-900 text-center">Iniciar Sesión</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
