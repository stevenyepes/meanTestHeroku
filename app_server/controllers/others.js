/* GET locations page */
var about = function(req, res){
  res.render('index', { title: 'About' });
};

module.exports.about = about;
