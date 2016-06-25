/* Require the locations controller for locations page */
var ctrlOthers = require('../app_server/controllers/others');
 module.exports = function (app) {
   app.get('/about', ctrlOthers.about);
};
