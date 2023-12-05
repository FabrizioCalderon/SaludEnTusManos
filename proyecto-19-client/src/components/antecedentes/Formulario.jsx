import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Formulario = ({ formData, setFormData, onSubmit }) => {

  const today = moment().format('DD-MM-YYYY');

  const [formData, setFormData] = useState({
    medico: '',
    alergias: '',
    cirugias: '',
    nParejasSexuales: 0,
    inicioRelaciones: '',
    medicacion: '',
    haFumado: false,
    inicioFumado: '',
    alcohol: false,
    inicioAlcohol: '',
    consumeDrogas: false,
    inicioConsumoDrogas: '',
    tipoDrogas: '',
    realizaEjercicio: false,
    tiposEjercicio: '',
  });

  const [savedData, setSavedData] = useState(null);
  const [errorMessages, setErrorMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (medicalInfoId) {
      loadMedicalInfo();
    }
  }, [medicalInfoId]);

  const loadMedicalInfo = async () => {
    try {
      const medicalInfo = await getOneMedicalInfo(medicalInfoId);
      setFormData(medicalInfo);
      setSavedData(medicalInfo);
    } catch (error) {
      console.error('Error al cargar la información médica:', error);
    }
  };

  const validateDate = (dateString) => {
    // Validar que la fecha sea anterior a la fecha actual
    const currentDate = new Date();
    const selectedDate = new Date(dateString);
    return selectedDate < currentDate;
  };

  const validateText = (text) => {
    // Validar que el texto solo contenga letras y no caracteres especiales ni números
    return /^[A-Za-z\s]+$/.test(text);
  };

  const addErrorMessage = (message) => {
    setErrorMessages((prevMessages) => [...prevMessages, message]);
  };

  const clearErrorMessages = () => {
    setErrorMessages([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    clearErrorMessages();

    // Validar fechas antes de enviar el formulario
    if (formData.inicioRelaciones && !validateDate(formData.inicioRelaciones)) {
      addErrorMessage('La fecha de inicio de relaciones debe ser anterior a la fecha actual');
      return;
    }

    if (formData.inicioFumado && !validateDate(formData.inicioFumado)) {
      addErrorMessage('La fecha de inicio de fumar debe ser anterior a la fecha actual');
      return;
    }

    if (formData.inicioConsumoDrogas && !validateDate(formData.inicioConsumoDrogas)) {
      addErrorMessage('La fecha de inicio de consumo de drogas debe ser anterior a la fecha actual');
      return;
    }

    // Validar campos de texto antes de enviar el formulario
    if (!validateText(formData.medico)) {
      addErrorMessage('El campo de médico solo debe contener letras y espacios');
      return;
    }

    if (!validateText(formData.alergias)) {
      addErrorMessage('El campo de alergias solo debe contener letras y espacios');
      return;
    }

    if (!validateText(formData.cirugias)) {
      addErrorMessage('El campo de cirugías solo debe contener letras y espacios');
      return;
    }

    if (!validateText(formData.medicacion)) {
      addErrorMessage(); ('El campo de medicación solo debe contener letras y espacios');
      return;
    }

    if (!validateText(formData.tipoDrogas)) {
      addErrorMessage('El campo de tipo de drogas solo debe contener letras y espacios');
      return;
    }

    if (!validateText(formData.tiposEjercicio)) {
      addErrorMessage('El campo de tipos de ejercicio solo debe contener letras y espacios');
      return;
    }

    // Si hay mensajes de error, mostrarlos y no continuar con el envío del formulario
    if (errorMessages.length > 0) {
      return;
    }

    // Si hay un ID de información médica, actualizar, de lo contrario, crear
    if (medicalInfoId) {
      await updateMedicalInfo(medicalInfoId, formData);
    } else {
      await createMedicalInfo(formData);
    }

    // Redirigir a la página principal u otra página después de la acción

    try {
      const response = await guardarInformacion(formData);
      navigate('/antecedentes');
      // Maneja la respuesta según tus necesidades (puede ser redirección, mostrar un mensaje, etc.)
      console.log('Respuesta del servidor:', response);

      // Puedes reiniciar el formulario después de enviar la información
      setFormData({
        medico: '',
        alergias: '',
        cirugias: '',
        nParejasSexuales: 0,
        inicioRelaciones: '',
        medicacion: '',
        haFumado: false,
        inicioFumado: '',
        alcohol: false,
        inicioAlcohol: '',
        consumeDrogas: false,
        inicioConsumoDrogas: '',
        tipoDrogas: '',
        realizaEjercicio: false,
        tiposEjercicio: '',
      });
    } catch (error) {
      // Maneja el error de la llamada a la API según tus necesidades
      console.error('Error al guardar la información:', error);
    } 
    onSubmit();
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Si el campo es de tipo checkbox, maneja el valor de manera diferente
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };


  return (
    <div>
      <Navbar />
      <h1>Información Médica</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Médico:
          <input
            type="text"
            name="medico"
            value={formData.medico}
            onChange={handleChange}
          />
        </label>

        <label>
          Alergias:
          <input
            type="text"
            name="alergias"
            value={formData.alergias}
            onChange={handleChange}
          />
        </label>

        <label>
          Cirugías:
          <input
            type="text"
            name="cirugias"
            value={formData.cirugias}
            onChange={handleChange}
          />
        </label>

        <label>
          Número de Parejas Sexuales:
          <input
            type="number"
            name="nParejasSexuales"
            value={formData.nParejasSexuales}
            onChange={handleChange}
          />
        </label>

        <label>
          Inicio de Relaciones Sexuales:
          <input
            type="date"
            name="inicioRelaciones"
            value={formData.inicioRelaciones}
            onChange={handleChange}
          />
        </label>

        <label>
          Medicación:
          <input
            type="text"
            name="medicacion"
            value={formData.medicacion}
            onChange={handleChange}
          />
        </label>

        <label>
          Ha Fumado:
          <select
            name="haFumado"
            value={formData.haFumado}
            onChange={handleChange}
          >
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        </label>

        {formData.haFumado && (
          <label>
            Inicio de Fumado:
            <input
              type="date"
              name="inicioFumado"
              value={formData.inicioFumado}
              onChange={handleChange}
            />
          </label>
        )}

        <label>
          Ha consumido Alcohol:
          <select
            name="Alcohol"
            value={formData.Alcohol}
            onChange={handleChange}
          >
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        </label>

        {formData.haFumado && (
          <label>
            Inicio de Alcohol:
            <input
              type="date"
              name="inicioFumado"
              value={formData.inicioFumado}
              onChange={handleChange}
            />
          </label>
        )}

        <label>
          Consume Drogas:
          <select
            name="consumeDrogas"
            value={formData.consumeDrogas}
            onChange={handleChange}
          >
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        </label>

        {formData.consumeDrogas && (
          <div>
            <label>
              Inicio de Consumo de Drogas:
              <input
                type="date"
                name="inicioConsumoDrogas"
                value={formData.inicioConsumoDrogas}
                onChange={handleChange}
              />
            </label>

            <label>
              Tipo de Drogas:
              <input
                type="text"
                name="tipoDrogas"
                value={formData.tipoDrogas}
                onChange={handleChange}
              />
            </label>
          </div>
        )}

        <label>
          Realiza Ejercicio:
          <select
            name="realizaEjercicio"
            value={formData.realizaEjercicio}
            onChange={handleChange}
          >
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        </label>

        {formData.realizaEjercicio && (
          <label>
            Tipos de Ejercicio:
            <input
              type="text"
              name="tiposEjercicio"
              value={formData.tiposEjercicio}
              onChange={handleChange}
            />
          </label>
        )}

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Formulario;
