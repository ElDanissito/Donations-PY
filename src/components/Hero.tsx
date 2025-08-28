import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background con gradiente negro-morado moderno */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 via-purple-900/50 to-purple-800"></div>
      
      {/* Elementos de fondo sutiles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Icono principal simplificado */}
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 mb-6">
              <span className="text-5xl">❤️</span>
            </div>
          </div>
          
          {/* Título principal */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Tu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
                Ayuda
              </span>
              {' '}Hace la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">
                Diferencia
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Cada donación, sin importar el monto, contribuye a crear un mundo mejor. 
              <br className="hidden md:block" />
              Únete a nuestra causa y sé parte del cambio.
            </p>
          </div>
          
          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#donaciones" 
              className="group relative px-10 py-5 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-full text-lg shadow-2xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Donar Ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#sobre-nosotros" 
              className="px-10 py-5 border-2 border-purple-400 text-purple-300 font-semibold rounded-full text-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300"
            >
              Conocer Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
