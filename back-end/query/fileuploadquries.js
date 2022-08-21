
const FILE_UPLOAD = `
mutation MyMutation($base64str: String!, $name: String!, $type: String!, $user_id: Int!) {
  fileupload(arg1: {base64str: $base64str, name: $name, type: $type, user_id: $user_id}) {
    filepath
  }
}
`

module.exports = FILE_UPLOAD