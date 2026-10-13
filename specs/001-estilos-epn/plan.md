# Plan de implementación — Spec 001

## Alcance y restricciones

La implementación cambiará únicamente estilos, colores, tipografía y estructura
visual de los componentes existentes. No se modificarán hooks, navegación,
estados, callbacks, datos guardados, textos de negocio ni flujos. No se
añadirán dependencias. La implementación seguirá la constitución, la Spec 001
aprobada y las decisiones numeradas de `decisiones.md`.

## Archivos y componentes afectados

### Base visual

- `src/theme/epnTheme.ts` (nuevo): tokens EPN centralizados para colores,
  espaciado, radios y tamaños tipográficos. Evita repetir valores hexadecimales
  en los estilos. Cubre RNF-1, RNF-2, RNF-3, RNF-5.
- `src/app/_layout.tsx`: solo los ajustes visuales globales que sean necesarios
  para que el contenedor raíz y la pantalla no encontrada conserven la
  apariencia clara. No se tocará la estructura de navegación. Cubre RF-8,
  RNF-6.

### Navegación global

- `src/app/(tabs)/_layout.tsx`: configuración visual del header y de la barra
  inferior en modo claro, tintes de iconos, estado activo/inactivo, indicador
  dorado y espaciado. Se conserva el registro y orden de las tabs. Cubre RF-1,
  RF-5, RF-8, RNF-1, RNF-2, RNF-4, RNF-6.

### Pantallas

- `src/app/(tabs)/index.tsx`: lienzo general, distribución visual del editor,
  footer de acciones y fila de opciones, usando los componentes existentes.
  Cubre RF-2, RF-3, RF-4, RF-5, RF-6, RF-7, RF-8 y RNF-3 a RNF-6.
- `src/app/(tabs)/about.tsx`: fondo claro, jerarquía y color del contenido
  existente sin añadir contenido. Cubre RF-6, RF-7, RF-8 y RNF-1 a RNF-3.

### Componentes reutilizables

- `src/components/Button.tsx`: variantes principal y secundaria, altura mínima
  de 48 pt, radio de 8 pt, colores semánticos y opacidad del 85 % al
  presionar. Se conservarán las props y callbacks actuales. Cubre RF-2 a RF-4,
  RNF-1, RNF-2, RNF-4, RNF-5, RNF-6.
- `src/components/IconButton.tsx`: icono y etiqueta con colores EPN, área
  táctil suficiente y respuesta breve al presionar. Cubre RF-5, RF-7,
  RNF-1, RNF-2, RNF-4, RNF-6.
- `src/components/CircleButton.tsx`: control circular existente con dorado
  como acento de superficie, icono legible y estado presionado sutil. Cubre
  RF-5, RNF-1, RNF-2, RNF-4, RNF-5, RNF-6.
- `src/components/EmojiPicker.tsx`: modal claro con superficie diferenciada,
  encabezado institucional, contraste correcto y cierre accionable. Cubre
  RF-5, RF-6, RF-8, RNF-1, RNF-2, RNF-6.
- `src/components/EmojiList.tsx`: espaciado, superficies y respuesta
  presionada de los elementos seleccionables sin cambiar selección ni cierre.
  Cubre RF-5, RF-6, RF-8, RNF-4 a RNF-6.
- `src/components/ImageViewer.tsx`: superficie y radio coherentes con la
  jerarquía visual, sin cambiar la fuente ni las dimensiones funcionales de la
  imagen. Cubre RF-6, RF-8, RNF-5, RNF-6.

## Tokens y paleta aplicados

Se usará `EPN_THEME` como única fuente de valores visuales compartidos:

- `colors.primary`: `#0D1C33`, para títulos, iconos y controles oscuros.
- `colors.accent`: `#EBB336`, para botón principal, indicador activo y acentos
  de superficie.
- `colors.accentText`: `#8D6B20`, exclusivamente para texto dorado sobre
  superficies claras.
- `colors.surface`: `#FFFFFF`, para tarjetas, campos, header y tabs claros.
- `colors.background`: `#F8F9FA`, para el lienzo general.
- `colors.text`: `#4A4A4A`, para cuerpo y contenido descriptivo.
- `colors.border`: `#E2E8F0`, para bordes y divisores sutiles.
- `colors.error`: `#D62C27`, reservado para estados de error existentes si
  aparecen en una superficie intervenida.
- `radius.md`: `8`, `radius.full`: `9999` cuando corresponda a píldoras.
- Espaciado en múltiplos de 8 pt y tamaños tipográficos de la guía EPN.

No se usará `accent` como color de texto sobre blanco. El texto sobre
`primary` será blanco o `accent`, conforme a RNF-2 y Decisión 7.

## Estructura visual y estados

1. **Marco global:** lienzo `background`; header y tabs blancos, con títulos e
   iconos `primary`; tab activa `primary` y detalle/indicador `accent`;
   inactivas en gris medio. Corresponde a Decisiones 1 y 3.
2. **Contenido principal:** imagen y contenedores sobre el lienzo claro; radios
   y bordes coherentes; footer y fila de opciones mantienen su posición y
   composición actual. Corresponde a Decisión 4.
3. **Acciones:** botón principal dorado con texto marino y botón secundario
   marino con texto blanco; ambos con mínimo 48 pt y radio 8. Corresponde a
   Decisión 2.
4. **Interacción:** botones con opacidad 0.85 al presionar; tabs, iconos,
   tarjetas presionables y emojis con cambio sutil de fondo u opacidad, sin
   animaciones llamativas. Corresponde a Decisión 6.
5. **Modal:** superficie blanca o clara diferenciada del lienzo, encabezado
   marino, textos con contraste, cierre visible y lista conservando su
   comportamiento. No se cambia `visible`, `onClose`, selección ni cierre
   automático. Cubre RF-5, RF-6, RF-8.
6. **Jerarquía textual:** H1/H2/H3, cuerpo y notas usarán sans-serif del
   sistema, pesos y tamaños de RNF-3. El dorado textual, si se conserva en
   algún énfasis existente, será `accentText`.

## Decisiones de diseño y alternativas descartadas

- Se prioriza navegación antes que formularios, tarjetas y botones, según
  Decisión 1. Se descarta empezar por la pantalla principal porque dejaría
  inconsistente el marco institucional entre vistas.
- Se mantienen dos variantes de botón, según Decisión 2. Se descarta una
  variante única porque no distingue acciones principales y secundarias.
- Se adopta modo claro con header y tabs blancos, según Decisión 3. Se descarta
  un header/tab bar oscuro porque la decisión aprobada reserva el marino oscuro
  para botones, modales y elementos puntuales.
- Se usa lienzo gris claro con superficies blancas, borde y sombra ligera,
  según Decisión 4. Se descarta un fondo oscuro o tarjetas sin separación
  porque reduce la jerarquía y contradice la spec.
- Se reutilizan componentes y estilos existentes, centralizando tokens en un
  archivo nuevo sin dependencia externa. Se descarta reestructurar pantallas o
  introducir una librería de UI porque RNF-6 y la constitución exigen proteger
  la funcionalidad y no añadir dependencias.
- Se conserva el contenido y la iconografía actuales. Se descarta añadir logo,
  textos, iconos o animaciones no contemplados, conforme a Fuera de alcance.

## Estrategia de verificación visual manual

La implementación se validará tarea por tarea en Expo Go y no se marcará una
tarea visual como hecha sin confirmación del usuario:

- Revisar Inicio y About en modo claro: fondo `#F8F9FA`, superficies blancas,
  separación visible, títulos marinos y notas legibles.
- Revisar header y tabs en ambas pestañas: fondo blanco, icono/título marino,
  activa distinguible por marino e indicador dorado, inactiva en gris.
- Revisar ambos botones: mínimo 48 pt, radio 8, texto con contraste y opacidad
  85 % durante la pulsación.
- Revisar Reset, añadir sticker, Save, cerrar modal y seleccionar emoji:
  respuesta breve y sutil, sin cambios de flujo, navegación ni resultado.
- Revisar el modal y la lista de emojis: contraste, cierre visible, espaciado
  basado en 8 pt y ausencia de texto `accent` sobre blanco.
- Ejecutar `pnpm tsc --noEmit` al completar los cambios y registrar cualquier
  fallo antes de continuar. La verificación final debe confirmar también que
  los flujos existentes siguen funcionando.

