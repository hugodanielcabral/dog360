import { useDogs } from "../context/DogContext"
import Swal from "sweetalert2"


export const Searcher = () => {

    const { dogs, loadDogs } = useDogs()

    const handleSearch = () => {
       Swal.fire({
        title: 'Escriba el nombre del perro',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        showLoaderOnConfirm: true,
        preConfirm: (name) => {
         const dogFound = dogs.find((dog) => dog.nombre.toLowerCase().trim() === name.toLowerCase().trim())
        
         if(dogFound){
            Swal.fire({
                html: `
                  <div style="position: relative;">
                    <img src="${dogFound.imagen}" class="w-full h-[600px] object-cover" alt="Custom image">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background: rgba(0, 0, 0, 0.7); color: white;">
                      <h1 class="text-2xl font-bold mb-2">${dogFound.nombre}</h1>
                      <p>${dogFound.descripcion}</p>
                      <p><strong>Tamaño:</strong> ${dogFound.tamanio}</p>
                      <p><strong>Personalidad:</strong> ${dogFound.personalidad}</p>
                      <p><strong>Esperanza de vida:</strong> ${dogFound.esperanza_de_vida}</p>
                    </div>
                  </div>`,
                showConfirmButton: true,
                customClass: {
                  actions: 'flex space-x-4 mt-4',
                },
              })
         }else{
            Swal.showValidationMessage(`No se encontro el perro ${name}`)
         }
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
    }
  return (
    <>
        <button className="btn btn-primary w-80" onClick={handleSearch}>Buscar</button>
    </>
  )
}
