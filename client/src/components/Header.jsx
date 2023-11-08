import { Link, useNavigate } from 'react-router-dom'
import dog from '../images/dog.png'
import Swal from 'sweetalert2'

function Header({ title }) {
const navigate = useNavigate()

const turnos = JSON.parse(localStorage.getItem('turnos')) || [];

const showTurnoForm = () => {
  Swal.fire({
    title: 'Solicitar un turno',
    html: `
      <form id="turno-form">
        <div class="mb-3">
          <label for="fecha">Día del turno:</label>
          <input type="date" id="fecha" min="${getMinDate()}" max="2099-12-31" required>
        </div>
        <div class="mb-3">
          <label for="mascota">Nombre de la mascota:</label>
          <input type="text" id="mascota" required>
        </div>
        <div class="mb-3">
          <label for="descripcion">Descripción del problema:</label>
          <textarea id="descripcion" required></textarea>
        </div>
      </form>`,
    showCancelButton: true,
    confirmButtonText: 'Solicitar',
    cancelButtonText: 'Cancelar',
    preConfirm: () => {
      const fecha = document.getElementById('fecha').value;
      const mascota = document.getElementById('mascota').value;
      const descripcion = document.getElementById('descripcion').value;

      // Aquí puedes validar la fecha y hora del turno según tus requisitos
      // Puedes agregar tu lógica de validación aquí y mostrar un mensaje de error si es necesario

      return { fecha, mascota, descripcion };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí puedes manejar la solicitud de turno con los datos ingresados
      const turno = result.value;

      // Agregar el nuevo turno al array de turnos existente
      turnos.push(turno);

      // Almacenar el array de turnos en localStorage
      localStorage.setItem('turnos', JSON.stringify(turnos));

      // Puedes hacer más con los turnos si es necesario
      console.log('Turnos almacenados:', turnos);
    }
  });
};

const getMinDate = () => {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  if (currentDate.getDay() === 6) {
    currentDate.setDate(currentDate.getDate() + 2); // Si es sábado, agrega 2 días (lunes)
  } else {
    currentDate.setDate(currentDate.getDate() + 1); // De lo contrario, agrega 1 día
  }
  return currentDate.toISOString().split('T')[0];
};
const showTurnos = () => {
  if (turnos) {
    Swal.fire({
      html: `
        <div>
          <h1 class="text-2xl font-bold mb-2">Mis turnos</h1>
          <ul class="list-disc list-inside">
            ${turnos && turnos.map((turno) => `<li class="mb-2">${turno.mascota} - ${turno.fecha} - ${turno.descripcion}</li>`).join('')}
          </ul>

        </div>
      `,
    })
  }else{
    Swal.fire({
      icon: 'error',
      title: 'No hay turnos',
      showConfirmButton: false,
      timer: 1500
    })
  }
}


  const handleSignOut = () => {
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.setItem('rol', '')
    Swal.fire({
      icon: 'success',
      title: 'Sesión cerrada',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      localStorage.removeItem('isLoggedIn')
      navigate('/signin')
    })
    navigate('/')
  }

  return (
    <header className="bg-[#BF9270] text-white px-4 py-4 mb-6">
      <nav className="flex items-center m-auto justify-evenly">
        <div>
          <Link to="/">
            <img src={dog} alt="" width={90} />
          </Link>
        </div>
        <input
          className="w-[500px] p-2 rounded-md"
          type="text"
          placeholder="Buscar..."
        />
        <div className="flex justify-end gap-4 ml-4">
          {
            localStorage.getItem('rol') === 'ADMIN' && (
              <>
                <Link to="/new">Crear perrito</Link>
                <button onClick={showTurnoForm}>Solicitar turno</button>
                <button onClick={showTurnos}>Mis turnos</button>
              </>
            )
          }
          {localStorage.getItem('isLoggedIn') === 'true' ? (
            <button onClick={handleSignOut}>Sign out</button>
          ) : (
            <>
              <Link to="/signin">Login</Link>
              <Link to="/signup">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
