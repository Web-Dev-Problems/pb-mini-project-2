require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")
const multer = require('multer')
const app = express()
const PropertyModel = require("./models/Property")

const port = process.env.port || 8080

app.use(express.json())

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ex86f.mongodb.net/Project-Beam?retryWrites=true&w=majority`, {
    useNewUrlParser : true
})

const Storage = multer.diskStorage({
    destination: "uploads",
    fileName: (req, file, cb) => {
        cb(null,file.originalName + '-' + Date.now())
    }
})

const upload = multer({
    storage : Storage
}).any('testImage')


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'content-type')
    next();
  });

app.get("/", async (req, res) => {
    try{
        const properties = await PropertyModel.find()
        res.json(properties)
        console.log("Sent property data")
    } catch(error){
        console.log(error)
        console.log("Could not retrieve property data")
    }
})

app.post("/add-property", async (req, res) => {
    try{
        upload(req, res, (err) => {
            console.log(req.body.testImage)
            if(err){
                console.log(err)
            } 
            // else {
                // console.log(req.file)
                // }
            })
        const property = new PropertyModel(req.body)
        property.save()
        console.log("Added property data")
    } catch(error){
        console.log(error)
        console.log("Could not retrieve property data")
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})