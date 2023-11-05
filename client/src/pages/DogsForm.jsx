import { Formik, Form } from "formik"
import { createDogRequest } from "../api/dogs.api"
export const DogsForm = () => {
  return (
    <div>
      <Formik 
        initialValues={{
          nombre: "",
          descripcion: "",
          imagen: "",
          tamanio: "",
          esperanza_de_vida: "",
          personalidad: "",

        }}
        onSubmit={async (values, actions) => {
          console.log(values)
          try {
            const response = await createDogRequest(values)
            console.log(response)
            actions.resetForm()
          } catch (error) {
            console.log(error);
          }
        }}
      >
       {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={ handleSubmit }>
          <label>
            Nombre
          </label>
          <input type="text" name="nombre" onChange={handleChange} value={values.nombre}/>
          <label>
            Descripción
          </label>
          <textarea name="descripcion" rows="3" placeholder="Descripción" onChange={handleChange} value={values.descripcion}/>
          <label>
            Imagen
          </label>
          <input type="text" name="imagen" onChange={handleChange} value={values.imagen}/>
          <label>
            Tamaño
          </label>
          <input type="text" name="tamanio" onChange={handleChange} value={values.tamanio}/>
          <label>
            Esperanza de vida
          </label>
          <input type="number" name="esperanza_de_vida" onChange={handleChange} value={values.esperanza_de_vida}/>
          <label>
            Personalidad
          </label>
          <textarea name="personalidad" rows="3" placeholder="Personaldiad" onChange={handleChange} value={values.personalidad}/>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Guardando..." : "Guardar"}
          </button>
        </Form>
       )}
      </Formik>
    </div>
  )
}
