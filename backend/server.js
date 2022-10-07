const express = require('express')
require('dotenv').config()
const app = express();
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({extended:true}));
app.get('/' ,(req,res)=>{
  return res.json({
    success:"well done "
  })
})
app.post('/:route', (req, res) => {
  try {
  console.log(req.body);
  console.log(req.params.route);
  const handler = require(`./handler/${req.params.route}`);
  console.log("here");
  if (!handler) {
      return res.status(400).json({
        message: 'not found'
      })
    }
    handler(req, res);
  }
  catch (e) {
    console.log(e);
    return res.status(400).json({
      message: 'unexpected error occured'
    })
  }
})
app.listen(3000,
  () => {
    console.log("on the moon")
  }
);