const HASURA_OPERATION = `
query signin($username:String!,$password:String!) {
  users(where: {email: {_eq: $username}, password: {_eq: $password}}) {
    id
  }
}
`;

module.exports =  HASURA_OPERATION