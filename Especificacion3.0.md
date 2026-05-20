**ESPECIFICACIÓN DE REQUERIMIENTOS FUNCIONALES**

Sitio Web Corporativo

**Maderas Ponotro**

| Proyecto: | Sitio Web Corporativo Maderas Ponotro |
| :---- | :---- |
| **Versión:** | 3.4 |
| **Fecha:** | 07/05/2026 |
| **Tipo:** | Especificación de Requerimientos Funcionales |
| **Estado:** | Implementado / Optimizado (Performance +90) |

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
*    3.3 Catálogo de Productos y Carrito de Cotización
*    3.4 Historia, Proceso y Fundador  
*    3.5 Cotizaciones y Contacto

4. **4\. Requerimientos No Funcionales**

*    4.1 Diseño y Experiencia de Usuario  
*    4.2 Rendimiento y Optimización Extrema
*    4.3 Compatibilidad  
*    4.4 Seguridad

5. **5\. Especificaciones Técnicas**

*    5.1 Paleta de Colores  
*    5.2 Tipografía  
*    5.3 Stack Tecnológico  
*    5.4 Estructura del Proyecto

6. **6\. Anexos**

*    6.1 Catálogo de Productos  
*    6.2 Campos del Formulario de Contacto  
*    6.3 Información de Contacto Empresarial  
*    6.4 Checklist de Entrega

# **1\. Introducción**

## **1.1 Propósito del Documento**

Este documento establece la especificación de requerimientos funcionales para el sitio web corporativo de Maderas Ponotro. Define las funcionalidades, características y comportamientos implementados en el sistema web, sirviendo como referencia técnica y de validación del producto actual.

## **1.2 Alcance del Proyecto**

El proyecto contempla el diseño y desarrollo de un sitio web corporativo tipo SPA (Single Page Application) de página continua (one-page scroll) que permite a Maderas Ponotro tener presencia digital. Incorpora un carrito de cotizaciones para enviar múltiples requerimientos de forma centralizada. El sitio está desplegado en Netlify como una aplicación React responsiva y utiliza Context API para la gestión del estado global de la cotización.

## **1.3 Objetivos del Sitio Web**

* Establecer presencia digital profesional para Maderas Ponotro en un formato fluido SPA  
* Proporcionar información sobre productos en ventanas modales con opciones al detalle
* Agilizar la captura de clientes mediante un innovador carrito de cotizaciones integrado  
* Facilitar múltiples canales de contacto: formulario unificado, Gmail, WhatsApp, teléfono  
* Contar la historia de la empresa con enfoque humano detallando el perfil del fundador  
* Mostrar el proceso productivo con interacciones inmersivas (video en etapa inicial)  
* Aumentar la visibilidad de la marca y simplificar la experiencia de usuario

# **2\. Descripción General**

## **2.1 Perspectiva del Producto**

El sitio web de Maderas Ponotro es un sistema independiente desplegado en Netlify que funciona como una SPA moderna. Utiliza Context API de React para el estado global (QuotationCart), EmailJS para envíos de solicitud y Google Maps embebido para ubicación. Las zonas de despacho cubren Cañete, Lebu, Concepción y Talcahuano.

## **2.2 Funcionalidad del Producto**

El sitio web proporciona las siguientes funcionalidades clave:

* Arquitectura de una sola página (SPA) con navegación fijada y desplazamiento suave a secciones
* Carrito de Cotización manejado globalmente que pre-llena el formulario de contacto con los productos de interés
* Presentación visual inmersiva mediante hero carrusel a pantalla completa con 4 slides dinámicos
* Catálogo de productos (14 ítems en 4 categorías) en grid interactivo con filtros por tratamiento y medida
* Diseño responsivo que ajusta la cantidad de productos visibles inicialmente con botón "Ver todo"
* Modales dinámicos de detalle de producto para visualización en profundidad y añadir al carrito
* Sección CTA de pedidos especiales (`SpecialOrderCTA`) para solicitudes fuera del catálogo estándar
* Sección informativa de "Proceso" con 5 etapas, incluyendo video `.webm` en la etapa de recepción
* Perfil destacable del fundador dentro de la historia de la empresa
* Formulario inteligente de contacto con validaciones en tiempo real
* Resumen de cotización (`QuotationSummary`) integrado en la sección de contacto
* Animaciones de scroll reveal mejoradas con efecto stagger fluido (useScrollRevealStagger)
* Enrutamiento interno por anclajes (`#inicio`, `#productos`, `#proceso`, `#historia`, `#contacto`)

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

* ✅ **Refactor a Pantalla Única:** Navegación vertical basada en anclajes (`#inicio`, `#productos`, `#proceso`, `#historia`, `#contacto`).
* ✅ **Scroll Spy en Navbar:** Seguimiento automático de la sección activa mientras se navega por el sitio.
* ✅ **Context API:** Estado global para el Carrito de Cotizaciones (`QuotationCartContext.jsx`), gestionable desde cualquier componente. Acciones: `ADD_ITEM`, `REMOVE_ITEM`, `UPDATE_QUANTITY`, `CLEAR_CART`, `TOGGLE_CART`, `CLOSE_CART`.
* ✅ **Code Splitting:** `React.lazy` + `<Suspense>` para todas las secciones bajo el fold. Solo `Navbar`, `Hero` y `Footer` se cargan de forma eager.

## **3.2 Sección Inicio (Hero Carrusel)**

**Identificador:** RF-002  
**Prioridad:** Alta  
**Estado:** ✅ Implementado

* ✅ **Carrusel Pantalla Completa:** Sistema de 4 diapositivas rotativas con fondos optimizados (.webp).
* ✅ **LCP Optimization:** Precarga de la primera imagen mediante `<link rel="preload">` con `fetchpriority="high"`.
* ✅ **Legibilidad Mejorada:** Superposición oscura uniforme (`bg-gradient-to-b from-black/50 via-black/40 to-black/60`) para garantizar el contraste del contenido.
* ✅ **Gestos Táctiles:** Soporte para navegación swipe en dispositivos móviles mediante hook `useExpandable`.
* ✅ **Datos Hero:** Tarjetas "¿Por qué nosotros?" (3), estadísticas clave (21 años de experiencia, 100% cumplimiento operativo, +10 años acreditados), misión/visión/valores, y zonas de despacho.

## **3.3 Catálogo de Productos y Carrito de Cotización**

**Identificador:** RF-003  
**Prioridad:** Alta  
**Estado:** ✅ Implementado

* ✅ **Grilla Modular Inteligente:** Visualización adaptativa (1 a 4 columnas según ancho de pantalla).
* ✅ **Filtros Dinámicos:** Capacidad de filtrar por tratamiento (Impregnada/Natural) y por medidas específicas, con contador de resultados en tiempo real.
* ✅ **Tarjetas de Producto (`ProductCard`):** Componente dedicado con imagen, nombre, categoría y acciones de carrito.
* ✅ **Modales de Detalles (`ProductDetailModal`):** Información técnica y visual del producto con opción de añadir al carrito.
* ✅ **CTA Pedidos Especiales (`SpecialOrderCTA`):** Sección para solicitar productos fuera del catálogo estándar.
* ✅ **Carrito de Cotización (QuotationCart):** Panel lateral (slide-over) que acumula artículos con control de cantidad.
* ✅ **Inyección Automática:** Al presionar "Cotizar ahora", el sistema inyecta la lista de productos y un mensaje pre-escrito en el formulario de contacto vía `getCartMessage()`.

## **3.4 Historia, Proceso y Fundador**

**Identificador:** RF-004  
**Prioridad:** Media  
**Estado:** ✅ Implementado

* ✅ **Perfil del Fundador (`FounderProfile`):** Sección narrativa sobre la historia y trayectoria de la empresa, anclada en `#historia`.
* ✅ **Proceso Productivo (`ProcessGallery`):** Galería de 5 pasos. El primer paso (Recepción) incluye video interactivo `.webm` (play-on-click); los pasos restantes actúan como placeholders en preparación.
* ✅ **Estadísticas Dinámicas:** 21 años de experiencia, 100% cumplimiento operativo, +10 años acreditados.
* ✅ **Call to Action (`CallToAction`):** Sección dedicada de conversión entre el proceso y el contacto.

## **3.5 Cotizaciones y Contacto**

**Identificador:** RF-005  
**Prioridad:** Alta  
**Estado:** ✅ Implementado

* ✅ **Formulario Sensible al Contexto (`ContactForm`):** El campo de mensaje recibe automáticamente la lista de productos desde el carrito.
* ✅ **Resumen de Cotización (`QuotationSummary`):** Componente que muestra el resumen del carrito dentro de la sección de contacto.
* ✅ **Validaciones Robustas (`validation.js`):** Nombre (mín. 3 chars), Teléfono (regex 8-20 chars), Email (regex), Ciudad (mín. 2 chars), Mensaje (mín. 10, máx. 500 chars; opcional si el carrito tiene ítems).
* ✅ **Envío por EmailJS:** Integración con importación dinámica de `emailjs-com`. Variables de plantilla: `user_name`, `user_email`, `user_phone`, `user_city`, `user_message`, `quotation_items`.
* ✅ **Contacto Directo:** Links rápidos a WhatsApp, Gmail y llamadas telefónicas integrados en `ContactButtons` y `Footer`.

# **4\. Requerimientos No Funcionales**

## **4.1 Diseño y Experiencia de Usuario**

### **RNF-001 Paleta de Colores**

* ✅ Paleta forest: Esmeralda premium (`#064E3B`, `#065F46`, `#047857`, `#059669`)
* ✅ Acentos dorado bronce: `#B8860B`, `#DAA520`, `#996515`
* ✅ Neutros: Charcoal (`#1F2937`, `#374151`) para textos y fondos oscuros
* ✅ Cálidos: Cream (`#FFFBEB`, `#FEF3C7`) para secciones de acento

### **RNF-002 Tipografía**

* ✅ **Montserrat:** Títulos, encabezados y botones (font-display) — pesos 400, 500, 600, 700
* ✅ **Open Sans:** Párrafos y texto general (font-sans) — pesos 400, 500, 600
* ✅ Interlineado optimizado (1.6) para legibilidad en móviles y desktop

### **RNF-003 Imágenes y Multimedia**

* ✅ **Optimización WebP:** Migración total de activos (.png/.jpg) a formato Next-gen (.webp) para el logo, fondos y catálogo.
* ✅ **Fluid Branding:** Sistema de escalado dinámico del logo basado en `vh` y `max-width` para adaptación perfecta en pantallas de cualquier altura.
* ✅ **CLS Prevention:** Uso de `aspect-ratio` y dimensiones explícitas (`width`/`height`) en todas las imágenes clave.
* ✅ **Lazy Loading:** Implementado nativamente (`loading="lazy"`) en todos los activos fuera del primer slide.
* ✅ **Video:** Formato `.webm` para el clip de la etapa de recepción del proceso.

### **RNF-004 Animaciones y Microinteracciones**

* ✅ **Scroll Reveal:** Sistema personalizado con Intersection Observer (`useScrollReveal`).
* ✅ **Efecto Stagger:** Animación escalonada en el grid de productos y pasos del proceso (`useScrollRevealStagger`, intervalo 100ms).
* ✅ **Hover States:** Efectos de zoom, sombras dinámicas y cambios de opacidad suaves.

## **4.2 Rendimiento y Optimización Extrema**

* ✅ **LCP Opt:** Uso de `fetchpriority="high"`, `decoding="sync"` y precarga en el `index.html` para la imagen principal.
* ✅ **Pipeline de Compresión:** `vite-plugin-compression` genera `.br` (Brotli) en cada build.
* ✅ **Image Optimization Plugin:** `vite-plugin-image-optimizer` comprime WebP/JPEG/PNG a calidad 80 en cada build.
* ✅ **Code Splitting:** Manual chunking separa `react-vendor` (react + react-dom) y `react-icons` (fa, fa6, fi, hi) para cacheo eficiente.
* ✅ **Importación Dinámica:** `emailjs-com` se importa dinámicamente, manteniéndolo fuera del bundle inicial.

## **4.3 Compatibilidad**

* ✅ Mobile-First: Optimizado para iPhone, Android y Tablets.
* ✅ Navbar hamburguesa funcional con scroll spy.
* ✅ Grid adaptativo (1, 2, 3 o 4 columnas según dispositivo).
* ✅ Breakpoints de altura personalizados: `short` (max-height 750px), `medium-h` (751–900px) para Hero.

## **4.4 Seguridad**

* ✅ Escapado de caracteres en inputs para prevenir inyecciones básicas.
* ✅ Gestión de estados segura mediante Hooks (no exposición de datos sensibles en el DOM).
* ✅ Credenciales EmailJS gestionadas mediante variables de entorno (`VITE_EMAILJS_*`), no hardcodeadas.

# **5\. Especificaciones Técnicas**

## **5.1 Paleta de Colores Implementada (Tailwind)**

| Token | Código HEX | Uso |
| :---- | :---- | :---- |
| `forest-dark` | \#064E3B | Navbar (scrolled), footers, títulos principales |
| `forest` | \#065F46 | Botones primarios, badges de productos |
| `forest-medium` | \#047857 | Estados intermedios, iconos |
| `forest-light` | \#059669 | Hover states, iconos de contacto |
| `accent-gold` | \#B8860B | Indicadores de carrusel, números de stats |
| `accent-gold-light` | \#DAA520 | Variante clara de dorado |
| `accent-gold-dark` | \#996515 | Variante oscura de dorado |
| `cream` | \#FFFBEB | Fondos de secciones cálidas |
| `cream-dark` | \#FEF3C7 | Bordes y variantes cream |
| `charcoal` | \#1F2937 | Fondos de sección proceso, texto base |
| `charcoal-light` | \#374151 | Variante clara de charcoal |

## **5.2 Stack Tecnológico Principal**

| Tecnología | Versión | Rol |
| :---- | :---- | :---- |
| React | 18.3.1 | Framework UI |
| Vite | 6.0.5 | Build system |
| Tailwind CSS | 3.4.17 | Estilos utilitarios |
| React Icons | ^5.4.0 | Biblioteca de iconos (fa, fa6, fi, hi) |
| emailjs-com | ^3.2.0 | Envío de formulario de contacto |
| react-router-dom | ^7.1.1 | Dependencia instalada (no usada en navegación principal) |
| vite-plugin-compression | ^0.5.1 | Compresión Brotli en build |
| vite-plugin-image-optimizer | ^2.0.3 | Optimización de imágenes en build |

## **5.3 Variables de Entorno Requeridas**

| Variable | Descripción |
| :---- | :---- |
| `VITE_EMAILJS_SERVICE_ID` | ID del servicio EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | ID de la plantilla EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Clave pública EmailJS |

## **5.4 Estructura del Proyecto**

```
maderas-ponotroV2.0/
├── public/
│   ├── products/                    # Imágenes de productos (.webp)
│   ├── videos/
│   │   └── ingreso-madera.webm      # Video etapa 1 del proceso
│   ├── logo.webp
│   └── Slide 1-4.webp               # Fondos del Hero
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── QuotationCart.jsx
│   │   │   └── Hero/
│   │   │       ├── hooks/useExpandable.js
│   │   │       └── Slides/
│   │   │           ├── Slide1.jsx
│   │   │           ├── Slide2.jsx
│   │   │           ├── Slide3.jsx
│   │   │           └── Slide4.jsx
│   │   ├── products/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductDetailModal.jsx
│   │   │   └── SpecialOrderCTA.jsx
│   │   ├── history/
│   │   │   ├── ProcessGallery.jsx
│   │   │   └── FounderProfile.jsx
│   │   ├── contact/
│   │   │   ├── ContactSection.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ContactButtons.jsx
│   │   │   └── QuotationSummary.jsx
│   │   └── home/
│   │       └── CallToAction.jsx
│   ├── context/
│   │   └── QuotationCartContext.jsx
│   ├── data/
│   │   └── products.js              # 14 productos en 4 categorías
│   ├── constants/
│   │   └── heroData.js              # whyUsCards, stats, missionVisionValues, shippingLocations, heroBackgrounds
│   ├── hooks/
│   │   └── useScrollReveal.js       # useScrollReveal + useScrollRevealStagger
│   └── utils/
│       ├── emailService.js          # EmailJS: sendEmail, getWhatsAppLink, getMailtoLink, getTelLink
│       └── validation.js            # validateForm, validateName, validateEmail, validatePhone, validateCity, validateMessage
├── index.html
├── vite.config.js
├── tailwind.config.js
└── .env.example
```

# **6\. Anexos**

## **6.1 Catálogo de Productos (v3.4)**

**14 productos en 4 categorías:**

| Categoría | Productos |
| :---- | :---- |
| **Construcción** | Madera Dimensionada 2x2, 2x3, 2x4, 2x5, 2x6, 3x3, 3x4, 4x4 (natural e impregnada) |
| **Terminaciones** | Moldura Guardapolvo Pino 1x3, Cornisa Decorativa 1x2 |
| **Polines** | Polín Calibrado 3-4", Polín Calibrado 4-5" |
| **Tablas** | Tabla Tapa 1x4, Tabla de Piso Cepillada 1x5 |

## **6.2 Campos del Formulario de Contacto**

| Campo | Regla de Validación |
| :---- | :---- |
| **Nombre** | Requerido, mín. 3 caracteres |
| **Teléfono** | Requerido, regex `/^[\d\s\-+()]{8,20}$/` |
| **Email** | Requerido, formato correo válido |
| **Ciudad** | Requerido, mín. 2 caracteres |
| **Mensaje** | Mín. 10 / máx. 500 caracteres. Opcional si el carrito tiene ítems. Poblado automáticamente por el Carrito. |

## **6.3 Información de Contacto Empresarial**

| Campo | Valor |
| :---- | :---- |
| **Email corporativo** | Contacto.maderasponotro@gmail.com |
| **Ejecutivo 1** | Orosimbo Cisterna — +56 9 8744 6911 |
| **Ejecutivo 2** | Claudia Zapata — +56 9 4032 3645 |
| **Horario** | Lun–Vie 08:00–17:30 / Sáb 08:00–12:00 |
| **Zonas de despacho** | Cañete, Lebu, Concepción, Talcahuano |
| **Región** | Bío-Bío, Chile |

## **6.4 Checklist de Estado (v3.4)**

* ✅ Navegación SPA por anclajes 100% funcional.
* ✅ Carrito de cotización inyecta datos correctamente en el formulario.
* ✅ Catálogo de 14 productos con filtros operativos (4 categorías).
* ✅ Performance Lighthouse +90 alcanzado mediante compresión Brotli y optimización LCP.
* ✅ Sistema de branding fluido (WebP + Fluid Logo) implementado.
* ✅ Animaciones Stagger en carga de elementos.
* ✅ Code splitting con React.lazy + Suspense en todas las secciones bajo el fold.
* ✅ Video `.webm` integrado en etapa 1 del proceso productivo.
* ✅ Componentes SpecialOrderCTA, CallToAction, QuotationSummary y ContactForm implementados.
* ⬜ Configuración final de credenciales EmailJS en `.env` (requiere crear archivo desde `.env.example`).
* ⬜ Producción de videos para los pasos 2–5 del proceso.
* ⬜ Integración de Google Analytics.
* ⬜ Evaluar si eliminar dependencia `react-router-dom` (instalada pero no usada en navegación principal).

*\--- Fin del Documento \---*
