const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "YOUR_EMAIL_ADDRESS",
      pass: "YOUR_EMAIL_PASSWORD",
    },
  });

  const mailOption = {
    from: req.body.email,
    to: "YOUR_EMAIL_ADDRESS",
    subject: `Message From ${req.body.email}`,
    text: req.body.subject,
  };

  transporter.sendMail(mailOption, (err, info) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log(`Email Sent: ${info.response}`);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
