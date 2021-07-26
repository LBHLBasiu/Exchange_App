const inputs = document.querySelectorAll(".currentIpt");

document.querySelector("#c-from").addEventListener("change", handleIptChange);

function handleIptChange() {
  // Functions
  function calculateExchangeRates() {
    if (!fromCurrency.length) return;
    if (fromCurrency === toCurrency) {
      console.log("entered");
      otherIpt.value = currencyValue;
    } else {
      const conversions = {
        "EUR/GBP": (val) => val * 0.86,
        "GBP/EUR": (val) => val * 1.16
      };
      const conversionBlock = fromCurrency + "/" + toCurrency;
      console.log(conversionBlock);
      const calculated = conversions[conversionBlock](currencyValue);
      otherIpt.value = calculated;
    }
  }
  // Variables
  const currentIpt = this;
  const otherIpt = document.querySelector("#c-to");
  const currencyValue = parseFloat(currentIpt.value);
  const fromSelect = document.querySelector("#s-from");
  const toSelect = document.querySelector("#s-to");
  const fromCurrency = fromSelect.options[fromSelect.selectedIndex].value;
  const toCurrency = toSelect.options[toSelect.selectedIndex].value;

  calculateExchangeRates();
}

// euro-gbp: 1:0.86
// gbp-euro: 1:1.16
