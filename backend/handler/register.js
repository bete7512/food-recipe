require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')


const HASURA_SIGNUP_OPERATION = `
mutation MyMutation($username: String!, $password: String!, $email: String!, $lname: String!, $fname: String!) {
 insert_users_one(object: {fname: $fname, lname: $lname, email: $email, username: $username, password: $password}) {
   id
 }
}

`;
const execute = async (variables) => {
  const fetchResponse = await fetch(
    "https://sunny-glowworm-92.hasura.app/v1/graphql",
    {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': 'KwDGpDWBN8ZVHTUH7ovT2y7UOHBK4J62R9F6a4ETnGnK7Pn7LJSaqQcATyDYtYgE'
      },
      body: JSON.stringify({
        query: HASURA_SIGNUP_OPERATION,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};


const handler = async (req, res) => {
  const { fname, lname, username, email, password } = req.body.input.arg1;
  const finduser = require('../checker/findusername')
  const { data, error } = await finduser({ username, email })
  const user = data["users"][0]
  if (user) {
    return res.status(400).json({
      message: 'you are  registered no registratrion again'
    })
  }
  else {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashed = bcrypt.hashSync(password, salt);
    const variables = {
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      password: hashed
    }
    const { data, errors } = await execute(variables);
    if(data){
      console.log(errors);
      console.log(data)
      res.send({
        Success: "You are succefully registered"
      })
    }
    else{
      res.send({
        message: "something went wrong please try again"
      })
    }


    // const tokenContents = {
    //   fname: fname,
    //   lname: lname,
    //   username: username,
    //   email: email,
    //   password: password
    // }
    // const token = jwt.sign(tokenContents, process.env.SIGNUPSECREKEY)
    // const link = `${process.env.SIGNUPDESTINATION}/${token}`
    // let transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.MAIL_USERNAME,
    //     pass: process.env.MAIL_PASSWORD,
    //   }
    // });
    // let mailOptions = {
    //   from: process.env.MAIL_USERNAME,
    //   to: email,
    //   subject: 'Email confirmation',
    //   text: link
    // };
    // try {
    //   let info = await transporter.sendMail(mailOptions);
    //   console.log("well done");
    //   console.log(info.messageId);
    //   return res.json({
    //     Success: `Email link confirmation was sent to your email address ${email}`
    //   })
    // }
    // catch (error) {
    //   console.log("well wrong");
    //   return res.status(400).json({
    //     Success: `something were wrong`
    //   })
    // }
  }
};
module.exports = handler;