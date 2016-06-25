/* GET locations page */
var locationInfo = function(req, res){
  res.render('location-info', { title: 'location Info' });
};

var addReview = function(req, res){
  res.render('location-review-form', { title: 'Review'});
};

module.exports.locationInfo = locationInfo;
module.exports.addReview = addReview;
