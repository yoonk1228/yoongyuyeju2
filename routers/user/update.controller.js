const db = require('../../db')
const {alertmove} = require('../../util/alert')

exports.Update = (req, res)=>{
    res.render('user/infoupdate')
}

exports.UpdateAction = (req, res)=>{
    console.log(req.session)
    res.send('됐나요?')
    // const index = req.query.index
    // const view = list[index-1]
    // res.render('board/update',{
    //     list:view,
    //     index:index
    // })
    
}