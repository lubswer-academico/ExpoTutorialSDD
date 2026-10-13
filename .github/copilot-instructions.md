# Totorial de Using React Native and Expo

Es un proyecto que viene de la guia de Using React Native: Es la guia de la página oficial de expo que muestra cómo funciona su herramienta justo a React Native, el proyecto actual abarca las 9 partes

## Stack y estructura
- Expo (plantilla por defecto de pnpm create-expo-app), TypeScript y Expo Router.
- Persistencia de estilos se maneja mediante Styleshet 
- src/components/: componentes reutilizables del proyecto.  src/app/: pantallas principales mediente Stack. src/app/(tabs): sistema de navegacion tabs por pestaña y sus vistas

## Comandos
- Tipos: pnpm tsc --noEmit
- Ejecutar la app: pnpm expo start (solo cuando yo lo pida)

## Dónde está cada cosa
- docs/constitution.md: principios del proyecto.
- docs/historias/: historias de usuario en Gherkin (la entrada de todo).
- specs/NNN-nombre/: decisiones.md, spec.md, plan.md y tasks.md de cada historia.
- MEMORY.md: estado actual del trabajo.
- .github/skills/: método SDD, paleta y convenciones.

## Cómo trabajar
1. Al empezar, lee MEMORY.md y docs/constitution.md.
2. Claves de estilos y código nuevo en inglés; conserva el idioma original de las variables existentes; comentarios, textos de interfaz y documentación en español.
3. No tomes decisiones de producto o de diseño que la historia o decisiones.md no definan. Adaptate al SDD y a su distribucion de responsabilidades
4. Haz solo la fase o la tarea que te pido. No avances a la siguiente.
5. No alteres la lógica de funcionamiento ni el comportamiento existente (hooks, navegación, estados). Modifica o añade únicamente la capa visual: estilos, colores, tipografía y estructura visual de los componentes.
6. Pregunta antes de instalar dependencias, crear archivos fuera del plan o cambiar el formato de los datos guardados.
7. No reemplaces archivos existentes si la tarea no lo pide. No guardes datos sensibles. No hagas commit.

## MEMORY.md
Solo tiene "Estado actual" y "Próximos pasos". Al terminar una fase o tarea actualiza únicamente esas dos secciones. No copies decisiones ni contenido de la spec. Mantenlo en unas 50 líneas.
