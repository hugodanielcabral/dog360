import { useState, useEffect } from 'react'
import { signup } from "../api/users.api"

export const Registro = async () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('');
  const [contrasenia, setContrasenia] = useState('')
  const [correo, setCorreo] = useState('')



  const handleChangeCorreo = (e) => {
    const nuevoCorreo = e.target.value
    setCorreo(nuevoCorreo)
    setCorreoValido(validarCorreo(nuevoCorreo))
  }

  return (
    <div className="bg-white bg-opacity-70 rounded-lg shadow-lg max-w-md m-auto p-4 flex flex-col justify-center mt-28">
      <h2 className="text-3xl font-bold mb-4 text-slate-900">
        Registro de Usuario
      </h2>
      <div className="flex flex-col">
        <label className="block text-slate-900 opacity-90">Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
        />
        <label className="block text-slate-900 mt-2 opacity-90">Apellido:</label>
        <input
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
        />
        <label className="block text-slate-900 mt-2 opacity-90">Correo:</label>
        <input
          type="email"
          value={correo}
          onChange={handleChangeCorreo}
          className={` px-2 py-1 border ${
            correoValido ? 'border-gray-300' : 'border-red-500'
          } rounded focus:outline-none focus:border-blue-400`}
        />
        {!correoValido && (
          <p className="text-red-500 text-sm mt-1">Correo no válido</p>
        )}
        <label className="block text-slate-900 mt-2 opacity-90">
          Contraseña:
        </label>
        <input
          type="password"
          value={contrasenia}
          onChange={(e) => setContrasenia(e.target.value)}
          className=" px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
        />
        <button
          onClick={handleRegistro}
          className="bg-[#65451f] p-2 rounded-md mt-4 hover:opacity-80 m-auto text-sm focus:outline-none"
        >
          Registrarse
        </button>
        <Link
          to="/signin"
          className="bg-[#65451f] p-2 rounded-md mt-4 hover:opacity-80 m-auto text-sm focus:outline-none"
        >
          Inicia Sesión
        </Link>
      </div>
    </div>
  )
}