/* GET locations page */
var about = function(req, res){
  res.render('generic-text', { title: 'About' });
};

module.exports.about = about;
