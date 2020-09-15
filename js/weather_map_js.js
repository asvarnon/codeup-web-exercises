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
                    "<div class=\"card bg-dark text-white\">\n" +
                    "  <img src=\"../img/darkBackground.jpg\" class=\"card-img\" alt=\"...\">\n" +
                    "  <div class=\"card-img-overlay\">\n" +
                    "    <h5 class=\"card-title\"> Location: " +data.name+ "</h5>\n" +
                    "    <p class=\"card-text\"> Temperature: "+ data.list[0].temp +"</p>\n" +
                    "    <p class=\"card-text\"> Date & Time: "+ data.list[0].dt_txt +"</p>\n" +
                    "  </div>\n" +
                    "</div>";
            // }
            $('#forecast').append(forecast);
        });


    });










})();