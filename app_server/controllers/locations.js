/* GET locations page */
var locationInfo = function(req, res){
  res.render('index', { title: 'location' });
};

var addReview = function(req, res){
  res.render('index', { title: 'Review'});
};

module.exports.locationInfo = locationInfo;
module.exports.addReview = addReview;
