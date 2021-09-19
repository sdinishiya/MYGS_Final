const axios = require('axios');

const API_PRIVATE_KEY = "7408c264-2adf-4567-acc4-a46d74e8a9e0";

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
