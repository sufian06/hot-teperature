// ef8be8f0077f58973cd5b9e3b70c7f03
const API_KEY = `ef8be8f0077f58973cd5b9e3b70c7f03`;

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  setInnerTextById("temperature", data.main.temp);
  setInnerTextById("condition", data.weather[0].main);
};

const setInnerTextById = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const city = searchField.value;
  document.getElementById("city").innerText = city;
  loadTemperature(city);
});

loadTemperature("dhaka");
