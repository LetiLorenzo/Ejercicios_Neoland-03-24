/* Este código en Javascript y CSS crea el componente de pie de página
(footer) para la página web.

Este código importa estilos, define un fragmento de HTML que repesenta el 
contenido del pie de página y, luego, exporta una función que inserta ese 
contenido en el elemento <footer> del documento HTML. La apariencia exacta 
del pie de página dependerá de los estilos definidos en el archivo 
"Footer.css". 

import "./Footer.css";
const template = () => `
<h3><span>With 💘 to </span> Neoland</h3>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};

*/

import "./Footer.css";
const template = () => `
<h3><span>With 💘 to </span> Neoland</h3>
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};