# Decisiones de diseño visual EPN

## Decisión 1: Orden de adaptación de componentes

- **Pregunta:** ¿Qué componentes deben adaptarse primero?
- **Respuesta:** Se priorizará la navegación global: encabezados, barra inferior y tabs, antes que formularios, tarjetas y botones.
- **Motivo:** La identidad institucional debe ser consistente desde cualquier pantalla y establecer primero el marco visual común de la aplicación.

## Decisión 2: Variantes de botones

- **Pregunta:** ¿Qué variantes institucionales deben tener los botones?
- **Respuesta:** Se usarán dos variantes: botón principal amarillo dorado con texto azul marino y botón secundario azul marino con texto blanco. Ambos tendrán una altura mínima de 48 pt y reducirán su opacidad al 85% al presionarse.
- **Motivo:** Las dos variantes permiten distinguir la acción principal de las acciones secundarias, mantienen la paleta EPN y ofrecen una respuesta táctil accesible.

## Decisión 3: Tratamiento claro de la navegación

- **Pregunta:** ¿Cómo deben tratarse visualmente el encabezado y la barra de tabs?
- **Respuesta:** La interfaz será de modo claro. El encabezado y la barra de tabs tendrán fondo blanco, títulos e iconos en azul marino, y la pestaña activa se destacará en azul marino con un indicador o detalle dorado. El azul marino se reservará para botones oscuros, modales o elementos puntuales.
- **Motivo:** Se conserva una apariencia clara y luminosa sin perder la identificación institucional ni el contraste entre estados de navegación.

## Decisión 4: Fondos, tarjetas y campos

- **Pregunta:** ¿Qué jerarquía visual deben tener los fondos y contenedores?
- **Respuesta:** El lienzo general usará gris muy claro `#F8F9FA`. Las tarjetas y los campos usarán fondo blanco, borde sutil, esquinas de 8 pt y sombra ligera.
- **Motivo:** Esta jerarquía separa el contenido del fondo sin introducir superficies oscuras y mantiene una lectura ordenada.

## Decisión 5: Encabezados y jerarquía tipográfica

- **Pregunta:** ¿Cómo deben tratarse los encabezados y textos?
- **Respuesta:** Los títulos principales usarán azul marino y podrán incluir un énfasis corto en dorado institucional. El cuerpo usará gris oscuro y las notas gris medio, respetando la jerarquía de tamaños y pesos definida por el sistema EPN.
- **Motivo:** La jerarquía mejora el escaneo del contenido y permite usar el dorado como acento de marca sin sacrificar sobriedad.

## Decisión 6: Respuesta táctil

- **Pregunta:** ¿Qué respuesta deben mostrar los elementos táctiles?
- **Respuesta:** Los botones reducirán su opacidad al 85% al presionarse. Tabs, iconos accionables y tarjetas presionables también mostrarán una respuesta breve y sutil mediante cambio de fondo u opacidad, sin animaciones llamativas.
- **Motivo:** La respuesta confirma la interacción en dispositivos móviles y mantiene una experiencia coherente sin distraer del contenido.

## Decisión 7: Contraste en fondos claros y oscuros

- **Pregunta:** ¿Qué reglas de contraste deben aplicarse?
- **Respuesta:** En fondos claros, el dorado usado como texto será siempre `accentText` (`#8D6B20`). Sobre azul marino se usará texto blanco o dorado. Nunca se usará el dorado brillante `accent` (`#EBB336`) como texto sobre blanco.
- **Motivo:** Se cumplen las reglas de contraste accesible del sistema visual EPN y se evita texto dorado ilegible sobre superficies claras.
