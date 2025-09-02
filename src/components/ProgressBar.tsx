'use client';

import React, { useState, useEffect } from 'react';
import ScrollAnimation from './ScrollAnimation';

interface DonationData {
  current: number;
  target: number;
  currency: string;
  lastUpdated: string;
  description: string;
}

const ProgressBar: React.FC = () => {
  const [donationData, setDonationData] = useState<DonationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDonationData = async () => {
      try {
        const response = await fetch('/donaciones.json');
        if (!response.ok) {
          throw new Error('Error al cargar los datos de donaciones');
        }
        const data = await response.json();
        setDonationData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        // Datos de fallback en caso de error
        setDonationData({
          current: 200000,
          target: 1500000,
          currency: 'COP',
          lastUpdated: new Date().toISOString(),
          description: 'Fondos recaudados para el desarrollo de drones'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDonationData();
  }, []);

  if (loading) {
    return (
      <section className="py-16 relative overflow-hidden">
        {/* Fondo principal con transición más suave - extendido hacia abajo */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-800 via-purple-900 to-purple-800"></div>
        
        {/* Transición suave desde Hero (arriba) - más gradual */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-purple-800/90 via-purple-800/70 to-purple-800/30"></div>
        
        {/* Transición suave hacia DonationButtons (abajo) - más gradual y extendida */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-800/95 via-purple-800/70 to-purple-800/30"></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_60%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-900/10 to-purple-800/20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto mb-8"></div>
              <div className="h-6 bg-gray-700 rounded w-full mb-4"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error && !donationData) {
    return (
      <section className="py-16 relative overflow-hidden">
        {/* Fondo principal con transición más suave - extendido hacia abajo */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-800 via-purple-900 to-purple-800"></div>
        
        {/* Transición suave desde Hero (arriba) - más gradual */}
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-purple-800/90 via-purple-800/70 to-purple-800/30"></div>
        
        {/* Transición suave hacia DonationButtons (abajo) - más gradual y extendida */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-800/95 via-purple-800/70 to-purple-800/30"></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_60%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-900/10 to-purple-800/20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-red-400">Error al cargar el progreso de donaciones</p>
          </div>
        </div>
      </section>
    );
  }

  if (!donationData) return null;

  const progressPercentage = Math.min((donationData.current / donationData.target) * 100, 100);
  const remainingAmount = donationData.target - donationData.current;
  const formattedCurrent = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(donationData.current);

  const formattedTarget = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(donationData.target);

  const formattedRemaining = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(remainingAmount);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Fondo principal con transición más suave - extendido hacia abajo */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-800 via-purple-900 to-purple-800"></div>
      
      {/* Transición suave desde Hero (arriba) - más gradual */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-purple-800/90 via-purple-800/70 to-purple-800/30"></div>
      
      {/* Transición suave hacia DonationButtons (abajo) - más gradual y extendida */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-800/95 via-purple-800/70 to-purple-800/30"></div>
      
      {/* Elementos de fondo sutiles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_60%)]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl"></div>
        
        {/* Gradiente adicional para suavizar la transición - más sutil */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-900/10 to-purple-800/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Progreso de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
                  Donaciones
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Cada donación nos acerca más a nuestro objetivo de desarrollar drones innovadores
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInUp" delay={400}>
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-purple-500/20">
              {/* Estadísticas principales */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300 mb-2">
                    {formattedCurrent}
                  </div>
                  <div className="text-gray-300 font-medium">Recaudado</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {formattedTarget}
                  </div>
                  <div className="text-gray-300 font-medium">Meta</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 mb-2">
                    {formattedRemaining}
                  </div>
                  <div className="text-gray-300 font-medium">Faltante</div>
                </div>
              </div>

              {/* Barra de progreso */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-200">Progreso</span>
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-300">
                    {progressPercentage.toFixed(1)}%
                  </span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-700/50 rounded-full h-6 overflow-hidden border border-gray-600/30">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-1000 ease-out relative overflow-hidden shadow-lg shadow-purple-500/30"
                      style={{ width: `${progressPercentage}%` }}
                    >
                      {/* Efecto de brillo animado */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  
                  {/* Marcadores de progreso */}
                  <div className="flex justify-between mt-2 text-sm text-gray-400">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Mensaje motivacional */}
              <div className="text-center">
                {progressPercentage >= 100 ? (
                  <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-green-300 font-semibold text-lg mb-2">
                      🎉 ¡Meta alcanzada!
                    </div>
                    <p className="text-green-200">
                      ¡Gracias por tu apoyo! Hemos superado nuestra meta inicial.
                    </p>
                  </div>
                ) : progressPercentage >= 75 ? (
                  <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-purple-300 font-semibold text-lg mb-2">
                      🚀 ¡Casi llegamos!
                    </div>
                    <p className="text-purple-200">
                      Estamos muy cerca de alcanzar nuestra meta. ¡Tu ayuda es crucial!
                    </p>
                  </div>
                ) : progressPercentage >= 50 ? (
                  <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-blue-300 font-semibold text-lg mb-2">
                      💪 ¡Vamos por buen camino!
                    </div>
                    <p className="text-blue-200">
                      Hemos superado la mitad del camino. ¡Seguimos avanzando!
                    </p>
                  </div>
                ) : (
                  <div className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-orange-300 font-semibold text-lg mb-2">
                      🌱 ¡Cada donación cuenta!
                    </div>
                    <p className="text-orange-200">
                      Cada contribución nos acerca más a nuestro objetivo. ¡Gracias por tu apoyo!
                    </p>
                  </div>
                )}
              </div>

              {/* Información adicional */}
              <div className="mt-6 text-center text-sm text-gray-400">
                <p>Última actualización: {new Date(donationData.lastUpdated).toLocaleDateString('es-CO')}</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
