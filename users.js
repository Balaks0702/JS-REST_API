const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://twitter32.p.rapidapi.com/getProfile',
    params: { username: 'nike' },
    headers: {
        'x-rapidapi-key': '5f5f94d684msh15a8f201f34fe47p167e25jsn0e4f41f73d42',
        'x-rapidapi-host': 'twitter32.p.rapidapi.com'
    }
};

axios.request(options).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.error(error);
});