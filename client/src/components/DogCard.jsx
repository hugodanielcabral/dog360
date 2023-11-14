import { useNavigate } from "react-router-dom";
import { useDogs } from "../context/DogContext";
import Swal from "sweetalert2";

export const DogCard = ({ dog }) => {
  const { deleteDog } = useDogs();
  const navigate = useNavigate();
  const rol = localStorage.getItem("rol");

  const showDogDetails = () => {
    Swal.fire({
      html: `
      <div style="position: relative;" >
      <img src="${dog.imagen}" class="w-full h-[600px] object-cover" alt="Custom image">
      <div style="position: absolute; top: 0; bottom: 0; display: flex; flex-direction: column; justify-content: center; background: rgba(0, 0, 0, 0.7); color: white; text-align: left; padding: 20px;">
        <h1 class="text-4xl font-bold mb-2 mx-auto">${dog.nombre}</h1>
        <div>
        <p class="mb-4">${dog.descripcion}</p>
          <p class="mb-4"><strong>Tamaño:</strong> ${dog.tamanio}</p>
          <p class="mb-4"><strong>Personalidad:</strong> ${dog.personalidad}</p>
          <p class="mb-4"><strong>Esperanza de vida:</strong> ${dog.esperanza_de_vida} años</p>
        </div>
      </div>
    </div>
    
  `,
      showConfirmButton: rol === "ADMIN",
      showCancelButton: rol === "ADMIN",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Editar",
      cancelButtonText: "Eliminar",
      customClass: {
        actions: "flex space-x-4 mt-4",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/edit/${dog.id}`);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        deleteDog(dog.id);
      }
    });
  };

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
    </div>
  );
};
