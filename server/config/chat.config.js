const axios = require('axios');

const API_PRIVATE_KEY = "d7df380c-6abb-4d94-b5f5-d446d2a4d381";

const addUserToChatEngine = async (data) => {
    axios({
        method: 'post',
        url: 'https://api.chatengine.io/users/',
        headers: {
            'PRIVATE-KEY': API_PRIVATE_KEY
        },
        data : data
    }).then((res) => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {addUserToChatEngine}
