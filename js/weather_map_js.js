(function(){
    "use strict";

    $(document).ready(function(){

        var openWeatherAPIURL = "http://api.openweathermap.org/data/2.5/weather";
        $.get(openWeatherAPIURL,{
            "APPID": OWM_Key,
            "q": "Dallas, TX, US",
            "units": "imperial"
        }).done(function(data){
            // console.log(data);
        })

        var openForecastAPIURL = "http://api.openweathermap.org/data/2.5/forecast";
        $.get(openForecastAPIURL, {
            "APPID": OWM_Key,
            "q": "Dallas, TX, US",
            "units": "imperial"
        }).done(function(data){
            console.log(data);
            let forecast = "";
            // for(let i = 0; i < data.length; i++){
                forecast +=
                    "<div>\n" +
                    "<div class=\"card-header\">\n" + data.city.name +
                    "        </div>\n" +
                    "        <ul class=\"list-group list-group-flush\">\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].main.temp +"</li>\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].dt_txt +"</li>\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].main.feels_like +"</li>\n" +
                    "        </ul>" +
                    "</div>"
                    +
                    "<div>\n" +
                    "<div class=\"card-header\">\n" + data.city.name +
                    "        </div>\n" +
                    "        <ul class=\"list-group list-group-flush\">\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].main.temp +"</li>\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].dt_txt +"</li>\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].main.feels_like +"</li>\n" +
                    "        </ul>" +
                    "</div>"
                    +
                    "<div>\n" +
                    "<div class=\"card-header\">\n" + data.city.name +
                    "        </div>\n" +
                    "        <ul class=\"list-group list-group-flush\">\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].main.temp +"</li>\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].dt_txt +"</li>\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].main.feels_like +"</li>\n" +
                    "        </ul>" +
                    "</div>"
                    +
                    "<div>\n" +
                    "<div class=\"card-header\">\n" + data.city.name +
                    "        </div>\n" +
                    "        <ul class=\"list-group list-group-flush\">\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].main.temp +"</li>\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].dt_txt +"</li>\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].main.feels_like +"</li>\n" +
                    "        </ul>" +
                    "</div>"
                    +
                    "<div>\n" +
                    "<div class=\"card-header\">\n" + data.city.name +
                    "        </div>\n" +
                    "        <ul class=\"list-group list-group-flush\">\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].main.temp +"</li>\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].dt_txt +"</li>\n" +
                    "            <li class=\"list-group-item\">"+ data.list[0].main.feels_like +"</li>\n" +
                    "        </ul>" +
                    "</div>";

            $('#forecast').append(forecast);
        });


    });










})();