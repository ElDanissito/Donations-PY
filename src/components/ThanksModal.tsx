'use client';

import React, { useCallback, useEffect, useState } from 'react';

const ThanksModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openIfHashMatches = useCallback(() => {
    if (typeof window === 'undefined') return;
    setIsOpen(window.location.hash === '#thanks');
  }, []);

  useEffect(() => {
    openIfHashMatches();
    const onHashChange = () => openIfHashMatches();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [openIfHashMatches]);

  const close = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Clear the hash without causing a full page navigation
      if (history.replaceState) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      } else {
        window.location.hash = '';
      }
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={close}>
      <div className="relative w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={close}
          className="absolute -top-4 -right-4 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 z-10"
          aria-label="Cerrar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-purple-600/10" />

          <div className="relative p-10 text-center">
            <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.175 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">¡Gracias por tu donación!</h2>
            <p className="text-gray-300 max-w-md mx-auto leading-relaxed">
              Tu aporte impulsa el desarrollo del proyecto. A nombre del equipo, ¡gracias por creer y apoyar!
            </p>

            <div className="mt-8">
              <button
                onClick={close}
                className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Cerrar</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksModal;


