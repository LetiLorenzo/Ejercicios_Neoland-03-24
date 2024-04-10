import { getUser } from "../global/state/globalState";
import { Login, PrintPokemonPage, printTemplateDashboard, PrintTopoPage, PrintAhorcado} from "../pages";
import { printMemoryPage } from "../pages/MemoryGame/Memory";

export const initControler = (pagesRender) => {
 
  switch (pagesRender) {

	/////// -------OPERA ESTE CASO--- SI NO HAY USER EN EL CONTEXTO PINTA EL LOGIN
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;

	////// ------------------------------------------------------------------------
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Topo":
      PrintTopoPage();
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      printMemoryPage();
      break;
    case "Ahorcado":
      PrintAhorcado();
      break;
  }
};