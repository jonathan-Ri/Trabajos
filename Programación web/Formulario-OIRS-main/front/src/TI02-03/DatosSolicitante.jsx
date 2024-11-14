import React, { useState, useRef } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

// Esquema de validación con Yup para cada paso
const step1Schema = yup.object({
  tipoSolicitante: yup.string().required('Selecciona una opción'),
  nacionalidad: yup.string().required('Selecciona una opción'),
  nacionalidad: yup.string().required('Este campo es obligatorio'),
  nombre: yup.string().required('Este campo es obligatorio'),
  apellidoMaterno: yup.string().required('Este campo es obligatorio'),
  apellidoPaterno: yup.string().required('Este campo es obligatorio'),
  email: yup.string().email('Ingresa un correo electrónico válido').required('Este campo es obligatorio'),
  
}).required();

const step2Schema = yup.object({
  tipoSolicitud: yup.string().required('Selecciona una opción').required('Este campo es obligatorio'),
  institucion: yup.string().required('Debe seleccionar una institución'),
  detalles: yup.string().required('Debe rellenar el campo detalles'),
  fechaEvento: yup.string().required('Debe seleccionar la fecha del evento'),
  observaciones: yup.string(),
}).required();

const schemas = [step1Schema, step2Schema]; // Para cambiar de esquema según el paso

const Step1 = ({ register, errors, darkMode }) => (
  <div>
    {/* Campos de Step 1 */}
    <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>El solicitante es</label>
          <div>
            <input
              type="radio"
              value="Natural"
              {...register("tipoSolicitante")}
            />
            <label>Persona Natural</label>

            <input
              type="radio"
              value="juridica"
              {...register("tipoSolicitante")}
            />
            <label>Persona Jurídica</label>
          </div>
          <p>{errors.tipoSolicitante?.message}</p>
        </div>

        <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Nacionalidad</label>
          <div className="mb-4">
            <label className="mb-4" >
              <input
                type="radio"
                value="Chilena"
                {...register("nacionalidad")}
              />
              Chileno    
            </label>

            <label className="mb-4">
              <input
                type="radio"
                value="Extranjera"
                {...register("nacionalidad")}
              />
              Extranjero 
            </label>
          </div>
          <p>{errors.nacionalidad?.message}</p>
        </div>

        <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Nombre</label>
          <input
            className={`mb-4 p-2 rounded border border-solid ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
            type="text"
            style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}
            {...register("nombre")}
          />
          <p>{errors.nombre?.message}</p>
        </div>

        <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Apellido Paterno</label>
          <input
            className={`mb-4 p-2 rounded border border-solid ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
            type="text"
            style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}
            {...register("apellidoPaterno")}
          />
          <p>{errors.apellidoPaterno?.message}</p>
        </div>

        <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Apellido Materno</label>
          <input
            className={`mb-4 p-2 rounded border border-solid ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
            type="text"
            style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}
            {...register("apellidoMaterno")}
          />
          <p>{errors.apellidoMaterno?.message}</p>
        </div>

        <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Email</label>
          <input
            className={`mb-4 p-2 rounded border border-solid ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
            type="email"
            style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
  </div>
);

const Step2 = ({ register, errors, darkMode }) => (
  <div>
    {/* Campos de Step 2 */}
    <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tipo de solicitud</label>
          <select
            className={`mb-4 p-2 rounded border ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
            style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}
            {...register("tipoSolicitud")}
          >
            <option value="">Seleccione el tipo de solicitud</option>
            <option value="Reclamo">Reclamo</option>
            <option value="Sugerencia">Sugerencia</option>
            <option value="Felicitaciones">Felicitaciones</option>
          </select>
          <p>{errors.tipoSolicitud?.message}</p>
        </div>
        <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Institución</label>
          <select
            className={`mb-4 p-2 rounded border ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
            style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}
            {...register("institucion")}
          >
            <option value="">Seleccione la institución</option>
            <option value="hospital">Hospital</option>
            <option value="clinica">Clínica</option>
            <option value="laboratorio">Laboratorio</option>
          </select>
          <p>{errors.institucion?.message}</p>
        </div>
        <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Área</label>
          <select
            className={`mb-4 p-2 rounded border ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
            style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}
            {...register("area")}
          >
            <option value="">Seleccione el área</option>
            <option value="area 1">área 1</option>
            <option value="area 2">área 2</option>
            <option value="area 3">área 3</option>
          </select>
          <p>{errors.area?.message}</p>
        </div>
        <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Fecha Evento</label>
          <input
            className={`mb-4 p-2 rounded border border-solid ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
            type="date"
            style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}
            {...register("fechaEvento")}
          />
          <p>{errors.fechaEvento?.message}</p>
        </div>
        <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Detalles</label>
          <textarea
            className={`mb-4 p-2 rounded border border-solid ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
            style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}
            {...register("detalles")}
          />
          <p>{errors.detalles?.message}</p>
        </div>
        <div>
          <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Observaciones</label>
          <textarea
            className={`mb-4 p-2 rounded border border-solid ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
            style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}
            {...register("observaciones")}
          />
          <p>{errors.observaciones?.message}</p>
        </div>
  </div>
);

const MultiStepForm = ({ darkMode }) => {
  const [step, setStep] = useState(0);
  const schema = schemas[step];
  
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  
  const { register, handleSubmit, formState: { errors } } = methods;

  const onNext = (data) => {
    if (step < schemas.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      // Enviar datos finales
      onSubmit(data);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8800/api/formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error al enviar los datos');
      const result = await response.json();
      console.log('Datos enviados:', result);
      alert("Formulario enviado correctamente");
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onNext)} className={`p-4 rounded ${darkMode ? 'bg-[#1c1f22]' : 'bg-[#F0F5FA]'}`}>
        {step === 0 && <Step1 register={register} errors={errors} darkMode={darkMode} />}
        {step === 1 && <Step2 register={register} errors={errors} darkMode={darkMode} />}
        
        <div className="flex justify-between mt-4">
          {step > 0 && (
            <button type="button" onClick={() => setStep((prev) => prev - 1)}>
              Atrás
            </button>
          )}
          <button type="submit">{step === schemas.length - 1 ? 'Enviar' : 'Siguiente'}</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
