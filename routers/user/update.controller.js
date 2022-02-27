const db = require('../../db')
const {alertmove} = require('../../util/alert')

exports.Update = (req, res)=>{
    const user = req.session
    //console.log(user)
    
    res.render('user/infoupdate',{
        user:user
    })
}

exports.UpdateAction = (req, res)=>{
    db.pool2(conn => {
    
        let new_user = req.body  //새로입력된 데이터
        let user = req.session //기존 데이터
        const arr = ['userpw', 'username', 'nickname', 'gender', 'localadd', 'email', 'tel', 'birth'] // 변경가능한 컬럼값(회원정보)
        let modify_key = []; //정보가 변경된 컬럼명만 넣을 배열
        let modify = []; // 쿼리문 형태로 넣을 배열 
        arr.forEach((e)=>{
            if (user[e] != new_user[e]){
                //user[e] = new_user[e]
                modify_key.push(e)
                modify.push(`${e} = '${new_user[e]}'`) //["nickname = '귤'", 등등....]
            } // 변경사항이 있는 컬럼 추출 및 쿼리문에 들어갈 내용 생성
        })
        //console.log("변경된사항", user)
        

        let query = modify.join() //배열을 string으로 변경
        //console.log(query) // 출력결과 : nickname = '귤',gender = '여',localadd = '우리집'
   
        conn.query(`update personal set ${query} where userid='${req.body.userid}';`,(error,result)=>{
            //console.log("결과", result, error)
            if(error){
                if (error.errno == 1062){
                    if(error.sqlMessage.includes('personal.PRIMARY')){
                        res.send(alertmove('/user/profile', '중복된 아이디입니다. 다른 아이디를 입력해주세요.'))
                    } else if(error.sqlMessage.includes('personal.nickname')){
                        res.send(alertmove('/user/profile', '중복된 닉네임입니다. 다른 닉네임을 입력해주세요.'))
                    } else if(error.sqlMessage.includes('personal.email')){
                        res.send(alertmove('/user/profile', '중복된 이메일입니다. 다른 이메일을 입력해주세요.'))
                    }
                    
                }
                else if (error.errno == 1406){
                    res.send(alertmove('/user/profile', '글자수를 확인해주세요.'))
                }else if(error.errno == 1064){
                    res.send(alertmove('/user/profile', '변경된 사항이 없습니다.'))
                } else {
                    throw error
                }
                
            }else if (result){
                
                modify_key.forEach((e)=>{
                    //console.log("수정완료")
                    req.session[e] = req.body[e] //세션변경                   
                })
                res.send(alertmove('/user/profile', '프로필 수정이 완료되었습니다.'))
                
            }
            
        })

    }


    )}