/* Require the locations controller for locations page */
var ctrlLocations = require('../app_server/controllers/locations');
 module.exports = function (app) {
   app.get('/location', ctrlLocations.locationInfo);
   app.get('/location/review/new', ctrlLocations.addReview);
};
