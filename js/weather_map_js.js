(function(){
    "use strict";

    $(document).ready(function(){

        mapboxgl.accessToken = mapboxToken;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-96.8084, 27.7799], // starting position [lng, lat]
            zoom: 3,
        });


        function weatherData(lng, lat) {
            var openForecastAPIURL = "http://api.openweathermap.org/data/2.5/forecast";
            $.get(openForecastAPIURL, {
                "APPID": OWM_Key,
                "lat": lat,
                "lon": lng,
                "units": "imperial"
            }).done(function (data) {
                console.log(data);
                let fiveDayForecast = [];
                for (let i = 0; i < data.list.length; i += 8) {
                    fiveDayForecast.push(data.list[i]);
                }

                $('#city').text(data.city.name);
                $('#forecast').html("");

                for (let day of fiveDayForecast) {
                    createCard(day);
                }
            });
        }


        function createCard(day) {
            let forecastForDay = "";
            // for(let i = 0; i < data.list.length; i++){
            forecastForDay +=
                "<div class='border rounded-sm'>\n" +
                "<div class=\"card-header\">\n" + day.dt_txt +
                "        </div>\n" +
                "        <ul class=\"list-group list-group-flush\">\n" +
                "            <li class=\"list-group-item\">" + day.main.temp + "</li>\n" +
                "            <li class=\"list-group-item\">" + day.dt_txt + "</li>\n" +
                "            <li class=\"list-group-item\">" + day.weather.description + "</li>\n" +
                "            <li class=\"list-group-item\">" + day.main.humidity + "</li>\n" +
                "            <li class=\"list-group-item\">" + day.wind.speed + "</li>\n" +
                "            <li class=\"list-group-item\">" + day.main.pressure + "</li>\n" +
                "        </ul>" +
                "</div>"
            // }
            $('#forecast').append(forecastForDay);
        }

        function searchFunc (input) {
            geocode(input, mapboxToken)
                .then(function (result) { //first get weather data
                    console.log(result);
                    weatherData(result[0], result[1]);
                    return result;
                }).then(function (data){ //then go to this location
                    map.flyTo({center: data, zoom: 12});

                let marker = new mapboxgl.Marker({draggable: true})
                    .setLngLat(data)
                    .addTo(map)
                });
        }

        $("#search-button").click(function (e){
            e.preventDefault();
            let searchLocation = $('#search-bar').val().trim();
            if (searchLocation !== ""){
                searchFunc(searchLocation);
                $('#search-bar').val(""); //reset search box after searched location
            }

        });

        searchFunc("Dallas, TX");

    });










})();