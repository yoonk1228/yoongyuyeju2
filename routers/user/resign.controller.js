const db = require('../../db')
const {alertmove} = require('../../util/alert')

exports.resignAction = (req, res) => {
    db.pool2(conn => {
        
        // console.log('req.body:' , req.body)
        conn.query(`delete from personal where userid = '${req.session.userid}'`,  (err, result)=>{
            // console.log("결과", result, err)
            if (result){
                req.session.destroy(()=>{
                    req.session
                })
                res.send(alertmove('/', '회원탈퇴가 완료되었습니다. 메인페이지로 이동합니다.'))               
            }else if (err) throw err
            
            
        })
    })

}

//`delete * from personal where userid = ${req.session.userid};`