# Decisiones de diseño

Este registro conserva las conclusiones aprobadas que se derivan de las referencias visuales y de los recursos corporativos de Aercos.

## Criterios de registro

Cada nueva referencia deberá añadirse con: archivo o fuente, categoría, principios identificados, elementos adaptables a Aercos, elementos descartados y decisión resultante. Las referencias inspiran decisiones; no se reproducen literalmente.

## Base corporativa aprobada

### Logotipo de Aercos

- Referencia: `img/logo-aercos.png`.
- Principios identificados: geometría modular, precisión estructural, contraste entre tipografía sobria y símbolo técnico.
- Aplicación en Aercos: conservar sin modificaciones las proporciones, composición y estilo del logotipo; trasladar su lenguaje modular a patrones y componentes, sin reconstruir ni alterar la marca.
- Restricción: no deformar, recolorear ni reinterpretar el logotipo.

### Fondo corporativo

- Referencia: `img/fondo-corporativo.jpg`.
- Principios identificados: líneas finas, capas, profundidad y geometría técnica sobre una composición clara.
- Aplicación en Aercos: emplear de forma moderada como fondo o inspiración para tramas sutiles, siempre protegiendo el contraste y la lectura.
- Restricción: no usarlo como decoración dominante ni detrás de textos con legibilidad insuficiente.

## Capacidades: iconografía técnica

- Referencia: decisión interna implementada en la sección Capacidades.
- Principios identificados: microdiagramas CSS con isometría modular, nodos conectados y planos seccionados.
- Aplicación en Aercos: cada icono debe representar un concepto técnico mediante geometría simple, proporciones controladas y microinteracciones discretas.
- Restricción: evitar iconos genéricos de librería, movimientos llamativos y tarjetas oscuras al interactuar.

## Propuesta aprobada e implementada

### Referencia de iconografía premium

- Referencia: `design-system/referencias/iconografia/referencia-iconografia-premium.png`.
- Categoría: iconografía y tarjetas.
- Principios identificados:
  - Cada capacidad se representa con un único objeto geométrico, centrado y aislado, en lugar de una ilustración descriptiva.
  - La sensación de volumen procede de capas, transparencias, contornos finos y sombras ambientales muy difusas.
  - La paleta se mantiene casi monocromática: base blanca, contornos azul-violeta de baja intensidad y un pequeño núcleo de color corporativo para dirigir la mirada.
  - El área visual del objeto recibe espacio suficiente para percibirse como una pieza de diseño, separada con claridad de la información textual.
  - Las tarjetas se leen como superficies materiales ligeras, con borde tenue, elevación limitada y jerarquía tipográfica sobria.
- Adaptación implementada para Aercos:
  - Reemplazar los microdiagramas lineales actuales por tres objetos de diseño técnico de baja complejidad, construidos con HTML y CSS propios.
  - Gestión BIM: un volumen modular compacto con un núcleo sólido, que comunique información estructurada y control sin reproducir una retícula CAD.
  - Coordinación técnica: una composición mínima de volúmenes conectados alrededor de un punto de relación, enfatizando flujo e integración sin representar una red ilustrativa.
  - Arquitectura e ingeniería: un objeto estratificado de planos y espesores, con profundidad controlada y sin añadir cotas, tramas ni elementos constructivos descriptivos.
  - Mantener las tarjetas claras, con una superficie ligeramente translúcida, borde de baja intensidad, sombra ambiental y elevación inferior a unos pocos píxeles al interactuar.
  - Aplicar movimiento mínimo: variación de profundidad, desplazamiento breve y luz suave; respetar siempre `prefers-reduced-motion`.
- Elementos descartados:
  - Copiar composiciones, proporciones, formas exactas o tratamiento visual literal de la referencia.
  - Iconos narrativos, wireframes densos, retículas CAD, gráficos decorativos, brillos intensos y sombras pesadas.
- Estado: aprobado e implementado en la sección Capacidades. Este lenguaje de objetos técnicos mínimos se adopta como referencia para futuras secciones que requieran iconografía o visualización abstracta.

### Revisión isométrica de alta fidelidad

- Estado: iteración histórica sustituida por los PNG definitivos de Capacidades.
- Dirección: se reemplaza la iteración de objetos mínimos por un sistema de ilustraciones SVG isométricas propias, con estructuras modulares, módulos conectados y planos estratificados.
- Principios aplicados: transparencias controladas, gradientes azul-violeta suaves, líneas constructivas finas, acento cromático central, sombra ambiental ligera y amplio espacio negativo.
- Restricción: se adopta la dirección artística de la referencia sin reproducir literalmente sus composiciones, proporciones ni gráficos.
- Esta revisión sustituye las restricciones anteriores que descartaban estructuras modulares y líneas constructivas densas para esta sección.

### Recursos definitivos de Capacidades

- Recursos: `img/capacidades/gestion-bim.png`, `img/capacidades/coordinacion-tecnica.png` y `img/capacidades/arquitectura-ingenieria.png`.
- Estado: versión vigente proporcionada por Aercos. Estos tres archivos son los únicos recursos gráficos utilizados en Capacidades.
- Integración: las tarjetas conservan su numeración HTML y emplean un contenedor uniforme con `object-fit: contain`, centrado horizontal y verticalmente. Cada archivo se dimensiona según su composición interna para que el objeto visible mantenga una escala equivalente. No se aplican fondos, filtros, máscaras, mezclas, sombras ni transformaciones a los PNG.

### Integración continua de Capacidades

- Referencia: `design-system/referencias/iconografia/referencia-iconografia-premium2.png`.
- Principios identificados: la ilustración se percibe como un objeto flotante dentro de una superficie continua; el fondo blanco del recurso coincide con el de la tarjeta, las sombras son ambientales y el espacio negativo es parte de la composición.
- Estado: aplicada a los recursos vigentes.
- Aplicación: el contenedor mantiene la misma proporción en las tres tarjetas. La presentación de cada PNG se calibra de forma independiente para que los objetos visibles ocupen aproximadamente entre el 70 % y el 75 % de la zona superior, sin deformación ni recorte de su contenido.
- Restricción: no se aplicarán filtros, sombras, cambios cromáticos, máscaras, mezclas ni tratamientos directos a los PNG.

### Composición uniforme de tarjetas

- Decisión: las tres tarjetas utilizan una plantilla CSS Grid idéntica de cuatro zonas: número, icono de altura fija, contenido y acción inferior.
- Alineación: el área de iconografía reserva exactamente `15rem`; los títulos disponen de una altura mínima compartida para que las descripciones comiencen en la misma línea; los botones se ubican en la última fila de la cuadrícula.
- Escala: los únicos ajustes individuales son las dimensiones de presentación de los PNG, necesarias para compensar sus diferentes márgenes internos y equilibrar el peso visual de cada objeto.

### Refinamiento visual global de Home

- Superficies: se sustituye el blanco puro por `#F5F5F7` como fondo principal, `#F8F8FA` como fondo secundario y `#FCFCFD` como superficie de tarjetas.
- Profundidad: las tarjetas, paneles y bloques destacados emplean bordes de baja opacidad y sombras amplias, claras y de bajo contraste; no se usan sombras oscuras ni elevaciones agresivas.
- Header: conserva su composición y adquiere una superficie translúcida con desenfoque suave, borde inferior fino y sombra mínima para una sensación de flotación.
- Transiciones: botones, enlaces, navegación y elementos interactivos comparten la misma curva de salida y duraciones de interacción cortas, mientras las apariciones al desplazarse mantienen su ritmo propio.
- Fondo corporativo: permanece restringido al hero, con una capa clara y baja opacidad que preserva identidad sin competir con la información.

### Composiciones de Home

- Capacidades: mantiene el sistema de tarjetas e iconos técnicos aprobado.
- Sectores: utiliza una lista editorial de lectura vertical para presentar ámbitos de trabajo sin repetir el patrón de tarjeta.
- Proyectos destacados: adopta una composición asimétrica sobre superficie oscura, con marcadores técnicos claramente identificados mientras se incorporan recursos autorizados.
- Tecnologías: se comunica mediante un diagrama conceptual de nodos y relaciones, no mediante logotipos de software.
- CTA y Footer: conservan un tono sobrio y priorizan orientación clara, navegación y contacto sin mensajes comerciales agresivos.
