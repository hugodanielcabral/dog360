import axios from "axios";

export const createDogRequest = async (dog) =>
  await axios.post("http://localhost:4000/dogs", dog);
