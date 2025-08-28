'use client';

import React from 'react';

const DonationButtons: React.FC = () => {
  // Placeholder links - estos se reemplazarán con los links reales de Kiire
  const donationAmounts = [
    { 
      amount: 10000, 
      label: '10,000 COP', 
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500',
      shadowColor: 'shadow-green-500/25',
      description: 'Donación Básica',
      icon: '💚'
    },
    { 
      amount: 20000, 
      label: '20,000 COP', 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500',
      shadowColor: 'shadow-purple-500/25',
      description: 'Donación Estándar',
      icon: '💜'
    },
    { 
      amount: 50000, 
      label: '50,000 COP', 
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-600',
      shadowColor: 'shadow-purple-600/25',
      description: 'Donación Generosa',
      icon: '💖'
    },
    { 
      amount: 100000, 
      label: '100,000 COP', 
      color: 'from-purple-700 to-purple-800',
      bgColor: 'bg-purple-700',
      shadowColor: 'shadow-purple-700/25',
      description: 'Donación Premium',
      icon: '💎'
    }
  ];

  const handleDonation = (amount: number) => {
    // Placeholder - aquí se redirigirá a Kiire
    console.log(`Redirigiendo a Kiire para donación de ${amount} COP`);
    // TODO: Reemplazar con link real de Kiire
    alert(`Próximamente: Redirigiendo a Kiire para donación de ${amount.toLocaleString()} COP`);
  };

  return (
    <section id="donaciones" className="py-24 bg-gradient-to-br from-gray-900 via-black to-purple-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-purple-900/20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Elige tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
              Monto de Donación
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Selecciona uno de nuestros montos sugeridos o usa el QR para un monto personalizado. 
            <br className="hidden md:block" />
            Cada donación contribuye a crear un impacto positivo en nuestra comunidad.
          </p>
        </div>

        {/* Grid de Botones de Donación Mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {donationAmounts.map((item, index) => (
            <button
              key={index}
              onClick={() => handleDonation(item.amount)}
              className={`
                group relative overflow-hidden rounded-3xl p-8 text-center transform transition-all duration-500
                hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${item.color}
                text-white font-bold text-2xl shadow-xl ${item.shadowColor}
                hover:shadow-2xl hover:shadow-2xl hover:${item.shadowColor.replace('/25', '/40')}
                border border-white/20
              `}
            >
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Efecto de partículas flotantes */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping delay-300"></div>
                <div className="absolute bottom-6 left-8 w-1 h-1 bg-white/50 rounded-full animate-ping delay-600"></div>
              </div>
              
              {/* Contenido del botón */}
              <div className="relative z-10">
                {/* Icono */}
                <div className="text-4xl mb-4 animate-bounce group-hover:animate-none">
                  {item.icon}
                </div>
                
                {/* Monto */}
                <div className="text-4xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                  {item.amount.toLocaleString()}
                </div>
                
                {/* Label */}
                <div className="text-lg opacity-95 mb-2 font-semibold drop-shadow-sm">
                  {item.label}
                </div>
                
                {/* Descripción */}
                <div className="text-sm opacity-90 mb-4 font-medium drop-shadow-sm">
                  {item.description}
                </div>
                
                {/* CTA */}
                <div className="text-sm opacity-95 font-bold bg-white/25 rounded-full px-4 py-2 inline-block drop-shadow-sm border border-white/30">
                  Donar Ahora
                </div>
              </div>
              
              {/* Icono de flecha */}
              <div className="absolute top-6 right-6 text-white opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              
              {/* Borde brillante en hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500"></div>
            </button>
          ))}
        </div>

        {/* Nota informativa mejorada */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gray-800/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-gray-300 text-sm font-medium">
              Los botones redirigen a Kiire para procesar tu donación de forma segura
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationButtons;
