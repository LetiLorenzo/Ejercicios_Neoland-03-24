import "./Ahorcado.css"

const template = () =>``

let palabraJuego;
let cantErrores = 0;
let cantAciertos = 0;

const palabras = ["constantinopla", "kiwi", "amanecer", "palya", "toalla", "tortuga", "jamon", "chirigotaS"];

const btn = id("jugar");
const imagen = id("imagen");
const btnLetras = document.querySelectorAll("#letras button");

//con este botón iniciamos el juego
btn.addEventListener("click", inicio);



function inicio(event){
    imagen.src = "img/img0.png";
    btn.disabled = true;
    cantErrores = 0;
    cantAciertos = 0;

    const p = id("palabraAdivinar");
    p.innerHTML = "";

    const numPalabras = palabras.length;
    const valorRandom = obtenerRandom(0, numPalabras);
    
    palabraJuego = palabras[valorRandom];
    const numLetras = palabraJuego.length;

    for(let i = 0; i < btnLetras.length; i++){
        btnLetras[i].disabled = false;
    }
 

    for (let i = 0; i < numLetras; i++){
        const span = document.createElement("span");
        p.appendChild(span);
    }
}


//este for con el click es para adivines la letra
for(let i = 0; i < btnLetras.length; i++){
    btnLetras[i].addEventListener("click", clicarLetras);
}

function clicarLetras (event) {
    const spanes = document.querySelectorAll("palabraAdivinar");
    const button = event.target;

    button.disabled = true; //hacemos igual que con el botón de nueva palabra, desabilitamos la letra que ya hemos tocado y no es
    const letra = button.innerHTML.toLowerCase();
    const palabra = palabraJuego.toLowerCase();

    let acierto = false;
    for(let i = 0; i < palabra.length; i++){
        if(letra == palabra[i]){
            spanes[i].innerHTML = letra;
            cantAciertos++;
            acierto = true;
        }
        /*Con este bucle recorremos la posición de la letra en la palabra
        que coincide con el span al que tenemos que mostrarle esta letra en el caso
        de que coincida y pasae a true.*/
       
    }

    if(acierto == false){
        cantErrores++;
        const sourceAhorcado = `img/img~${cantErrores}.png`;
        const imagen = id("imagen");
        imagen.src = sourceAhorcado;
    }

    if(cantErrores == 6){
        id("resultado").innerHTML = "Has perdido. La palabra era " + palabraJuego + " ;(";
        gameOver();
    }else if(cantAciertos == palabraJuego.length){
        id("resultado").innerHTML = "¡¡VICTORIA!! ;)";
        gameOver();
    }
        
}


//finalizamos el juego:
function gameOver(){
    for(let i = 0; i < btnLetras.length; i++){
        btnLetras[i].disabled = true;
    }

    btn.disabled = false;
}

gameOver();
