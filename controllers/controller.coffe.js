const Coffee = require("../models/Coffee.model")

// coffe.controller.js

module.exports.coffeeController = {
    getdrinks: (req, res) => {
        Coffee.find({}, {name: 1, price: 1} ).then((data) => {
            res.json(data)
        })
    },
    getdrinksId: (req, res) => {
        Coffee.findById(req.params.id).then((data) => {
            res.json(data)
        }
        )
            
        
    },
    getdrinksinstock: (req, res) => {
        Coffee.find({availability: true}).then((data) => {
            res.json(data)
        })
    },




    postdrinks: (req, res) => {
        Coffee.create({
            name:  req.body.name,
            price: req.body.price,
            availability: req.body.availability,
            coffein: req.body.coffein,
            volume: req.body.volume,
            description: req.body.description
        }).then((data) => {
            res.json(data)
        })
    },
    deletedrinksId: (req, res) => {
        Coffee.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },
    patchdrinksId: (req, res) => {
        Coffee.findByIdAndUpdate(req.params.id, {name: req.body.name}).then((data) => {
            res.json(data)
        })
    }

}