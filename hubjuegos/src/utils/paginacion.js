import { CardsPokemons } from "../components";

export const Paginacion = (data, numberElement) => {
  /**
   * PARAMETROS:
   * 1) ---> La data total a paginar
   * 2) ---> Los elementos que queremos por cada pagina
   */

  /**Vamos a calcular la longitud del array total para dividirlo entre el numero de elementos
   * para asi saber el numero de paginas vamos a necesitar
   */
  const longitud = data.length;
  const numberDigitOfPage = longitud / numberElement;

  document.getElementById("paginacion").innerHTML = "";

  if (numberDigitOfPage > 1) {
   
    for (let i = 0; i < numberDigitOfPage; i++) {
      const buttonNumber = document.createElement("button");
      buttonNumber.setAttribute("class", `${i + 1} buttonPaginacion`);
      buttonNumber.innerHTML = i + 1;

      document.getElementById("paginacion").appendChild(buttonNumber);

      addListeners(buttonNumber, data, numberElement, i);
    }

    const allButton = document.querySelectorAll(".buttonPaginacion");
    allButton.forEach((pag) => {
      pag.style.border = "solid 3px #0000006d ";
    });
    allButton[0].style.border = "solid 3px #15a00e7d";
    allButton[0].style.color = " #083905ff";
  }

  CardsPokemons(data.slice(0, numberElement));
};

//! -----------------------------------------------------------------------------------------
//? -----------------ESCUCHHADORES DE LOS EVENTOS DE LOS BOTONES DE LAS PAGINAS--------------
//! ------------------------------------------------------------------------------------------
const addListeners = (buttonNumber, data, numberElement, i) => {
  
  buttonNumber.addEventListener("click", () => {
    console.log("entro");

    const allButtonPag = document.querySelectorAll(".buttonPaginacion");

    allButtonPag.forEach((pag) => {
      pag.style.border = "solid 3px #0000006d ";
    });

    buttonNumber.style.border = "solid 3px #15a00e7d ";
    buttonNumber.style.color = " #093f06ff";

    const end = (i + 1) * numberElement;
    const start = end - numberElement < 0 ? 0 : end - numberElement;

    CardsPokemons(data.slice(start, end));
  });
};

/*Este código define una función llamada Paginacion que se encarga de gestionar
la paginación de un conjunto de datos (en este caso, datos de Pokémon) y
renderizar los botones de paginación en el DOM. 

La función Paginacion facilita la paginación de datos y la renderización de botones
de paginación. La función addListeners gestiona los eventos de clic en los botones
de paginación y actualiza la visualización en consecuencia.*/