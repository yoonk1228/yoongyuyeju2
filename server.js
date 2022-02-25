const express = require('express')
const app = express();
const nunjucks = require('nunjucks')
const router = require('./routers')
const session = require('express-session')
const Memorystore = require('memorystore')(session)
const PORT = process.env.PORT || 3000

app.set('view engine','html')
nunjucks.configure('views',{
  express:app,
})

app.use(express.static('public'))
app.use(express.static('public/js'))
app.use(express.urlencoded({extended:true,}))

const maxAge = 1000*60*60 //60분
let sessionObj = {
    secret: "ygyj",
    resave : false,
    saveUninitialized: true,
    store: new Memorystore({ checkPeriod: maxAge}),
    cookie:{
        maxAge:maxAge
    }
}

app.use(session(sessionObj))
app.use('/',router)

app.listen(PORT,()=>{
  console.log(`node mini project 서버시작!!!, 포트번호 : ${PORT}`)
})