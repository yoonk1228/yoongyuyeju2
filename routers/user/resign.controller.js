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

//`delete * from personal where userid = ${req.session.userid};`