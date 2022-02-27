const express = require('express')
const router = express.Router()
const listRouter = require('./list/index.js')
const {pool} = require('../../db.js')

router.get('/list',(req,res)=>{
    pool.getConnection( (err,conn)=>{
        conn.query('select * from board order by idx DESC;',(error,result)=>{
            conn.release();
            // 반환 ㄱㄱ

            let date_obj = result[0].date
            let date = JSON.stringify(date_obj);
            
            for (let i=0; i<result.length; i++){
                result[i].date = date.substring(1,11)
            }
            let list = result
            
            res.render('board/list.html',{
                list,
            })
        })
    })
})

router.use('/list',listRouter) //

module.exports = router