import { useNavigate } from 'react-router-dom'
import { useDogs } from '../context/DogContext'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const DogCard = ({ dog }) => {
  const { deleteDog } = useDogs();
  const navigate = useNavigate();

  const showDogDetails = () => {
  Swal.fire({
  html: `
    <div style="position: relative;">
      <img src="${dog.imagen}" class="w-full h-[600px] object-cover" alt="Custom image">
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background: rgba(0, 0, 0, 0.7); color: white;">
        <h1 class="text-2xl font-bold mb-2">${dog.nombre}</h1>
        <p>${dog.descripcion}</p>
        <p><strong>Tamaño:</strong> ${dog.tamanio}</p>
        <p><strong>Personalidad:</strong> ${dog.personalidad}</p>
        <p><strong>Esperanza de vida:</strong> ${dog.esperanza_de_vida}</p>
      </div>
    </div>
  `,
  showConfirmButton: false,
  customClass: {
    popup: 'custom-popup-class'
  }
});

    
    
    
  }

  return (
    <div className="p-2 bg-[#BF9270] rounded shadow cursor-pointer">
      <img
        className="w-full h-[200px] object-cover"
        src={dog.imagen}
        alt={dog.nombre}
        onClick={() => showDogDetails()}
      />
      <div className="flex items-center justify-center h-4 p-4">
        <h3 className="font-bold text-white ">{dog.nombre}</h3>
      </div>
      <div className="flex items-center justify-center h-4 p-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => deleteDog(dog.id)}
        >
          Eliminar
        </button>
        <Link to={`/edit/${dog.id}`}>Editar</Link>
      </div>
    </div>
  );
}
