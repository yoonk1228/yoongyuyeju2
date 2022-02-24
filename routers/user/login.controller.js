const db = require('../../db')
const {alertmove} = require('../../util/alert')

exports.login = (req,res) => {
    res.render('user/login')
}

exports.loginAction = (req,res)=>{
    let {userid,userpw} = req.body
    // console.log(userid, userpw)
    db.getConnection(conn =>{
        conn.query('SELECT * from personal where userid = ? and userpw = ?;', [userid, userpw], (error, result)=>{
            console.log(result)
            if(result.length !=0){ //로그인된거 => 메인홈페이지
            req.session.userid = result[0].userid;
            req.session.userpw = result[0].userpw;
            req.session.username = result[0].username;
            req.session.nickname = result[0].nickname;
            req.session.gender = result[0].gender;
            req.session.adress = result[0].adress;
            req.session.email = result[0].email;
            req.session.tel = result[0].tel;
            req.session.birth = result[0].birth;
            res.redirect('/')
        }

        else {res.send(alertmove('/user/login', '아이디와 패스워드를 확인하세요.'))} //안된거
    })

    })
}

exports.logoutAction = (req, res)=>{
    req.session.destroy(()=>{
        req.session
    })
    res.send(alertmove('/','로그아웃 완료'))
}
