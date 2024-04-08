/**El siguiente código es el que debemos tener inicialmente 
 * en el archivo initTemplate.js (dentro de utils).
 * Donde luego añadiremos la configuración 
 * de los diferentes componentes:
 * 
 * 1. Definición de la función; este código define
 * una función llamada initTemplate que se encarga de
 * inicializar un template básico para una aplicación web
 * usando la sintaxis de funciones de flecha:
 * 
 * export const initTemplate = () =>
 * 
 * 2. Obtención del elemento con el ID "app"; utiliza 
 * getElementById("app") para obtener la referencia al 
 * elemento del DOM con el ID "app". Este elemento suele
 * ser el contenedor principal de la aplicación:
 * 
 *  const app = document.getElementById (app);
 * 
 * ---> Después de este paso se crean los elementos:
 * 3. Creación de elementos HTML; el header, main y footer, 
 * utilizando document.createElement. Estos elementos representarán
 * las secciones básicas de la estructura de la página:
 * 
 * const header = document.createElement("header");
 * const main = document.createElement("main");
   const footer = document.createElement("footer");

----> Por último, inyectamos los elementos con el append:
4. Inyección de elementos en el contenedor "app"; con el método
append para agregar los elementos creados (header, main y footer)
como hijos del elemento con el ID "app". Esto organiza la estructura
básica de la página dentro del contenedor principal:

app.append(header, main, footer);

IMPORTANTE!! ---> UTILIZAR EL ARCHIVO DE BARRIL index.js de la carpeta
utils para facilitar las importaciones de las funciones en una sola línea
de código, procedentes del archivo raíz utils

5. Llamada a las funciones --> Este código utiliza funciiones exportadas 
(PrintTemplateHeader y Print TemplateFooter) desde el módulo de components. 
Estos módulos están diseñados para generar y aplicar templates para el 
encabezado y el pie de página de una página web.

//index.js ------> dentro de utils

export * from"./initTemplate"; ---> esto es lo que pondremos para exportarlo.

*/
/*Gracias al archivo de barril podemos importar directamente desde components: 
impport (PrintTemplateHeader, PrintTemplateFooter) from "../components"; 
*/

import { PrintTemplateHeader, PrintTemplateFooter } from "../components";

export const initTemplate = () =>{
  const app = document.getElementById ("app");

const header = document.createElement("header");
const main = document.createElement("main");
const footer = document.createElement("footer");

app.append(header, main, footer);

PrintTemplateHeader();
PrintTemplateFooter();
};