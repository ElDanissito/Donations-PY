'use client';

import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-20 relative overflow-hidden">
      {/* Background con transición suave desde QRDonation */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black"></div>
      
      {/* Background Elements con mejor integración */}
      <div className="absolute inset-0">
        {/* Transición suave desde arriba */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-800/80 to-transparent"></div>
        
        {/* Elementos de fondo sutiles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-15"></div>
        
        {/* Gradiente adicional para suavizar la transición */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gray-900/50 to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp" delay={200}>
                         <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                 Sobre el Proyecto
               </h2>
               <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                 Desarrollo de un sistema de delivery automatizado con drones autónomos para mi trabajo de grado 
                 en Ingeniería de Sistemas de la Universidad del Valle.
               </p>
             </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido de Texto */}
            <ScrollAnimation animation="fadeInLeft" delay={400}>
              <div className="space-y-6">
                                 <div>
                   <h3 className="text-2xl font-semibold text-white mb-4">
                     El Proyecto
                   </h3>
                   <p className="text-gray-300 leading-relaxed">
                     Estoy desarrollando desde cero un sistema completo de delivery automatizado con drones autónomos. 
                     Este proyecto innovador combina tecnologías de navegación autónoma, inteligencia artificial 
                     y sistemas de control para crear una solución revolucionaria en logística.
                   </p>
                 </div>

                                 <div>
                   <h3 className="text-2xl font-semibold text-white mb-4">
                     Tecnologías del Proyecto
                   </h3>
                   <ul className="space-y-3">
                     <li className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                         <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <span className="text-gray-300">Navegación autónoma y sistemas de localización</span>
                     </li>
                     <li className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                         <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <span className="text-gray-300">Inteligencia artificial para toma de decisiones</span>
                     </li>
                     <li className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                         <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <span className="text-gray-300">Sistemas de control y estabilización avanzados</span>
                     </li>
                     <li className="flex items-start space-x-3">
                       <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                         <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <span className="text-gray-300">Desarrollo completo desde cero</span>
                     </li>
                   </ul>
                 </div>

                                 <div>
                   <h3 className="text-2xl font-semibold text-white mb-4">
                     ¿Por qué Apoyar este Proyecto?
                   </h3>
                   <p className="text-gray-300 leading-relaxed">
                     Este proyecto representa el futuro de la logística y el delivery. Tu donación contribuye 
                     directamente a la compra de componentes electrónicos, sensores, motores y materiales 
                     necesarios para construir drones autónomos desde cero.
                   </p>
                 </div>
              </div>
            </ScrollAnimation>

            {/* Estadísticas y Números */}
            <ScrollAnimation animation="fadeInRight" delay={600}>
                             <div className="grid grid-cols-2 gap-6">
                 <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
                   <div className="text-3xl font-bold mb-2">100%</div>
                   <div className="text-sm opacity-90">Autónomo</div>
                 </div>
                 
                 <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white text-center">
                   <div className="text-3xl font-bold mb-2">0</div>
                   <div className="text-sm opacity-90">Piloto</div>
                 </div>
                 
                 <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
                   <div className="text-3xl font-bold mb-2">AI</div>
                   <div className="text-sm opacity-90">Integrada</div>
                 </div>
                 
                 <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-2xl p-6 text-white text-center">
                   <div className="text-3xl font-bold mb-2">GPS</div>
                   <div className="text-sm opacity-90">Precisión</div>
                 </div>
               </div>
            </ScrollAnimation>
          </div>

          {/* CTA Section */}
          <ScrollAnimation animation="fadeInUp" delay={800}>
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  ¿Listo para Apoyar el Desarrollo de Drones?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Tu donación contribuye directamente a la compra de insumos para el desarrollo de drones. 
                  Apoya mi trabajo de grado y sé parte de este proyecto innovador.
                </p>
                <a 
                  href="#donaciones" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Donar Ahora
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
