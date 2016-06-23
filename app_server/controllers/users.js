/* GET home page */
var users = function(req, res){
  res.render('users', { title: 'Users' });
};

module.exports.users = users;
