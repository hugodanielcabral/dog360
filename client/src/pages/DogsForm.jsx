import { Formik, Form } from 'formik'
import { createDogRequest } from '../api/dogs.api'
import { Link } from 'react-router-dom'
import './module.DogsForm.css'

export const DogsForm = () => {
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
          console.log(values)
          try {
            const response = await createDogRequest(values)
            console.log(response)
            actions.resetForm()
          } catch (error) {
            console.log(error)
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="max-w-3xl gap-6 px-2 m-auto my-20 sm:flex sm:justify-center"
          >
            <div className="flex flex-col flex-1">
              <label className="mt-2 text-sm font-semibold opacity-70">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                onChange={handleChange}
                value={values.nombre}
                className="p-2 rounded"
              />
              <label className="mt-2 text-sm font-semibold opacity-70">
                Imagen
              </label>
              <input
                type="text"
                name="imagen"
                onChange={handleChange}
                value={values.imagen}
                className="p-2 rounded"
              />
              <label className="mt-2 text-sm font-semibold opacity-70">
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
            </div>
            <div className="flex flex-col flex-1">
              <label className="mt-2 text-sm font-semibold opacity-90">
                Tamaño
              </label>
              <input
                type="text"
                name="tamanio"
                onChange={handleChange}
                value={values.tamanio}
                className="p-2 rounded"
              />
              <label className="mt-2 text-sm font-semibold opacity-75">
                Esperanza de vida (años)
              </label>
              <input
                type="number"
                name="esperanza_de_vida"
                onChange={handleChange}
                value={values.esperanza_de_vida}
                className="p-2 rounded"
              />
              <label className="mt-2 text-sm font-semibold opacity-70">
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
