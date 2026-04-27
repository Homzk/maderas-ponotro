**ESPECIFICACIÓN DE REQUERIMIENTOS FUNCIONALES**

Sitio Web Corporativo

**Maderas Ponotro**

| Proyecto: | Sitio Web Corporativo Maderas Ponotro |
| :---- | :---- |
| **Versión:** | 3.2 |
| **Fecha:** | 27/04/2026 |
| **Tipo:** | Especificación de Requerimientos Funcionales |
| **Estado:** | Implementado / En Optimización |

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

El sitio web de Maderas Ponotro es un sistema independiente desplegado en Netlify que funciona como una SPA moderna. Utiliza Context API de React para el estado global (QuotationCart), EmailJS para envíos de solicitud y Google Maps embebido para ubicación. 

## **2.2 Funcionalidad del Producto**

El sitio web proporciona las siguientes funcionalidades clave:

* Arquitectura de una sola página (SPA) con navegación fijada y desplazamiento suave a secciones
* Carrito de Cotización manejado globalmente que pre-llena el formulario de contacto con los productos de interés
* Presentación visual inmersiva mediante hero carrusel a pantalla completa con 4 slides dinámicos
* Catálogo de productos completo (17 ítems en grid interactivo) con filtros por tratamiento y medida
* Diseño responsivo que ajusta la cantidad de productos visibles inicialmente (3 a 8 ítems) con botón "Ver todo"
* Modales dinámicos de detalle de producto para visualización en profundidad y añadir al carrito
* Sección informativa de "Proceso" con 5 etapas, incluyendo soporte para video en la etapa de recepción
* Perfil destacable del fundador dentro de la historia de la empresa
* Formulario inteligente de contacto con validaciones en tiempo real
* Animaciones de scroll reveal mejoradas con efecto stagger fluido (useScrollRevealStagger)
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

* ✅ **Refactor a Pantalla Única:** Reorganización del sitio para tener una navegación vertical basada en anclajes (`#productos`, `#proceso`, `#historia`, `#contacto`).
* ✅ **Scroll Spy en Navbar:** Seguimiento automático de la sección activa mientras se navega por el sitio.
* ✅ **Context API:** Estado global para el Carrito de Cotizaciones (`QuotationCartContext.jsx`), gestionable desde cualquier componente.

## **3.2 Sección Inicio (Hero Carrusel)**

**Identificador:** RF-002
**Prioridad:** Alta
**Estado:** ✅ Implementado

* ✅ **Carrusel Pantalla Completa:** Sistema de 4 diapositivas rotativas con fondos optimizados (.webp).
* ✅ **Legibilidad Mejorada:** Superposición oscura uniforme (`bg-gradient-to-b from-black/50 via-black/40 to-black/60`) para garantizar el contraste del contenido.
* ✅ **Gestos Táctiles:** Soporte para navegación swipe en dispositivos móviles.

## **3.3 Catálogo de Productos y Carrito de Cotización**

**Identificador:** RF-003
**Prioridad:** Alta
**Estado:** ✅ Implementado

* ✅ **Grilla Modular Inteligente:** Visualización adaptativa que varía según el ancho de pantalla (1 a 4 columnas).
* ✅ **Filtros Dinámicos:** Capacidad de filtrar por tratamiento (Impregnada/Natural) y por medidas específicas, con contador de resultados en tiempo real.
* ✅ **Modales de Detalles:** Componente `ProductDetailModal.jsx` para mostrar información técnica y visual del producto.
* ✅ **Carrito de Cotización (QuotationCart):** Panel lateral (slide-over) que acumula los artículos de interés.
* ✅ **Inyección Automática:** Al presionar "Cotizar ahora", el sistema inyecta la lista de productos y un mensaje pre-escrito en el formulario de contacto.

## **3.4 Historia, Proceso y Fundador**

**Identificador:** RF-004
**Prioridad:** Media
**Estado:** ✅ Implementado

* ✅ **Perfil del Fundador:** Sección narrativa sobre la historia y trayectoria de la empresa, anclada en `#historia`.
* ✅ **Proceso Productivo:** Galería de 5 pasos. El primer paso (Recepción) incluye un video interactivo (play-on-click); los pasos restantes actúan como placeholders en preparación.
* ✅ **Estadísticas Dinámicas:** Visualización de años de experiencia, cumplimiento y certificaciones.

## **3.5 Cotizaciones y Contacto**

**Identificador:** RF-005
**Prioridad:** Alta
**Estado:** ✅ Implementado

* ✅ **Formulario Sensible al Contexto:** El campo de mensaje recibe automáticamente la lista de productos desde el carrito.
* ✅ **Validaciones Robustas:** Módulo `validation.js` encargado de validar Nombre, Teléfono (Regex), Email, Ciudad y Mensaje.
* ✅ **Contacto Directo:** Enlaces rápidos a WhatsApp, Gmail y llamadas telefónicas integrados en el Footer.

# **4\. Requerimientos No Funcionales**

## **4.1 Diseño y Experiencia de Usuario**

### **RNF-001 Paleta de Colores**

* ✅ Paleta principal: Esmeralda premium (`#064E3B`, `#065F46`)
* ✅ Acentos: Dorado bronce (`#B8860B`, `#DAA520`) para estadísticas e indicadores
* ✅ Neutros: Charcoal (`#1F2937`) para textos y fondos oscuros en procesos
* ✅ Uso de fondos blancos y grises claros (`gray-50`) para secciones claras

### **RNF-002 Tipografía**

* ✅ **Montserrat:** Títulos, encabezados y botones (font-display)
* ✅ **Open Sans:** Párrafos y texto general (font-sans)
* ✅ Interlineado optimizado (1.6) para legibilidad en móviles y desktop

### **RNF-003 Imágenes y Multimedia**

* ✅ **Optimización WebP:** Uso de formato Next-gen (.webp) para el Hero y catálogo de productos.
* ✅ **Lazy Loading:** Implementado nativamente en el catálogo e iframe de Google Maps.
* ✅ **Iconografía:** Uso de `react-icons` (Fa, Fi, Hi) para una interfaz limpia y profesional.

### **RNF-004 Animaciones y Microinteracciones**

* ✅ **Scroll Reveal:** Sistema personalizado con Intersection Observer.
* ✅ **Efecto Stagger:** Animación escalonada en el grid de productos y pasos del proceso.
* ✅ **Hover States:** Efectos de zoom, sombras dinámicas y cambios de opacidad suaves.

## **4.2 Rendimiento**

* ✅ Build optimizado con Vite (tree-shaking y code splitting).
* ✅ Importación dinámica de EmailJS para aligerar la carga inicial.
* ✅ Pre-conexión a dominios de Google Fonts.

## **4.3 Compatibilidad**

* ✅ Mobile-First: Optimizado para iPhone, Android y Tablets.
* ✅ Navbar hamburguesa funcional con scroll spy.
* ✅ Grid adaptativo (1, 2, 3 o 4 columnas según dispositivo).

## **4.4 Seguridad**

* ✅ Escapado de caracteres en inputs para prevenir inyecciones básicas.
* ✅ Gestión de estados segura mediante Hooks (no exposición de datos sensibles en el DOM).

# **5\. Especificaciones Técnicas**

## **5.1 Paleta de Colores Implementada (Tailwind)**

| Token | Código HEX | Uso |
| :---- | :---- | :---- |
| `forest-dark` | \#064E3B | Navbar (scrolled), footers, títulos principales |
| `forest` | \#065F46 | Botones primarios, badges de productos |
| `forest-light` | \#059669 | Hover states, iconos de contacto |
| `accent-gold` | \#B8860B | Indicadores de carrusel, números de stats |
| `charcoal` | \#1F2937 | Fondos de sección proceso, texto base |

## **5.2 Stack Tecnológico Principal**

* **Frontend:** React 18.3.1
* **Build System:** Vite 6.0.5
* **Estilos:** Tailwind CSS 3.4.17
* **Estado Global:** React Context API
* **Formularios:** EmailJS-SDK (^3.2.0)
* **Iconos:** React Icons (^5.4.0)

## **5.3 Estructura del Proyecto**

```
maderas-ponotro/
├── public/
│   ├── products/              # Imágenes de 17 productos (.webp)
│   ├── videos/                # Clips para sección proceso
│   └── Slide 1 - 4.webp       # Fondos de Hero
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx         # Header con Scroll Spy
│   │   │   ├── Footer.jsx         # Info de contacto y horarios
│   │   │   ├── Hero.jsx           # Manager del carrusel
│   │   │   ├── Hero/Slides/       # Componentes de cada slide
│   │   │   └── QuotationCart.jsx  # Drawer lateral de cotizaciones
│   │   ├── products/
│   │   │   ├── ProductGrid.jsx    # Catálogo con filtros de treatment/size
│   │   │   └── ProductDetailModal.jsx
│   │   ├── history/
│   │   │   ├── ProcessGallery.jsx # Pasos con soporte de video
│   │   │   └── FounderProfile.jsx
│   │   └── contact/
│   │       ├── ContactSection.jsx # Formulario integrado con EmailJS
│   │       └── ContactButtons.jsx
│   ├── context/
│   │   └── QuotationCartContext.jsx
│   ├── data/
│   │   └── products.js            # Base de datos de 17 productos
│   ├── constants/
│   │   └── heroData.js            # Textos y stats del sitio
│   ├── hooks/
│   │   └── useScrollReveal.js     # Hooks para animaciones
│   └── utils/
│       ├── emailService.js        # Configuración de envíos
│       └── validation.js          # Lógica de validación
└── index.html
```

# **6\. Anexos**

## **6.1 Campos del Formulario de Contacto**

* **Nombre:** Requerido (min 3)
* **Teléfono:** Requerido (Regex 8-20 chars)
* **Email:** Requerido (Formato correo)
* **Ciudad:** Requerido (min 2)
* **Mensaje:** Requerido (min 10) - *Poblado automáticamente por el Carrito*

## **6.2 Checklist de Estado (v3.2)**

* ✅ Navegación SPA por anclajes 100% funcional.
* ✅ Carrito de cotización inyecta datos correctamente en el formulario.
* ✅ Catálogo de 17 productos con filtros operativos.
* ✅ Diseño premium (Paleta Forest/Gold) implementado.
* ✅ Animaciones Stagger en carga de elementos.
* ✅ Formato WebP utilizado en activos principales.
* ⬜ Configuración final de credenciales EmailJS en `emailService.js` (Pendiente).
* ⬜ Reemplazo de placeholders de contacto en `emailService.js` (Pendiente).
* ⬜ Integración de Google Analytics.
* ⬜ Producción de videos para los pasos 2-5 del proceso.

*\--- Fin del Documento \---*