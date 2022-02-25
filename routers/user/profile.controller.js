<<<<<<< HEAD

exports.profile = (req, res) => {
    const { user } = req.session;
    res.render('user/profile', { user })
    console.log(req.session)
=======

exports.profile = (req, res) => {
    const  user  = req.session;
    res.render('user/profile', { user })
    console.log(user)
>>>>>>> e5a2d83ed0d3e50957215e6a5218acb8575f5509
}