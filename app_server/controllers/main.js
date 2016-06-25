/* GET home page */
var index = function(req, res){
  res.render('locations-list', { title: 'Home' });
};

module.exports.index = index;
