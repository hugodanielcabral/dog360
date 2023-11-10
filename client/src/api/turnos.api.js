import axios from "axios";

export const createTurnoRequest = async (data) =>
  await axios.post("http://localhost:4000/turnos", data);

export const getTurnoRequest = async (id) => {
  const response = await axios.get(`http://localhost:4000/turnos/${id}`);
  return response;
};

export const deleteTurnoRequest = async (id) =>
  await axios.delete(`http://localhost:4000/turnos/${id}`);
