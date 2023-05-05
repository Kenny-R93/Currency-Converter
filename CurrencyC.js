// API URL & API ID KEY
const API_URL = "https://api.exchangeratesapi.io/v1/"
const KEY = "MpULk3uuZ16I9Yz2HCgOI95cd62IwdTw"


// Constant Variables
const baseCurrency = document.getElementById("base-currency")
const currencyAmountInput = document.getElementById("amount")
const targetCurrency = document.getElementById("target-currency")
const convertedAmount = document.getElementById("converted-amount")

const histRate = document.getElementById("historical-rates")
const histRateOutput = document.getElementById("historical-rates-container")

const saveFavBtn = document.getElementById("save-favorite")
const saveFavPairs = document.getElementById("favorite-currency-pairs")







// let myHeaders = new Headers();
// myHeaders.append("apikey", "Your API Key");

// let requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("URL", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));