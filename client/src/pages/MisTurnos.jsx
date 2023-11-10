import { useState, useEffect } from "react"
import { getTurnoRequest, deleteTurnoRequest } from "../api/turnos.api"
import jsPDF from 'jspdf';
import moment from "moment";
import dog from "../images/dog.png"
import Swal from "sweetalert2";


export const MisTurnos = () => {

    const [turnos, setTurnos] = useState([])

    useEffect(() => {
    const loadTurnos = async () => {
        try {
        const usuario_id = parseInt(localStorage.getItem('usuario_id'))
        const response = await getTurnoRequest(usuario_id)
        setTurnos(response.data)
        console.log(response.data)
        }catch (error) {
        console.error(error)
        }
    }
    loadTurnos()
    }, [])

    const getImageDataUrl = async (imgSrc) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            // Crear un canvas y dibujar la imagen en él
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            // obtener la data URL del canvas
            const dataUrl = canvas.toDataURL('image/png');
            resolve(dataUrl);
          };
          img.onerror = reject;
          img.src = imgSrc;
        });
    };
    
    const generatePDF = async (turno) => {
        const doc = new jsPDF();
        const imageData = await getImageDataUrl(dog);
        
        doc.addImage(imageData, 'PNG', 160, 10, 50, 50);
        doc.setFontSize(22);
        doc.text('Dog360', 105, 30, { align: 'center' });
        doc.setFontSize(12); // Vuelve a poner la fuente al tamaño normal
      
        const fechaFormateada = moment(turno.dia).format('DD/MM/YYYY');
        
        doc.text(`Dia: ${fechaFormateada}`, 10, 50);
        doc.text(`Hora: ${turno.hora}`, 10, 60);
        doc.text(`Mascota: ${turno.mascota}`, 10, 70);
        doc.text(`Descripcion: ${turno.descripcion}`, 10, 80);
        doc.save(`Turno-${turno.id}.pdf`);
    }

    const handleDelete = async (id) => {
        try {
            await deleteTurnoRequest(id)
            const newTurnos = turnos.filter(turno => turno.id !== id)
            setTurnos(newTurnos)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Turno cancelado/Eliminado',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (error) {
            console.error(error)
        }
    }
    
    
    return (
        <>
          <h1 className="text-2xl font-bold mb-4">Mis turnos</h1>
          <div className="flex flex-wrap justify-center">
            {turnos.length === 0 ? (
              <p>No hay turnos</p>
            ) : (
              turnos.map((turno) => (
                <div key={turno.id} className="bg-white text-gray-700 rounded shadow p-4 mb-4 w-1/3 m-2">
                  <h1 className="text-2xl font-bold mb-2">Turno N° {turno.id}</h1>
                  <p className="text-lg font-bold">{moment(turno.dia).format('DD/MM/YYYY')}</p>
                  <p className="text-lg font-bold text-gray-600">{turno.hora}</p>
                  <p className="text-lg font-bold text-gray-600">{turno.mascota}</p>
                  <p className="text-lg font-bold text-gray-600">{turno.descripcion}</p>
                  <button onClick={() => generatePDF(turno)} className="mt-4 bg-blue-500 text-white rounded px-4 py-2">Imprimir PDF</button>
                  <button  className="mt-4 bg-red-500 text-white rounded px-4 py-2" onClick={() => handleDelete(turno.id)}>Cancelar/Eliminar</button>
                </div>
              ))
            )}
          </div>
        </>
      )
}
