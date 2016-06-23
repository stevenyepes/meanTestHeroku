/* Require the main controller for index page */
var ctrl = require('../app_server/controllers/main');
 module.exports = function (app) {
 app.get('/', ctrl.index);
};
