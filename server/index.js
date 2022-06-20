require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")
const multer = require('multer')
const app = express()
const PropertyModel = require("./models/Property")
const upload = require("./middleware/upload-images");
const Grid = require("gridfs-stream")

const port = process.env.port || 8080

app.use(express.json())

let gfs, gridfsBucket;

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ex86f.mongodb.net/Project-Beam?retryWrites=true&w=majority`, {
    useNewUrlParser : true
})

mongoose.connection.once("open", () => {
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection("images")
    gridfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: 'images'
      });
})


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'content-type') 
    next();
  });

app.get("/", async (req, res) => {
    try{
        const properties = await PropertyModel.find()
        // console.log(properties)
        res.json(properties.slice(0,2))
        console.log("Sent property data")
    } catch(error){
        console.log(error)
        console.log("Could not retrieve property data")
    }
})

app.get("/test/:filename", async (req, res) => {
    try{
        const file = await gfs.files.findOne({filename: req.params.filename})
        const readStream = gridfsBucket.openDownloadStream(file._id)
        readStream.pipe(res)
    } catch(error){
        console.log(error)
        res.send("Could not retrieve property data") 
    }
})

app.post("/add-property", async (req, res) => {
    try{
        await upload(req, res);
        console.log(req.files);
        var uploadedImages = req.body.images 
        if (req.files == undefined) {
            console.log("Upload an image")
        }
        const property = new PropertyModel({...req.body, images: req.files.map((file) => {return file.filename})})
        await property.save()
        console.log("Added property data")
    } catch(error){
        console.log(error)
        console.log("Could not retrieve property data")
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})