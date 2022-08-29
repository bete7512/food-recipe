const jwt = require('jsonwebtoken')
const fs = require('fs')
require('dotenv').config()
const HASURA_FILE_UPLOAD = `
mutation MyMutation($base64str: String!, $name: String!, $type: String!) {
    fileupload(base64str: $base64str, name: $name, type: $type) {
      file_path
    }
  }
`
const execute = async (variables) => {
    const fetchResponse = await fetch(
        "http://localhost:8080/v1/graphql",
        {
            method: 'POST',
            headers: {
                'x-hasura-admin-secret': 'myadminsecretkey'
            },
            body: JSON.stringify({
                query: HASURA_FILE_UPLOAD,
                variables
            })
        }
    );
    const data = await fetchResponse.json();
    console.log('DEBUG: ', data);
    return data;
};

const handler = async (req, res) => {
    console.log("well it is up to here");
    // get request input
    const { name, type, base64str } = req.body.input;
let filebuffer = Buffer.from(base64str,'base64')

fs.writeFileSync('./public/file/'+name,filebuffer,'base64')
// run some business logic


    /*
    // In case of errors:
    return res.status(400).json({
      message: "error happened"
    })
    */

    // success
    return res.json({
        file_path: "<value>"
    })
}
module.exports = handler