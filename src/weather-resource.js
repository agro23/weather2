import $ from 'jquery';

function getWeather(city, displayResult, displayError) {

$.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85071d34e4085d1696790ab6d413e0cd`).then(function(response){
      // convert to Farenheit
      // 9/5 (K - 273) + 32
      let temp = response.main.temp;
      let newTemp = 9/5 * (temp - 273) + 32;
        displayResult(response, newTemp);
      }).fail(function(error) {
        displayError(error);
      });
}
export { getWeather };
