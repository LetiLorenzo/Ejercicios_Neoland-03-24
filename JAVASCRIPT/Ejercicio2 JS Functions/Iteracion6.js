// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array
//y compruebe si existen elementos duplicados,
//en caso que existan los elimina para retornar un array sin los elementos duplicados.
//Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(comidaRepe) {
  const quitaComidaRepe = (comida) => (comidaNoRepe = []);
  {
    for (let i = 0; i < comida.length; i++) {
      !comidaNoRepe.includes(comida[i]) && comidaNoRepe.push(comida[i]);
    }
    return comidaNoRepe;
  }

  const resultadoQuitarRepe = quitaComidaRepe(comidas);
  console.log(resultadoQuitarRepe);
}
