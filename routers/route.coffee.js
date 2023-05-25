const {Router} = require("express")
const {coffeeController} = require("../controllers/controller.coffe")
const router = Router()

// coffee.route.js


router.get('/coffee', coffeeController.getdrinks)
router.get('/coffee/:id', coffeeController.getdrinksId)
router.get('/coffee/is/stock', coffeeController.getdrinksinstock)
router.post('/coffee', coffeeController.postdrinks)
router.delete('/coffee/:id', coffeeController.deletedrinksId)
router.patch('/coffee/:id', coffeeController.patchdrinksId)










module.exports = router