const express = require('express')
const router = express.Router()
const pool = require('../../../db.js')




//  --------------- http://localhost:3000/board/list/ㄱㄱㄱㄱㄱ -------------

router.get('/view',(req,res)=>{
    pool.getConnection( (err,conn)=>{
        let index = req.query.index
        conn.query(`SELECT * FROM board WHERE idx=${index}`,(error,result)=>{
            let [data] = result
            conn.release();
            res.render('board/list/view.html',{
                data,
                index,
            })
        })
    })
})

    // 게시물이 올라가는 데이터베이스에 하나씩 올라갔겠지?
    // 걔네들은 배열로 만들어져있어야하고 배열은 하나하나 인덱스가 있다.
    // 그 인덱스값을 보여주게 만들어주는 작업을 하면된다.
    // let index = req.query.index
    // let viewdata = 게시물데이터베이스이름[인덱스값] 을 세팅하고 
    // 넌젹스로 index값을 부여한 list의 게시물들을 볼수있게 만들자.


router.get('/write',(req,res)=>{
    
    res.render('board/list/write.html')
})




router.post('/write',(req,res)=>{
    let subject = req.body.subject
    let nickname = req.body.nickname
    let story = req.body.story

    pool.getConnection( (err,conn)=>{
    conn.query(`insert into board (subject,nickname,story) values("${subject}","${nickname}","${story}")`,(error,result)=>{
        // console.log(result)
        if(error) throw error
        console.log(result)
        res.redirect('/board/list')
        })
        conn.release()
    })
})


router.post('/delete',(req,res)=>{
    let index = req.body.index

    pool.getConnection( (err,conn)=>{
        conn.query(`delete from board where idx=${index}`,(error,result)=>{
            // if(error) throw error
            // 에러가 뜨면 걍 진행해라
            res.redirect('/board/list')
            conn.release()
        })
    })
})

// router.post('/delete',(req,res)=>{
//     let index = req.body.index-1
//     boarddata.splice(index,1) 
//     res.send(alertmove('/board/list','글삭제가 완료되었습니다.'))
// })
    // 코드는 많아보이지만 뭐 없다. 그냥 그 글에 해당하는 index값을 DB에서 splice로 지워버리는 형식
    // 그 후 다시 list 로 돌아간다.





router.get('/update',(req,res)=>{
    res.render('board/list/update.html')
})

// router.get('/update',(req,res)=>{
//     let index = req.query.index
//     let data = boarddata[index-1]
//     res.render('board/update',{
//         index,
//         data,
//     })
// })
    // 내가 원하는글 즉, 내가원하는 인덱스값을 URI에 집어넣고 불러옴.
    

    
router.post('/update',(req,res)=>{
    res.send('updatepost')
})

// router.post('/update',(req,res)=>{
//     let index = req.body.index
//     let updatedata = {
//         subject:req.body.subject,
//         username:req.body.username,
//         date:req.body.date
//     }
//     boarddata[index-1] = updatedata
//     res.send(alertmove('/board/list','글수정이 완료되었습니다.'))
    // input박스에있는 내용들을 updatedata객체로 만듦
    // 그걸 DB에 인덱스값에 대입연산자로 변경해버림
    // 그리고 리스트로 redirect ㄱㄱ


module.exports = router