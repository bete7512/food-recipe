import gql from "graphql-tag";
const register = gql`
mutation signup( $email: String!, $password: String!, $username: String!,$name:String!) {
    register(arg1: { email: $email, password: $password, username: $username,name:$name}) {
      Success
    }
  }
`
const  signin= gql`
mutation signin($password: String!, $username: String!) {
    signin(password: $password, username: $username) {
      token
    }
  }
`
export {register,signin};