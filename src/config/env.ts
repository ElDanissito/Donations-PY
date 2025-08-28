// Configuración de variables de entorno para donaciones
export const env = {
  // URLs de donaciones por monto
  link10k: process.env.NEXT_PUBLIC_LINK_10K || '#',
  link20k: process.env.NEXT_PUBLIC_LINK_20K || '#',
  link50k: process.env.NEXT_PUBLIC_LINK_50K || '#',
  link100k: process.env.NEXT_PUBLIC_LINK_100K || '#',
  
  // URL del código QR
  qrUrl: process.env.NEXT_PUBLIC_QR_URL || '/donaciones.jpg',
  
  // Configuración adicional
  isDevelopment: process.env.NODE_ENV === 'development',
};

// Función helper para validar URLs
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Función para obtener la URL del QR con fallback
export const getQRUrl = (): string => {
  if (env.qrUrl && env.qrUrl !== '/donaciones.jpg' && isValidUrl(env.qrUrl)) {
    return env.qrUrl;
  }
  return '/donaciones.jpg'; // Fallback a imagen local
};

// Función para obtener el link de donación por monto
export const getDonationLink = (amount: number): string => {
  switch (amount) {
    case 10000:
      return env.link10k;
    case 20000:
      return env.link20k;
    case 50000:
      return env.link50k;
    case 100000:
      return env.link100k;
    default:
      return '#';
  }
};
