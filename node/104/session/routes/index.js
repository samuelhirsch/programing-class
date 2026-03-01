var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.session.isRedirect) {
    delete req.session.isRedirect;
    return next();
  }
  req.session.visitedCount = req.session.visitedCount + 1 || 1
  next();

})
router.get("/", (req, res, next) => {
  res.locals.visitedCount = req.session.visitedCount;
  res.locals.userName = req.session.userName || ""
  res.render('layout', {
    appTitle: 'my session`s', partials: {
      content: 'index'
    }
  });
})


module.exports = router;
