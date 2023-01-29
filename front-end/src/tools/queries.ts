import gql from "graphql-tag";
const register = gql`
mutation MyMutation($fname: String!, $lname: String!, $email: String!, $username: String!, $password: String!) {
  register(arg1: {fname: $fname, lname: $lname, email: $email, password: $password, username: $username}) {
    Success
  }
}
`
const signin = gql`
mutation login($password: String!, $username: String!) {
  login(arg1: {password: $password, username: $username}) {
    accessToken
    id
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
query MyQuery{
  recipe{
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
      id
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
query MyQuery($ingridient: String="", $title: String="", $durations: Int = 0) {
  recipe(where:{_or:[{_or:[{durations: {_eq: $durations}}]}, {_or:[{ingredient: {_ilike: $ingridient}}, {title: {_ilike: $title}}]}]}) {
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
query MyQuery{
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
      user{
      email
      full_name
      id
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
const addlikes = gql`
 mutation MyMutation($id:Int) {
  insert_likes_one(object: {recipe_id: $id}) {
    recipe_id
  }
}
 `
const update_recipe = gql`
mutation MyMutation($id: Int = 10, $categories: String!, $title: String!, $instructions: String!, $descriptions: String!, $durations: Int!, $images: String!, $ingredient: String!) {
  update_recipe_by_pk(pk_columns: {id: $id}, _set: {title: $title, instructions: $instructions, categories: $categories, descriptions: $descriptions, durations: $durations, images: $images, ingredient: $ingredient}) {
    title
    descriptions
    images
    ingredient
    instructions
    categories
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
// const user_detail_public = gql`
//  query MyQuery($id: Int!) {
//   users_by_pk(id: $id) {
// full_name
//     id
//     email
//     username
//     bios
//     fname
//     lname
//     profile_image
//     public_name
//     users_counted_recipe
//     recipes{
//       title
//       rating
//       images
//       descriptions
//       durations
//       id
//       Like_number
//       categories 
//       owner
//       instructions
//       ingredient
//     }
//   }
// }
//  `


// const query_old_query = gql`
// query MyQuery($id: Int = 220) {
//   recipe_by_pk(id: $id) {
//     title
//     ingredient
//     instructions
//     durations
//     descriptions
//     categories
//     images
//   }
// }
// `
const user_query = gql`
query MyQuery($id: Int!) {
  users_by_pk(id: $id) {
    full_name
    id
    email
    username
    bios
    fname
    lname
    profile_image
    public_name
    users_counted_recipe
    recipes{
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
const update_profile = gql`
mutation MyMutation($bios: String!, $fname: String!, $email: String!, $lname: String!, $profile_image: String = "", $id: Int = 3) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {bios: $bios, fname: $fname, email: $email, lname: $lname, profile_image: $profile_image}) {
    bios
    email
    full_name
  }
}
`

const user_profile_query = gql`
query MyQuery($id: Int!) {
  users_by_pk(id: $id) {
    bios
    email
    fname
    full_name
    id
    username
    lname
    profile_image
    public_name
  }
}

`
export {
  register, signin, addrecipe, recipequery, addtofavorite, removefavorite, addlikes, deletelikes,
  favoritequery, file_upload, recipe_by_id, comment_mutation, user_query, search_query,
  update_profile, user_profile_query
};