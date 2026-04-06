**ESPECIFICACIÓN DE REQUERIMIENTOS FUNCIONALES**

Sitio Web Corporativo

**Maderas Ponotro**

| Proyecto: | Sitio Web Corporativo Maderas Ponotro |
| :---- | :---- |
| **Versión:** | 3.1 |
| **Fecha:** | 06/04/2026 |
| **Tipo:** | Especificación de Requerimientos Funcionales |
| **Estado:** | Implementado |

# **Tabla de Contenidos**

1. **1\. Introducción**

*    1.1 Propósito del Documento  
*    1.2 Alcance del Proyecto  
*    1.3 Objetivos del Sitio Web

2. **2\. Descripción General**

*    2.1 Perspectiva del Producto  
*    2.2 Funcionalidad del Producto  
*    2.3 Usuarios del Sistema

3. **3\. Requerimientos Funcionales**

*    3.1 Arquitectura y Navegación SPA
*    3.2 Sección Inicio (Hero Carrusel)
*    3.3 Catálogo de Productos, Modales y Carrito  
*    3.4 Historia, Proceso y Fundador  
*    3.5 Cotizaciones y Contacto

4. **4\. Requerimientos No Funcionales**

*    4.1 Diseño y Experiencia de Usuario  
*    4.2 Rendimiento  
*    4.3 Compatibilidad  
*    4.4 Seguridad

5. **5\. Especificaciones Técnicas**

*    5.1 Paleta de Colores  
*    5.2 Tipografía  
*    5.3 Tecnologías Implementadas

6. **6\. Anexos**

*    6.1 Estructura de Navegación  
*    6.2 Campos del Formulario de Contacto  
*    6.3 Checklist de Entrega

# **1\. Introducción**

## **1.1 Propósito del Documento**

Este documento establece la especificación de requerimientos funcionales para el sitio web corporativo de Maderas Ponotro. Define las funcionalidades, características y comportamientos implementados en el sistema web, sirviendo como referencia técnica y de validación del producto actual.

## **1.2 Alcance del Proyecto**

El proyecto contempla el diseño y desarrollo de un sitio web corporativo tipo SPA (Single Page Application) de página continua (one-page scroll) que permite a Maderas Ponotro tener presencia digital. Incorpora un carrito de cotizaciones para enviar múltiples requerimientos de forma centralizada. El sitio está desplegado en Netlify como una aplicación React responsiva y utiliza Context API para el estado.

## **1.3 Objetivos del Sitio Web**

* Establecer presencia digital profesional para Maderas Ponotro en un formato fluido SPA  
* Proporcionar información sobre productos en ventanas modales con opciones al detalle
* Agilizar la captura de clientes mediante un innovador carrito de cotizaciones integrado  
* Facilitar múltiples canales de contacto: formulario unificado, Gmail, WhatsApp, teléfono  
* Contar la historia de la empresa con enfoque humano detallando el perfil del fundador  
* Mostrar el proceso productivo con interacciones inmersivas (video on-hover)  
* Aumentar la visibilidad de la marca y simplificar la experiencia de usuario

# **2\. Descripción General**

## **2.1 Perspectiva del Producto**

El sitio web de Maderas Ponotro es un sistema independiente desplegado en Netlify que funciona como una SPA moderna. Utiliza Context API de React para el estado global (Carrito), EmailJS para envíos de solicitud y Google Maps embebido para ubicación. 

## **2.2 Funcionalidad del Producto**

El sitio web proporciona las siguientes funcionalidades clave:

* Arquitectura de una sola página (SPA) con navegación fijada y desplazamiento suave a secciones
* Carrito de Cotización manejado globalmente que pre-llena el formulario de contacto con los productos de interés
* Presentación visual inmersiva mediante hero carrusel a pantalla completa con fondos oscurecidos
* Catálogo de productos listados (7 ítems en grid interactivo) expandibles con un botón "Ver más"
* Modales dinámicos de detalle de producto para visualización en profundidad y añadir al carrito
* Inclusión de producto estrella con imagen dedicada: "Marco rebajado para ventana"
* Sección informativa de "Proceso" con tarjetas que reproducen video al hacer hover
* Perfil destacable del fundador dentro de la historia de la empresa
* Formulario inteligente de contacto con validaciones en tiempo real
* Animaciones de scroll reveal mejoradas con efecto stagger fluido
* Enrutamiento interno por anclajes eliminando react-router-dom de la navegación principal

## **2.3 Usuarios del Sistema**

| Tipo de Usuario | Descripción |
| :---- | :---- |
| **Clientes Potenciales** | Empresas constructoras, embalajistas y personas interesadas en madera elaborada e impregnada |
| **Clientes Actuales** | Clientes que buscan información adicional, nuevos productos o renovar pedidos |
| **Público General** | Visitantes que desean conocer la empresa, sus servicios y trayectoria |

# **3\. Requerimientos Funcionales**

## **3.1 Arquitectura y Navegación SPA**

**Identificador:** RF-001
**Prioridad:** Alta
**Estado:** ✅ Implementado

* ✅ **Refactor a Pantalla Única:** Reorganización del sitio para tener una navegación vertical basada en anclajes (`#productos`, `#proceso`, `#historia`, `#contacto`) en lugar de rutas disjuntas.
* ✅ **Scroll Suave:** Transiciones fluidas al presionar opciones de menú de navegación superior.
* ✅ **Context API:** Estado global para el Carrito de Cotizaciones, gestionable desde cualquier componente.

## **3.2 Sección Inicio (Hero Carrusel)**

**Identificador:** RF-002
**Prioridad:** Alta
**Estado:** ✅ Implementado

* ✅ **Carrusel Pantalla Completa:** Hero refactorizado a carrusel rotativo a pantalla completa.
* ✅ **Legibilidad Mejorada:** Capas semi-transparentes oscuras aplicadas detrás del texto en todas las diapositivas para asegurar el contraste de logos e íconos verdes.
* ✅ Botones principales adaptados a la nueva navegación in-page.

## **3.3 Catálogo de Productos, Modales y Carrito**

**Identificador:** RF-003
**Prioridad:** Alta
**Estado:** ✅ Implementado

* ✅ **Grilla Modular:** Visualización en cuadrícula (ProductGrid) escalable con botón interactivo "Ver más productos".
* ✅ **Modales de Detalles:** Componente `ProductDetailModal.jsx` para mostrar información a fondo del producto. Abierto al dar clic en la tarjeta del producto o su título.
* ✅ **Nuevo Producto Destacado:** Adición de "Marco rebajado para ventana impregnado" c/ foto dedicada al principio de la lista. Ofrece características detalladas de largos específicos (2.50, 3.20...).
* ✅ **Carrito de Cotización (QuotationCart):** Sistema de recolección de interés de clientes, superpuesto a la UI del sitio.
* ✅ **Conexión Automática:** El carrito acumula los artículos seleccionados y, al proceder, inyecta su contenido como mensaje pre-escrito en el Formulario de Contacto al final de la página.

## **3.4 Historia, Proceso y Fundador**

**Identificador:** RF-004
**Prioridad:** Media
**Estado:** ✅ Implementado

* ✅ **Perfil del Fundador:** Nueva sección narrativa sobre la figura del fundador, anclada en `#historia`.
* ✅ **Video Interactivo de Proceso:** Las tarjetas de las etapas de proceso reproductivo se alteraron; en lugar de una foto fija pre-video, muestran el primer frame del clip y reproducen un video automático al situar el mouse por encima (hover).
* ✅ Mantención de las estadísticas visuales e informativas sobre trayectoria.

## **3.5 Cotizaciones y Contacto**

**Identificador:** RF-005
**Prioridad:** Alta
**Estado:** ✅ Implementado

* ✅ **Formulario Sensible al Contexto:** El formulario de contacto ahora recibe inputs automatizados emitidos por el Carrito de Cotización en el campo de `mensaje`.
* ✅ **Validaciones Exigentes:** Teléfono, email con Regex, y extensiones controladas. Integrado con feedback al usuario en rojo (errores) / verde (éxito).
* ✅ **Contacto Directo Secundario:** Botones de Gmail prellenado, WhatsApp dinámico y opción de discado habilitadas en lateral de contacto.

# **4\. Requerimientos No Funcionales**

## **4.1 Diseño y Experiencia de Usuario**

### **RNF-001 Paleta de Colores**

* ✅ Paleta principal: Esmeralda premium (no el verde bosque original)
* ✅ Acentos: Dorado bronce (sustituyendo los tonos marrón tierra originales)
* ✅ Neutros sofisticados: cream, charcoal para fondos y textos
* ✅ Uso de fondos blancos y grises claros (`gray-50`) para secciones alternadas
* ✅ Contraste adecuado para accesibilidad

### **RNF-002 Tipografía**

* ✅ Fuentes cargadas vía Google Fonts con preconnect para rendimiento  
* ✅ Montserrat para títulos, encabezados y botones (font-display)  
* ✅ Open Sans para párrafos y texto general (font-sans)  
* ✅ Jerarquía clara: H1 > H2 > H3 > párrafo  
* ✅ Interlineado 1.6 configurado globalmente en `body`  
* ✅ Color de texto base: charcoal `#1F2937`

### **RNF-003 Imágenes y Multimedia**

* ✅ Imágenes JPEG optimizadas para las tarjetas informativas y carrusel (1.jpeg-5.jpeg)  
* ✅ Imagen de fondo (fondo.png) y logotipo (logo.png) en formato PNG  
* ✅ Lazy loading implementado en iframe de Google Maps  
* ✅ Atributos `alt` en todas las imágenes para accesibilidad

### **RNF-004 Animaciones y Microinteracciones**

* ✅ Sistema de Scroll Reveal personalizado con Intersection Observer API  
* ✅ Custom hook `useScrollReveal` para elementos individuales  
* ✅ Custom hook `useScrollRevealStagger` para listas/grids con efecto escalonado  
* ✅ Variantes de animación: reveal-up, reveal-down, reveal-left, reveal-right, reveal-scale, reveal-blur, reveal-rotate  
* ✅ Clases de utilidad: delays (100-800ms), duraciones (fast/normal/slow), easings (smooth/bounce/elastic)  
* ✅ Hover effects en tarjetas: elevación de sombra, zoom de imagen, cambio de color  
* ✅ Transiciones CSS suaves (300-700ms) en todos los elementos interactivos  
* ✅ Animación bounce en indicador de scroll del hero

## **4.2 Rendimiento**

* ✅ Importación dinámica de EmailJS para reducir bundle inicial  
* ✅ Hot Module Replacement (HMR) ultrarrápido con Vite  
* ✅ Build optimizado con tree-shaking y code splitting  
* ✅ Google Fonts con preconnect para carga temprana  
* ✅ Lazy loading en iframe de Google Maps  
* ⬜ Lazy loading de imágenes con react-intersection-observer (no implementado, mejora futura)  
* ⬜ Optimización WebP con fallback (no implementado, mejora futura)

## **4.3 Compatibilidad**

* ✅ Responsivo completo: Desktop (1920px), Tablet (768px), Mobile (375px)  
* ✅ Navbar hamburguesa para dispositivos móviles  
* ✅ Grid adaptativo en todas las secciones  
* ✅ Funcionalidad táctil en carrusel (botones de navegación)  
* ✅ Prefijos CSS automáticos vía Autoprefixer

## **4.4 Seguridad**

* ⬜ Protección anti-spam (reCAPTCHA) no implementada  
* ✅ Validación de inputs del lado del cliente (módulo `validation.js`)  
* ✅ Envío de correos vía EmailJS con credenciales seguras  
* ✅ `referrerPolicy="no-referrer-when-downgrade"` en iframe de Google Maps  
* ✅ Atributos `rel="noopener noreferrer"` en enlaces externos  
* ⬜ HTTPS en producción (gestionado por Netlify automáticamente)

# **5\. Especificaciones Técnicas**

## **5.1 Paleta de Colores Implementada**

| Color | Código HEX | Uso |
| :---- | :---- | :---- |
| **Esmeralda Oscuro** | \#064E3B | Navbar, footer, encabezados de página |
| **Esmeralda** | \#065F46 | Botones primarios, enlaces activos |
| **Esmeralda Medio** | \#047857 | Botones secundarios, highlights |
| **Esmeralda Claro** | \#059669 | Hover states, active states navbar |
| **Dorado Bronce** | \#B8860B | Números de estadísticas, indicadores carrusel |
| **Dorado Claro** | \#DAA520 | Textos de acento, sublabels |
| **Dorado Oscuro** | \#996515 | Sublabels de estadísticas |
| **Crema** | \#FFFBEB | Fondos alternativos (disponible) |
| **Crema Oscuro** | \#FEF3C7 | Fondos de secciones (disponible) |
| **Charcoal** | \#1F2937 | Color base de texto body |
| **Charcoal Claro** | \#374151 | Textos secundarios |
| **Blanco** | \#FFFFFF | Fondos principales, texto sobre verde |
| **Gris Claro** | gray-50 | Fondos alternativos de secciones |

## **5.2 Tipografía**

| Elemento | Fuente / Tamaño | Estilo |
| :---- | :---- | :---- |
| **H1 (Títulos de página)** | Montserrat / 36-48px (text-4xl md:text-5xl) | Bold, Color blanco (sobre header verde) |
| **H2 (Títulos de sección)** | Montserrat / 30-36px (text-3xl md:text-4xl) | Bold, Color forest-dark |
| **H3 (Subtítulos)** | Montserrat / 20-24px (text-xl) | Bold, Color forest-dark |
| **Párrafos** | Open Sans / 14-18px (text-sm a text-lg) | Regular, Color gray-600 |
| **Botones** | Montserrat / 16px | Bold, Texto blanco sobre verde |
| **Stats (números)** | Montserrat / 36-48px (text-4xl md:text-5xl) | Bold, Color accent-gold |

## **5.3 Stack Tecnológico Implementado**

### **Frontend — Stack Principal**

* **React 18.3.1** — Librería de JavaScript para interfaces de usuario  
* **React Context API** — Para manejar estados globales en el frontend (Quotation Cart)
* **Vite 6.0.5** — Build tool y dev server con HMR ultrarrápido  
* **Tailwind CSS 3.4.17** — Framework de utilidades CSS con configuración personalizada  
* **JavaScript ES6+ / JSX** — Componentes funcionales con React Hooks

### **Dependencias de Producción**

| Paquete | Versión | Uso |
| :---- | :---- | :---- |
| react | ^18.3.1 | Librería principal de UI |
| react-dom | ^18.3.1 | Renderizado en DOM |
| react-router-dom | ^7.1.1 | Navegación SPA |
| react-icons | ^5.4.0 | Iconos (FaWhatsapp, FaGoogle, FaPhone, FaTiktok, etc.) |
| emailjs-com | ^3.2.0 | Envío de formularios por email |

### **Dependencias de Desarrollo**

| Paquete | Versión | Uso |
| :---- | :---- | :---- |
| @vitejs/plugin-react | ^4.3.4 | Plugin de React para Vite |
| tailwindcss | ^3.4.17 | Framework CSS |
| postcss | ^8.4.49 | Procesador CSS |
| autoprefixer | ^10.4.20 | Prefijos CSS automáticos |
| eslint | ^9.17.0 | Linting de código |
| eslint-plugin-react | ^7.37.2 | Reglas ESLint para React |
| eslint-plugin-react-hooks | ^5.0.0 | Reglas para React Hooks |
| eslint-plugin-react-refresh | ^0.4.16 | Soporte Hot Refresh |
| globals | ^15.14.0 | Variables globales para ESLint |
| @types/react | ^18.3.18 | Tipos TypeScript (referencia) |
| @types/react-dom | ^18.3.5 | Tipos TypeScript (referencia) |
| @eslint/js | ^9.17.0 | Configuración base ESLint |

### **Características del Stack**

* Vite con HMR ultrarrápido para desarrollo  
* Build optimizado con tree-shaking y code splitting  
* Tailwind CSS con archivo de configuración personalizado (paleta esmeralda/dorado)  
* React Hooks: useState, useEffect, useRef, useCallback, useLocation  
* Componentes funcionales, reutilizables y modulares  
* Custom hooks: useScrollReveal para animaciones de scroll  
* Intersection Observer API nativo para detección de viewport  
* Importación dinámica de EmailJS

### **Despliegue**

* **Netlify** — Plataforma de despliegue principal  
* Configuración en `netlify.toml`:
  * Build: `npm run build`, publish: `dist`
  * Redirects: `/*` → `/index.html` (SPA routing)
* ⬜ Certificado SSL automático (provisto por Netlify)  
* ⬜ Dominio personalizado (pendiente configuración)

## **5.4 Estructura del Proyecto Actual**

```
maderas-ponotroV2.0/
├── public/
│   ├── fondo.png              # Imagen de fondo hero (8.8MB)
│   ├── logo.png               # Logotipo de la empresa (2.2MB)
│   ├── marco-rebajado.png     # Foto de producto nuevo
│   ├── 1.jpeg - 5.jpeg        # Imágenes de galería/carrusel
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx         # Navegación SPA e integración de cart
│   │   │   ├── Footer.jsx         # Footer 
│   │   │   ├── Hero.jsx           # Hero carrusel a pantalla completa oscuro
│   │   │   ├── QuotationCart.jsx  # Botón flotante y modal lateral de carrito
│   │   │   └── ScrollToTop.jsx    
│   │   ├── home/
│   │   │   └── CallToAction.jsx   
│   │   ├── contact/
│   │   │   ├── ContactSection.jsx # Sección general
│   │   │   ├── ContactForm.jsx    # Formulario con relleno desde Cart
│   │   │   └── ContactButtons.jsx 
│   │   ├── history/
│   │   │   ├── ProcessGallery.jsx # Proceso productivo con hover videos
│   │   │   └── FounderProfile.jsx # Perfil e historia con el fundador
│   │   └── products/
│   │       ├── ProductCard.jsx    # Tarjeta base
│   │       ├── ProductGrid.jsx    # Catálogo (7 items) y botón cargar más
│   │       └── ProductDetailModal.jsx # Modal visual a fondo
│   ├── context/
│   │   └── CartContext.jsx        # Provider global para el state de cotizaciones
│   ├── hooks/
│   │   └── useScrollReveal.js     
│   ├── utils/
│   │   ├── emailService.js        
│   │   └── validation.js          
│   ├── App.jsx                    # Componente raíz de SPA de 1 página (scroll)
│   ├── main.jsx                   
│   └── index.css                  # Tailwind + Custom CSS
├── index.html                     
├── tailwind.config.js             
```

## **5.5 Configuración de Tailwind CSS**

El archivo **tailwind.config.js** implementa la paleta personalizada de Maderas Ponotro:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Esmeralda - Color principal elegante
                'forest-dark': '#064E3B',
                'forest': '#065F46',
                'forest-medium': '#047857',
                'forest-light': '#059669',
                // Dorado bronce - Acentos premium
                'accent-gold': '#B8860B',
                'accent-gold-light': '#DAA520',
                'accent-gold-dark': '#996515',
                // Neutros sofisticados
                'cream': '#FFFBEB',
                'cream-dark': '#FEF3C7',
                'charcoal': '#1F2937',
                'charcoal-light': '#374151',
            },
            fontFamily: {
                'sans': ['Open Sans', 'sans-serif'],
                'display': ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
```

## **5.6 SEO Implementado**

El archivo `index.html` incluye las siguientes optimizaciones SEO:

* `<html lang="es">` — Idioma declarado  
* `<title>` — "Maderas Ponotro | Elaboración e Impregnación de Maderas"  
* `<meta name="description">` — Descripción de la empresa  
* `<meta name="keywords">` — Palabras clave del negocio  
* `<link rel="icon">` — Favicon con el logotipo  
* Preconnect a Google Fonts para rendimiento  

## **5.7 Comandos de Desarrollo y Producción**

| Acción | Comando |
| :---- | :---- |
| **Instalar dependencias** | npm install |
| **Modo desarrollo** | npm run dev |
| **Build para producción** | npm run build |
| **Preview del build** | npm run preview |
| **Lint del código** | npm run lint |

# **6\. Anexos**

## **6.1 Estructura de Navegación Implementada**

```
├── Interfaz Única (SPA basada en anclajes)
│   ├── Menú de Navegación (Navbar)
│   │   ├── Inicio (scroll top)
│   │   ├── Productos (#productos)
│   │   ├── Proceso (#proceso)
│   │   ├── Historia (#historia)
│   │   ├── Contacto (#contacto)
│   │   └── Carrito Flotante (Abre Drawer con carrito global y botón cotizar)
│   ├── Modales ProductDetailModal superpuestos a la app general al accionar.
└── Footer
    ├── Empresa (logo + descripción + redes sociales)
    │   ├── WhatsApp → wa.me/56987446911
    │   └── TikTok → tiktok.com/@maderas_ponotro
    ├── Enlaces Rápidos (#productos, #proceso, #historia, #contacto)
    ├── Contacto
    │   ├── Ubicación: Región del Bío-Bío, Chile
    │   ├── Teléfono 1: +56 9 8744 6911 (Orosimbo Cisterna)
    │   ├── Teléfono 2: +56 9 5531 6212 (Claudia)
    │   └── Email: Maderas_ponotro@hotmail.com
    ├── Horario de Atención
    │   ├── Lunes a Viernes: 8:00 – 17:30
    │   └── Sábado: 8:00 – 12:30
    └── Copyright © [año actual]
```

## **6.2 Campos del Formulario de Contacto**

| Campo | Tipo | Validación | Obligatorio |
| :---- | :---- | :---- | :---- |
| **Nombre** | text | Mínimo 3 caracteres | Sí |
| **Teléfono** | tel | Formato: 8-20 caracteres, acepta dígitos, +, -, (), espacios | Sí |
| **Email** | email | Regex: `^[^\s@]+@[^\s@]+\.[^\s@]+$` | Sí |
| **Ciudad** | text | Mínimo 2 caracteres | Sí |
| **Mensaje** | textarea (5 rows) | Mínimo 10, máximo 500 caracteres, con contador visible | Sí |

## **6.3 Información de Contacto Configurada**

| Dato | Valor en `emailService.js` | Valor real en Footer |
| :---- | :---- | :---- |
| **Email** | contacto@maderasponotro.cl | Maderas_ponotro@hotmail.com |
| **Teléfono** | +56912345678 (placeholder) | +56 9 8744 6911 / +56 9 5531 6212 |
| **WhatsApp** | +56912345678 (placeholder) | wa.me/56987446911 |
| **Dirección** | Región del Biobío, Chile | Región del Bío-Bío, Chile |

> **⚠️ NOTA:** Los valores en `emailService.js` (CONTACT_INFO) contienen datos placeholder que deben ser actualizados con los valores reales del Footer. Los IDs de EmailJS (serviceId, templateId, publicKey) también requieren configuración con credenciales reales.

## **6.4 Checklist de Estado**

* ✅ Sitio web completamente responsivo y funcional onepage (SPA)
* ✅ Carrito de cotizaciones integrado con Context y Formulario EmailJS  
* ✅ Producto nuevo cargado con ventana Modal detallada  
* ✅ Navegación por hash anchors (`#`) con smooth-scroll
* ✅ Video en el Proceso productivo y Perfil de Fundador integrados
* ✅ Rediseño del Hero con superposiciones oscuras para mejor contraste visual
* ✅ Botones de contacto directo configurados (Gmail, WhatsApp, Teléfono)  
* ✅ Navegación optimizada, eliminando enrutadores de multi-página
* ✅ Animaciones fluidas, scroll reveal stagger en toda la página  
* ✅ Componentes encapsulados y modernizados
* ✅ Validación de formularios implementada (cliente)  
* ✅ Animaciones de scroll reveal implementadas  
* ✅ Google Maps embebido en página de contacto  
* ✅ Footer con información completa de contacto y horarios  
* ✅ Redes sociales: WhatsApp y TikTok  
* ✅ SEO básico implementado (meta tags, título, description, keywords)  
* ✅ Configuración de despliegue Netlify (netlify.toml)  
* ⬜ Credenciales EmailJS pendientes de configuración  
* ⬜ Datos de contacto en emailService.js requieren actualización  
* ⬜ Optimización de imágenes (fondo.png = 8.8MB, logo.png = 2.2MB)  
* ⬜ Protección anti-spam en formulario (reCAPTCHA)  
* ⬜ Filtros de categoría en página de productos  
* ⬜ Google Analytics (no implementado)  
* ⬜ Imágenes en formato WebP con fallback

*\--- Fin del Documento \---*