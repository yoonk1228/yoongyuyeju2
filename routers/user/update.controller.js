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
        const user = req.session
        console.log(user)
        // const index = req.body.index

        // list[index-1] = item
        res.send(alertmove(`/board/view?index=${index}`,'글 수정이 완료되었습니다.'))
    })
}