import axios from "axios";

export const createTurnoRequest = async (data) =>
  await axios.post("http://localhost:4000/turnos", data);
