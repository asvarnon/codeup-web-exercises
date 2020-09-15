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
                    "<div class=\"col mb-4\">\n" +
                    "    <div class=\"card\">\n" +
                    "      <img src=\"../img/planning.jpg\" class=\"card-img-top\" alt=\"...\">\n" +
                    "      <div class=\"card-body\">\n" +
                    "        <h5 class=\"card-title\">"+ data.city.name +"</h5>\n" +
                    "        <p class=\"card-text\">"+ data.list.main.temp +"</p>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "  </div>";
            // }
            $('#forecast').append(forecast);
        });


    });










})();