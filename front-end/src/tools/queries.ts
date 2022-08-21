import gql from "graphql-tag";
const register = gql`
mutation signup($confirmpassword: String!, $email: String!, $password: String!, $username: String!,$name:String!) {
    register(objects: {confirmpassword: $confirmpassword, email: $email, password: $password, username: $username,name:$name}) {
      success
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