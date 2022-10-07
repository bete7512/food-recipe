const handler = async (req, res) => {
    try {
      const { name, type, base64str } = req.body.input;
      let filebuffer = Buffer.from(base64str, 'base64')
  
      fs.writeFileSync('public/' + name, filebuffer, 'base64')
      return res.json({
        file_path: `http://localhost:4000/${name}`
      })
    }
    catch (e) {
      console.log("from here");
      return res.status(400).json({
        message: 'unexpected error occured'
      })
    }
  }
  

  

  module.exports =  handler