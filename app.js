// a simple static file server
const express = require('express');
const path = require('path');
const app = express();

app.set('port', 10084);

// serve static assets
app.use(express.static(path.join(__dirname, 'dist')));

// Handles all routes to avoid found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('huoshui webapp started at ' + port);
});
