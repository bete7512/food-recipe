import gql from "graphql-tag";
const register = gql`
mutation MyMutation($full_name: String!, $Lname: String!, $email: String!, $username: String!, $password: String!) {
  register(arg1: {full_name: $full_name, Lname: $Lname, email: $email, password: $password, username: $username}) {
    Success
  }
}
`
const signin = gql`
mutation login($password: String!, $username: String!) {
  login(arg1: {password: $password, username: $username}) {
    accessToken
  }
}
`
const addrecipe = gql`
mutation MyMutation($descriptions: String!, $durations: Int!, $title: String!, $instructions: String!, $ingredient: String!, $images: String!, $categories: String!) {
  insert_recipe(objects: {title: $title, descriptions: $descriptions, durations: $durations, instructions: $instructions, ingredient: $ingredient, images: $images, categories: $categories}) {
    affected_rows
  }
}
`

const recipequery = gql`
query MyQuery($offset: Int!, $limit: Int!) {
  recipe(offset: $offset, limit: $limit) {
   __typename
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
      full_name
    }
    comments {
      comment
      commented_at
      star
      user {
        full_name
      }
    }
  }
}
`

const search_query = gql`
query MyQuery($ingridient: String="", $categories: String="", $title: String="", $durations: Int = 0) {
  recipe(where:{_or:[{_or:[{categories: {_eq: $categories}},{durations: {_eq: $durations}}]}, {_or:[{ingredient: {_ilike: $ingridient}}, {title: {_ilike: $title}}]}]}) {
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
      full_name
    }
    comments {
      comment
      commented_at
      star
      user {
        full_name
      }
    }
}
}
`
const favoritequery = gql`
query MyQuery($offset: Int!, $limit: Int!) {
  favorite(offset: $offset, limit: $limit) {
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
      user{
      email
      full_name
    }
    }
  }
}
`
const addtofavorite = gql`
mutation MyMutation($recipe_id: Int!) {
  insert_favorite_one(object: {recipe_id: $recipe_id}) {
    recipe_id
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
query MyQuery($offset: Int!, $limit: Int!) {
  recipe(offset: $offset, limit: $limit) {
    title
    owner
    instructions
    ingredient
    images
    rating
    id
    durations
    descriptions
    categories
    Like_number
    user {
      email
      full_name
    }
  }
  users(order_by: {users_counted_recipe: desc}, limit: 5, offset: 0) {
    users_counted_recipe
    full_name
    email
    username
    id
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
        full_name
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
  users(where: {id: {_eq: $id}}) {
    full_name
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
export {
  register, signin, addrecipe, recipequery, addtofavorite, removefavorite, addlikes, deletelikes,
  favoritequery, unauthenticatedquery, file_upload, recipe_by_id, comment_mutation, user_query,search_query
};