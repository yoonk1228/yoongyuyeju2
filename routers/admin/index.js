const express=require('express')
const pool = require('../../db2')
const router=express.Router()

router.post('/forced_out',(req,res)=>{
    console.log('강퇴완료')
    res.send('강퇴')
})

router.post('/managing_board',(req,res)=>{
    console.log('게시판관리완료')
    res.send('게시판삭제')
})

router.post('/level_adjustment',(req,res)=>{
    console.log('등급관리완료')
    res.send('등급관리')
})

router.get('/',(req,res)=>{
    pool.getConnection((err,conn)=>{
        conn.query('SELECT * FROM board',(error,result)=>{
        
            res.render('admin/manage')
        })
    })
})

module.exports=router