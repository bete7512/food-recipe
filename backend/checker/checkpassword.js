const bcrypt = require('bcrypt')
const HASURA_OPERATION = `
query password($username:String!) {
  users(where: {username: {_eq: $username}}) {
    password
  }
}
`;
const execute = async (variables) => {
    const fetchResponse = await fetch(
        "http://localhost:8080/v1/graphql",
        {
            method: 'POST',
            headers:{
                'x-hasura-admin-secret': 'adminsecretkey'
              },
            body: JSON.stringify({
                query: HASURA_OPERATION,
                variables
            })
        }
    );
    const data = await fetchResponse.json();
    return data;
};
const passwordcheck = async (username) => {
    const { data } = await execute(username);
    console.log('for the purpose of it')
    console.log(data["users"][0]["password"])
    const old = data["users"][0]["password"]
    if (old) {
        return old
    }
};
module.exports = passwordcheck;