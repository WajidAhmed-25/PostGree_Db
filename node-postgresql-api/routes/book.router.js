const express = require("express")
const router = express.Router()

const bookController = require('../controllers/book.controller')

router.get("/", bookController.getAll)
router.get("/:id", bookController.getById)
router.post("/post", bookController.create)
router.put("/:id", bookController.updateById)
router.delete("/:id", bookController.deleteById)

// bilal lassan

router.post('/',bookController.register_doctor)
router.get('/doc',bookController.getAllDoctors)

module.exports = router