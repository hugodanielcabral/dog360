import axios from "axios";

export const getDogsRequest = async () =>
  await axios.get("http://localhost:4000/dogs");

export const getDogRequest = async (id) =>
  await axios.get(`http://localhost:4000/dogs/${id}`);

export const createDogRequest = async (dog) =>
  await axios.post("http://localhost:4000/dogs", dog);

export const updateDogRequest = async (id, dog) =>
  await axios.patch(`http://localhost:4000/dogs/${id}`, dog);

export const deleteDogRequest = async (id) =>
  await axios.delete(`http://localhost:4000/dogs/${id}`);
