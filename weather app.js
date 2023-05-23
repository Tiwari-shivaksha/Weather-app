const apikey = "0a282b8670be9f01e13aa34423b5fe0a";
const weatherDataE1= document.getElementById("weather-data");

const cityInputE1= document.getElementById("city-input");
const formE1 = document.querySelector("form");
formE1.addEventListener("submit",  (event) =>{
    event.preventDefault();
    const cityValue = cityInputE1.value;
    getWeatherData(cityValue);



});
async function  getWeatherData(cityValue){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?
        q=${cityValue}&appid=${apikey}&units=metric`)

        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        const data = await response.json()

       const temp = Math.round(data.main.temp)
       const description = data.weather[0].description
       const icon = data.weather[0].icon
       const details = [
        `Feels like: ${Math.round(data.main.feels_like)}`,
        `Humidity: ${data.main.humidity}`,
        `Wind speed: ${data.main.wind.speed}`,
       ]
       weatherDataE1.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
       weatherDataE1.querySelector(
        ".temprature"
       ).textContent = `${temprature}°C`;

       
    } catch(error){

    }
}

