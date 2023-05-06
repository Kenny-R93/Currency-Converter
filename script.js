document.addEventListener("DOMContentLoaded", function() {
    getCurrencies();
// });
// API URL & API ID KEY
const API_URL = "https://api.exchangeratesapi.io/v1/"
const key = "MpULk3uuZ16I9Yz2HCgOI95cd62IwdTw";


// Constant Variables
const baseCurrency = document.getElementById(".base-currency")
const currencyAmountInput = document.getElementById(".amount")
const targetCurrency = document.getElementById(".target-currency")
const convertedAmount = document.getElementById(".converted-amount")

// const date = document.getElementById("date")

// Buttons
const historicalRateBtn = document.getElementById("historical-rates")
const historicalRateOutput = document.getElementById("historical-rates-container")

const saveFavBtn = document.getElementById("save-favorite")
// const saveFavPairContainer = document.getElementById("favorite-currency-pairs")

// const baseCurrencySelector = document.getElementById("base-currency")
// const targetCurrencySelector = document.getElementById("target-currency")


// Event Listeners
baseCurrency.addEventListener("channge", getExchangeRates)
targetCurrency.addEventListener("change", getExchangeRates);
currencyAmountInput.addEventListener("input", getExchangeRates);

historicalRateBtn.addEventListener("click", getHistoricalExchangeRates);
saveFavBtn.addEventListener("click", saveFavoritePair)



let myHeaders = new Headers();
myHeaders.append("apikey", key);

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


// Function to fetch currencies
function getCurrencies() {
    fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
    .then(response => response.json())
    .then(result => {
        populateCurrencyDropdown(result.symbols);
    })
    .catch(error => console.log("Error retrieving currencies",error));
}

// Function to populate the currency dropdown
function populateCurrencyDropdown(symbols) {
    for (const currencyCode in symbols) {        // Iterate over symbols
        const option = document.createElement("option");            // Create an option element with value
        option.value = currencyCode;
        option.textContent = `${currencyCode} - ${symbols[currencyCode]}`;
        baseCurrency.add(option.cloneNode(true));           // Add the option to both dropdown menus
        targetCurrency.add(option);
        }
    }



// Function to fetch Exchange Rates from API
function getExchangeRates() {
    fetch("https://api.apilayer.com/exchangerates_data/convert?from=${from}&to=${to}&amount=${amount}" , requestOptions)
        .then(response => response.json())
        .then((result) => {
            if (result.success) {
            convertedAmount.textContent = result.result.toFixed(2);
            } else {
                console.error("Could not Convert Currency", error);
            }
        })
        .catch(error => alert("Error Fetching Exchange Rate Data", error));
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
          
          const historicalRate = data.rates;            //finding data
          const res = Object.keys(historicalRate)[0];
        
          historicalRateOutput.innerHTML = "Historical exchange rate on 2022-05-05: 1 " + base + " = " + histRate[res] + " " + symbol             //displaying data
        })
        .catch((error) => alert("Error fetching historical rates data", error));
    }


// Function to fetch Exchange Rates from API
function getExchangeRates() {
    let from = baseCurrency.value;
    let to = targetCurrency.value;
    let amount = currencyAmountInput.value;
    const url = `https://api.apilayer.com/exchangerates_data/convert?from=${from}&to=${to}&amount=${amount}`;
  
    fetch(url , requestOptions)
        .then(response => response.json())
        .then((result) => {
            if (result.success) {
            convertedAmount.textContent = result.result.toFixed(2);
            } else {
                console.error("Could not Convert Currency", error);
            }
        })
        .catch(error => alert("Error Fetching Exchange Rate Data", error));
}




// Function to Save Favorite Currency Pairs
function saveFavoritePair() {
    const base = baseCurrency.value;
    const target = targetCurrency.value;
    const pair = JSON.parse(localStorage.getItem("FavoritePairs")) || [];           // Check if the pair is already saved in Local Storage
    const isSaved = `${base}_${target}`;

    if (pairs.includes(isSaved)) {
      alert("This pair is already saved.");
      return;
    }
    if  (!base || !target) {            // Check if both currencies are selected
        alert("Select both currencies");
        return;
    }

    pair.push(isSaved);             // Save the pair
    localStorage.setItem("FavoritePairs", JSON.stringify(pair));
    const pairDiv = document.createElement("div");             // Create HTML elements to display the favorite pair
    pairDiv.classList.add("favorite-pair");
    const pairText =document.createElement("span");
    pairText.classList.add("favorite-pair-text");
    pairText.innerText = `${base}/ ${target}`;

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-favorite");
    removeBtn.innerTExt = "Remove";
    removeBtn.addEventListener("click", () => {             // Remove the pair
        const index = pair.indexOf(pair);
        if (index > -1) {
            pairs.splice(index, 1);
        }
        localStorage.setItem("favoritePairs", JSON.stringify(pairs));
        pairDiv.remove();           // Remove pair div elements
    });

    pairDiv.appendChild(pairText);          // Append HTML elements to the container
    pairDiv.appendChild(removBtn);
    saveFavContainer.appendChild(pairDiv);
}

// Function to Display Favorite Pair
function displayFavoritePair() {
    const displayBtn = document.createElement("button");
    displayBtn.innerText = `${base} / ${target}`
    displayBtn.addEventListener("click", () => {
        base = baseCurrency;
        target = targetCurrency;
    })
    favoriteCurrencyPairs.appendChild(displayBtn);

function loadFavorites() {
    const loadFavs = JSON.parse(localStorage.getItem("favoriteCurrencyPairs")) || [];
    for (const currencyPair of loadfavs) {
        displayFavoriteCurrencyPair(currencyPair);
    }
}

loadFavorites();

}
});
