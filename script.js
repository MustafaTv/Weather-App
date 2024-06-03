// script //

async function getWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=17f620f853424267877213311242602&q=Montreal&aqi=no', {mode: 'cors'});
    const data = await response.json();

    const place = document.querySelector('.place');
    place.textContent = (data.location.name) + ', ' + (data.location.country);

    const condition = document.querySelector('.condition');
    condition.textContent = 'Condition : ' + (data.current.condition.text);

    const temp = document.querySelector('.temp');
    temp.textContent = 'Temperature : ' + (data.current.temp_c) + '°C';

    const feel = document.querySelector('.feel');
    feel.textContent = 'Feels Like : ' + (data.current.feelslike_c) + '°C';
    
    const humidity = document.querySelector('.humidity');
    humidity.textContent = 'Humidity : ' + (data.current.humidity) + '%';

    const wind = document.querySelector('.wind');
    wind.textContent = 'Wind : ' + (data.current.wind_kph) + 'KM/H';
}
getWeather();

const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    const city = document.querySelector('.city');
    const search = city.value
    let api = `https://api.weatherapi.com/v1/current.json?key=17f620f853424267877213311242602&q='${search}'&aqi=no`;
    city.value = '';

    async function doSearch() {
        const response = await fetch(api);
        const data = await response.json();

        const place = document.querySelector('.place');
        place.textContent = (data.location.name) + ', ' + (data.location.country);

        const condition = document.querySelector('.condition');
        condition.textContent = 'Condition : ' + (data.current.condition.text);

        const temp = document.querySelector('.temp');
        temp.textContent = 'Temperature : ' + (data.current.temp_c) + '°C';

        const feel = document.querySelector('.feel');
        feel.textContent = 'Feels Like : ' + (data.current.feelslike_c) + '°C';
        
        const humidity = document.querySelector('.humidity');
        humidity.textContent = 'Humidity : ' + (data.current.humidity);

        const wind = document.querySelector('.wind');
        wind.textContent = 'Wind : ' + (data.current.wind_kph) + 'KM/H';
    }
    doSearch();
})
