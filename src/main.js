import $ from 'jquery';
import { getWeather } from "../src/weather-resource.js";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

$(document).ready(function() {
    $('#weatherLocation').click(function() {
      let city = $('#location').val();
      $('#location').val("");
      getWeather(city, displayResult, displayError);
  });
});

let displayResult = function(response, newTemp){
  newTemp = Math.floor(newTemp);
  $('.showHumidity').text(`The humidity is ${response.main.humidity}%`);
  let displayString = `The temperature in Kelvins is ${response.main.temp}.`;
  displayString += "<br>";
  displayString += `The temperature in Farenheit is ${newTemp}`;
  displayString += "&#8457;";
  $('.showTemp').html(displayString);

  // $('.showTemp').html(`The temperature in Kelvins is ${response.main.temp}.`+"<br>");
  // $('.showTemp').append(`The temperature in Farenheit is ${newTemp}`");

}

let displayError = function(error){
  // $('.errors').text(error);
  $('.errors').text("There was an error in your request!");
}
