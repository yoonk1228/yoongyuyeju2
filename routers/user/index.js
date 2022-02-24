const express = require('express')
const router = express.Router()
const loginController = require('./login.controller')
const profileController = require('./profile.controller')
const signupController = require('./signup.controller')
// const updateController = require('./update.controller')
const resignController = require('./resign.controller')

router.get('/login',loginController.login)
router.post('/login',loginController.loginAction)

router.post('/logout', loginController.logoutAction)

router.get('/signup', signupController.join)
router.post('/signup', signupController.joinAction)

router.get('/profile', profileController.profile)


router.get('/update', (req,res)=>{
    res.render('user/infoupdate')
})


router.post('/update', (req,res)=>{
    res.send('회원정보수정 완료')
})

router.post('/resign', resignController.resignAction)


module.exports = router