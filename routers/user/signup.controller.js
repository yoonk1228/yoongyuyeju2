const db = require('../../db')
const {alertmove} = require('../../util/alert')
exports.join = (req,res)=>{
    res.render('user/signup')
}
console.log('되나?')
exports.joinAction = (req,res) => {
    let {
        userid,
        userpw,
        username,
        nickname,
        gender,
        localadd,
        email,
        tel,
        birth} = req.body


    // let sql = `insert into personal(userid, userpw, username, nickname, gender, localadd, email, tel, birth) values('${userid}','${userpw}','${username}', '${nickname}','${gender}', '${adress}', '${email}', '${tel}', '${birth}');`
    let sql2 = `INSERT INTO personal(userid,userpw,username,nickname,gender,localadd,email,tel,birth)
    values(?,?,?,?,?,?,?,?,?)
    `
    let prepare = [userid,userpw,username,nickname,gender,localadd,email,tel,birth]
    db.pool2( conn => {
        conn.query( sql2, prepare, (error, result)=>{
            if(result){
                console.log(result);
                res.send(alertmove('/', '회원가입이 완료되었습니다. 로그인을 해주세요.')) //회원환영페이지 이동
            }
            else if(error.errno == 1062){
                console.log(error)
                console.log(error.sqlMessage)
                if(error.sqlMessage.includes('personal.PRIMARY')){
                    res.send(alertmove('user/signup', '중복된 아이디입니다. 다시 진행해주세요.'))
                } else if(error.sqlMessage.includes('personal.nickname')){
                    res.send(alertmove('user/signup', '중복된 닉네임입니다. 다시 진행해주세요.'))
                } else if(error.sqlMessage.includes('personal.email')){
                    res.send(alertmove('user/signup', '이미 가입된 이메일입니다. 다시 진행해주세요.'))
                }
                
            } else {
                
                console.log(error)
                throw error
            }
            
        })
        
        
    })


}


