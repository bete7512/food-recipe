const FIND_USER = `
query finduser($username: String!) {
    users(where: {username: {_eq: $username}}, limit: 1) {
        id
        email
        username
        password
    }
}
`;
require('dotenv').config()
const finduser = async (variables) => {
    const fetchResponse = await fetch(
        "http://localhost:8080/v1/graphql",
        {
            method: 'POST',
            headers:{
                'x-hasura-admin-secret': 'myadminsecretkey'
              },
            body: JSON.stringify({
                query: FIND_USER,
                variables
            })
        });
    console.log('here is well')
    const data = await fetchResponse.json();
    return data;
};
module.exports = finduser;