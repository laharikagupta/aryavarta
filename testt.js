const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail", // or 'Gmail'
  auth: {
    user: "devopslaab@gmail.com", // your email
    pass: "dxlf pulr flvn hypx", // your password or app password
  },
});

// Example email sending code
const mailOptions = {
  from: "racharlalaharika@gmail.com",
  to: "devopslaab@gmail.com",
  subject: "Test Email",
  text: "Hello, this is a test email!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error sending email:", error);
  }
  console.log("Email sent:", info.response);
});
