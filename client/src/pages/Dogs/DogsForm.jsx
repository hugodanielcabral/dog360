import { MainLayout } from "../../layout/MainLayout";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useDogs } from "../../context/DogContext";
import { useEffect } from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
import "./module.DogsForm.css";

export const DogsForm = () => {
  const { loadDogs, createDog, updateDog, dogs } = useDogs();

  const { id } = useParams();
  const navigate = useNavigate();
  const dog = dogs.find((dog) => dog.id == id);

  if (id) {
    useEffect(() => {
      loadDogs();
    }, [id]);
  }

  const validationSchema = Yup.object({
    nombre: Yup.string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .max(25, "El nombre no debe tener más de 25 caracteres")
      .required("El nombre es requerido"),
    imagen: Yup.string()
      /* .matches(/(\.jpg|\.png)$/, 'La imagen debe ser .jpg o .png') */
      .required("La imagen es requerida"),
    descripcion: Yup.string()
      .min(10, "La descripción debe tener al menos 10 caracteres")
      .max(250, "La descripción no debe tener más de 250 caracteres")
      .required("La descripción es requerida"),
    tamanio: Yup.string().required("El tamaño es requerido"),
    personalidad: Yup.string()
      .min(10, "La personalidad debe tener al menos 10 caracteres")
      .max(250, "La personalidad no debe tener más de 250 caracteres")
      .required("La personalidad es requerida"),
    esperanza_de_vida: Yup.string().required(
      "La esperanza de vida es requerida"
    ),
  });

  //* Si recargamos la pagina, se crasheaba debido a que dog no tenia
  //* los datos, la solucion fue agregar el useEffect y que este se
  //* ejecute cada vez que cambia el id y ademas poner el if de abajo
  if (!dog && id) {
    return <div>Loading or not found...</div>;
  }

  return (
    <MainLayout>
      <Formik
        initialValues={{
          nombre: dog?.nombre || "",
          imagen: dog?.imagen || "",
          descripcion: dog?.descripcion || "",
          tamanio: dog?.tamanio || "",
          personalidad: dog?.personalidad || "",
          esperanza_de_vida: dog?.esperanza_de_vida || "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          if (id) {
            const result = await updateDog(parseInt(id), values);
            result.status === 200
              ? Swal.fire({
                  icon: "success",
                  title: "Raza actualizada",
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  actions.resetForm();
                  navigate("/");
                })
              : Swal.fire({
                  icon: "error",
                  title: "Error",
                  showConfirmButton: false,
                  timer: 1500,
                });
          } else {
            createDog(values);
            actions.resetForm();
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="gap-6 p-4 text-black bg-white rounded"
          >
            <h1 className="text-3xl font-bold text-center">
              {id ? "Editar Raza" : "Nueva Raza"}
            </h1>
            <div className="flex flex-col">
              <div className="w-9/12 mx-auto">
                <label className="text-sm font-bold opacity-90">Nombre</label>
                <div className="flex flex-col mb-4">
                  <input
                    type="text"
                    name="nombre"
                    onChange={handleChange}
                    value={values.nombre}
                    className="p-2 text-white rounded"
                  />
                  <ErrorMessage
                    name="nombre"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label className="mt-2 text-sm font-bold opacity-90">
                    Imagen
                  </label>
                  <input
                    type="text"
                    name="imagen"
                    onChange={handleChange}
                    value={values.imagen}
                    className="p-2 text-white rounded"
                  />
                  <ErrorMessage
                    name="imagen"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="mt-2 text-sm font-bold opacity-90">
                    Descripción
                  </label>
                  <textarea
                    name="descripcion"
                    rows="3"
                    placeholder=""
                    onChange={handleChange}
                    value={values.descripcion}
                    className="p-2 text-white rounded"
                  />
                  <ErrorMessage
                    name="descripcion"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="w-9/12 mx-auto">
                <div className="flex flex-col mt-4">
                  <label className="text-sm font-bold opacity-90">Tamaño</label>
                  <input
                    type="text"
                    name="tamanio"
                    onChange={handleChange}
                    value={values.tamanio}
                    className="p-2 text-white rounded"
                  />
                  <ErrorMessage
                    name="tamanio"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="mt-2 text-sm font-bold opacity-90">
                    Esperanza de vida (años)
                  </label>
                  <input
                    type="number"
                    name="esperanza_de_vida"
                    onChange={handleChange}
                    value={values.esperanza_de_vida}
                    className="p-2 text-white rounded"
                  />
                  <ErrorMessage
                    name="esperanza_de_vida"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="mt-2 text-sm font-bold opacity-90">
                    Personalidad
                  </label>
                  <textarea
                    name="personalidad"
                    rows="3"
                    placeholder=""
                    onChange={handleChange}
                    value={values.personalidad}
                    className="p-2 text-white rounded"
                  />
                  <ErrorMessage
                    name="personalidad"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex flex-col w-9/12 mx-auto">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#3085D6] mt-4 m-auto py-2 px-4 rounded hover:bg-opacity-90 w-3/12 text-white"
                >
                  {isSubmitting ? "Guardando..." : "Guardar"}
                </button>
                {id && (
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="bg-[#DD3333] mt-4 m-auto py-2 px-4 rounded hover:bg-opacity-90 w-3/12 text-white"
                  >
                    Cancelar
                  </button>
                )}
                {!id && (
                  <button
                    type="reset"
                    disabled={isSubmitting}
                    className="bg-[#C62E2E] mt-4 m-auto py-2 px-4 rounded hover:bg-opacity-90 w-3/12 text-white"
                  >
                    {isSubmitting ? "Limpiando..." : "Reset"}
                  </button>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </MainLayout>
  );
};
