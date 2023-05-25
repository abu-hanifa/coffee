const mongoose = require("mongoose")

const coffeeSchema = mongoose.Schema({
   name:  String,
   price: Number,
   availability: Boolean,
   coffein: Boolean,
   volume: Number,
   description: String
})

const Coffee = mongoose.model('Coffee', coffeeSchema)
module.exports = Coffee