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
    
<<<<<<< HEAD
}
=======
        let new_user = req.body  //새로입력된 데이터
        let user = req.session //기존 데이터
        const arr = ['userpw', 'nickname', 'gender', 'address', 'email', 'tel', 'birth']
        let modify = [];
        let success = ['성공'];
        let err = [];
        let count = modify.length
        arr.forEach((e)=>{
            if (user[e] != new_user[e]){
                user[e] = new_user[e]
                modify.push(e)
            }
        })
        console.log("변경된사항", user)
        console.log(modify) //변경된 key값
        
        
        modify.forEach((e)=>{
            
            conn.query(`update personal set ${e}='${user[e]}' where userid='${user.userid}';`,(error,result)=>{
                
                if (result){
                    console.log(result)
                    console.log(e)
                    success.push(e)
                } else if(error){
                    console.log(error)
                    console.log(e)
                    err.push(e)
                    throw error
                    
                }
                
            })
             
        })
        console.log(success)
        console.log(err)
        
        
        
        

        // res.send(alertmove('/user/profile','글 수정이 완료되었습니다.'))
    }


    )}
>>>>>>> 4059abd464e1fbe5643a624fe1a484e8db7ab6fa
