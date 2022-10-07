const cloudinary = require('../cloudinary/cloudinary')
// const upload = require('../cloudinary/multer')
// console.log(upload);
const handler = async (req, res) => {
  console.log("Key assett");
    try {
      const { name, type, base64str } = req.body.input;
      let filebuffer = Buffer.from(base64str, 'base64')
      console.log(filebuffer);
      const result = await cloudinary.uploader.upload(`data:image/jpg;${base64str}...`)
      // const result = await cloudinary.uploader.upload(req.file.path);
      console.log("jsdkcgklvwefuhuoh"+result);
      return res.json({
        file_path: `http://localhost:4000/${name}`
      })
    }
    catch (e) {
      console.log(e);
      return res.status(400).json({
        message: 'from cloudinary error'
      })
    }
  }
  module.exports =  handler