const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.json({limit: '200mb'}));
// app.use(express.urlencoded({limit: '200mb'}));
app.get('/:route', (req,res)=>{
  try{
    const images = require(`./public/${req.params.route}`);
      if(!images){
      return res.status(400).json({
        message:'not found'
      })
      }
      else{
        return res.json({
            images:`localhost:4000/${req.params.route}`
        })
      }
      }
  catch(e){
    return res.status(400).json({
      message:'unexpected error occured'
    })
  }
})
app.listen(4000,
    () => {
      console.log("on the moon")
    }
  );