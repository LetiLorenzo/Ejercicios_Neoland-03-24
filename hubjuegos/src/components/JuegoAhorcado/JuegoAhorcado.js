import{clickLetras} from "../../utils";
import "./JuegoAhorcado.css"

const template =`
<div id="letras button">
<button>a</button>
<button>b</button>
<button>c</button>
<button>d</button>
<button>e</button>
<button>f</button>
<button>g</button>
<button>h</button>
<button>i</button>
<button>j</button>
<button>k</button>
<button>l</button>
<button>m</button>
<button>n</button>
<button>o</button>
<button>p</button>
<button>q</button>
<button>r</button>
<button>s</button>
<button>t</button>
<button>u</button>
<button>v</button>
<button>w</button>
<button>x</button>
<button>y</button>
<button>z</button>
</div>`;



export const listeners = () => {
    const botonLetras = document.querySelectorAll("#letras button");
    for (let i = 0; i < botonLetras.length; i++) {
      botonLetras[i].addEventListener("click", clickLetras);
    }
  };
  
  export const PrintBotonLetras = () => {
    document.getElementById("letras").innerHTML = template;
    listeners();
  };