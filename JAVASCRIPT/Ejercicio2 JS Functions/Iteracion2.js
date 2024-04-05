/**
 * Completa la función que tomando un array de strings como argumento devuelva el más largo, 
 * en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:
 */

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(avengers) {
  let largo = 0;

  for (let i = 1; i < avengers.length; i++) {
    if (avengers[i].length > avengers[largo].length) largo = i;
  }
  return avengers[largo];
}
console.log(findLongestWord(avengers));
