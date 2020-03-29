//calc
var gasCost = document.getElementById("gas-cost");
var petrolCost = document.getElementById("petrol-cost");
var dailyMileage = document.getElementById("daily-mileage");
var petrolConsumption = document.getElementById("petrol-consumption");

var gasCostOut = document.getElementById("gasCostValue");
var petrolCostOut = document.getElementById("petrolCostValue");
var dailyMileageOut = document.getElementById("dailyMileageValue");
var petrolConsumptionOut = document.getElementById("petrolConsumptionValue");

var calculationResultValue = document.getElementById("calculation-result-value");

gasCost.oninput = function () {
  gasCostOut.innerHTML = this.value;
  calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0);
}

petrolCost.oninput = function () {
  petrolCostOut.innerHTML = this.value;
  calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0);
}

dailyMileage.oninput = function () {
  dailyMileageOut.innerHTML = this.value;
  calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0);
}

petrolConsumption.oninput = function () {
  petrolConsumptionOut.innerHTML = this.value;
  calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0);
}

calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0);

const tab1line = document.getElementById("tab1line");
const tab1text = document.getElementById("tab1text");
const tab1content = document.getElementById("tab1content");
const tab2line = document.getElementById("tab2line");
const tab2text = document.getElementById("tab2text");
const tab2content = document.getElementById("tab2content");


tab2text.addEventListener("click", e => {
  e.preventDefault();

  document.getElementById("tab1line").classList.remove("active-line");
  document.getElementById("tab1text").classList.remove("active-gen");
  document.getElementById("tab1content").classList.remove("active");
  document.getElementById("tab2line").classList.add("active-line");
  document.getElementById("tab2text").classList.add("active-gen");
  document.getElementById("tab2content").classList.add("active");


});

tab1text.addEventListener("click", e => {
  e.preventDefault();

  document.getElementById("tab2line").classList.remove("active-line");
  document.getElementById("tab2text").classList.remove("active-gen");
  document.getElementById("tab2content").classList.remove("active");
  document.getElementById("tab1line").classList.add("active-line");
  document.getElementById("tab1text").classList.add("active-gen");
  document.getElementById("tab1content").classList.add("active");


});

