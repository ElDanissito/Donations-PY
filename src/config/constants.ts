// Configuración del proyecto Donaciones PY - Actualizada para Fase 2

export const PROJECT_CONFIG = {
  name: 'Donaciones PY',
  description: 'Tu Ayuda Hace la Diferencia',
  version: '2.0.0',
  author: 'Donaciones PY Team',
};

// Montos de donación fijos (en COP) - Actualizados con nuevo sistema de colores
export const DONATION_AMOUNTS = [
  {
    amount: 10000,
    label: '10,000 COP',
    color: 'from-success-500 to-success-600',
    bgColor: 'bg-success-500',
    shadowColor: 'shadow-success-500/25',
    description: 'Donación Básica',
    icon: '💚',
    category: 'basic'
  },
  {
    amount: 20000,
    label: '20,000 COP',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-500',
    shadowColor: 'shadow-primary-500/25',
    description: 'Donación Estándar',
    icon: '💙',
    category: 'standard'
  },
  {
    amount: 50000,
    label: '50,000 COP',
    color: 'from-secondary-500 to-secondary-600',
    bgColor: 'bg-secondary-500',
    shadowColor: 'shadow-secondary-500/25',
    description: 'Donación Generosa',
    icon: '💜',
    category: 'generous'
  },
  {
    amount: 100000,
    label: '100,000 COP',
    color: 'from-warning-500 to-warning-600',
    bgColor: 'bg-warning-500',
    shadowColor: 'shadow-warning-500/25',
    description: 'Donación Premium',
    icon: '🧡',
    category: 'premium'
  }
];

// Configuración de plataformas de pago
export const PAYMENT_PLATFORMS = {
  kiire: {
    name: 'Kiire',
    description: 'Plataforma de pagos segura y confiable',
    // TODO: Agregar links reales en la Fase 4
    baseUrl: 'https://kiire.com',
    features: [
      'Transacciones seguras',
      'Confirmación inmediata',
      'Soporte 24/7',
      'Sin comisiones ocultas'
    ]
  },
  redeban: {
    name: 'Redeban',
    description: 'Sistema de pagos bancarios directos',
    // TODO: Agregar QR real en la Fase 4
    qrPlaceholder: 'QR de Redeban - Se insertará en la Fase 4',
    features: [
      'Monto personalizado',
      'Transacción directa',
      'Compatible con todas las apps bancarias',
      'Confirmación inmediata'
    ]
  }
};

// Información de contacto
export const CONTACT_INFO = {
  email: 'info@donacionespy.com',
  phone: '+57 300 123 4567',
  location: 'Bogotá, Colombia',
  socialMedia: {
    twitter: { icon: '🐦', label: 'Twitter', href: '#' },
    facebook: { icon: '📘', label: 'Facebook', href: '#' },
    instagram: { icon: '📷', label: 'Instagram', href: '#' }
  }
};

// Configuración de navegación
export const NAVIGATION_LINKS = [
  { href: '#donaciones', label: 'Donar', icon: '💝' },
  { href: '#sobre-nosotros', label: 'Sobre Nosotros', icon: 'ℹ️' },
  { href: '#contacto', label: 'Contacto', icon: '📞' }
];

// Breakpoints responsive actualizados
export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  largeDesktop: '1280px',
  xlDesktop: '1536px'
};

// Configuración de animaciones
export const ANIMATIONS = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms'
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

// Configuración de sombras
export const SHADOWS = {
  soft: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)'
  },
  colored: {
    primary: '0 10px 15px -3px rgb(59 130 246 / 0.3), 0 4px 6px -4px rgb(59 130 246 / 0.3)',
    secondary: '0 10px 15px -3px rgb(139 92 246 / 0.3), 0 4px 6px -4px rgb(139 92 246 / 0.3)',
    success: '0 10px 15px -3px rgb(34 197 94 / 0.3), 0 4px 6px -4px rgb(34 197 94 / 0.3)',
    warning: '0 10px 15px -3px rgb(249 115 22 / 0.3), 0 4px 6px -4px rgb(249 115 22 / 0.3)',
    error: '0 10px 15px -3px rgb(239 68 68 / 0.3), 0 4px 6px -4px rgb(239 68 68 / 0.3)'
  }
};

// Configuración de espaciado
export const SPACING = {
  section: {
    xs: '2rem',    // 32px
    sm: '3rem',    // 48px
    md: '4rem',    // 64px
    lg: '5rem',    // 80px
    xl: '6rem',    // 96px
    '2xl': '8rem'  // 128px
  },
  component: {
    xs: '0.5rem',  // 8px
    sm: '1rem',    // 16px
    md: '1.5rem',  // 24px
    lg: '2rem',    // 32px
    xl: '3rem'     // 48px
  }
};

// Configuración de bordes redondeados
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px'
};

// Exportación del tema completo
export const THEME = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    secondary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87',
      950: '#3b0764',
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    warning: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    }
  }
};

export default THEME;
