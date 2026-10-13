# Tareas de implementación — Spec 001

- [x] **T1. Crear tokens visuales EPN compartidos.** RNF-1, RNF-2, RNF-3, RNF-5
  - Hecho cuando: existe `src/theme/epnTheme.ts` con colores, radios,
    espaciado y tamaños tipográficos de la spec, y no se añaden dependencias;
    `pnpm tsc --noEmit` pasa.
  - Validación Expo Go: no aplica todavía; confirmar que la app compila y que
    la incorporación del módulo no cambia ninguna pantalla.

- [x] **T2. Adaptar header y barra inferior de tabs al modo claro EPN.** RF-1,
  RF-5, RF-8, RNF-1, RNF-2, RNF-4, RNF-6
  - Hecho cuando: `src/app/(tabs)/_layout.tsx` conserva las dos rutas y sus
    iconos, usa superficies blancas, títulos/iconos marinos, activa distinguible
    con detalle dorado e inactiva en gris; `pnpm tsc --noEmit` pasa.
  - Validación Expo Go: en Inicio y About se ve el mismo orden de tabs, el
    indicador activo es visible, y al tocar cada tab hay respuesta breve sin
    alterar la navegación.

- [x] **T3. Convertir Button en las dos variantes institucionales.** RF-2, RF-3,
  RF-4, RF-8, RNF-1, RNF-2, RNF-4, RNF-5, RNF-6
  - Hecho cuando: `Button` conserva `label`, `theme` y `onPress`, ofrece botón
    principal dorado y secundario marino, ambos con mínimo 48 pt, radio 8 y
    opacidad 0.85 al presionar; `pnpm tsc --noEmit` pasa.
  - Validación Expo Go: en Inicio ambos botones mantienen sus acciones, el
    texto es legible y el estado presionado se percibe sin cambiar el flujo.

- [x] **T4. Adaptar controles de acciones e imagen sin cambiar callbacks.** RF-5,
  RF-6, RF-8, RNF-1, RNF-2, RNF-4, RNF-5, RNF-6
  - Hecho cuando: `IconButton`, `CircleButton` e `ImageViewer` usan tokens EPN,
    conservan tamaños/props y muestran estados presionados sutiles; Reset, Save
    y añadir sticker siguen conectados a los callbacks existentes; `pnpm tsc
    --noEmit` pasa.
  - Validación Expo Go: después de escoger una imagen, Reset, añadir sticker y
    Save muestran feedback táctil breve y siguen ejecutando su acción actual.

- [x] **T5. Adaptar el lienzo y la composición visual de Inicio.** RF-6, RF-7,
  RF-8, RNF-1, RNF-2, RNF-3, RNF-5, RNF-6
  - Hecho cuando: `src/app/(tabs)/index.tsx` usa lienzo `background`, conserva
    la composición de imagen/footer/opciones y aplica jerarquía tipográfica y
    espaciado EPN sin modificar hooks, estados, callbacks ni textos; `pnpm tsc
    --noEmit` pasa.
  - Validación Expo Go: la imagen, los botones iniciales y la fila de opciones
    permanecen utilizables y el fondo claro separa visualmente el contenido.

- [x] **T6. Adaptar About y superficies de contenido existentes.** RF-6, RF-7,
  RF-8, RNF-1, RNF-2, RNF-3, RNF-5, RNF-6
  - Hecho cuando: `about.tsx` conserva el contenido existente, usa fondo claro,
    texto marino/gris según jerarquía y no introduce contenido nuevo; `pnpm
    tsc --noEmit` pasa.
  - Validación Expo Go: al cambiar a About, el contenido se lee sobre el lienzo
    claro, la tab permanece activa correctamente y no aparece texto dorado
    brillante sobre blanco.

- [x] **T7. Adaptar modal y selector de emojis con respuesta táctil sutil.** RF-5,
  RF-6, RF-8, RNF-1, RNF-2, RNF-4, RNF-5, RNF-6
  - Hecho cuando: `EmojiPicker` y `EmojiList` usan superficies, bordes,
    espaciado y contraste EPN; cerrar y seleccionar conservan exactamente sus
    callbacks y la selección; `pnpm tsc --noEmit` pasa.
  - Validación Expo Go: abrir/cerrar el modal, tocar un emoji y volver a abrirlo
    confirma que el cierre, la selección y el sticker funcionan; el feedback no
    usa animaciones llamativas.

- [x] **T8. Ejecutar verificación final de tipos y revisión visual completa.** RF-1
  a RF-8, RNF-1 a RNF-7
  - Hecho cuando: `pnpm tsc --noEmit` pasa sin errores y el usuario confirma
    en Expo Go la revisión de Inicio, About, tabs, botones, modal, emojis,
    contraste, alturas táctiles y preservación de flujos; cualquier defecto
    visual encontrado se corrige en su tarea correspondiente antes de cerrar
    esta.
  - Validación Expo Go: recorrer las dos tabs, seleccionar imagen, resetear,
    añadir emoji, cerrar modal y guardar; verificar que cada resultado es el
    mismo que antes, con la nueva apariencia EPN.
