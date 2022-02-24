const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const boardRouter = require('./board')
const mainController = require("./main.controller");
const adminRouter = require('./admin')

router.get('/',mainController.main)
router.use('/user',userRouter)
router.use('/board',boardRouter)
router.use('/admin',adminRouter)


module.exports = router