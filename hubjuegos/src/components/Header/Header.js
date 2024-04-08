/* En el archivo js de cada componenete siempre hay
que importar el archivo CSS ya que hay estilos
adicionales definidos en ese archivo que se aplicarán 
al contenido creado por este módulo. */

import { getUser } from "../../global/state/globalState";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import"./Header.css";

//!----------------------------------------------------
//?--- 1) TEMPLATE ---> definición de un template -----
//!----------------------------------------------------

const template =()=>`
<img
    src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679162/header_giqdug.jpg"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682685633/home_nekvs0.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679055/logout_arz0gw.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav>
  `;

/* El código que acabamos de incorporar define una 
función llamada template que devuelve una cadena 
de texto y que representa un fragmento de HTML en 
el que se incluyen imágenes (img) y un contenedor 
(nav) con tres imágenes que serán el contenido de 
la nav y el logo de la app. */

//!----------------------------------------------------
//?---- 2) Añadir los eventos con sus escuchadores ----
//!----------------------------------------------------

const addListeners = () => {
  // A cada elemento gráfico que realiza una acción cuando el 
  // usuario interactúa hay que meterle el escuchador 

  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    /** en este caso lo que hacemos el generar un color y cambiar el stylo del background del body */
    const color = changeColorRGB();
    document.body.style.background = color;
});

// --- DASHBOARD ---

const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {
    // llamamos al initController con el dashboard para que pinte la pagina del dashboard
    initControler("Dashboard");
  });

  // --- LOGOUT ---

  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", (e) => {
  
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parseCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parseCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);

    /** una vez borrado el currentUser del sessionStorage llamamos al initControler para que renderice el
     * login, aunque si no le hubieramos puesto ningun parametro hubiera hecho la misma accion porque
     * evalua si tenermos currentUser en el sessionStorage
     *
     */
    initControler("Login");
  });
};

/* Esta constante const addListeners = () => {}; define 
una función llamada addListeners, la cual se debe rellenar
con escuchadores de eventos. */

//!----------------------------------------------------
//?------- 3) Función que se exporta y que pinta ------
//!----------------------------------------------------

export const PrintTemplateHeader = () => {
    document.querySelector("header").innerHTML = template ();
    addListeners();
}

/* Código antecedente ---> módulo JavaScript que exporta una 
función llamada PrintTemplateHeader. Esta función exportada será
la que se encargue de inyectar la etiqueta dentro de la etiqueta 
header. 

// FUNCIÓN PRINCIPAL EXPORTADA:
export const PrintTemplateHeader = () => {
    document.querySelector("header").innerHTML = template ();
    addListeners();
}

-- Exporta la función PrintTemplateHeader --> se encarga de 
insertar el contenido del template en el elemento <header> y
configurar eventos.
-- Esta función selecciona el elemento <header> en el DOM y
le asigna el HTML generado por la función template ().
-- Llama a addListeners().
Este módulo e sresponsable de imprimir un encabezado (header)
en el documento HTML. */