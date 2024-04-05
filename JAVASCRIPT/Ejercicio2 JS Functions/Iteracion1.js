// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberTwo > numberOne) {
    return numberTwo;
  } else {
    return numberOne;
  }
}
console.log(sum(10, 30));
console.log(sum(30, 10));

// Otra forma de hacerlo:

// const sum = (numberOne, numberTwo) => {
//   return Math.max(numberOne, numberTwo);
// };
// console.log(sum(2, 6));
