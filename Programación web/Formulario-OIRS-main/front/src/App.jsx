import React, { useState } from 'react';
import Navbar from './navbar';
import TI0203 from './TI02-03/TI02-03';
import TI0205 from './TI02-05/TI02-05';
import TI0206 from './TI02-06/TI02-06';

function App() {
  const [page, setPage] = useState('Home');
  const [darkMode, setDarkMode] = useState(false);

  const handleNavigation = (e, pageName) => {
    e.preventDefault(); // Evita la recarga de la página
    setPage(pageName);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Alternar el modo oscuro
  };

  return (
    <div className={darkMode ? 'bg-[#25282b] text-white' : 'bg-white text-black'}>
      <Navbar handleNavigation={handleNavigation} darkMode={darkMode} />
      <button
        onClick={toggleDarkMode}
        className="mt-4 px-4 py-2 border rounded"
      >
        {darkMode ? 'Desactivar Modo Oscuro' : 'Activar Modo Oscuro'}
      </button>
      <main className="flex-grow p-6">
        {page === 'Home' && <Home darkMode={darkMode} />}
        {page === 'TI02-03' && <TI0203 darkMode={darkMode} />}
        {page === 'TI02-05' && <TI0205 />}
        {page === 'TI02-06' && <TI0206 />}
      </main>
    </div>
  );
}

function Home({ darkMode }) {
  return (
    <div>
      {/* Tipografía */}
      <h1 className="text-4xl font-bold mb-4">Título Principal (32px)</h1>
      <h2 className="text-2xl mb-4 text-[#6ec1e4]">Bajada de Título (24px)</h2>
      <p className="text-base mb-4">Texto de ejemplo (16px).</p>
      <p className="text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum, 
        augue vel lacinia mollis, eros erat cursus urna, ornare malesuada nibh odio sit amet augue. Lorem ipsum 
        dolor sit amet, consectetur adipiscing elit. Nulla scelerisque velit sed nisi mattis, nec accumsan orci egestas.
      </p>

      {/* Botones */}
      <h2 className="text-2xl mt-6 mb-2">Botones</h2>
      <button className="bg-[#16233e] text-white py-2 px-4 rounded hover:bg-[#6ec1e4] mr-4">
        Botón Principal
      </button>
      <button className="bg-[#046bd2] text-white py-2 px-4 rounded hover:bg-[#ADB6BE]">
        Botón Secundario
      </button>

      {/* Formulario de Ejemplo */}
      <h2 className="text-2xl mt-6 mb-2">Formulario de Ejemplo</h2>
      <form className={`p-4 rounded ${darkMode ? 'bg-[#1c1f22]' : 'bg-[#F0F5FA]'}`}>
        
        {/* Campo Nombre */}
        <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Nombre:</label>
        <input
          type="text"
          className={`mb-4 p-2 rounded border border-solid ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
          placeholder="Ingresa tu nombre"
          style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }} // Color y fondo del input
        />

        <span className="text-red-500 text-xs mb-2">Campo requerido</span>

        {/* Campo Fecha de Nacimiento */}
        <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Fecha de Nacimiento:</label>
        <input
          type="date"
          className={`mb-4 p-2 rounded border border-solid ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
          style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }} // Color y fondo del input
        />

        {/* Campo Número */}
        <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Número:</label>
        <input
          type="number"
          className={`mb-4 p-2 rounded border border-solid ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`}
          style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }} // Color y fondo del input
        />

        {/* Selección Múltiple */}
        <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Selección Múltiple:</label>
        <select className={`mb-4 p-2 rounded border ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`} style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}>
          <option value="" style={{ color: darkMode ? '#E0E0E0' : '#000' }}>Selecciona una opción</option>
          <option value="opcion1" style={{ color: darkMode ? '#E0E0E0' : '#000' }}>Opción 1</option>
          <option value="opcion2" style={{ color: darkMode ? '#E0E0E0' : '#000' }}>Opción 2</option>
        </select>

        {/* Radio Buttons */}
        <label className={`block mb-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Selecciona una opción:</label>
        <div className="mb-4">
          <label className="mr-4">
            <input type="radio" name="opcion" value="opcion1" /> Opción 1
          </label>
          <label>
            <input type="radio" name="opcion" value="opcion2" /> Opción 2
          </label>
        </div>

        {/* Botón Enviar */}
        <button className="bg-[#16233e] text-white py-2 px-4 rounded hover:bg-[#6ec1e4]">
          Enviar
        </button>
        <span className="text-red-500 text-xs mb-2 block">Validación incluida</span>
      </form>

      {/* Deslizador de Ejemplo */}
      <h2 className="text-2xl mt-6 mb-2">Deslizador de Ejemplo</h2>
      <input
        type="range"
        min="0"
        max="100"
        className="w-full mb-4"
        style={{ backgroundColor: '#ADB6BE' }}
      />

      {/* Desplegable de Ejemplo */}
      <h2 className="text-2xl mt-6 mb-2">Desplegable de Ejemplo</h2>
      <select className={`mb-4 p-2 rounded border ${darkMode ? 'border-gray-700' : 'border-[#ADB6BE]'} w-full`} style={{ color: darkMode ? '#E0E0E0' : '#000', backgroundColor: darkMode ? '#1c1f22' : '#fff' }}>
        <option value="" style={{ color: darkMode ? '#E0E0E0' : '#000' }}>Selecciona una opción</option>
        <option value="opcion1" style={{ color: darkMode ? '#E0E0E0' : '#000' }}>Opción 1</option>
        <option value="opcion2" style={{ color: darkMode ? '#E0E0E0' : '#000' }}>Opción 2</option>
      </select>

      {/* Diálogo de Ejemplo */}
      <h2 className="text-2xl mt-6 mb-2">Diálogo de Ejemplo</h2>
      <Dialog title="Título del Diálogo" darkMode={darkMode}>
        <p className={`${darkMode ? 'text-gray-300' : 'text-black'}`}>Este es el contenido del diálogo.</p>
      </Dialog>

      {/* Barra de Progreso de Ejemplo */}
      <h2 className="text-2xl mt-6 mb-2">Barra de Progreso de Ejemplo</h2>
      <ProgressBar progress={75} />

      {/* Muestra de Paleta de Colores */}
      <h2 className="text-2xl mt-6 mb-2">Paleta de Colores</h2>
      <div className="flex space-x-4">
        <div className="w-24 h-24 rounded" style={{ backgroundColor: '#16233e' }}></div>
        <div className="w-24 h-24 rounded" style={{ backgroundColor: '#046bd2' }}></div>
        <div className="w-24 h-24 rounded" style={{ backgroundColor: '#6ec1e4' }}></div>
        <div className="w-24 h-24 rounded" style={{ backgroundColor: '#F0F5FA' }}></div>
        <div className="w-24 h-24 rounded" style={{ backgroundColor: '#ADB6BE' }}></div>
        <div className="w-24 h-24 rounded" style={{ backgroundColor: '#1c1f22' }}></div>
      </div>

    </div>
  );
  
}

// Componente de diálogo
function Dialog({ title, children, darkMode }) {
  return (
    <div className={`border ${darkMode ? 'bg-[#1c1f22] border-gray-700' : 'bg-white border-[#ADB6BE]'} p-4 rounded-lg`}>
      <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-black'}`}>{title}</h3>
      {children}
    </div>
  );
}

// Componente de barra de progreso
function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-300 rounded-full">
      <div
        className="bg-blue-600 rounded-full"
        style={{ width: `${progress}%`, height: '20px' }}
      ></div>
    </div>
  );
}

export default App;
