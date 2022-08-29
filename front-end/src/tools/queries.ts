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
mutation addnewrecipe($title: String!, $instructions: String!, $images: String!, $descriptions: String!, $categories: String!, $durations: Int!, $ingredient: String!) {
  insert_recipe(objects: {descriptions: $descriptions, images: $images, instructions: $instructions, title: $title, categories: $categories, durations: $durations, ingredient: $ingredient}) {
    returning {
      title
    }
  }
}
`
const checkfavorite = gql`
query MyQuery($id: Int!) {
  favorite(where: {recipe_id: {_eq: $id}}) {
    recipe_id
  }
}
`
const recipequery = gql`
query MyQuery {
  recipe {
    id
    title
    owner
    instructions
    Like_number
    isliked
    isfavorite
    ingredient
    images
    durations
    descriptions
    categories
  }
}
`
const favoritequery = gql`
query MyQuery {
  favorite {
    recipe {
      Like_number
      categories
      descriptions
      durations
      id
      images
      ingredient
      instructions
      isfavorite
      isliked
      owner
      title
    }
  }
}
`
const addtofavorite = gql`
mutation MyMutation($recipe_id: Int!) {
  insert_favorite(objects: {recipe_id: $recipe_id}) {
    returning {
      recipe_id
    }
  }
}
 `
 const removefavorite = gql`
mutation MyMutation($id: Int!) {
  delete_favorite(where: {recipe_id: {_eq: $id}}) {
    returning {
      recipe_id
    }
  }
}
 `
const unauthenticatedquery = gql`
query MyQuery {
  recipe {
    title
    owner
    instructions
    ingredient
    images
    id
    durations
    descriptions
    categories
    Like_number
  }
}
`
 const addlikes = gql`
 mutation MyMutation($id:Int) {
  insert_likes_one(object: {recipe_id: $id}) {
    recipe_id
  }
}
 `
 const deletelikes = gql`
 mutation MyMutation($id:Int) {
  delete_likes(where: {recipe_id: {_eq: $id}}) {
    returning {
      recipe_id
    }
  }
}
 `
 const file_upload = gql`
 mutation MyMutation($base64str: String!, $name: String!, $type: String!) {
  fileupload(base64str: $base64str, name: $name, type: $type) {
    file_path
  }
}
 `

 const recipe_by_id = gql`
 query MyQuery($id: Int!) {
  recipe_by_pk(id: $id) {
    title
    isliked
    isfavorite
    instructions
    ingredient
    images
    id
    durations
    descriptions
    categories
    Like_number
    owner
    user {
      username
    }
  }
}
 `
 export {register,signin,addrecipe,recipequery,checkfavorite,addtofavorite,removefavorite,addlikes,deletelikes,favoritequery,unauthenticatedquery,file_upload,recipe_by_id};