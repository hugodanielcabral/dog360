import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const navigate = useNavigate();


  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [correoValido, setCorreoValido] = useState(true);
  const [credencialesCorrectas, setCredencialesCorrectas] = useState(true);

  const handleLogin = () => {
    if (!correo || !password) {
      alert('Por favor, completa todos los campos');
      return;
    }

    if (!correoValido) {
      alert('Por favor, ingresa un correo válido');
      return;
    }

    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuariosGuardados.find((u) => u.correo === correo && u.password === password);

    if (usuario) {
      alert('Inicio de sesión exitoso');
      localStorage.setItem('isLoggedIn', true);
      navigate("/")
    } else {
      setCredencialesCorrectas(false);
    }
  };

  const validarCorreo = (correo) => {
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexCorreo.test(correo);
  };

  const handleChangeCorreo = (e) => {
    const nuevoCorreo = e.target.value;
    setCorreo(nuevoCorreo);
    setCorreoValido(validarCorreo(nuevoCorreo));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-96 mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-4">Inicio de Sesión</h2>
      <div className="mb-2">
        <label className="block text-gray-600">Correo:</label>
        <input
          type="email"
          value={correo}
          onChange={handleChangeCorreo}
          className={`w-full px-2 py-1 border ${correoValido ? 'border-gray-300' : 'border-red-500'} rounded focus:outline-none focus:border-blue-400`}
        />
        {!correoValido && (
          <p className="text-red-500 text-sm mt-1">Correo no válido</p>
        )}
      </div>
      <div className="mb-2">
        <label className="block text-gray-600">Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
        />
      </div>
      {!credencialesCorrectas && (
        <p className="text-red-500 text-sm mb-2">Credenciales incorrectas. Por favor, intenta de nuevo.</p>
      )}
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Iniciar Sesión
      </button>
    </div>
  );
};

