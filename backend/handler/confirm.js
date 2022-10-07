const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
 require('dotenv').config()
 const HASURA_SIGNUP_OPERATION = `
 mutation MyMutation($username: String!, $password: String!, $email: String!, $lname: String!, $fname: String!) {
  insert_users_one(object: {fname: $fname, lname: $lname, email: $email, username: $username, password: $password}) {
    id
  }
}
 `;
 const execute = async (variables) => {
  const fetchResponse = await fetch(
    "http://localhost:8080/v1/graphql",
    {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': 'myadminsecretkey'
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
    const token = req.params.route;
    const payload = jwt.verify(token, process.env.SIGNUPSECREKEY)
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashed = bcrypt.hashSync(payload.password, salt);
    const user = {
        fname: payload.fname,
        lname: payload.lname,
        username: payload.username,
        email: payload.email,
        password: hashed
    }
    const { data, errors } = await execute(user);
    if(data){
      console.log(errors);
      console.log(data)
      res.send({
        message: "You are succefully registered"
      })
    }
    else{
      res.send({
        message: "something went wrong please try again"
      })
    }
    
};
module.exports =  handler