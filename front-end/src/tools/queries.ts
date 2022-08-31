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
    rating
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
    user {
      email
      name
    }
    comments {
      comment
      commented_at
      star
      user {
        name
      }
    }
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
      rating
      images
      ingredient
      instructions
      isfavorite
      isliked
      owner
      title
      user {
      email
      name
    }
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
    rating
    durations
    descriptions
    categories
    Like_number
    user {
      email
      name
    }
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
    rating
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
    comments {
      comment
      commented_at
      star
      user {
        name
      }
    }
  }
}
 `
 const comment_mutation = gql`
mutation MyMutation($recipe_id: Int!, $comment: String!,$star: Float!) {
  insert_comment(objects: { recipe_id: $recipe_id,comment: $comment, star: $star}) {
    returning {
      comment
    }
  }
}
 `


const user_query = gql`
query MyQuery($id: Int!) {
  user(where: {id: {_eq: $id}}) {
    name
    id
    email
    username
    recipes {
      title
      rating
      images
      descriptions
      durations
      id
      Like_number
      categories
      isfavorite
      isliked
      owner
      instructions
      ingredient
    }
  }
}

`
 export {register,signin,addrecipe,recipequery,checkfavorite,addtofavorite,removefavorite,addlikes,deletelikes,
  favoritequery,unauthenticatedquery,file_upload,recipe_by_id,comment_mutation,user_query};