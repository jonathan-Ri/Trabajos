import nodemailer from 'nodemailer';
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "d.aliaga2007@gmail.com",
    pass: "svxq ugxc hgec prrk",
  },
});

transporter.verify().then(() => {
    console.log("Listo para enviar correo");
});