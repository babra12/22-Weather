const apiKey = "e9a5d3b74bf84418b11193028231901";

let form = document.querySelector("#Form");
let inputForm = document.querySelector("#inputForm");
let mainContainer = document.querySelector("main");











const showError = (errorMessage) => {
let div = document.createElement('div')
div.className = "card"
div.innerText = errorMessage

mainContainer.append(div)
}
const getWeather = async (city) => {
const url = `http:api.weathereapi.com/v1/current.json?key=${apiKey}&q=${city}`;
const response = await fetch(url);
const data = 


}
const showCard = {{ name, country, temp, condition }} => {
    const html =`  
    <div class="card">
        <h2 class="card-city">${name}<span>${country}</span>
        </h2>
        <div class="card-weather">
          <div class="card-value">
            ${temp}
            <sup>°c</sup>
          </div>
          <img class="card-img" src="img/icon/cloudy.png" alt="" />
        </div>
        <div class="card-discription">${condition}</div>
      </div>
                `
}
mainContainer

font.addEventListener("submit", async (e) => {
e.preventDefault();

let city = inputForm.Value;

const data = await getWeather(city)

if(data) = await.console.error();
















































}
)

















































































