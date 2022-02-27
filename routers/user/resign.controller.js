<<<<<<< HEAD
const db = require('../../db')
const {alertmove} = require('../../util/alert')

exports.resignAction = (req, res) => {
    db.pool2(conn => {
        // console.log(req.session)
        console.log('req.body:' , req.body)
        conn.query(`delete from personal where userid = '${req.session.userid}'`,  (err, result)=>{
            if (err) throw err
            console.log(req.session.userid)
            console.log(result)
        })
    })

}

=======
const db = require('../../db')
const {alertmove} = require('../../util/alert')

exports.resignAction = (req, res) => {
    db.pool2(conn => {
        // console.log(req.session)
        console.log('req.body:' , req.body)
        conn.query(`delete from personal where userid = '${req.session.userid}'`,  (err, result)=>{
            if (result){
                req.session.destroy(()=>{
                    req.session
                })
                res.send(alertmove('/', '회원탈퇴가 완료되었습니다. 메인페이지로 이동합니다.'))               
            }else if (err) throw err
            
            console.log(err)
            res.send(alertmove('/user/profile', '다시 시도해주세요.')) 
            
        })
    })

}

>>>>>>> 1d60adc1054418230679d5040c23264d2bb26c6f
//`delete * from personal where userid = ${req.session.userid};`