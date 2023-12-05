import axios from "axios";

const BASE_URL = "https://good-slug-tux.cyclic.app/api/v1";

export const createCita = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/citas`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al realizar la petición:', error);
    throw new Error("Error occurred while creating the appointment. Please try again.");
  }
};

export const updateCita = async (citaId, formData) => {
  try {
    const response = await axios.put(`${BASE_URL}/citas/${citaId}`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al realizar la petición:', error);
    throw new Error("Error occurred while updating the appointment. Please try again.");
  }
};

export const getCitas = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/citas`);
    // console.log(response); // DEBUG

    if (response.status === 200) return response.data.data;
    else return [];
  } catch (error) {
    console.log("Error:", error.message);
    return [];
  }
};

export const getOneCita = async (citaId) => {
  try {
    if (!citaId) throw new Error("citaId is required!");

    const response = await axios.get(`${BASE_URL}/citas/${citaId}`);
    // console.log(response);

    if (response.status === 200) return response.data.data;
    else return undefined;
  } catch (error) {
    console.log("Error:", error.message);
    return undefined;
  }
};

export const deleteOneCita = async (citaId) => {
  try {
    if (!citaId) throw new Error("citaId is required!");

    const response = await axios.delete(
      `${BASE_URL}/citas/${movieId}`
    );
    // console.log(response);

    if (response.status === 200) return true;
    else return undefined;
  } catch (error) {
    console.log("Error:", error.message);
    return undefined;
  }
};  
