async function getWeather(){
    var city = document.getElementById("city").value;
    var api = "8cbd391ab97547d2ac045049260107";
    var url = "http://api.weatherapi.com/v1/current.json?key=8cbd391ab97547d2ac045049260107&q="+ city +" &aqi=no";
    console.log(url);
    var response = await fetch(url);
    var data = await response.json();
    document.getElementById("name").innerHTML = data.location.name;
    document.getElementById("temp").innerHTML = "Temperature : " + data.current.temp_c + " °C";
    document.getElementById("weather").innerHTML = "Weather : " + data.current.condition.text;
    document.getElementById("humidity").innerHTML = "Humidity : " + data.current.humidity + " %";
}