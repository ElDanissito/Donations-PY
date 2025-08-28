import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sobre Nosotros
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Somos una organización comprometida con el bienestar social y la transparencia 
              en las donaciones para causas nobles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido de Texto */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Facilitar el proceso de donaciones para que cada persona pueda contribuir 
                  de manera simple, segura y transparente a las causas que más le importan.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Nuestros Valores
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Transparencia total en todas las operaciones</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Seguridad en cada transacción</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Impacto real en la comunidad</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Facilidad de uso para todos</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  ¿Por qué Elegirnos?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Utilizamos las plataformas más confiables del mercado (Kiire y Redeban) 
                  para garantizar que tu donación llegue de manera segura y directa a su destino.
                </p>
              </div>
            </div>

            {/* Estadísticas y Números */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Transparente</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Disponible</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">0%</div>
                <div className="text-sm opacity-90">Comisiones</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-700 to-purple-800 rounded-2xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">Seguro</div>
                <div className="text-sm opacity-90">100%</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                ¿Listo para Hacer la Diferencia?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Cada donación, sin importar el monto, contribuye a crear un impacto positivo 
                en nuestra comunidad. Tu generosidad puede cambiar vidas.
              </p>
              <a 
                href="#donaciones" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Donar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
