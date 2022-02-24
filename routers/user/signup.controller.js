const db = require('../../db')

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
        adress,
        email,
        tel,
        birth} = req.body


    // let sql = `insert into personal(userid, userpw, username, nickname, gender, adress, email, tel, birth) values('${userid}','${userpw}','${username}', '${nickname}','${gender}', '${adress}', '${email}', '${tel}', '${birth}');`
    let sql2 = `INSERT INTO personal(userid,userpw,username,nickname,gender,adress,email,tel,birth)
    values(?,?,?,?ss,?,?,?,?,?)
    `
    let prepare = [userid,userpw,username,nickname,gender,adress,email,tel,birth]
    db.getConnection( conn => {
        conn.query( sql2, prepare, (error, result)=>{

            if (error.errno == 1062) {
                res.send('아이디 중복임 <a href="/user/signup">회원가입 다시하기</a>')}
            else if(error) throw error
            else if(result.affectedRows > 0) {
                res.redirect('/')
            }
            console.log(result)
        })
        conn.release()
        
    })


}


