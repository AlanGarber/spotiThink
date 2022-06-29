const axios = require('axios').default;
var querystring = require('querystring');

var client_id = '9ac0f116a2644491a30bc88f221213ba';  
var client_secret = '6361ac29472d42649dd16775a9cd6a7b';
var redirect_uri = 'http://localhost:3000/callback';

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

axios.post("https://accounts.spotify.com/api/token")
    .then((response)=>{
        if (response.statusCode === 200) {
            console.log(response)
            // use the access token to access the Spotify Web API
            var token = body.access_token;
            var options = {
              url: 'https://api.spotify.com/v1/users/jmperezperez',
              headers: {
                'Authorization': 'Bearer ' + token
              },
              json: true
            };
            request.get(options, function(error, response, body) {
              console.log(body);
            });
          }
    }).catch((error)=>{
        console.log(error)
    })


