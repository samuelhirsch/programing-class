var express = require('express');
var router = express.Router();


router.get("/", function (req, res, next) {
  const visitedCount = req.cookies.visited ? Number(req.cookies.visited) + 1 : 1;
  console.log(visitedCount)
  res.locals.visited = visitedCount;
  res.cookie('visited', visitedCount);
  let user = {};
  if (req.query.first && req.query.last) {
    user = {
      first: req.query.first,
      last: req.query.last
    }

    res.cookie('user', JSON.stringify(user));
  }
  else {
    if (req.cookies.user) {
      user = JSON.parse(req.cookies.user) || {};
    }
  }
  res.locals.firstName = user.first || "not set";
  res.locals.lastName = user.last || "not set"

  res.render('layout', {
    title: 'Express', partials: {
      content: 'index'
    }
  });

});



module.exports = router;
