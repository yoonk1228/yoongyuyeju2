
exports.profile = (req, res) => {
    const { user } = req.session;
    res.render('user/profile', { user })
    console.log(req.session)
}