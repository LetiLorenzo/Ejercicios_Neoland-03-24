let info = {
    palabraJuego: "",
    cantErrores: 0,
    cantAciertos: 0,
  };
  export const getInfoAhorcado = () => info;
  
  export const setPalabraJuego = (data) => (info.palabraJuego = data);
  export const setErrores = (data) => (info.cantErrores = data);
  export const setAciertos = (data) => (info.cantAciertos = data);
  