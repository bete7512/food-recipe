import gql from "graphql-tag";
const register = gql`
mutation register($password: String!, $username: String!, $email: String!, $name: String!, ) {
  register(arg1: {email: $email, name: $name,username:$username,password: $password}) {
    Success
  }
}
`
const  signin= gql`
mutation login($password: String!, $username: String!) {
  login(arg1: {password: $password, username: $username}) {
    accessToken
  }
}
`
const addrecipe = gql`
mutation MyMutation($title: String!, $instructions: String!, $images: String!, $descriptions: String!, $categories: String!, $durations: Int!, $ingredient: String!, $likes: Int = 0) {
  insert_recipe(objects: {descriptions: $descriptions, images: $images, instructions: $instructions, title: $title, categories: $categories, durations: $durations, ingredient: $ingredient, likes: $likes}) {
    returning {
      title
    }
  }
}
`
const recipequery = gql`
query MyQuery {
  recipe {
    title
    owner
    likes
    instructions
    ingredient
    images
    durations
    descriptions
    categories
  }
}
`
export {register,signin,addrecipe,recipequery};