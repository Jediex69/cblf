README - Lenguaje de marcas y sistemas de gestión de información.
PAC de desarrollo 2S2425

AUTOR: Jesús Díaz Expósito


DESCRIPCIÓN:
Esta práctica consiste en la creación de una web interactiva que permita a los usuarios comprar entradas para los conciertos de la banda sueca Carbon Based Lifeforms. Incluye páginas HTML, una hoja de estilos CSS y un archivo de script JavaScript, siguiendo las especificaciones del documento "LM PAC de Desarrollo 2S2425.pdf" y he integrado una estructura con un diseño visual y elementos dinámicos que facilitan la interacción y navegación por el sitio.

ESTRUCTURA DEL PROYECTO:
1. `index.html`: Página principal del sistema web. Contiene:
   - Información sobre la banda.
   - Próximos conciertos organizados en una tabla.
   - Un formulario interactivo para la compra de entradas.

2. `confirmacion.html`: Página de confirmación que muestra un resumen de los datos introducidos por el usuario al completar el formulario.

3. `styles.css`: Hoja de estilos que define el diseño visual del proyecto, aplicando tipografías, colores, bordes, sombras, entre otros elementos de diseño.

4. `script.js`: Archivo JavaScript que gestiona la validación de datos en el formulario, el almacenamiento temporal en `sessionStorage` y la presentación dinámica de los datos en la página de confirmación.

REQUISITOS PARA USARLO:
- Un navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).
- El proyecto debe ejecutarse desde un servidor local para que la funcionalidad de almacenamiento y redirección funcione correctamente (se puede usar herramientas como la extensión Live Server de Visual Studio Code).

COMO PROBARLO:
1. Abre `index.html` en tu navegador a través de un servidor local.
2. Completa el formulario de compra asegurándote de llenar todos los campos requeridos.
3. Tras enviar el formulario, verifica que la página `confirmacion.html` muestra correctamente un resumen de los datos ingresados.
4. Si hay campos vacíos en el formulario, aparecerán mensajes indicando los campos que necesitan ser completados.

