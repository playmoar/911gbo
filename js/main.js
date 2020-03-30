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

var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [53.224619, 63.636842],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search'
  })
  myGeoObject = new ymaps.GeoObject({
    // Описание геометрии.
    geometry: {
      type: "Point",
      coordinates: [53.224595, 63.641416]
    },
    // Свойства.
    properties: {
      // Контент метки.
      iconContent: 'ГБО 911',
      hintContent: 'Ну давай уже тащи'
    }
  }, {
    // Опции.
    // Иконка метки будет растягиваться под размер ее содержимого.
    preset: 'islands#redStretchyIcon',
    // Метку можно перемещать.
  })

  myMap.geoObjects
    .add(myGeoObject)

};

