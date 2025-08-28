# 🎯 Landing Page de Donaciones - Proyecto PY

## 📋 Descripción del Proyecto

Una landing page interactiva y atractiva para recaudar donaciones, diseñada como **página estática sin backend** que se desplegará en Vercel. La página contará con un elemento visual cute (mascota/objeto) que interactúa con el usuario, botones de donación de montos fijos enlazados a Kiire, y un QR de Redeban para donaciones de monto libre.

## 🚀 Stack de Tecnologías

- **Framework**: Next.js (React)
- **Styling**: TailwindCSS
- **Deployment**: Vercel
- **Animaciones**: Spline (embed) o animaciones CSS simples
- **Responsive**: Mobile-first approach
- **Tipo**: Landing page estática (sin backend)

## 🏗️ Estructura de la Página

### Componentes/Secciones Principales:

1. **Header/Navbar** - Logo y navegación básica
2. **Hero Section** - Mascota/objeto cute interactivo + texto motivador
3. **Botones de Donación Fija** - 4 botones con montos predefinidos
4. **Sección QR** - QR de Redeban para monto libre
5. **Footer** - Información de contacto y enlaces

### Layout Responsive:
- **Mobile**: Stack vertical, elementos centrados
- **Tablet**: Layout en grid de 2 columnas para botones
- **Desktop**: Layout expandido con mejor distribución del espacio

## 🎮 Interacción con la Mascota/Objeto Cute

### Opción 1: Spline Embed
- Embed de Spline que reaccione al movimiento del cursor
- Animaciones suaves y atractivas
- Interacción hover y click

### Opción 2: Animación CSS Simple
- Objeto cute que sigue al cursor
- Transiciones suaves con CSS
- Efectos hover y estados activos

## 📱 Responsividad

### Mobile-First Approach:
- **Base**: Diseño optimizado para móviles (320px+)
- **Breakpoints**: 
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px+

### Elementos Responsivos:
- Botones de donación: Stack vertical en mobile, grid en desktop
- Mascota/objeto: Tamaño adaptable según viewport
- Texto: Escalado automático y reflow
- Espaciado: Márgenes y padding adaptativos

## 🔄 Flujo de Trabajo

### Fase 1: Estructura Base
- Setup del proyecto Next.js
- Creación de componentes básicos
- Layout y estructura HTML

### Fase 2: Estilos y Diseño
- Implementación de TailwindCSS
- Diseño responsive mobile-first
- Paleta de colores y tipografía

### Fase 3: Animaciones e Interactividad
- Integración de Spline o animaciones CSS
- Interacción con la mascota/objeto
- Transiciones y efectos visuales

### Fase 4: Integración de Enlaces
- Botones de donación fija (Kiire)
- QR de Redeban
- Enlaces y funcionalidad final

## 💰 Sistema de Donaciones

### Botones de Monto Fijo:
- **10,000 COP** → Link Kiire
- **20,000 COP** → Link Kiire  
- **50,000 COP** → Link Kiire
- **100,000 COP** → Link Kiire

### Donación Libre:
- **QR de Redeban** para montos personalizados
- Posicionado estratégicamente para fácil acceso

## 📝 Notas Importantes

- **NO hay backend**: Esta es una landing page completamente estática
- **Sin base de datos**: Los enlaces redirigen directamente a plataformas externas
- **Deployment**: Vercel para máxima velocidad y simplicidad
- **SEO**: Optimizado para motores de búsqueda

## 🎯 Objetivos del Proyecto

- Crear una experiencia de usuario atractiva y memorable
- Facilitar el proceso de donación con opciones claras
- Mantener un diseño moderno y profesional
- Asegurar funcionalidad en todos los dispositivos

---

## ⚠️ Nota de Desarrollo

**No desarrollaré código hasta que el usuario lo apruebe.** Este README sirve como planificación y guía para el desarrollo posterior del proyecto.

---

*Proyecto creado para facilitar donaciones de manera simple, efectiva y visualmente atractiva.* 🚀
