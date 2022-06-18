const mongoose = require("mongoose")

const propertySchema = new mongoose.Schema({
    images : [{
        type : String,
        required: true
        // data : Buffer,
        // contentType : String,
    }],
    address : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
    type : {
        type : String,
        required: true
    },
    year : {
        type : Number,
        required: true
    },
    area: {
        type : Number,
        required: true
    },
    beds : {
        type : Number,
        required: true
    },
    baths : {
        type : Number,
        required: true
    }
})

const Property = mongoose.model("Property", propertySchema)

module.exports = Property