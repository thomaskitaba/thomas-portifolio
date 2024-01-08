const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const https = require("https");

const sslOptions = {
  rejectUnauthorized: false // Bypass SSL certificate validation (use with caution)
};

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "thomas.kitaba@gmail.com",
    pass: "rmiubtbgjsxscycd"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "thomas.kitaba@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

https.createServer(sslOptions, app).listen(3000, () => {
  console.log("Server Running on Port 3000");
});
