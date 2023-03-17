import nodemailer from "nodemailer";

export async function Send(userEmail, subject, html) {
  var transport = nodemailer.createTransport({
    host: process.env.API_EMAIL_HOST,
    port: process.env.API_EMAIL_PORT || 2525,
    auth: {
      user: process.env.API_EMAIL_USER,
      pass: process.env.API_EMAIL_PASS,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  transport.sendMail(
    {
      from: "InfoTickets<tmareco123@gmail.com.py>",
      to: userEmail,
      subject,
      html,
    },
    (err, res) => (err ? console.log({ errmsms: err }) : console.log(res))
  );
}
