const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.static('public'))
app.use(express.json({ limit: '200mb' }));

app.post('/fileupload', (req, res) => {
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
})
app.get('/:route', (req, res) => {
  try {
    const images = require(`./public/${req.params.route}`);
    if (!images) {
      return res.status(400).json({
        message: 'not found'
      })
    }
    else {
      return res.json({
        images: `localhost:4000/${req.params.route}`
      })
    }
  }
  catch (e) {
    return res.status(400).json({
      message: 'unexpected error occured'
    })
  }
})
app.listen(4000,  () => {
    console.log("on the moon")
  }
);