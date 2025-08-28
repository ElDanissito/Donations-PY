'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gradient-to-br from-black via-gray-900 to-purple-900/30 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo y Descripción Mejorada */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                                 <span className="text-white font-bold text-2xl">🎓</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white leading-tight drop-shadow-sm">Donaciones PY</span>
                                 <span className="text-purple-300 text-sm font-medium drop-shadow-sm">Sistema de delivery automatizado con drones</span>
              </div>
            </div>
            
                                      <p className="text-gray-300 mb-8 max-w-lg leading-relaxed text-lg drop-shadow-sm">
               Tu donación contribuye directamente a la compra de componentes electrónicos, sensores, 
               motores y materiales para construir drones autónomos desde cero. Apoya mi trabajo de grado 
               en Ingeniería de Sistemas de la Universidad del Valle.
             </p>
          </div>

          {/* Enlaces Rápidos Mejorados */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </span>
              Enlaces Rápidos
            </h3>
            
            <ul className="space-y-3">
                             {[
                 { href: '#donaciones', label: 'Hacer Donación', icon: '💝' },
                 { href: '#sobre-nosotros', label: 'Sobre Nosotros', icon: 'ℹ️' },
                 { href: 'tel:+573028659218', label: 'Contacto', icon: '📞' },
                 { href: '#', label: 'Transparencia', icon: '🔍' }
               ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {link.icon}
                    </span>
                    <span className="font-medium drop-shadow-sm">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de Contacto Mejorada */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.08-.041l-.08-.08z" clipRule="evenodd" />
                </svg>
              </span>
              Contacto
            </h3>
            
                         <ul className="space-y-4 text-gray-300">
               {[
                 { icon: '📱', label: '+57 302 865 9218', href: 'tel:+573028659218' },
                 { icon: '📍', label: 'Cali, Colombia', href: '#' }
               ].map((contact, index) => (
                <li key={index} className="flex items-center space-x-3 group">
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </span>
                  <a 
                    href={contact.href}
                    className="hover:text-white transition-colors duration-300 font-medium drop-shadow-sm"
                  >
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea divisoria mejorada */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <p className="text-gray-400 text-sm font-medium drop-shadow-sm">
                © 2024 ElDanissito. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="flex space-x-8">
              {[
                { label: 'Política de Privacidad', href: '#' },
                { label: 'Términos de Servicio', href: '#' }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-300 hover:underline drop-shadow-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
