import { PrintBotonLetras} from "../../components";
import { gameOver, id, iniciar } from "../../utils";
import "./Ahorcado.css";

const template = () => `
<div id=class"Ahorcado">
<div id="contenido">
<img id="imagen" src="sourceAhorcado/img0.png" alt="Ahorcado" />
<div id="bloqueLetras">
     <p id="palabraAdivinar"></p>
     <button id="jugar">Obtener palabra</button>

     <p id="resultado"></p>

     <div id="letras">
     <div id="letras button"></div>
     </div>
 </div>
 </div>
</div>
`;

const listeners = () => {
    const btn = id("jugar");
    btn.addEventListener("click", iniciar);
  };
  
  export const PrintAhorcado = () => {
    document.querySelector("main").innerHTML = template();
    PrintBotonLetras();
    listeners();
    gameOver();
  };

