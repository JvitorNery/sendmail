
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');


const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key:
          '<sendgrid-key>'
      }
    })
  );

module.exports = transporter;