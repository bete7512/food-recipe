const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
 require('dotenv').config()
 const HASURA_SIGNUP_OPERATION = `
 mutation Signup($name:String!,$username:String!,$email:String!,$password:String!){
   insert_user_one(object: {name:$name,username:$username, email: $email, password:$password}) {
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
    // const hashed = await bycript.hash(payload.password, 10)
    const user = {
        name: payload.name,
        email: payload.email,
        password: hashed,
        username: payload.username
    }
    const { data, errors } = await execute(user);
    
};
module.exports =  handler