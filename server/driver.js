

//How to send bulks

const { default: axios } = require("axios");

axios.get("http://localhost:3001/get-booking-data",{ 
    params: { 
        filter: "Declined" //change this with state 
    } 
}).then(response => {
    if(response.hasOwnProperty("data")){
        response.data.forEach(number => {
            sendSMS(number, "SMS STRING HERE")
        })
    }
}).catch(err => {
    console.log(err)
})

const sendSMS = (to, text) => {
    axios.post("http://localhost:3001/get-booking-data", {
        "to": to,
        "message": text
    }).then(response => {
        return response;
    }).catch(err => {
        return err;
    })
}