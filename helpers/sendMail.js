const sgMail = require("@sendgrid/mail");
require("dotenv").config();

// const SENDGRID_API_KEY =
//   "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";

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "npolozov0@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
