let express = require('express');
let request = require('request'); // "Request" library

let app = express();
app.listen(process.env.PORT || 3001);

app.use(express.json());

const client_id = "76f87d316726466e999bfb3164fc2114";
const client_secret = "d204dd5d9cb8492083f4dd712d25caa3";

app.post('/access-token', function(req, res) {

  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    form: {
      grant_type: 'authorization_code',
      code: req.body['code'],
      redirect_uri: req.body['redirect_uri']
    },
    json: true
  };

  console.log(authOptions);

  request.post(authOptions, function(error, response, body) {

    res.json(body);

  });

});


app.post('/refresh-token', function(req, res) {
  
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: client_id,
      password: client_secret
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: req.body['refresh_token'],
    },
    json: true
  };

  console.log(authOptions);

  request.post(authOptions, function(error, response, body) {

    res.json(body);

  });

});

