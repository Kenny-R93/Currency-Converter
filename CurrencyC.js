// API URL & API ID KEY
const API_URL = "https://api.exchangeratesapi.io/v1/"
const APIKEY = "MpULk3uuZ16I9Yz2HCgOI95cd62IwdTw"


// Constant Variables
const baseCurrency = document.getElementById("base-currency")
const currencyAmountInput = document.getElementById("amount")
const targetCurrency = document.getElementById("target-currency")
const convertedAmount = document.getElementById("converted-amount")

const histRateBtn = document.getElementById("historical-rates")
const histRateOutput = document.getElementById("historical-rates-container")


const saveFavBtn = document.getElementById("save-favorite")
const saveFavPairs = document.getElementById("favorite-currency-pairs")

const baseCurrencySelector = document.getElementById("base-currency")
const targetCurrencySelector = document.getElementById("target-currency")



// Event Listeners
currencyAmountInput.addEventListener("change",);
histRateBtn.addEventListener("click",);
saveFavBtn.addEventListener("click",)

baseCurrencySelector.addEventListener("click",);
targetCurrencySelector.addEventListener("change",);



//Example
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




// Function to fetch Exchange Rates from API
let myHeaders = new Headers();
myHeaders.append("apikey", "MpULk3uuZ16I9Yz2HCgOI95cd62IwdTw");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};



function getExchangeRates() {
    const baseCurrency = baseCurrency.value
    const targetCurrency = targetCurrency.value
    const currencyAmountInput = currencyAmountInput.value
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${targetCurrency}&from=${baseCurrency}&amount=${currencyAmountInput}`, requestOptions)
        .then(response => response.json())
        .then((data) => {
            const rate = data.info.rate
            getCurrency(rate);
        })
        .catch(error => alert("Error Fetching Exchange Rate Data", error));
}


// function getExchangeRates() {
//     fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${targetCurrency}&from=${baseCurrency}&amount=${currencyAmountInput}`, requestOption)
//         .then(response => response.json())
//         .then((exchangeRateData) => {
//            const currencyAmountInput = document.getElementById("amount").Value;
//            const targetCurrency = document.getElementById("targetCurrency").value;
//            const exchangeRateData = data.rates[targetCurrency];
//            const convertedAmount = inputAmount * exchangeRateData;
//            convertedAmount.innherHTML = rate;
//         })
//         .catch(error => console.log("Error Retching Exchange Rate Data", error));
// }


// Function to Convert Currency
function getCurrency(result) {
    let amtConverted = amount.value * result;
    amtConverted.innerHTML = amtConverted.innerHTML + " " + targetCurrency.value;
}


// Function to fetch Historical Exchange Rates from API for a specific date
function getHistoricalExchangeRates() {
    let base = baseCurrency.value
    let symbol = targetCurrency.value
    // let date = document.getElementById('date-input').value;

    fetch(
        `https://api.apilayer.com/exchangerates_data/2022-05-05?symbols=${symbol}&base=${base}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          //finding data
          const histRate = data.rates;
          const res = Object.keys(histRate)[0];
          //displaying data
          histRateOutput.innerHTML = "Historical exchange rate on 2022-05-05: 1 " + base + " = " + histRate[res] + " " + symbol
        })
        .catch((error) => alert("Error fetching historical rates data", error));
    }

// Function to Display Historical Exchange Rates


// Function to Display Favorite Currency Pairs
function saveFavoritePair() {
    const base = baseCurrency.value;
    const target = targetCurrency.value;
  
    // Check if the pair is already saved
    const pair = JSON.parse(localStorage.getItem("FavoritePairs")) || [];
    const isSaved = `${base}_${target}`;
    if (pairs.includes(isSaved)) {
      alert("This pair is already saved.");
      return;
    }
    // Save the pair
    pair.push(isSaved);
    localStorage.setItem("FavoritePairs", JSON.stringify(pair));
    const html = pair.map((p) => `<p>${p}</p>`).join("");
    favoritePairsContainer.innerHTML = html;

}

saveFavoritePair();