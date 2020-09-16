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
            "lat": lng,
            "lon": lat,
            "units": "imperial"
        }).done(function(data) {
            console.log(data);


            $('#forecast').append(forecast);
        });

        function createCard(day) = {
            let forecast = [];
            for(let i = 0; i < data.list.length; i++){
            forecast +=
                "<div class='border rounded-sm'>\n" +
                "<div class=\"card-header\">\n" + data.list[0].dt_txt +
                "        </div>\n" +
                "        <ul class=\"list-group list-group-flush\">\n" +
                "            <li class=\"list-group-item\">" + data.list[0].main.temp + "</li>\n" +
                "            <li class=\"list-group-item\">" + data.list[0].dt_txt + "</li>\n" +
                "            <li class=\"list-group-item\">" + data.list[0].weather.description + "</li>\n" +
                "            <li class=\"list-group-item\">" + data.list[0].main.humidity + "</li>\n" +
                "            <li class=\"list-group-item\">" + data.list[0].wind.speed + "</li>\n" +
                "            <li class=\"list-group-item\">" + data.list[0].main.pressure + "</li>\n" +
                "        </ul>" +
                "</div>"
        }
        }

        function citySearch(input) {
            var city
        };


        $("#search-button").click(function (e){
            e.preventDefault();
            var searchLocation = $('#search-bar').val().trim();

        });


    });










})();