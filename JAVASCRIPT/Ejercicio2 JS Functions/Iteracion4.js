/** Calcular un promedio es una tarea extremadamente común.
 * Puedes usar este array para probar tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numbers) {
  let promedio = 0;
  for (let i = 0; i < numbers.length; i++) {
    promedio += numbers[i];
  }

  return promedio / numbers.length;
}

console.log(average(numbers));

// const numbers = [12, 21, 38, 5, 45, 37, 6];
// function average(numbers) {
//   let suma = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     suma = suma + numbers[i];
//   }
//   para hacer el promedio de la suma aqui damos una constante
//   después, retornamos la constante que acabamos de designar y hacemoms el console log.
//Por último llamamos a la función.

//   return suma;
// }
// const promedio = suma / numbers.length;
//average(numbers)
// console.log(promedio);
