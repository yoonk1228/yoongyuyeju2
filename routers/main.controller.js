exports.main = (req,res) => {
    // res.send(`메인페이지입니다`)
    const user = req.session;
    res.render('main', {user})

}