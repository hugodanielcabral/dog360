import axios from "axios";

export const signup = async (data) => {
  try {
    const response = await axios.post("http://localhost:4000/signup", data);
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      throw error;
    }
  }
};

export const signin = async (data) => {
  try {
    const response = await axios.post("http://localhost:4000/signin", data);
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    } else {
      throw error;
    }
  }
};
