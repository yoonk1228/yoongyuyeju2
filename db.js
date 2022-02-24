require('dotenv').config()
const mysql = require('mysql2')


const host = process.env.DB_HOST || 'localhost'
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_DATABASE || 'YGYJ'

const config = {host,user,password,database,connectionLimit: 10}
const pool = mysql.createPool(config)

//여기부터 아래 주석까지 '규리' 만듦 user 에서 사용
const pool2 = (cb) => {
    pool.getConnection((err,conn)=>{
        if(!err) {
            cb(conn)
        }

        pool.releaseConnection(conn)
    })
}
//여기까지
module.exports = {

    pool,
    pool2
    
}



