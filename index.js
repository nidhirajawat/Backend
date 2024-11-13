import express from "express";
import cors from "cors";
let app = express()


app.use(cors())
app.get("/todo",(req,res)=>{
    res.status(200).send({message:"e-commerce or electronic commerce is th buying and selling of goals and services",title: "e-commerce",name:"nidhi",
    })
app.post("/todo",)
})
app.post('/todo',(req,res)=>{
    res.send(200).send({message:"hi i'am Laptop", title:"shopping-cart",name:"LG",})
})
const PORT = 8000
app.listen(PORT,()=>{
    console.log("Hii server is ready");
})


