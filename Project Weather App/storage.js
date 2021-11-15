class Storage {

    constructor(city) {

        this.defualt_city = 'tehran';
        this.city = city;

    }

    getCityFromLS() {

        let city;

        if(localStorage.getItem('city') === null) {

            city = this.defualt_city;

        } else {

            city = localStorage.getItem('city');

        }

        return city;

    }

    setCityToLs(city) {

        localStorage.setItem('city', city);

    }

}