---
trigger: always_on
---

Guía Estratégica de Arquitectura, Patrones de Diseño y Optimización (2024-2026)
Resumen Ejecutivo
Este documento sintetiza las metodologías críticas y las mejores prácticas para el desarrollo de software moderno, centrándose en la robustez, la escalabilidad y la seguridad. Se presentan soluciones avanzadas para la integridad de datos, organización de frontend, patrones de diseño de UI, seguridad en el edge y excelencia operativa.
________________________________________
1. Arquitectura Limpia y el Patrón de Repositorio
La Arquitectura Limpia busca desacoplar la lógica de negocio de los detalles de implementación, como el acceso a datos (ORM).
El Problema de la Atomicidad
La falta de atomicidad ocurre cuando múltiples repositorios ejecutan consultas de forma independiente. Si una falla, el sistema puede quedar en un estado inconsistente.
•	Solución: Extraer la gestión de transacciones de los repositorios.
•	TransactionManagerService: Un servicio en la capa de aplicación que inicia transacciones y pasa un objeto de transacción opcional a los métodos del repositorio.
Implementación en Node.js (TypeScript + Prisma)
•	Desacoplamiento: Los controladores dependen de interfaces (ITaskRepository), no de la implementación concreta.
•	Mixins: Uso de mixins para combinar funcionalidades base (paginación, filtros) con repositorios específicos.
•	Transacciones Interactivas: Permiten lógica entre consultas, invocando rollback si falla cualquier paso intermedio.
________________________________________
2. Organización y Estructura en React (2025)
El cambio hacia arquitecturas basadas en características (Features) en lugar de tipos de archivos mejora la cohesión y facilita el escalado de equipos.
Estructura "Feature-First"
Cada carpeta de funcionalidad (ej. auth, billing) es un micro-ecosistema que contiene:
•	Views: Componentes y estilos específicos.
•	Hooks: Lógica de estado intrínseca a la característica.
•	Data Layer: Managers (reglas de negocio) y Repositorios (interacción con APIs).
•	Store: Estado global específico (Slices de Zustand o Redux).
Capas de Interacción
Capa	Responsabilidad
Vista	Consume estados y activa acciones.
Datos	El Manager media entre la vista y el Repositorio.
Estado	Gestiona el estado compartido entre componentes.
________________________________________
3. Patrones de Diseño Avanzados: Componentes Compuestos
Resuelve el problema del "prop soup" y la rigidez mediante una API declarativa basada en el concepto "LEGO".
•	Padre: Gestiona el estado y comportamiento implícito mediante un Contexto de React.
•	Hijos: Bloques modulares (Modal.Header, Modal.Body) que el usuario organiza libremente.
•	Beneficios: Flexibilidad total en la UI y eliminación del prop drilling.
•	Pitfall: No exportar subcomponentes por separado para evitar su uso fuera del contexto padre.
________________________________________
4. Seguridad y Rendimiento: Supabase y PostgreSQL
Seguridad a Nivel de Fila (RLS)
Fundamental cuando la base de datos se expone directamente al cliente (PostgREST).
•	Políticas: Usar USING para filtrado y WITH CHECK para validación.
•	Privilegios: Usar app_metadata para roles, nunca confiar en metadatos modificables por el usuario.
Optimización de Consultas en RLS
•	Caché de Funciones: Envolver auth.uid() en subconsultas (SELECT auth.uid()) para que Postgres cachee el resultado una vez por consulta.
•	Security Definer: Funciones que saltan el RLS intermedio para mayor velocidad, validando la identidad internamente.
________________________________________
5. Estrategias de Indexación en PostgreSQL
Tipo de Índice	Uso Principal	Características
B-Tree	Igualdad y rangos (=, >, BETWEEN)	El estándar para IDs y fechas.
GIN	JSONB, Arrays, Full-Text Search	Mapea elementos individuales; ideal para @>.
GiST	Geometría y rangos complejos	Soporta operadores de solapamiento (PostGIS).
________________________________________
6. Pruebas y Mocking
•	Mock Service Worker (MSW): Herramienta recomendada para interceptar solicitudes a nivel de red sin modificar el código de la aplicación.
•	Testing de RLS: Las fallas de RLS no suelen arrojar errores (devuelven 0 filas). Las pruebas deben validar el estado final del dato, no solo la ausencia de excepciones.
________________________________________
7. Cultura de Código y Excelencia Técnica
Desarrollo Basado en Tronco (Trunk-Based Development)
•	Integración Continua: Fusiones diarias a main para evitar "infiernos de integración".
•	Feature Flags: Permiten despliegues oscuros (dark launches) y reversiones instantáneas sin tocar el código.
Documentación de Decisiones (ADR)
•	Contexto: Registrar el "porqué" de cada decisión técnica importante en archivos .md dentro del repositorio.
________________________________________
8. Resiliencia y Observabilidad
Telemetría Distribuida
•	Implementar OpenTelemetry para trazar el ciclo de vida de una petición desde el navegador hasta la base de datos, identificando cuellos de botella exactos.
Patrón Circuit Breaker
•	Prevenir fallos en cascada. Si un servicio externo falla, el sistema "abre el circuito" y devuelve una respuesta de respaldo (fallback) hasta que el servicio se recupere.
________________________________________
9. Seguridad desde el Diseño (Shift Left)
•	Validación de Esquemas: Uso de Zod o Joi en la "frontera" de la aplicación para asegurar que ningún dato malformado entre al sistema.
•	Gestión de Secretos: Prohibición estricta de archivos .env en el control de versiones; uso de inyección dinámica mediante Vault o Doppler.
•	DX (Developer Experience): Implementación de Husky y lint-staged para automatizar el formateo y linting antes de cada commit.