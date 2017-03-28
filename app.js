// a simple static file server
const express = require('express');
const path = require('path');
const app = express();

app.set('port', 10084);
app.use(express.static(path.join(__dirname, 'dist')));

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('huoshui webapp started at ' + port);
});
