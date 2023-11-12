import { useState, useEffect } from 'react'
import { getTurnoRequest, deleteTurnoRequest } from '../../api/turnos.api'
import { MainLayout } from '../../layout/MainLayout'
import jsPDF from 'jspdf'
import moment from 'moment'
import Swal from 'sweetalert2'
import dog from '../../images/dog.png'
import noturnos from '../../images/noturnos.png'
import qr from '../../images/qr-info.png'

export const TurnosDetail = () => {
  const [turnos, setTurnos] = useState([])
  const [usuario, setUsuario] = useState([])

  useEffect(() => {
    const loadTurnos = async () => {
      try {
        const usuario_id = parseInt(localStorage.getItem('usuario_id'))
        const response = await getTurnoRequest(usuario_id)
        setTurnos(response.data.turnos)
        setUsuario(response.data.userInfo)
        console.log(response.data.userInfo[0].nombre)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
    loadTurnos()
  }, [])

  const getImageDataUrl = async (imgSrc) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        const dataUrl = canvas.toDataURL('image/png')
        resolve(dataUrl)
      }
      img.onerror = reject
      img.src = imgSrc
    })
  }

  const generatePDF = async (turno) => {
    try {
      const doc = new jsPDF()
      const dogImageData = await getImageDataUrl(dog)
      const qrImageData = await getImageDataUrl(qr)

      doc.addImage(dogImageData, 'PNG', 160, 10, 50, 50)
      doc.setFontSize(22)
      doc.text('Dog360', 105, 30, { align: 'center' })
      doc.setFontSize(12)

      doc.text('Informacion del turno', 105, 45, { align: 'center' })

      const fechaFormateada = moment(turno.dia).format('DD/MM/YYYY')

      doc.text(`Dia: ${fechaFormateada}`, 10, 55)
      doc.text(`Hora: ${turno.hora}`, 10, 65)
      doc.text(`Mascota: ${turno.mascota}`, 10, 75)
      doc.text(`Descripcion: ${turno.descripcion}`, 10, 85)

      doc.text('Informacion del cliente', 105, 95, { align: 'center' })

      doc.text(`Nombre: ${usuario[0].nombre}`, 10, 105)
      doc.text(`Apellido: ${usuario[0].apellido}`, 10, 115)
      doc.text(`Email: ${usuario[0].correo}`, 10, 125)

      doc.addImage(qrImageData, 'PNG', 80, 135, 50, 50)
      doc.text('Escanea el QR para contactarnos', 105, 195, { align: 'center' })

      doc.save(`Turno-${turno.id}.pdf`)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteTurnoRequest(id)
      const newTurnos = turnos.filter((turno) => turno.id !== id)
      setTurnos(newTurnos)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Turno cancelado/Eliminado',
        showConfirmButton: false,
        timer: 1500,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <MainLayout>
      <div className="flex flex-wrap justify-center">
        {turnos.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-gray-700">No hay turnos</p>
            <img src={noturnos} alt="No turnos" className="w-2/3" />
          </div>
        ) : (
          turnos.map((turno) => (
            <div
              key={turno.id}
              className="w-1/3 p-4 m-2 mb-4 text-gray-700 bg-white rounded shadow"
            >
              <h1 className="mb-2 text-2xl font-bold">Turno N° {turno.id}</h1>
              <p className="text-lg font-bold">
                {moment(turno.dia).format('DD/MM/YYYY')}
              </p>
              <p className="text-lg font-bold text-gray-600">{turno.hora}</p>
              <p className="text-lg font-bold text-gray-600">{turno.mascota}</p>
              <p className="text-lg font-bold text-gray-600">
                {turno.descripcion}
              </p>
              <button
                onClick={() => generatePDF(turno)}
                className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
              >
                Imprimir PDF
              </button>
              <button
                className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
                onClick={() => handleDelete(turno.id)}
              >
                Cancelar/Eliminar
              </button>
            </div>
          ))
        )}
      </div>
    </MainLayout>
  )
}
