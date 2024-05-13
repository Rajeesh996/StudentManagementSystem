const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const cors=require("cors")
const env=require("./environments/environments")
const app=express()
app.use(cors())
app.use(bodyParser.json())


app.get("/test",(req,res)=>{
  res.send("Hello World")
})

mongoose.connect(`${env.mongo_url}/StudentManagement`).then(()=>
console.log("MongoDb connected")
).catch((error)=>{
  console.log(`MongoDb connection failed${error}`)
})

app.listen(env.port,()=>{
  console.log("App is Running on Port 5000")
}).on('error',(error)=>{
  console.error(`Error starting server: ${err.message}`);
  process.exit(1);
})