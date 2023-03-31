const sgMail = require("@sendgrid/mail");

const SENDGRID_API_KEY =
  "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";

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "npolozov0@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
