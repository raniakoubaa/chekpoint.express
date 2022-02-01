const express=require('express')
const app=express()
const path=require('path')
const port=process.env.port||4000
const date= new Date();
app.listen(port, err => err?console.log(err):console.log(`This server is running ... ${port}`))
const midd=(req,res,next)=>{
    if(date.getDay()!=0 && date.getDate()!=6 && date.getHours()>=9 && date.getHours()<=17 ){
        console.log("open")
        next()
    }
    else{
        res.send("<h1> The web application is not available during this hours : <br>"+date+"  </h1>")
    // console.log("close")
    }
}
app.use(midd)
 app.use(express.static(path.join(__dirname, 'public')))
//  const phone=require('./api/phone')
