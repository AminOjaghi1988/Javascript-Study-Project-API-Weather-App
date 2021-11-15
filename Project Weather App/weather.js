class Weather {

    constructor(city) {

        this.apiKey = '0ad2c6e41fdc6345c7ce73a642b51503';
        this.city = city;

    }

    async getWeather() {

        let responseWeather = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

        let weatherData = await responseWeather.json();

        return weatherData;

    }

    changeCity(city) {

        this.city = city;

    }

}