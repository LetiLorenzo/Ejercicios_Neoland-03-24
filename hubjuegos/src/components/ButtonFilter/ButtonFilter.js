import { filterPokemon } from "../../utils";
import "./ButtonFilter.css";

export const PrintButton = (types) => {
  /** Cada boton va a tener una clase dinámica con el tipo al cual se encarga
   * de filtrar y, dependiendo de la clase, se le dará un color al botón
   */
  types.forEach((type) => {
    const buttonType = `<button class="buttonFilter ${type}">
      ${type}
    </button>`;
    const containerFilter = document.getElementById("filterButton");
    containerFilter.innerHTML += buttonType;
  });

  addListeners(types);
};

const addListeners = (types) => {
  types.forEach((type) => {
    const buttonType = document.querySelector(`.${type}`);
    buttonType.addEventListener("click", (e) => {
      /*Cuando se hace clic en un botón, se llama a la función filterPokemon con
      el tipo correspondiente y el argumento "type". Esto indica el proceso de 
      filtrado de Pokémon por tipo. */

      filterPokemon(type, "type");
    });
  });
};

/*Este componente genera botones de filtro en la interfaz de usuario para cada tipo de
Pokémon proporcionado y agrega escuchadores de eventos a cada botón para que, al hacer clic 
en ellos, se active la función de filtrado (filterPokemon) con el tipo correspondiente. Esto
permite al ususario filtrar los Pokémon según su tipo. */