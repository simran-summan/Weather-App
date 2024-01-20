const apiKey = "1db7b1cf35c6a8e269adae5399ede06c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector(".search input");
const btn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather-section").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

    let icon = document.querySelector(".weather img");
    let weather = data.weather[0].main;
    if (weather == "Haze") {
      icon.src = "../img/haze.png";
    } else if (weather == "Clear") {
      icon.src = "../img/clear.png";
    } else if (weather == "Drizzle") {
      icon.src = "../img/drizzle.png";
    } else if (weather == "Rain") {
      icon.src = "../img/rain.png";
    } else if (weather == "Snow") {
      icon.src = "../img/snow.png";
    } else if (weather == "Clouds") {
      icon.src = "../img/clouds.png";
    } else {
      icon.src = "../img/weather icon.png";
    }
    document.querySelector(".weather-section").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

btn.addEventListener("click", () => {
  checkWeather(city.value);
});
