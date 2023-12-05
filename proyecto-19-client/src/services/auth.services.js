import axios from "axios";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}/api/v1`;

export const loginUser = async (formData) => {
  try {
    const response = await axios.post("/auth/login", formData);

    if (response.status === 200) {
      return [200, response.data];
    }

    if (response.status === 404) {
      return [404, response.status];
    }
  } catch (error) {
    return 404;
  }
};

export const registerUser = async (formData) => {
  try {
    const response = await axios.post("/auth/register", formData);

    if (response.status === 201) {
      return [201, response.data];
    }
  } catch (error) {
    if (error.response.status === 409) {
      return [409, error.response.data.error];
    }

    if (error.response.status === 400) {
      return [400, error.response.data.errors];
    }
  }
};


