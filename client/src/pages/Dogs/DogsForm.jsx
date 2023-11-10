import { Formik, Form } from 'formik'
import { Link, useParams } from 'react-router-dom'
import { useDogs } from '../../context/DogContext'
import './module.DogsForm.css'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { MainLayout } from '../../layout/MainLayout'

export const DogsForm = () => {
  const { loadDogs, createDog, updateDog, dogs } = useDogs()

  const { id } = useParams()
  const dog = dogs.find((dog) => dog.id == id)

  if (id) {
    useEffect(() => {
      loadDogs()
    }, [id])
  }

  //* Si recargamos la pagina, se crasheaba debido a que dog no tenia
  //* los datos, la solucion fue agregar el useEffect y que este se
  //* ejecute cada vez que cambia el id y ademas poner el if de abajo
  if (!dog && id) {
    return <div>Loading or not found...</div>
  }

  return (
    <MainLayout>
      <Formik
        initialValues={{
          nombre: dog?.nombre || '',
          imagen: dog?.imagen || '',
          descripcion: dog?.descripcion || '',
          tamanio: dog?.tamanio || '',
          personalidad: dog?.personalidad || '',
          esperanza_de_vida: dog?.esperanza_de_vida || '',
        }}
        onSubmit={async (values, actions) => {
          if (id) {
            const result = await updateDog(parseInt(id), values)
            result.status === 200
              ? Swal.fire({
                  icon: 'success',
                  title: 'Raza actualizada',
                  showConfirmButton: false,
                  timer: 1500,
                })
              : Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  showConfirmButton: false,
                  timer: 1500,
                })
          } else {
            createDog(values)
            actions.resetForm()
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="max-w-3xl gap-6 px-2 m-auto sm:flex sm:justify-center"
          >
            <div className="flex flex-col flex-1">
              <label className="mt-2 text-sm font-bold opacity-90">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                onChange={handleChange}
                value={values.nombre}
                className="p-2 rounded"
              />
              <label className="mt-2 text-sm font-bold opacity-90">
                Imagen
              </label>
              <input
                type="text"
                name="imagen"
                onChange={handleChange}
                value={values.imagen}
                className="p-2 rounded"
              />
              <label className="mt-2 text-sm font-bold opacity-90">
                Descripción
              </label>
              <textarea
                name="descripcion"
                rows="3"
                placeholder=""
                onChange={handleChange}
                value={values.descripcion}
                className="p-2 rounded"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#65451f] mt-4 m-auto py-2 px-4 rounded hover:bg-opacity-90 w-full"
              >
                {isSubmitting ? 'Limpiando...' : 'Reset'}
              </button>
            </div>
            <div className="flex flex-col flex-1">
              <label className="mt-2 text-sm font-bold opacity-90">
                Tamaño
              </label>
              <input
                type="text"
                name="tamanio"
                onChange={handleChange}
                value={values.tamanio}
                className="p-2 rounded"
              />
              <label className="mt-2 text-sm font-bold opacity-90">
                Esperanza de vida (años)
              </label>
              <input
                type="number"
                name="esperanza_de_vida"
                onChange={handleChange}
                value={values.esperanza_de_vida}
                className="p-2 rounded"
              />
              <label className="mt-2 text-sm font-bold opacity-90">
                Personalidad
              </label>
              <textarea
                name="personalidad"
                rows="3"
                placeholder=""
                onChange={handleChange}
                value={values.personalidad}
                className="p-2 rounded"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#65451f] mt-4 m-auto py-2 px-4 rounded hover:bg-opacity-90 w-full"
              >
                {isSubmitting ? 'Guardando...' : 'Guardar'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </MainLayout>
  )
}
