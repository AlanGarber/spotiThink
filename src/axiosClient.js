const axios = require('axios').default;


const axiosClient= axios.create({
    baseURL:'http://localhost:3000',
    headers:{
        Authorization: 'Bearer ' + access_token
    }
})

axios.get('/login')
    .then(

    )