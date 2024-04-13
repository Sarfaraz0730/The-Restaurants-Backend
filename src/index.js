const express = require("express")
const app = express()
const PORT =8000;

app.get("/",(req,res)=>{
    res.status(200).send("App setup process begin")
})

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`)
})