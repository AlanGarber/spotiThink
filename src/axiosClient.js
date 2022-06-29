const axios = require('axios').default;
var querystring = require('querystring');


const axiosClient= axios.create({
    baseURL:'http://localhost:3000'
})
export const logIn=async()=>{
    return axiosClient.get('https://accounts.spotify.com/authorize?'+
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }))
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
    