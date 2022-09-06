require('dotenv').config()
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const handler = async (req, res) => {
  const { fname,lname, username, email, password } = req.body.input.arg1;
  const finduser = require('../checker/findusername')
  const { data, error } = await finduser({ username })
  const user = data["users"][0]
  if (user) {
    return res.status(400).json({
      message: 'you are  registered no registratrion again'
    })

zz
  }
  else {
    const tokenContents = {
      fname: fname,
      lname:lname,
      username: username,
      email: email,
      password: password
    }
    const token = jwt.sign(tokenContents, process.env.SIGNUPSECREKEY)
    const link = `${process.env.SIGNUPDESTINATION}/${token}`
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
try {
	  let info =await transporter.sendMail(mailOptions);
      console.log("well done");
      console.log(info.messageId);
	    return res.json({
	      Success: `Email link confirmation was sent to your email address ${email}`
	    })
}
 catch (error) {
  console.log("well wrong");
  return res.status(400).json({
    Success: `something were wrong`
  })	
}
  }
};
module.exports = handler;