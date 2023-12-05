import axios from 'axios';

const BASE_URL = 'https://good-slug-tux.cyclic.app/api/v1';

export const createMedicalInfo = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/personales`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al realizar la petición:', error);
    throw new Error('Error occurred while creating medical information. Please try again.');
  }
};

export const updateMedicalInfo = async (medicalInfoId, formData) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/personales/${medicalInfoId}`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error al realizar la petición:', error);
    throw new Error('Error occurred while updating medical information. Please try again.');
  }
};

export const getMedicalInfoList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/personales`);
    
    if (response.status === 200) return response.data.data;
    else return [];
  } catch (error) {
    console.log('Error:', error.message);
    return [];
  }
};

export const getOneMedicalInfo = async (medicalInfoId) => {
  try {
    if (!medicalInfoId) throw new Error('medicalInfoId is required!');

    const response = await axios.get(`${BASE_URL}/personales/${medicalInfoId}`);

    if (response.status === 200) return response.data.data;
    else return undefined;
  } catch (error) {
    console.log('Error:', error.message);
    return undefined;
  }
};

export const deleteOneMedicalInfo = async (medicalInfoId) => {
  try {
    if (!medicalInfoId) throw new Error('medicalInfoId is required!');

    const response = await axios.delete(
      `${BASE_URL}/personales/${medicalInfoId}`
    );

    if (response.status === 200) return true;
    else return undefined;
  } catch (error) {
    console.log('Error:', error.message);
    return undefined;
  }
};
