/*Primera función que creamos: en utils para que genere un código random
para que el usuario introduzca y verifique que el correo se corresponde
con el usuario.

Después se van a añadir la randomPassword y el token.js en la carpeta utils.

tras este paso nos vamos a Middleware.*/

const randomCode = () => {
  let code = Math.floor(Math.random() * (999999 - 100000) + 1000000); // coge el numero entero anterior, si no tiene decimales se queda con lo que tiene
  return code;
};

module.exports = randomCode;
