require('dotenv').config()
const mysql=require('mysql')

// 테스트용 db2.js
const host = process.env.DB_HOST || 'localhost'
const user = process.env.DB_USER || 'rhdpfls12'
const password = process.env.DB_PASSWORD || 'rhdpfls12'
const database = process.env.DB_DATABASE || 'YGYJ'

const config = {host,user,password,database}
const pool = mysql.createPool(config)

pool.getConnection((error,connection)=>{
    connection.query('select * from YGYJ',(error,result)=>{
        if(!error){
            console.log(result)
            connection.release()
        }else{
            throw error
        }
    })
})

// module.exports = pool