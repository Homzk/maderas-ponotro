**ESPECIFICACIÓN DE REQUERIMIENTOS FUNCIONALES**

Sitio Web Corporativo

**Maderas Ponotro**

| Proyecto: | Sitio Web Corporativo Maderas Ponotro |
| :---- | :---- |
| **Versión:** | 3.0 |
| **Fecha:** | 12/03/2026 |
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

*    3.1 Página de Inicio (Home)  
*    3.2 Página de Contacto  
*    3.3 Página Nuestra Historia  
*    3.4 Página de Productos

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

El proyecto contempla el diseño y desarrollo de un sitio web corporativo tipo SPA (Single Page Application) que permite a Maderas Ponotro tener presencia digital, mostrar sus productos y servicios, y facilitar el contacto con clientes potenciales. El sitio está desplegado en Netlify como una aplicación React responsiva.

## **1.3 Objetivos del Sitio Web**

* Establecer presencia digital profesional para Maderas Ponotro  
* Proporcionar información sobre productos y servicios de fabricación, dimensionado e impregnación de maderas  
* Facilitar múltiples canales de contacto: formulario web, Gmail, WhatsApp, teléfono  
* Contar la historia y trayectoria de la empresa mediante un carrusel interactivo  
* Generar confianza mediante estadísticas reales (21 años de experiencia, certificación UBB)  
* Mostrar el proceso productivo de forma visual y didáctica  
* Aumentar la visibilidad de la marca en el mercado

# **2\. Descripción General**

## **2.1 Perspectiva del Producto**

El sitio web de Maderas Ponotro es un sistema independiente desplegado en Netlify que funciona como la principal plataforma digital de la empresa. Utiliza EmailJS para el envío de formularios de contacto y Google Maps embebido para la ubicación. Las redes sociales integradas incluyen WhatsApp y TikTok.

## **2.2 Funcionalidad del Producto**

El sitio web proporciona las siguientes funcionalidades:

* Presentación visual mediante un hero a pantalla completa con fondo de bosque y logotipo  
* Navegación fija (navbar) con menú responsivo hamburguesa en móvil  
* Sección informativa "¿Por qué elegirnos?" con 3 tarjetas de imagen + contenido  
* Sección de estadísticas: Trayectoria (21 años), Cumplimiento (100%), Certificación (+10 años UBB)  
* Formulario de contacto con validación de datos y envío por EmailJS  
* Botones de contacto directo: Gmail, WhatsApp, Teléfono  
* Mapa de Google Maps embebido con ubicación exacta  
* Carrusel auto-rotativo con la historia de la empresa (5 slides)  
* Galería del proceso productivo (5 etapas visuales con iconos)  
* Sección de Misión, Visión y Valores  
* Catálogo de 6 productos con tarjetas detalladas y features  
* Sección CTA "¿No encuentras lo que buscas?" con enlace a contacto  
* Footer completo con información de contacto, horarios, enlaces rápidos y redes sociales  
* Componente ScrollToTop para reinicio de scroll al navegar  
* Animaciones de scroll reveal con efecto stagger para elementos entrantes  
* Diseño responsivo completo adaptable a desktop, tablet y móvil

## **2.3 Usuarios del Sistema**

| Tipo de Usuario | Descripción |
| :---- | :---- |
| **Clientes Potenciales** | Empresas constructoras, embalajistas y personas interesadas en madera elaborada e impregnada |
| **Clientes Actuales** | Clientes que buscan información adicional, nuevos productos o renovar pedidos |
| **Público General** | Visitantes que desean conocer la empresa, sus servicios y trayectoria |

# **3\. Requerimientos Funcionales**

## **3.1 Página de Inicio (Home)**

**Identificador:** RF-001

**Prioridad:** Alta

**Estado:** ✅ Implementado

**Descripción:** La página de inicio es el punto de entrada principal, compuesta por 3 componentes: Hero, InfoSection y CallToAction.

### **Requerimientos Específicos:**

#### ***RF-001.1 Hero Principal***

* ✅ Imagen de fondo `fondo.png` con efecto parallax y overlay gradiente oscuro  
* ✅ Logotipo `logo.png` centrado con tamaño responsivo (h-64 a h-[28rem] según breakpoint)  
* ✅ Eslogan: "Soluciones en madera para construcción, embalajes y proyectos industriales"  
* ✅ Dos botones CTA: "Contacto" (btn-primary) → `/contacto` y "Ver Productos" (btn-outline) → `/productos`  
* ✅ Indicador de scroll animado (chevron bounce) en la parte inferior  
* ✅ Animación de entrada fadeInUp al cargar la página  
* ✅ Altura mínima: `min-h-[calc(100vh-5rem)]` (viewport menos navbar)  
* ✅ Completamente responsivo con layout columna en móvil, fila en desktop

#### ***RF-001.2 Sección Informativa "¿Por qué elegirnos?"***

* ✅ 3 tarjetas principales con imagen de fondo, icono y contenido:
  * Fabricación a Medida (imagen `/1.jpeg`, icono FaCogs)
  * Protección de la Madera (imagen `/2.jpeg`, icono FaShieldAlt)
  * Soluciones para Industria y Construcción (imagen `/3.jpeg`, icono FaIndustry)
* ✅ Cada tarjeta incluye hover con zoom de imagen, borde dorado y sombra elevada  
* ✅ Grid responsivo de 3 columnas en desktop, 1 columna en móvil  
* ✅ Sección de estadísticas con 3 tarjetas compuestas (header verde + body blanco):
  * Trayectoria: 21 años de experiencia
  * Cumplimiento: 100% operativo
  * Certificación: +10 años acreditados (UBB)
* ✅ Animaciones de scroll reveal con efecto stagger entre tarjetas  
* ✅ Fondo blanco con paleta de colores esmeralda y acentos dorados

#### ***RF-001.3 Llamada a la Acción (CallToAction)***

* ✅ Sección con fondo gradiente verde esmeralda y elementos decorativos circulares  
* ✅ Título: "¿Necesitas madera para tu proyecto?"  
* ✅ Texto descriptivo invitando a enviar especificaciones y dimensiones  
* ✅ Promesa: "Respuesta dentro de 24 horas hábiles" (color dorado)  
* ✅ Dos botones: "Enviar requerimiento" → `/contacto` y "Ver productos" → `/productos`  
* ✅ Animación reveal-scale-up con easing elastic

## **3.2 Página de Contacto**

**Identificador:** RF-002

**Prioridad:** Alta

**Estado:** ✅ Implementado

**Descripción:** La página de contacto facilita múltiples formas de comunicación. Incluye un header verde con título, formulario web, botones de contacto directo, tarjeta de información y mapa de Google Maps embebido.

### **Requerimientos Específicos:**

#### ***RF-002.1 Formulario de Contacto***

* ✅ Campos implementados: Nombre completo, Teléfono, Email, Ciudad, Mensaje  
* ✅ Todos los campos son obligatorios con validación en tiempo real  
* ✅ Validaciones:
  * Nombre: mínimo 3 caracteres
  * Teléfono: formato numérico 8-20 caracteres (acepta +, -, paréntesis, espacios)
  * Email: formato de correo válido (regex)
  * Ciudad: mínimo 2 caracteres
  * Mensaje: mínimo 10, máximo 500 caracteres con contador visible
* ✅ Mensajes de error se muestran debajo del campo correspondiente (texto rojo)  
* ✅ Errores se limpian automáticamente al empezar a escribir  
* ✅ Botón "Enviar Mensaje" con icono FaPaperPlane  
* ✅ Estado de envío: spinner animado con texto "Enviando..." y botón deshabilitado  
* ✅ Mensaje de confirmación (verde) tras envío exitoso  
* ✅ Mensaje de error (rojo) si falla el envío  
* ✅ Formulario se limpia tras envío exitoso

#### ***RF-002.2 Envío de Correo Electrónico***

* ✅ Implementado vía EmailJS (librería `emailjs-com`)  
* ✅ Importación dinámica de EmailJS para optimizar carga inicial  
* ✅ Parámetros enviados: from_name, from_email, phone, city, message, to_email  
* ✅ Configuración en `src/utils/emailService.js` con constantes para serviceId, templateId, publicKey  
* ✅ Manejo de errores con try/catch y logging en consola

#### ***RF-002.3 Botones de Contacto Directo***

* ✅ 3 botones implementados con iconos reconocibles:
  * **Gmail** (FaGoogle, rojo): abre cliente de correo con `mailto:` y asunto pre-cargado
  * **WhatsApp** (FaWhatsapp, verde): abre wa.me con mensaje predeterminado
  * **Teléfono** (FaPhone, verde bosque): inicia llamada vía `tel:` en móvil
* ✅ Cada botón muestra la información de contacto (email o número)  
* ✅ Hover effects con cambio de color de borde y elevación de sombra  
* ✅ Ubicados en columna derecha junto al formulario (layout 2 columnas en desktop)

#### ***RF-002.4 Información de Contacto***

* ✅ Tarjeta con dirección física: Región del Bío-Bío, Chile  
* ✅ Horario de atención: Lunes a Viernes 08:00-18:00, Sábado 09:00-13:00  
* ✅ Mapa de Google Maps embebido con coordenadas: -37.8370857, -73.4258194  
* ✅ Mapa configurado con lazy loading y referrerPolicy segura  
* ✅ Iconos informativos (FaMapMarkerAlt, FaClock) con fondos circulares

## **3.3 Página Nuestra Historia**

**Identificador:** RF-003

**Prioridad:** Media

**Estado:** ✅ Implementado

**Descripción:** La página presenta la historia, valores y proceso productivo de Maderas Ponotro. Está compuesta por un header verde, un carrusel interactivo (StorySection), la galería del proceso (ProcessGallery) y la sección de misión/visión/valores (MissionVision).

### **Requerimientos Específicos:**

#### ***RF-003.1 Narrativa de la Empresa (Carrusel)***

* ✅ Implementado como carrusel auto-rotativo a pantalla completa con 5 slides:
  1. "Nuestros Orígenes" — historia de la pasión por la madera (imagen `/1.jpeg`)
  2. "Nuestra Ubicación" — Región del Biobío e infraestructura (imagen `/4.jpeg`)
  3. "Calidad Comprobada" — equipo de expertos y controles de calidad (imagen `/5.jpeg`)
  4. "Relaciones de Confianza" — transparencia y profesionalismo (imagen `/2.jpeg`)
  5. "Tecnología e Innovación" — equipos de impregnación (imagen `/3.jpeg`)
* ✅ Auto-play cada 5 segundos, pausa al interactuar, reanuda tras 10s de inactividad  
* ✅ Navegación: flechas laterales + indicadores de puntos (dots) con barra de progreso dorada  
* ✅ Overlay gradiente para legibilidad del texto sobre imagen  
* ✅ Numeración de slides (01/05 formato) en color dorado  
* ✅ Transiciones con opacidad y escala (700ms)  
* ✅ Altura: 70vh (mín 500px, máx 750px)

#### ***RF-003.2 Galería del Proceso Productivo***

* ✅ 5 etapas del proceso representadas con tarjetas de iconos:
  1. Selección de Madera (FaTree)
  2. Proceso de Corte (FaCut)
  3. Tratamiento e Impregnación (FaFlask)
  4. Control de Calidad (FaClipboardCheck)
  5. Producto Terminado (FaBoxOpen)
* ✅ Grid de 5 columnas en desktop, 2 en tablet, 1 en móvil  
* ✅ Línea de conexión gradiente horizontal entre etapas (solo desktop)  
* ✅ Cada tarjeta con: icono circular verde, número de paso, título y descripción  
* ✅ Hover con elevación de sombra y escala del icono  
* ✅ Animaciones scroll reveal stagger (100ms entre cada paso)

#### ***RF-003.3 Misión, Visión y Valores***

* ✅ 3 tarjetas diferenciadas con borde superior verde:
  * **Misión** (FaBullseye): proveer productos de madera de alta calidad
  * **Visión** (FaEye): ser la empresa líder en el sur de Chile
  * **Valores** (FaHeart): calidad, honestidad, medio ambiente, innovación
* ✅ Grid de 3 columnas en desktop, 1 en móvil  
* ✅ Fondo gris claro para contraste con las tarjetas blancas  
* ✅ Animaciones scroll reveal stagger (150ms entre tarjetas)

## **3.4 Página de Productos**

**Identificador:** RF-004

**Prioridad:** Alta

**Estado:** ✅ Implementado

**Descripción:** La página presenta el catálogo de 6 productos con tarjetas detalladas, organizadas en un grid responsivo, con una sección CTA al final.

### **Requerimientos Específicos:**

#### ***RF-004.1 Catálogo de Productos***

* ✅ 6 productos implementados con tarjetas (ProductCard):
  1. **Madera Elaborada** — Cepillada y dimensionada (categoría: Elaboración, icono FaTree)
     * Features: Pino/Eucalipto/Roble, Múltiples dimensiones, Cepillado fino
  2. **Madera Impregnada** — Tratada contra hongos/insectos/humedad (categoría: Impregnación, icono FaShieldAlt)
     * Features: Tratamiento CCA/CCB, Alta durabilidad, 25+ años vida útil
  3. **Cortes Especiales** — A medida según especificaciones (categoría: Servicios, icono FaCubes)
     * Features: Corte a medida, Precisión garantizada, Cualquier dimensión
  4. **Vigas y Pilares** — Estructurales para construcción (categoría: Estructural, icono FaWarehouse)
     * Features: Alta resistencia, Tratamiento opcional, Grandes dimensiones
  5. **Tablas y Tablones** — Revestimientos, pisos, cercas (categoría: Elaboración, icono FaTools)
     * Features: Varias especies, Secado controlado, Acabado premium
  6. **Postes Impregnados** — Para cercas, parrones y uso agrícola (categoría: Impregnación, icono FaCog)
     * Features: Para cercos/parrones, Uso agrícola, Resistencia extrema

* ✅ Grid responsivo: 3 columnas (desktop), 2 columnas (tablet), 1 columna (móvil)  
* ✅ Cada tarjeta soporta imagen o icono como visual principal  
* ✅ Badge de categoría en la esquina superior izquierda de cada imagen  
* ✅ Hover con zoom de imagen y cambio de color en el título

#### ***RF-004.2 Categorización***

* ✅ Productos categorizados por tipo: Elaboración, Impregnación, Servicios, Estructural  
* ⬜ Filtros por categoría no implementados (mejora futura)

#### ***RF-004.3 Llamada a Acción***

* ✅ Cada producto tiene enlace "Solicitar Cotización" → `/contacto` con flecha animada  
* ✅ Sección CTA al final: "¿No encuentras lo que buscas?" con botón "Solicitar Cotización"  
* ✅ Box CTA con gradiente verde, icono de teléfono y elementos decorativos circulares

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
* **Vite 6.0.5** — Build tool y dev server con HMR ultrarrápido  
* **Tailwind CSS 3.4.17** — Framework de utilidades CSS con configuración personalizada  
* **React Router DOM 7.1.1** — Navegación SPA entre páginas  
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
│   ├── 1.jpeg                 # Imagen Fabricación / Orígenes
│   ├── 2.jpeg                 # Imagen Protección / Confianza
│   ├── 3.jpeg                 # Imagen Industria / Tecnología
│   ├── 4.jpeg                 # Imagen Ubicación
│   └── 5.jpeg                 # Imagen Calidad
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx         # Navegación fija con menú hamburguesa
│   │   │   ├── Footer.jsx         # Footer con 4 columnas informativas
│   │   │   ├── Hero.jsx           # Hero a pantalla completa
│   │   │   └── ScrollToTop.jsx    # Reset de scroll al cambiar de página
│   │   ├── home/
│   │   │   ├── InfoSection.jsx    # Tarjetas "¿Por qué elegirnos?" + estadísticas
│   │   │   └── CallToAction.jsx   # Sección CTA "¿Necesitas madera?"
│   │   ├── contact/
│   │   │   ├── ContactForm.jsx    # Formulario con validación y envío
│   │   │   └── ContactButtons.jsx # Botones Gmail, WhatsApp, Teléfono
│   │   ├── history/
│   │   │   ├── StorySection.jsx   # Carrusel auto-rotativo (5 slides)
│   │   │   ├── ProcessGallery.jsx # Proceso productivo (5 pasos)
│   │   │   └── MissionVision.jsx  # Misión, Visión, Valores
│   │   └── products/
│   │       ├── ProductCard.jsx    # Tarjeta de producto individual
│   │       └── ProductGrid.jsx    # Grid de 6 productos
│   ├── hooks/
│   │   └── useScrollReveal.js     # Hooks de animación scroll reveal
│   ├── pages/
│   │   ├── Home.jsx               # Página de inicio
│   │   ├── Contact.jsx            # Página de contacto
│   │   ├── History.jsx            # Página nuestra historia
│   │   └── Products.jsx           # Página de productos
│   ├── utils/
│   │   ├── emailService.js        # Configuración EmailJS + helpers de contacto
│   │   └── validation.js          # Validaciones de formulario
│   ├── App.jsx                    # Componente raíz con rutas
│   ├── main.jsx                   # Punto de entrada con BrowserRouter
│   └── index.css                  # Estilos globales + Tailwind + animaciones
├── index.html                     # HTML base con meta SEO
├── tailwind.config.js             # Configuración paleta esmeralda/dorado
├── postcss.config.js              # Config PostCSS con Tailwind y Autoprefixer
├── vite.config.js                 # Configuración Vite + React plugin
├── netlify.toml                   # Configuración despliegue Netlify
├── package.json                   # Dependencias y scripts
└── .gitignore                     # Archivos ignorados por Git
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
├── Inicio (/)
├── Productos (/productos)
├── Nuestra Historia (/historia)
├── Contacto (/contacto)
└── Footer
    ├── Empresa (logo + descripción + redes sociales)
    │   ├── WhatsApp → wa.me/56987446911
    │   └── TikTok → tiktok.com/@maderas_ponotro
    ├── Enlaces Rápidos (Inicio, Productos, Nuestra Historia, Contacto)
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

* ✅ Sitio web completamente responsivo y funcional  
* ✅ Todas las páginas implementadas (Home, Productos, Historia, Contacto)  
* ✅ Formulario de contacto con validación y envío vía EmailJS  
* ✅ Botones de contacto directo configurados (Gmail, WhatsApp, Teléfono)  
* ✅ Imágenes cargando correctamente (fondo.png, logo.png, 1-5.jpeg)  
* ✅ Paleta de colores esmeralda/dorado implementada consistentemente  
* ✅ Navegación funcionando entre todas las páginas (SPA routing)  
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