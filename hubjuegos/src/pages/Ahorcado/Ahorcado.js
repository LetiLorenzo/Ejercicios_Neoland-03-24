import { PrintBotonLetras} from "../../components";
import { gameOver, id, iniciar } from "../../utils";
import "./Ahorcado.css";

const template = () => `
<img id="imagen" src="sourceAhorcado/img0.png" alt="Ahorcado" />
<div>
    <p id="palabraAdivinar"></p>
    <button id="jugar">Obtener palabra</button>

    <p id="resultado"></p>

    <div id="letras"></div>
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

