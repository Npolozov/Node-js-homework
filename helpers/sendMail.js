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
