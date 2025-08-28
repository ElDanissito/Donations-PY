'use client';

import React, { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const QRDonation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        {/* Background con transición suave desde DonationButtons */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800"></div>
        
        {/* Background Elements con mejor integración */}
        <div className="absolute inset-0">
          {/* Transición suave desde arriba */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent"></div>
          
          {/* Elementos de fondo integrados */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          {/* Gradiente adicional para suavizar la transición */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gray-900/50 to-gray-800"></div>
          
          {/* Transición suave hacia abajo */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-800 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  ¿Prefieres un{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
                    Monto Personalizado?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Escanea el QR de Redeban para donar el monto que desees. 
                  <br className="hidden md:block" />
                  Totalmente personalizable y sin restricciones de monto.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* QR Code Placeholder Mejorado */}
              <ScrollAnimation animation="fadeInLeft" delay={400}>
                <div className="flex flex-col items-center">
                  <div className="relative group">
                    <div 
                      className="w-80 h-80 bg-gray-800 rounded-3xl shadow-2xl p-8 flex items-center justify-center border-4 border-dashed border-purple-400/30 relative overflow-hidden"
                    >
                      {/* Efectos de fondo */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-purple-600/10"></div>
                      
                      <div className="text-center relative z-10">
                        <div className="w-40 h-40 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner overflow-hidden">
                          <img 
                            src="/donaciones.jpg" 
                            alt="QR de donaciones Redeban" 
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                        <p className="text-white text-lg font-semibold mb-2">QR de Redeban</p>
                        <p className="text-gray-400 text-sm">Escanea para donar</p>
                      </div>
                      
                      {/* Efectos de hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Anillos decorativos */}
                    <div className="absolute -inset-4 border-2 border-purple-400/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -inset-6 border border-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                  
                  {/* Información del QR */}
                  <div className="mt-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Redeban
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      Escanea con tu app bancaria para donar de forma segura y directa
                    </p>
                    
                    {/* Badge de seguridad */}
                    <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full mt-4 border border-green-500/30">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">100% Seguro</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Información y Beneficios Mejorada */}
              <ScrollAnimation animation="fadeInRight" delay={600}>
                <div className="text-left space-y-8">
                  <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-500/20">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Ventajas de Donar con Redeban
                    </h3>
                    
                    <ul className="space-y-4">
                      {[
                        'Monto personalizado a tu elección',
                        'Transacción segura y directa',
                        'Sin comisiones adicionales',
                        'Confirmación inmediata',
                        'Compatible con todas las apps bancarias'
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-4 group">
                          <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500/30 transition-colors duration-200">
                            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Mejorado */}
                  <div className="text-center lg:text-left">
                    <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-2xl p-6 border border-purple-500/20">
                      <p className="text-gray-300 mb-6 text-lg font-medium">
                        ¿Listo para hacer tu donación personalizada?
                      </p>
                      <button 
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full text-lg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                        onClick={openModal}
                      >
                        <span className="relative z-10">Ver QR Completo</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Modal para mostrar el QR en tamaño original */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Imagen del QR */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="/donaciones.jpg" 
                alt="QR de donaciones Redeban - Vista completa" 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
            
            {/* Información adicional */}
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-medium">QR de Redeban - Escanea para donar</p>
              <p className="text-gray-300 text-sm mt-1">Haz clic fuera del modal para cerrar</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QRDonation;
