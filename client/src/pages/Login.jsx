import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [correoValido, setCorreoValido] = useState(true)
  const [credencialesCorrectas, setCredencialesCorrectas] = useState(true)

  const handleLogin = () => {
    if (!correo || !password) {
      alert('Por favor, completa todos los campos')
      return
    }

    if (!correoValido) {
      alert('Por favor, ingresa un correo válido')
      return
    }

    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || []
    const usuario = usuariosGuardados.find(
      (u) => u.correo === correo && u.password === password
    )

    if (usuario) {
      alert('Inicio de sesión exitoso')
      localStorage.setItem('isLoggedIn', true)
      navigate('/')
    } else {
      setCredencialesCorrectas(false)
    }
  }

  const validarCorreo = (correo) => {
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return regexCorreo.test(correo)
  }

  const handleChangeCorreo = (e) => {
    const nuevoCorreo = e.target.value
    setCorreo(nuevoCorreo)
    setCorreoValido(validarCorreo(nuevoCorreo))
  }

  return (
    <div className="bg-white bg-opacity-70 rounded-lg shadow-lg max-w-md m-auto p-4 flex flex-col justify-center mt-28">
      <h2 className="text-3xl font-bold mb-4 text-slate-900">
        Inicio de Sesión
      </h2>
      <div className="flex flex-col">
        <label clsassName="block text-slate-900 mt-2 opacity-90">Correo:</label>
        <input
          type="email"
          value={correo}
          onChange={handleChangeCorreo}
          className={`w-full px-2 py-1 border ${
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
        />
        {!credencialesCorrectas && (
          <p className="text-red-500 text-sm mb-2">
            Credenciales incorrectas. Por favor, intenta de nuevo.
          </p>
        )}
        <button
          onClick={handleLogin}
          className="bg-[#65451f] p-2 rounded-md mt-4 hover:opacity-80 m-auto text-sm focus:outline-none"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  )
}
