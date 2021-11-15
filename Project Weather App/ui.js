class UI {

    constructor() {

        this.locationW = document.querySelector('#w-location');
        this.condition = document.querySelector('#w-condition');
        this.icon = document.querySelector('#w-icon');
        this.temp = document.querySelector('#w-temp');
        this.humidity = document.querySelector('#w-humidity');
        this.visibility = document.querySelector('#w-visiblility');
        this.feelsLike = document.querySelector('#w-feels-like');
        this.wind = document.querySelector('#w-wind');
        this.changeLocationBTN = document.querySelector('#change-location');
        this.textCity = document.querySelector('#city');
        this.saveLocationBTN = document.querySelector('#save-change');



    }

    setWeatherInfo(weatherData) {

        this.locationW.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
        this.condition.textContent = `${weatherData.current.weather_descriptions[0]}`;
        this.icon.setAttribute('src', `${weatherData.current.weather_icons[0]}`);
        this.temp.textContent = `Tepm: ${weatherData.current.temperature}`;
        this.humidity.textContent = `Humidity: ${weatherData.current.humidity}`;
        this.visibility.textContent = `Visibility: ${weatherData.current.visibility}`;
        this.feelsLike.textContent = `Feelslike: ${weatherData.current.feelslike}`;
        this.wind.textContent = `Wind Speed: ${weatherData.current.wind_speed} - Wind DIR: ${weatherData.current.wind_dir} - Wind Degree: ${weatherData.current.wind_degree} `;

    }

}