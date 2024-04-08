import { setData } from "../global/state/globalState";
import { getByIdPokemon } from "../services/pokemon.service";
import { Paginacion } from "./paginacion";
import { typePokemon } from "./typePokemon";

let dataGlobal;
export const dataPokemon = async () => {
  /** esta funcion se encarga de traer los datos de pokemon de la api 
   * y hacer push en un array vacío
   * Para esto utiliza el servico de getById recibiendo 
   * el id del pokemon que quiere obtener del endPoint
   * de la API
   */
  const rawData = [];

  for (let i = 1; i < 151; i++) {
    rawData.push(await getByIdPokemon(i));
  }

  /** retorna esta info mappeada para quedarse solo con la info 
   * que le interesa */
  return dataMap(rawData);
};

const dataMap = (data) => {
  const filterData = data.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
    type: pokemon.types,
    id: pokemon.id,
  }));
  /** en este caso llama a una funcion que crea un array con 
   * los nombres de los tipos de pokemon */
  const types = typePokemon(filterData);
  dataGlobal = {
    pokemonData: filterData,
    type: types,
  };

  return dataGlobal;
};

export const filterPokemon = (filterDataInputButton, donde) => {
  /// filterDataInputButton:  la palabra que nos sirve para filtrar

  switch (donde) {
    /** este switch nos va a permitir que esta funcion de 
     * filter nos sirva tanto si es para el
     * input de busqueda como si es para los 
     * botones de busqueda por tipo
     * Los pokemon pueden tener dos tipos 
     * y algunos tipos como el volador pueden estar
     * en su posion 1 del array de type
     */
    case "type":
      {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.type[0].type.name
            .toLowerCase()
            .includes(filterDataInputButton.toLowerCase())
        );

        if (filterData.length === 0) {
          const filterData = dataGlobal.pokemonData.filter((pokemon) =>
            pokemon.type[1]?.type.name
              .toLowerCase()
              .includes(filterDataInputButton.toLowerCase())
          );

          /** Filtramos la info --> la mandamos a la funcion paginar
           * para que renderice el numero de elementos
           * que le decimos como parametro, en este caso tres
           */

          Paginacion(filterData, 3);
        } else {
          Paginacion(filterData, 3);
        }
      }

      break;

    case "name":
      {
        const filterData = dataGlobal.pokemonData.filter((pokemon) =>
          pokemon.name
            .toLowerCase()
            .includes(filterDataInputButton.toLowerCase())
        );
        /** Para cuando la palabra del input sea vacia
         *  en ese caso saldran todos los pokemon
         * porque el filter de un string vacio 
         * lo contienen todos los nombres por lo cual
         * directamente mandamos a paginacion 
         * que pinte de 25 en 25 para cada pagina
         *
         *
         * En caso contrario que la palabra del input 
         * tenga un valor superior a un array vacio en
         * ese caso lo que haremos en el else 
         * es mandar la paginacion de 5 en 5
         *
         *
         * Recorardar que aunque yo le mande a 
         * paginacion que me lo haga de 5 en 5, si el numero de páginas
         * que salen son 1 o menores, en ese caso 
         * no se renderizan los botones de la paginación.
         *
         * Asi conseguimos que la paginación sea dinámica
         */
        if (filterDataInputButton == "") {
          Paginacion(filterData, 25);
        } else {
          Paginacion(filterData, 5);
        }
      }
      break;
  }
};

export const getInfo = async () => {
  console.log("actualizando info... 👌🔍");
  const data = await dataPokemon();
  setData(data, "Pokemon");
};

/** ejecutamos la funcion getInfo para cuando 
 * se monte la aplicacion se hagan las llamadas asíncronas
 * y así tengamos la info ya preparada 
 * para cuando entremos a pokemon
 */
getInfo();

/*Este código se encarga de manejar la obtención, filtrado y presentación
de los datos de Pokémon en la aplicación. 

Este conjunto de funciones maneja la obtención y filtrado de datos Pokémon y
luego actualiza el estado global de la aplicación con la información relevante.
Además, utiliza la paginación para mostrar los resultados de manera adecuada en 
la interfaz de ususario. */