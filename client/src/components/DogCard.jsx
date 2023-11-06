
export const DogCard = ({ dog }) => {
  return (
    <>
        <h1 className="text-2xl">Raza: {dog.nombre}</h1>
        <img src={dog.imagen} alt="" />
        <p>{dog.descripcion}</p>
        <p>{dog.tamanio}</p>
        <p>{dog.esperanza_de_vida}</p>
        <p>{dog.personalidad}</p>     
     </>
  )
}
