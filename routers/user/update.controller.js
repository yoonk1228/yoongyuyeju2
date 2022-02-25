const db = require('../../db')
const {alertmove} = require('../../util/alert')

exports.Update = (req, res)=>{
    const user = req.session
    console.log(user)
    
    res.render('user/infoupdate',{
        user:user
    })
}

exports.UpdateAction = (req, res)=>{
    db.pool2(conn => {
        
    
        //새로입력된 데이터12345
        // let user = req.session //기존 데이터 1234

        
        const arr = ['userpw', 'nickname', 'gender', 'localadd', 'email', 'tel', 'birth']
        let modify = [];
        let success = [];
        let err = [];
        let count = modify.length
        
        let {
            userid,
            userpw,
            username,
            nickname,
            gender,
            localadd,
            email,
            tel,
            birth} = req.session
        
        conn.query(`update personal set userpw='${req.body.userpw}', username='${req.body.username}', nickname='${req.body.nickname}',gender='${req.body.gender}',localadd='${req.body.localadd}',email='${req.body.email}',tel='${req.body.tel}',birth='${req.body.birth}' where userid='${req.body.userid}';`,(error,result)=>{
            
            if (result){
                
                req.session.nickname = req.body.nickname
                req.session.save(function() {
                    console.log(req.session)
                    res.send(alertmove('/user/profile', '회원정보 수정이 완료되었습니다.'))
                })
            
            }else if (error){
                
                if(error.errno == 1406){
                  res.send(alertmove('/user/update', '글자수를 확인해주세요.'))  
                }
                else{throw error}
                
            }
            

            })
    
            // console.log("변경된사항", user)
            // console.log(modify) //변경된 key값
        
   
        // res.send(alertmove('/user/profile','글 수정이 완료되었습니다.'))
    })
}
