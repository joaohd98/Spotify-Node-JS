let express = require('express');

let app = express();

port = process.env.PORT || 3001;

app.listen(port);

app.get('/', function(req, res) {
  res.json({hello : 'heroku'});
});

