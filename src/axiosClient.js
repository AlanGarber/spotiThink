const axios = require('axios').default;
var express = require('express');

var client_id = '9ac0f116a2644491a30bc88f221213ba';
var redirect_uri = 'http://localhost:3000/callback';
var scope = 'user-read-private user-top-read';

var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  var state = generateRandomString(16);

const axiosClient= axios.create({
    baseURL:'http://localhost:3000'
})

let urlASumar=new URLSearchParams({
    response_type: 'code',
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri, 
    state: state
  }).toString();

export const logIn=async()=>{
    return axiosClient.get('https://accounts.spotify.com/authorize?'+urlASumar)
        .then(response=>{
            if(response.status<300){
                console.log(response.data)
                return response.data
            }else{
                console.log("La llamada salio, retorno error")
            }
        }
    )
}
    