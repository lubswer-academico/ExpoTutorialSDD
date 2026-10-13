# Spec 001 — Aplicar identidad visual institucional de la EPN

Estado: aprobada
HU de origen: docs/historias/HU-001.md

## Contexto y objetivo

La aplicación debe identificarse visualmente como una aplicación institucional
de la Escuela Politécnica Nacional. La adopción de la identidad EPN debe
mejorar la claridad, la accesibilidad y la coherencia visual sin modificar la
lógica existente, la navegación, los flujos ni el comportamiento funcional.

## Usuarios

- Estudiantes y usuarios de la aplicación que navegan por sus pantallas,
  utilizan sus controles y consultan sus contenidos.

## Historias de usuario

Como estudiante de la EPN, quiero que la aplicación móvil utilice los colores,
tipografía, componentes y estilos representativos de la Escuela Politécnica
Nacional, para identificarla claramente como una aplicación institucional
oficial, accesible y visualmente atractiva.

## Definiciones

- **Modo claro:** presentación en la que el lienzo general es claro y las
  superficies de contenido son blancas.
- **Dorado institucional como texto:** uso del color `accentText`
  (`#8D6B20`) en fondos claros. El dorado brillante `accent` (`#EBB336`) no
  se considera texto legible sobre blanco.
- **Respuesta táctil sutil:** cambio breve de opacidad o fondo que confirma una
  interacción sin animaciones llamativas ni cambios de flujo.

## Requisitos funcionales

- **RF-1:** MIENTRAS el usuario navega por cualquier pantalla, EL SISTEMA
  mostrará el encabezado y la barra de pestañas en modo claro, con fondo
  blanco, títulos e iconos en azul marino institucional, y destacará la
  pestaña activa con azul marino y un indicador o detalle dorado.  
  **Origen:** Escenario «Encabezados y barras de navegación institucional» de
  HU-001; Decisión 1 y Decisión 3 de decisiones.md.

- **RF-2:** CUANDO el usuario visualice una acción principal, EL SISTEMA
  mostrará un botón principal amarillo dorado con texto azul marino, con una
  altura mínima de 48 pt y esquinas de 8 pt.  
  **Origen:** Escenario «Botones y elementos interactivos» de HU-001;
  Decisión 2 de decisiones.md.

- **RF-3:** CUANDO el usuario visualice una acción secundaria, EL SISTEMA
  mostrará un botón secundario azul marino con texto blanco, con una altura
  mínima de 48 pt y esquinas de 8 pt.  
  **Origen:** Escenario «Botones y elementos interactivos» de HU-001;
  Decisión 2 de decisiones.md.

- **RF-4:** CUANDO el usuario presione un botón, EL SISTEMA reducirá su
  opacidad al 85 % mientras dure la interacción, sin alterar la acción que
  ejecuta.  
  **Origen:** Escenario «Botones y elementos interactivos» de HU-001;
  Decisión 2 y Decisión 6 de decisiones.md.

- **RF-5:** CUANDO el usuario interactúe con una pestaña, un icono accionable o
  una tarjeta presionable, EL SISTEMA mostrará una respuesta breve y sutil
  mediante un cambio de fondo u opacidad, sin animaciones llamativas.  
  **Origen:** Escenario «Botones y elementos interactivos» de HU-001;
  Decisión 6 de decisiones.md.

- **RF-6:** MIENTRAS el usuario visualice contenido, EL SISTEMA usará un lienzo
  general gris muy claro `#F8F9FA`, y presentará tarjetas y campos sobre
  superficies blancas con borde sutil, esquinas de 8 pt y sombra ligera.  
  **Origen:** Escenario «Fondos, tarjetas y lectura de contenidos» de HU-001;
  Decisión 4 de decisiones.md.

- **RF-7:** MIENTRAS el usuario lea contenido, EL SISTEMA mostrará los títulos
  principales en azul marino, permitirá un énfasis corto en dorado
  institucional, usará gris oscuro para el cuerpo y gris medio para las
  notas, manteniendo una jerarquía visual diferenciada.  
  **Origen:** Escenario «Fondos, tarjetas y lectura de contenidos» de HU-001;
  Decisión 5 de decisiones.md.

- **RF-8:** SI el usuario navega entre pestañas, abre un modal o utiliza un
  flujo existente después de la adopción visual, ENTONCES EL SISTEMA
  conservará las mismas interacciones, funciones, estados y resultados
  observables, sin fallos visuales derivados del cambio de apariencia.  
  **Origen:** Escenario «Conservación de la funcionalidad existente» de
  HU-001; docs/constitution.md, principio 3.

## Requisitos no funcionales

- **RNF-1 — Identidad cromática:** Los elementos institucionales usarán azul
  marino `#0D1C33`, dorado `#EBB336`, dorado para texto sobre claro
  `#8D6B20`, blanco `#FFFFFF`, gris de fondo `#F8F9FA`, gris de texto
  `#4A4A4A` y gris medio para notas, según su función semántica.

- **RNF-2 — Contraste:** En fondos claros, todo texto dorado usará únicamente
  `accentText` (`#8D6B20`). Nunca se mostrará `accent` (`#EBB336`) como texto
  sobre blanco. Sobre azul marino, el texto será blanco o dorado.

- **RNF-3 — Tipografía:** La jerarquía usará tipografía sans-serif del sistema:
  títulos principales de 28–32 pt con peso 700; encabezados de sección de
  20–24 pt con peso 700; subtítulos de 16–18 pt con peso 600; cuerpo de
  14–16 pt con peso 400; y notas de 12–13 pt con peso 400.

- **RNF-4 — Accesibilidad táctil:** Los botones tendrán una altura mínima de
  48 pt. Los controles interactivos comunicarán visualmente el estado
  presionado sin depender exclusivamente del color.

- **RNF-5 — Consistencia espacial:** El espaciado visual seguirá múltiplos de
  8 pt, y los componentes estándar mantendrán esquinas de 8 pt.

- **RNF-6 — Preservación funcional:** La intervención será exclusivamente
  visual. No cambiará hooks, navegación, estados, lógica, datos guardados ni
  flujos existentes.

- **RNF-7 — Validación:** La aplicación deberá conservar la comprobación de
  tipos mediante `pnpm tsc --noEmit` y requerirá confirmación del usuario
  después de una revisión visual manual en Expo Go antes de considerarse
  finalizada.

## Casos límite

- Cuando un texto dorado deba mostrarse sobre una superficie blanca, se usará
  `accentText` y no `accent`.
- Cuando un control tenga estado presionado, su respuesta visual será sutil y
  no deberá ocultar, reemplazar ni cambiar la acción existente.
- Cuando una pantalla o modal existente use una superficie diferente, la
  adaptación visual no deberá modificar su flujo, contenido ni comportamiento.
- Si una interacción existente deja de funcionar o presenta un fallo visual
  por la adaptación, la adopción institucional no podrá considerarse
  completada.

## Fuera de alcance

- Cambiar la navegación, los hooks, los estados, la lógica o los flujos
  funcionales.
- Añadir dependencias, crear una nueva funcionalidad o cambiar los datos
  guardados.
- Definir contenido nuevo, textos de negocio, iconografía específica o
  animaciones llamativas no contempladas en las decisiones.
- Implementar modo oscuro o una variante de identidad distinta al modo claro
  decidido.

## Criterios de finalización

- Todos los escenarios de HU-001 están cubiertos por requisitos verificables.
- Encabezados, tabs, botones, tarjetas, campos, fondos y textos respetan la
  jerarquía visual institucional definida.
- No existe texto `accent` sobre blanco y los controles táctiles cumplen la
  altura mínima establecida.
- La navegación, los modales y los flujos existentes conservan su
  comportamiento.
- La comprobación de tipos pasa con `pnpm tsc --noEmit`.
- El usuario confirma la revisión visual manual en Expo Go.

## Dudas abiertas

- No quedan dudas de diseño abiertas en las decisiones registradas para
  HU-001.

## Revisión final de la spec

- No se identifican contradicciones entre los requisitos funcionales.
- Los cuatro escenarios de HU-001 tienen cobertura en RF-1 a RF-8.
- La indicación de texto blanco para botones de HU-001 queda concretada por
  las dos variantes decididas: texto azul marino en el botón principal dorado
  y texto blanco en el botón secundario azul marino.
- No se identifican conflictos con la constitución del proyecto.
- La validación visual manual en Expo Go queda como condición explícita de
  finalización.
