var Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var Month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
$('#btn-search').click(function() {
  var city = $('#select-city').val();
  var reqGetWeather =
    'https://api.openweathermap.org/data/2.5/find?q=' +
    city +
    '&units=metric&appid=c854ec4506798ed865e17b15b89985bc';

  var reqOdj = request(reqGetWeather);
  var temperature = reqOdj.list[0].main.temp;
  var cityRes = reqOdj.list[0].name;
  var iconCode = reqOdj.list[0].weather[0].icon;
  var descr = reqOdj.list[0].weather[0].description;
  write(temperature, cityRes, iconCode, descr);
});

function request(url) {
  var weather = new XMLHttpRequest();
  weather.open('GET', url, false);
  weather.send();
  return JSON.parse(weather.response);
}
function write(temperature, city, img, description) {
  var today = new Date();

  $('#day').html(Days[today.getDay()]);
  $('#date').html(today.getDate() + ' ' + Month[today.getMonth()] + ' ' + today.getFullYear());
  $('#temparature').html(temperature);
  $('#city-name').html(city);
  $('#weather').html('<img src =' + 'https://openweathermap.org/img/w/' + img + '.png' + '>');
  $('#description').html(description);
}
