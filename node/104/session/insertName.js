module.exports = (req, res, next) => {
    if (req.body.first && req.body.last) {
        req.session.userName = `${req.body.first} ${req.body.last}`;
        res.locals.userName = req.session.userName;
        req.session.isRedirect = true;
    }
    res.redirect("/")
}