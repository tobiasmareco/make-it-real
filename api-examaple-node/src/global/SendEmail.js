import nodemailer from "nodemailer";

export async function Send(userEmail, subject, html) {
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "091da217704ff5",
      pass: "e2f789bc8ee74e",
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
