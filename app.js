const express = require("express")
const app = express()
const path = require("path")
const ejs = require("ejs")

const collection=require("./model/user")

//const templatePath= path.join(__dirname,'../templates')

app.use(express.json())

app.set("view engine", "ejs");

//app.set("views", templatePath)

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    res.render("index")
})

app.post("/index", async (req,res)=>{

    const data = {
        name: req.body.name,
        password: req.body.password
    }
    await collection.insertMany([data])
    res.render("index")
})

app.post("/index", async (req,res)=>{

    try{
        const check =await collection.findOne({name:req.body.name})

        if (check.password===req.body.password){
            res.render("index")
        }
        else{
            res.send("Wrong password")
        }
    }
    catch{
        res.send("wrong details")
    }
})

app.listen(4600,()=>{
    console.log("Server running");
})