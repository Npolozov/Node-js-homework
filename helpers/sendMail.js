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
