import { palabras } from "../data/data.ahorcado";
import {
  getInfoAhorcado,
  setAciertos,
  setErrores,
  setPalabraJuego,
} from "../global/state/state.ahorcado";

export const id = (str) => {
  return document.getElementById(str);
};

export const obtenerRandom = (numMin, numMax) => {
  const amplitudValores = numMax - numMin; //valor más alto - valor más bajo del random... (7 - 0)
  const valorAzar =
    Math.floor(Math.random() * amplitudValores) +
    numMin; /* 5 - 15 = 10 + 5 */
  return valorAzar;
};

export const iniciar = (event) => {
  const imagen = id("imagen");
  imagen.src = "sourceAhorcado/img0.png";
  const btn = id("jugar");
  btn.disabled = true;
  setErrores(0);
  setAciertos(0);

  const parrafo = id("palabraAdivinar");
  parrafo.innerHTML = "";

  const cantPalabras = palabras.length;
  const valorAzar = obtenerRandom(0, cantPalabras);
  setPalabraJuego(palabras[valorAzar]);

  const cantLetras = getInfoAhorcado().palabraJuego.length;

  const botonLetras = document.querySelectorAll("#letras button");
  for (let i = 0; i < botonLetras.length; i++) {
    botonLetras[i].disabled = false;
  }

  for (let i = 0; i < cantLetras; i++) {
    const span = document.createElement("span");
    parrafo.appendChild(span);
  }
};

export const clickLetras = (event) => {
  const spans = document.querySelectorAll("#palabraAdivinar span");
  const button = event.target;
  button.disabled = true;

  const letra = button.innerHTML.toLowerCase();
  const palabra = getInfoAhorcado().palabraJuego.toLowerCase();

  let acerto = false;
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      spans[i].innerHTML = letra;
      let aciertos = parseInt(getInfoAhorcado().cantAciertos);
      console.log(aciertos)
      setAciertos(aciertos+1);
      acerto = true;
    }
  }

  if (acerto == false) {
    let errores = parseInt(getInfoAhorcado().cantErrores);
    console.log(errores);
    setErrores(errores + 1);
    console.log("errores", getInfoAhorcado().cantErrores);
    const sourceAhorcado = `sourceAhorcado/img${getInfoAhorcado().cantErrores}.png`;
    const imagen = document.getElementById("imagen");
    imagen.src = sourceAhorcado;
  }
  console.log(getInfoAhorcado().cantAciertos)
  if (getInfoAhorcado().cantErrores == 7) {
    id("resultado").innerHTML =
      "¡Has perdido! 😒 La palabra era " + getInfoAhorcado().palabraJuego;
    gameOver();
  } else if(
    getInfoAhorcado().cantAciertos == getInfoAhorcado().palabraJuego.length
  ) {
    console.log("entro")
    id("resultado").innerHTML = "¡¡HAS GANADO!! BIEN HECHO 😘👌";
    gameOver(); 
  }
  console.log(
    "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto
  );
};

export const gameOver = () => {
  const botonLetras = document.querySelectorAll("#letras button");
  for (let i = 0; i < botonLetras.length; i++) {
    botonLetras[i].disabled = true;
  }
  const btn = id("jugar");
  btn.disabled = false;

};
