const api = {
    key : "155f5e8c5debd60fc1734af25da639b6",
    base : "https://api.openweathermap.org/data/2.5/weather"
}

const searchBox = document.getElementById('search-button');
searchBox.addEventListener('click',() => {
    const inputCity = document.getElementById('search-box').value;
    getWeatherData(inputCity);
}
);

const getWeatherData = city => {
    const url = `${api.base}?q=${city}&units=metric&appid=${api.key}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data));
}
const updateUI = data =>{
    const cityName = document.getElementById('city-name');
    cityName.innerText = data.name || "Wrong City Name" ;
    const Temp = document.getElementById('Temp');
    Temp.innerText = data.main.temp;
    const weatherStatus = document.getElementById('weather-status');
    weatherStatus.innerText = data.weather[0].main ;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('search-box').value = "";
}
