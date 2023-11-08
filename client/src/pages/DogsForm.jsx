import { Formik, Form } from 'formik'
import { Link, useParams } from 'react-router-dom'
import { useDogs } from '../context/DogContext'
import './module.DogsForm.css'

export const DogsForm = () => {
  
  const { createDog, updateDog } = useDogs()

  const { id } = useParams()
  
  return (
    <div className="">
      <Link to="/">Home</Link>
      <Formik
        initialValues={{
          nombre: '',
          descripcion: '',
          imagen: '',
          tamanio: '',
          esperanza_de_vida: '',
          personalidad: '',
        }}
        onSubmit={async (values, actions) => {
          if (id){
            await updateDog(id, values)
          }else {
            createDog(values)
            actions.resetForm()
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="max-w-3xl gap-6 px-2 m-auto my-20 sm:flex sm:justify-center"
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
    </div>
  )
}
