/// Nos traemos las importaciones y configuramos dotenv
const express = require("express");
const nodemailer = require("nodemailer"); /*Nodemailer utiliza el método createTransport para crear un objeto 
de correo electrónico que se utilizará para enviar correos electrónicos. El trasnporte establecce una conexión 
con el servidor de correo saliente y enviar el correo electrónico.
 */
const dotenv = require("dotenv");
dotenv.config();

// ----- NOS TRAEMOS EL PUERTO DEL .ENV
const PORT = process.env.PORT;

// ----- CONFIGURAMOS EN NUEVO SERVIDOR WEB
const server = express();

//-------CONFIGURAMOS EL ROUTER DE EXPRESS PARA PROBAR NODEMAILER ------
const router = express.Router();

router.get("/sendNewMail", (req, res, next) => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  });

  /*En este objeto, el objeto mailOptions, se definen los detalles del correo electrónico donde se incluyen la dirección email del remitente,
  la dirección email del destinatario, el asunto del email, el asunto, el contenido en txt y el contenido HTML.
  
  Después se utiliza el método transporter.sendMail para enviar el email. Esste método usa el objeto mailOptions como argumento y, opcionalmente,
  una función de devolución de llamada que se ejecutará una vez que se haya intentado enviar el email. La devolución de la llamada proporciona
  información sobre el resultado del envío del email, como cualquier error que haya ocurrido o la respuesta del servidor si el envío fue exitoso.*/
  const mailOptions = {
    from: email,
    to: "letilorenzo92@icloud.com",
    subject: "Confirmation TEST NODEMAILER",
    text: `ok todo bien`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return next(error);
    } else {
      return res.status(200).json("Email sent: " + info.response);
    }
  });
});

server.use("/", router);

// ---- PONEMOS A ESCUCHAR EL SERVIDOR EN EL PUERTO 8080
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
