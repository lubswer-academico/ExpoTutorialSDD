# Constitución – Adopción Visual EPN

Principios innegociables. Toda spec, plan y tarea debe cumplirlos.

1. Simplicidad primero: no se añaden dependencias nuevas sin aprobación. Pero si puedes hacer uso de las que ya tengo impartadas en los diferentes archivos.
2. La spec manda: nada se implementa si no está en la spec activa. Si falta una decisión, se para y se pregunta.
3. Intactibilidad funcional: la lógica existente, hooks, navegación y flujo de componentes no se modifican; la intervención se limita estrictamente a la apariencia visual.
4. Puerta de validación: se verifican tipos con TypeScript (`pnpm tsc --noEmit`). Prohibido cerrar o avanzar una tarea sin que el usuario confirme la revisión visual manual en Expo Go.
5. Protección del proyecto base: ningún archivo preexistente se elimina o reestructura sin confirmación explícita.
6. Fidelidad y accesibilidad de marca: todos los estilos deben utilizar exclusivamente la paleta institucional y garantizar contraste de lectura accesible.

