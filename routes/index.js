/* get the routes files*/
module.exports = function(app){
  require('./main')(app);
  require('./users')(app);
};
