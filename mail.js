const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kushwaha9301@gmail.com",
    pass: "uouobdrltmutzvhg",
  },
});

let mailDetails = {
  from: "kushwaha9301@gmail.com",
  to: "kushwahaaashish2022@gmail.com",
  subject: "Test mail",
  text: "Node.js testing mail successfully!",
};

mailTransporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log("Error Occurs");
  } else {
    console.log("Email sent successfully");
  }
});
