var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI;
}
mongoose.connect(dbURI);


mongoose.connection.on('connected', function (){
  console.log('mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function (err){
  console.log('mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function (){
  console.log('mongoose disconected');
});


// Close the moongose connection
var gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

// Close the connection when nodemon stop or restart
process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// Close the connection when the app stop
process.on('SIGINT', function () {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});

// Close the connection when Heroku restart
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});

// Require the locations model
require('./locations');
