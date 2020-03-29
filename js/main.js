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
  calculationResultValue.innerHTML = (petrolConsumption.value / 100 * dailyMileage.value * 1000 * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * 1000 * gasCost.value).toFixed(0);
}

petrolCost.oninput = function () {
  petrolCostOut.innerHTML = this.value;
  calculationResultValue.innerHTML = (petrolConsumption.value / 100 * dailyMileage.value * 1000 * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * 1000 * gasCost.value).toFixed(0); calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0);
}

dailyMileage.oninput = function () {
  dailyMileageOut.innerHTML = this.value;
  calculationResultValue.innerHTML = (petrolConsumption.value / 100 * dailyMileage.value * 1000 * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * 1000 * gasCost.value).toFixed(0); calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0);
}

petrolConsumption.oninput = function () {
  petrolConsumptionOut.innerHTML = this.value;
  calculationResultValue.innerHTML = (petrolConsumption.value / 100 * dailyMileage.value * 1000 * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * 1000 * gasCost.value).toFixed(0); calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0);
}

calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0);
