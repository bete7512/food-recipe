require('dotenv').config()
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const handler = async (req, res) => {
  const { Fname,Lname, username, email, password } = req.body.input.arg1;
  const finduser = require('../checker/findusername')
  const { data, error } = await finduser({ username })
  const user = data["users"][0]
  // console.log(user);
  if (user) {
    return res.status(400).json({
      message: 'you are  registered no registratrion again'
    })


  }
  else {
    const tokenContents = {
      Fname: Fname,
      Lname:Lname,
      username: username,
      email: email,
      password: password
    }
    const token = jwt.sign(tokenContents, process.env.SIGNUPSECREKEY)
    const link = `${process.env.SIGNUPDESTINATION}/${token}`
    console.log(link);
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      }
    });
    let mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: email,
      subject: 'Email confirmation',
      text: link
    };
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log(err);
        // return res.status(400).json({
        //   message: err.message
        // })
      } else {
        console.log(`Email link confirmation was sent to your email address ${email}`);
      }
    });
    return res.json({
      Success: `Email link confirmation was sent to your email address ${email}`
    })

  }
};
module.exports = handler;