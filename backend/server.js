const express = require('express')
require('dotenv').config()
const bodyparser = require('body-parser')
const confirm = require('./handler/confirm')
const app  = express();

app.use(express.json({limit: '200mb'}));
app.use(express.urlencoded({limit: '200mb'}));
app.use(bodyparser.json({limit:'50mb'}))
app.use(express.static('public'))
app.get('/confirm/:route',confirm)
app.post('/:route', (req,res)=>{
  try{
    const handler = require(`./handler/${req.params.route}`);
      if(!handler){
      return res.status(400).json({
        message:'not found'
      })
      }
    
    handler(req,res);
  }
  catch(e){
    return res.status(400).json({
      message:'unexpected error occured'
    })
  }
})
app.listen(3000,
    () => {
      console.log("on the moon")
    }
  );