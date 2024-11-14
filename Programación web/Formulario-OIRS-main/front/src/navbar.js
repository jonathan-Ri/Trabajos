import React from 'react';

function Navbar({ handleNavigation, darkMode }) {
  return (
    <nav className={`border-dotted border-[#8e8e8e] border-1 py-4 w-full ${darkMode ? 'bg-[#16233e]' : 'bg-white'}`}>
      <ul className="flex justify-around w-full"> {/* Agregado w-full aquí */}
        <li className="flex-1"> {/* Utilizar flex-1 para que cada li ocupe el mismo ancho */}
          <a
            href="/home"
            onClick={(e) => handleNavigation(e, 'Home')}
            className={`block text-center px-4 py-2 transition-colors duration-300 ${darkMode ? 'text-white hover:bg-[#6ec1e4]' : 'text-[#16233e] hover:bg-[#16233e] hover:text-white'}`}
          >
            Home
          </a>
        </li>
        <li className="flex-1"> {/* Utilizar flex-1 para que cada li ocupe el mismo ancho */}
          <a
            href="/ti02-03"
            onClick={(e) => handleNavigation(e, 'TI02-03')}
            className={`block text-center px-4 py-2 transition-colors duration-300 ${darkMode ? 'text-white hover:bg-[#6ec1e4]' : 'text-[#16233e] hover:bg-[#16233e] hover:text-white'}`}
          >
            TI02-03
          </a>
        </li>
        <li className="flex-1"> {/* Utilizar flex-1 para que cada li ocupe el mismo ancho */}
          <a
            href="/ti02-05"
            onClick={(e) => handleNavigation(e, 'TI02-05')}
            className={`block text-center px-4 py-2 transition-colors duration-300 ${darkMode ? 'text-white hover:bg-[#6ec1e4]' : 'text-[#16233e] hover:bg-[#16233e] hover:text-white'}`}
          >
            TI02-05
          </a>
        </li>
        <li className="flex-1"> {/* Utilizar flex-1 para que cada li ocupe el mismo ancho */}
          <a
            href="/ti02-06"
            onClick={(e) => handleNavigation(e, 'TI02-06')}
            className={`block text-center px-4 py-2 transition-colors duration-300 ${darkMode ? 'text-white hover:bg-[#6ec1e4]' : 'text-[#16233e] hover:bg-[#16233e] hover:text-white'}`}
          >
            TI02-06
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
