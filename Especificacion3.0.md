**ESPECIFICACIÓN DE REQUERIMIENTOS FUNCIONALES**

Sitio Web Corporativo

**Maderas Ponotro**

| Proyecto: | Sitio Web Corporativo Maderas Ponotro |
| :---- | :---- |
| **Versión:** | 1.0 |
| **Fecha:** | 03/02/2026 |
| **Tipo:** | Especificación de Requerimientos Funcionales |
| **Estado:** | Borrador |

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
*    5.3 Tecnologías Recomendadas

6. **6\. Anexos**

*    6.1 Wireframes y Mockups  
*    6.2 Referencias Visuales

# **1\. Introducción**

## **1.1 Propósito del Documento**

Este documento establece la especificación de requerimientos funcionales para el desarrollo del sitio web corporativo de Maderas Ponotro. Su objetivo es definir de manera clara y precisa las funcionalidades, características y comportamientos esperados del sistema web, sirviendo como guía para el equipo de desarrollo y como referencia para la validación del producto final.

## **1.2 Alcance del Proyecto**

El proyecto contempla el diseño y desarrollo de un sitio web corporativo que permita a Maderas Ponotro tener presencia digital, mostrar sus productos y servicios, y facilitar el contacto con clientes potenciales. El sitio web será desarrollado como una aplicación web responsiva que funcionará en diferentes dispositivos y navegadores.

## **1.3 Objetivos del Sitio Web**

* Establecer presencia digital profesional para Maderas Ponotro  
* Proporcionar información clara sobre productos y servicios de elaboración e impregnación de maderas  
* Facilitar múltiples canales de contacto con clientes potenciales  
* Contar la historia y trayectoria de la empresa  
* Generar confianza mediante contenido visual del proceso productivo  
* Aumentar la visibilidad de la marca en el mercado

# **2\. Descripción General**

## **2.1 Perspectiva del Producto**

El sitio web de Maderas Ponotro será un sistema independiente que funcionará como la principal plataforma digital de la empresa. No requiere integración con sistemas existentes en esta primera fase, pero debe estar preparado para futuras expansiones como catálogo de productos dinámico, sistema de cotizaciones en línea, o integración con redes sociales.

## **2.2 Funcionalidad del Producto**

El sitio web proporcionará las siguientes funcionalidades principales:

* Presentación visual atractiva de la empresa mediante un hero destacado  
* Sistema de navegación intuitivo entre secciones  
* Formulario de contacto con validación de datos  
* Múltiples opciones de contacto directo (email, WhatsApp, teléfono)  
* Galería visual del proceso productivo  
* Información corporativa y trayectoria de la empresa  
* Diseño responsivo adaptable a todos los dispositivos

## **2.3 Usuarios del Sistema**

El sitio web está dirigido a los siguientes perfiles de usuarios:

| Tipo de Usuario | Descripción |
| :---- | :---- |
| **Clientes Potenciales** | Personas o empresas interesadas en productos de madera elaborada e impregnada |
| **Clientes Actuales** | Clientes que buscan información adicional o renovar pedidos |
| **Público General** | Visitantes que desean conocer más sobre la empresa y sus servicios |

# **3\. Requerimientos Funcionales**

## **3.1 Página de Inicio (Home)**

**Identificador:** RF-001

**Prioridad:** Alta

**Descripción:** La página de inicio servirá como punto de entrada principal al sitio web, presentando la identidad de Maderas Ponotro y facilitando la navegación hacia las demás secciones.

### **Requerimientos Específicos:**

#### ***RF-001.1 Hero Principal***

* Debe incluir la imagen de fondo proporcionada (fondo.png) que muestra el bosque con textura de madera  
* Debe contener el logotipo de Maderas Ponotro centrado y destacado  
* Debe incluir el eslogan "Elaboración e impregnación de maderas"  
* Debe presentar dos botones de acción primarios: "Contacto" y "Ver Productos"  
* El botón "Contacto" debe redirigir a la página de contacto  
* El botón "Ver Productos" debe redirigir a la página de productos  
* Debe ser responsivo y adaptarse a diferentes tamaños de pantalla  
* La altura del hero debe ocupar al menos el 80% de la altura de la ventana (viewport)

#### ***RF-001.2 Sección Informativa***

* Debe ubicarse inmediatamente debajo del hero  
* Debe presentar información clave sobre la empresa  
* Debe incluir al menos 3 bloques informativos sobre: servicios, calidad, y experiencia  
* Puede incluir iconos representativos para cada bloque  
* El fondo debe ser predominantemente blanco para contraste con el hero  
* Debe mantener coherencia con la paleta de colores verde establecida

#### ***RF-001.3 Llamadas a la Acción***

* Debe incluir al menos una sección adicional de llamada a la acción antes del footer  
* Puede incluir estadísticas o números relevantes de la empresa  
* Debe motivar al usuario a explorar más contenido o contactar

## **3.2 Página de Contacto**

**Identificador:** RF-002

**Prioridad:** Alta

**Descripción:** La página de contacto debe facilitar múltiples formas de comunicación entre los usuarios y Maderas Ponotro, incluyendo un formulario web y opciones de contacto directo.

### **Requerimientos Específicos:**

#### ***RF-002.1 Formulario de Contacto***

* Debe incluir los siguientes campos obligatorios: Nombre completo, Teléfono, Email, Ciudad, Mensaje  
* El campo Email debe validar formato de correo electrónico válido  
* El campo Teléfono debe aceptar formato numérico con código de área  
* El campo Mensaje debe permitir texto de hasta 500 caracteres  
* Debe mostrar mensajes de error claros cuando los campos no cumplan validaciones  
* Debe incluir un botón "Enviar" claramente visible  
* Al enviar exitosamente, debe mostrar mensaje de confirmación al usuario  
* Debe limpiar el formulario después de un envío exitoso

#### ***RF-002.2 Envío de Correo Electrónico***

* Los mensajes del formulario deben enviarse automáticamente al correo electrónico de la empresa  
* El correo debe incluir todos los datos del formulario: nombre, teléfono, email, ciudad y mensaje  
* El asunto del correo debe indicar claramente que proviene del formulario web  
* Debe incluir la fecha y hora del envío  
* El sistema debe manejar errores de envío y notificar al usuario si algo falla

#### ***RF-002.3 Botones de Contacto Directo***

* Debe incluir 3 botones para contacto alternativo: Gmail, WhatsApp, Teléfono  
* El botón de Gmail debe abrir el cliente de correo con la dirección pre-cargada  
* El botón de WhatsApp debe abrir WhatsApp Web o la app con un mensaje predeterminado  
* El botón de Teléfono debe iniciar una llamada en dispositivos móviles o mostrar el número en desktop  
* Los botones deben tener iconos reconocibles de cada plataforma  
* Deben estar ubicados en posición visible, preferiblemente cerca del formulario

#### ***RF-002.4 Información de Contacto***

* Debe mostrar dirección física de la empresa (si aplica)  
* Debe mostrar horario de atención  
* Puede incluir un mapa de ubicación (Google Maps embebido) si es relevante

## **3.3 Página Nuestra Historia**

**Identificador:** RF-003

**Prioridad:** Media

**Descripción:** Esta página debe presentar la historia, valores y proceso productivo de Maderas Ponotro, generando confianza y conexión con los visitantes.

### **Requerimientos Específicos:**

#### ***RF-003.1 Narrativa de la Empresa***

* Debe incluir una sección con la historia de origen de Maderas Ponotro  
* Debe destacar los valores principales de la empresa  
* Debe mencionar años de experiencia y logros relevantes  
* El texto debe ser conciso y fácil de leer, organizado en párrafos cortos  
* Puede incluir una línea de tiempo visual si hay hitos importantes que destacar

#### ***RF-003.2 Galería del Proceso Productivo***

* Debe incluir imágenes que muestren el proceso desde la extracción hasta la venta  
* Las imágenes deben estar organizadas de manera secuencial o por categorías  
* Cada imagen o grupo debe tener una breve descripción explicativa  
* Sugerencia de etapas: Selección de madera, Proceso de corte, Tratamiento e impregnación, Control de calidad, Producto terminado  
* Las imágenes deben cargarse de manera optimizada para no afectar el rendimiento  
* Debe ser responsivo: galería tipo grid en desktop, lista/carrusel en móvil

#### ***RF-003.3 Misión y Visión***

* Debe incluir declaración de misión de la empresa  
* Debe incluir declaración de visión de la empresa  
* Ambas deben estar claramente diferenciadas visualmente  
* Pueden estar presentadas en bloques o tarjetas destacadas

## **3.4 Página de Productos**

**Identificador:** RF-004

**Prioridad:** Alta

**Descripción:** Esta página debe presentar los productos y servicios de Maderas Ponotro de manera atractiva y organizada, facilitando que los visitantes conozcan la oferta de la empresa.

### **Requerimientos Específicos:**

#### ***RF-004.1 Catálogo de Productos***

* Debe mostrar los principales productos/servicios: Madera elaborada, Madera impregnada, Cortes especiales, etc.  
* Cada producto debe incluir: Nombre, Descripción breve, Imagen representativa  
* Los productos deben organizarse en un grid/cuadrícula responsivo  
* Debe incluir una breve introducción al catálogo antes de los productos

#### ***RF-004.2 Categorización***

* Los productos pueden estar agrupados por categorías si aplica  
* Puede incluir filtros simples si hay múltiples categorías  
* La navegación entre categorías debe ser intuitiva

#### ***RF-004.3 Llamada a Acción***

* Cada producto debe tener un botón o enlace de "Consultar" o "Solicitar cotización"  
* Estos enlaces deben redirigir a la página de contacto  
* Puede incluir un formulario rápido de consulta al final de la página

# **4\. Requerimientos No Funcionales**

## **4.1 Diseño y Experiencia de Usuario**

### **RNF-001 Paleta de Colores**

* Color principal: Verde (tonos similares al del bosque en las imágenes)  
* Tonos verdes sugeridos: \#228B22 (Forest Green), \#2E7D32 (Dark Green), \#4CAF50 (Green)  
* Color secundario: Blanco (\#FFFFFF) como color de fondo predominante  
* Colores de acento: Tonos tierra y marrón para complementar (\#795548, \#8D6E63)  
* El blanco debe predominar en fondos de secciones informativas  
* Los tonos verdes deben usarse en: headers, botones, enlaces, elementos destacados  
* Debe mantener suficiente contraste para cumplir estándares de accesibilidad (WCAG 2.1 AA)

### **RNF-002 Tipografía**

* Debe usar fuentes web seguras y legibles  
* Sugerencias: Roboto, Open Sans, Lato, o Montserrat para títulos  
* Debe mantener jerarquía tipográfica clara: H1 \> H2 \> H3 \> párrafo  
* Tamaño mínimo de texto: 16px para párrafos  
* Interlineado adecuado para facilitar lectura (1.5 \- 1.6)

### **RNF-003 Imágenes y Multimedia**

* Todas las imágenes deben estar optimizadas para web  
* Debe usar formatos modernos: WebP con fallback a JPG/PNG  
* Debe implementar lazy loading para mejorar rendimiento  
* Las imágenes deben incluir atributos alt para accesibilidad

## **4.2 Rendimiento**

* El tiempo de carga inicial no debe exceder 3 segundos  
* El sitio debe tener un puntaje Lighthouse superior a 85 en Performance  
* Las imágenes deben estar comprimidas sin pérdida notable de calidad  
* Debe implementar caché del navegador para recursos estáticos  
* El código CSS y JavaScript debe estar minificado en producción

## **4.3 Compatibilidad**

* Debe funcionar correctamente en los navegadores: Chrome, Firefox, Safari, Edge (últimas 2 versiones)  
* Debe ser completamente responsivo: Desktop (1920px), Tablet (768px), Mobile (375px)  
* Debe mantener funcionalidad en dispositivos táctiles  
* Debe degradarse de manera elegante en navegadores antiguos

## **4.4 Seguridad**

* El formulario de contacto debe implementar protección contra spam (reCAPTCHA o similar)  
* Debe validar todos los inputs del lado del servidor  
* El envío de correos debe usar protocolos seguros (TLS/SSL)  
* No debe almacenar información sensible en el cliente  
* Debe implementar HTTPS en producción

# **5\. Especificaciones Técnicas**

## **5.1 Paleta de Colores Detallada**

| Color | Código HEX | Uso Recomendado |
| :---- | :---- | :---- |
| **Verde Bosque Oscuro** | \#1B5E20 | Encabezados principales, footer |
| **Verde Bosque** | \#2E7D32 | Botones primarios, enlaces activos |
| **Verde Medio** | \#388E3C | Botones secundarios, highlights |
| **Verde Claro** | \#4CAF50 | Hover states, elementos interactivos |
| **Blanco** | \#FFFFFF | Fondos principales, texto sobre verde |
| **Gris Claro** | \#F5F5F5 | Fondos alternativos, secciones |

## **5.2 Tipografía**

| Elemento | Fuente / Tamaño | Estilo |
| :---- | :---- | :---- |
| **H1 (Títulos principales)** | Montserrat / 48-36px | Bold, Color verde \#2E7D32 |
| **H2 (Subtítulos)** | Montserrat / 36-28px | SemiBold, Color verde \#388E3C |
| **H3 (Secciones)** | Montserrat / 24-20px | SemiBold, Color \#1B5E20 |
| **Párrafos** | Open Sans / 16-18px | Regular, Color \#333333 |
| **Botones** | Montserrat / 16px | Bold, Texto blanco sobre verde |

## **5.3 Stack Tecnológico Definido**

**El proyecto utilizará el siguiente stack tecnológico moderno y eficiente:**

### **Frontend \- Stack Principal**

* React 18+ \- Librería de JavaScript para interfaces de usuario  
* Vite \- Build tool y dev server de última generación  
* Tailwind CSS \- Framework de utilidades CSS para estilos  
* React Router DOM \- Para navegación entre páginas (SPA)  
* JavaScript ES6+ / JSX

### **Características del Stack**

* Vite proporciona Hot Module Replacement (HMR) ultrarrápido  
* Build optimizado con tree-shaking y code splitting  
* Tailwind CSS con archivo de configuración personalizado para paleta de colores  
* React Hooks para manejo de estado (useState, useEffect, etc.)  
* Componentes funcionales y reutilizables  
* Arquitectura de componentes modular y escalable

### **Backend (para formulario de contacto)**

* Opción 1: Servicio serverless (Formspree, EmailJS, Web3Forms)  
* Opción 2: API REST con Node.js \+ Express  
* Opción 3: Netlify Functions o Vercel Serverless Functions  
* Servicio de email: SendGrid, Mailgun, o Nodemailer con SMTP

### **Dependencias de React Recomendadas**

* react-router-dom \- Navegación  
* react-icons \- Iconos (incluye iconos de WhatsApp, Gmail, Phone)  
* emailjs-com o formspree \- Para envío de formularios  
* react-intersection-observer \- Lazy loading de imágenes (opcional)  
* framer-motion \- Animaciones suaves (opcional)

### **Herramientas de Desarrollo**

* Git para control de versiones  
* ESLint \+ Prettier para calidad de código  
* npm o yarn como gestor de paquetes  
* Figma o Adobe XD para diseños (referencia)  
* Chrome DevTools para debugging

### **Despliegue**

* Netlify (recomendado para React \+ Vite)  
* Vercel (alternativa excelente)  
* GitHub Pages (opción gratuita)  
* Dominio personalizado con DNS configurado  
* Certificado SSL automático

## **5.4 Estructura del Proyecto React \+ Vite**

El proyecto seguirá la siguiente estructura de archivos y carpetas:

maderas-ponotro/  
├── public/  
│   ├── fondo.png  
│   ├── logo.png  
│   ├── tarjeta.png  
│   └── images/  
│       └── proceso/         \# Imágenes del proceso productivo  
├── src/  
│   ├── assets/              \# Assets adicionales  
│   ├── components/  
│   │   ├── layout/  
│   │   │   ├── Navbar.jsx  
│   │   │   ├── Footer.jsx  
│   │   │   └── Hero.jsx  
│   │   ├── home/  
│   │   │   ├── InfoSection.jsx  
│   │   │   └── CallToAction.jsx  
│   │   ├── contact/  
│   │   │   ├── ContactForm.jsx  
│   │   │   └── ContactButtons.jsx  
│   │   ├── history/  
│   │   │   ├── StorySection.jsx  
│   │   │   ├── ProcessGallery.jsx  
│   │   │   └── MissionVision.jsx  
│   │   └── products/  
│   │       ├── ProductCard.jsx  
│   │       └── ProductGrid.jsx  
│   ├── pages/  
│   │   ├── Home.jsx  
│   │   ├── Contact.jsx  
│   │   ├── History.jsx  
│   │   └── Products.jsx  
│   ├── utils/  
│   │   ├── emailService.js    \# Configuración de envío de emails  
│   │   └── validation.js      \# Validaciones de formularios  
│   ├── App.jsx  
│   ├── main.jsx  
│   └── index.css             \# Estilos globales \+ Tailwind  
├── tailwind.config.js        \# Configuración de Tailwind  
├── postcss.config.js  
├── vite.config.js  
├── package.json  
└── README.md

## **5.5 Configuración de Tailwind CSS**

El archivo **tailwind.config.js** debe incluir la paleta de colores personalizada de Maderas Ponotro:

/\*\* @type {import('tailwindcss').Config} \*/  
export default {  
  content: \[  
    "./index.html",  
    "./src/\*\*/\*.{js,ts,jsx,tsx}",  
  \],  
  theme: {  
    extend: {  
      colors: {  
        'forest-dark': '\#1B5E20',  
        'forest': '\#2E7D32',  
        'forest-medium': '\#388E3C',  
        'forest-light': '\#4CAF50',  
        'accent-brown': '\#795548',  
        'accent-brown-light': '\#8D6E63',  
      },  
      fontFamily: {  
        'sans': \['Open Sans', 'sans-serif'\],  
        'display': \['Montserrat', 'sans-serif'\],  
      },  
    },  
  },  
  plugins: \[\],  
}

## **5.6 Comandos de Instalación y Ejecución**

| Acción | Comando |
| :---- | :---- |
| **Crear proyecto con Vite** | npm create vite@latest maderas-ponotro \-- \--template react |
| **Instalar dependencias** | cd maderas-ponotro && npm install |
| **Instalar Tailwind CSS** | npm install \-D tailwindcss postcss autoprefixer |
| **Inicializar Tailwind** | npx tailwindcss init \-p |
| **Instalar dependencias adicionales** | npm install react-router-dom react-icons emailjs-com |
| **Modo desarrollo** | npm run dev |
| **Build para producción** | npm run build |
| **Preview del build** | npm run preview |

# **6\. Anexos**

## **6.1 Estructura de Navegación**

El sitio web contará con la siguiente estructura de navegación:

├── Inicio (/)  
├── Productos (/productos)  
├── Nuestra Historia (/historia)  
├── Contacto (/contacto)  
└── Footer  
    ├── Enlaces rápidos  
    ├── Redes sociales  
    └── Información de copyright

## **6.2 Campos del Formulario de Contacto**

| Campo | Tipo | Validación | Obligatorio |
| :---- | :---- | :---- | :---- |
| **Nombre** | Texto | Mínimo 3 caracteres | Sí |
| **Teléfono** | Texto/Number | Formato telefónico válido | Sí |
| **Email** | Email | Formato email válido | Sí |
| **Ciudad** | Texto | Mínimo 2 caracteres | Sí |
| **Mensaje** | Textarea | Mínimo 10 caracteres, máximo 500 | Sí |

## **6.3 Checklist de Entrega**

* Sitio web completamente responsivo y funcional  
* Todas las páginas implementadas según especificaciones  
* Formulario de contacto operativo con envío a email  
* Botones de contacto directo configurados  
* Imágenes optimizadas y cargando correctamente  
* Paleta de colores implementada consistentemente  
* Navegación funcionando entre todas las páginas  
* Validación de formularios implementada  
* Sitio probado en navegadores principales  
* Sitio probado en dispositivos móviles y tablets  
* SEO básico implementado (meta tags, títulos, descriptions)  
* Google Analytics configurado (opcional)  
* Certificado SSL configurado  
* Documentación de código entregada  
* Capacitación básica para actualización de contenido

*\--- Fin del Documento \---*