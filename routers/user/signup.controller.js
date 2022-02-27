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
                let msg = `회원가입이 완료되었습니다. 로그인 해주세요\\n이름 : ${username}\\n별명 : ${nickname}\\n성별 : ${gender}\\n주소 : ${localadd}\\n이메일 : ${email}\\n전화번호 : ${tel}\\n생일 : ${birth}`;
                res.send(alertmove('/',msg)) //회원환영페이지 이동
            }
            else if(error.errno == 1062){
                console.log(error)
                console.log(error.sqlMessage)
                if(error.sqlMessage.includes('personal.PRIMARY')){
                    res.send(alertmove('signup', '중복된 아이디입니다. 다시 진행해주세요.'))
                } else if(error.sqlMessage.includes('personal.nickname')){
                    res.send(alertmove('signup', '중복된 닉네임입니다. 다시 진행해주세요.'))
                } else if(error.sqlMessage.includes('personal.email')){
                    res.send(alertmove('signup', '이미 가입된 이메일입니다. 다시 진행해주세요.'))
                } else if(error.sqlMessage.includes('gender')){
                    res.send(alertmove('signup','성별을 선택해주세요.'))
                }
                
            } else {
                
                console.log(error)
                throw error
            }
            
        })
        
        
    })


}


