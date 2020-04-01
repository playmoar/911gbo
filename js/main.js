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
  calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

petrolCost.oninput = function () {
  petrolCostOut.innerHTML = this.value;
  calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

dailyMileage.oninput = function () {
  dailyMileageOut.innerHTML = this.value;
  calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");;
}

petrolConsumption.oninput = function () {
  petrolConsumptionOut.innerHTML = this.value;
  calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

calculationResultValue.innerHTML = ((petrolConsumption.value / 100 * dailyMileage.value * petrolCost.value - petrolConsumption.value / 100 * dailyMileage.value * gasCost.value) * 365).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const burgerMenu = document.getElementById("burger-menu");
const burgerIcon = document.getElementById("burger-icon");
const closeBurger = document.getElementById("close-burger");
const closeBurger2 = document.getElementById("close-burger2");
burgerIcon.addEventListener("click", e => {
  e.preventDefault();

  document.getElementById("burger-menu").classList.remove("burger-menu-closed");
});

closeBurger.addEventListener("click", e => {
  e.preventDefault();

  document.getElementById("burger-menu").classList.add("burger-menu-closed");
});
closeBurger2.addEventListener("click", e => {

  document.getElementById("burger-menu").classList.add("burger-menu-closed");
});

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
    center: [53.224487, 63.639079],
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
      hintContent: 'Баймагамбетова, 277'
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

(function () {
  scrollTo();
})();

function scrollTo() {
  const links = document.querySelectorAll('.scroll');
  links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
  const checkIfDone = setInterval(function () {
    const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}