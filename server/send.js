require('dotenv').config({path: __dirname + '/../.env'})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const TO_NUMBER = process.env.VONAGE_TO_NUMBER
const VONAGE_BRAND_NAME = process.env.VONAGE_BRAND_NAME

const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "e224deb7",
  apiSecret: "fs5DxvrLybcFDYKx"
})

const from = "Vonage APIs"
const to = "94759125043" 
const text = 'A text message sent using the Vonage SMS API'

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})