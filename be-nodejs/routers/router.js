const express = require('express')
const {controller} = require('../controllers')

const router = express.Router()

router.get("/employees", controller.getAll)
router.get("/employees/:id", controller.getById)
router.post("/employees", controller.create)
router.put("/employees/:id", controller.update)
router.delete("/employees/:id", controller.delete)

router.post("/reverse", controller.revs)
router.post("/fibonacci", controller.fibonacci)
router.post("/combination", controller.combination)

module.exports = router