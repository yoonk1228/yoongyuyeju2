const express = require('express')
const router = express.Router()
const listRouter = require('./list/index.js')
const pool = require('../../db.js')

router.get('/list',(req,res)=>{
    pool.getConnection( (err,conn)=>{
        conn.query('select * from board order by idx DESC;',(error,result)=>{
            conn.release();
            // 반환 ㄱㄱ
            let listdata = result
            
            res.render('board/list.html',{
                list:listdata
            })
        })
    })
})

router.use('/list',listRouter) //

module.exports = router