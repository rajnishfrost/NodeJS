const nodemailer = require("nodemailer");
const {html} = require('./views/index.js');
const name = "Devid";

let mailTranspoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "rajnish.yadav.vinove@gmail.com",
        pass: "mcaqzdgadkoxqgkw"
    }
});

let details = {
    from: "rajnish.yadav.vinove@gmail.com",
    to: "rajnishfrost@gmail.com",
    subject: "mark 1 subject field",
    text: "mark 1 text field",
    html: `<!DOCTYPE html>
    <html>
      <head>
        <title>Diwali HTML Template</title>
      </head>
      <body style="background-color: #FEE12B;">
        <header>
          <h1 style="text-align: center;">Happy Diwali To ${name} ! </h1>
        </header>
        <main>
          <img src="https://cdn.create.vista.com/downloads/da497547-9bba-4562-83ab-cd20ab327d2c_1024.jpeg" alt="Diwali candles" style="width: 100%;">
          <div style="text-align: center;">
            <h2>Wishing you a joyous and prosperous Diwali</h2>
            <p>May this festival of lights bring happiness, good health, and prosperity to you and your loved ones.</p>
          </div>
        </main>
        <footer style="text-align: center;">
          <p>Copyright © 2023</p>
        </footer>
      </body>
    </html>
    `,
}

mailTranspoter.sendMail(details, (err) => {
    if (err) {
        console.log("error found", err);
    }
    else {
        console.log("email send");
    }
})

module.exports = {name}