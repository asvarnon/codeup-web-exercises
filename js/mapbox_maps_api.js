mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-97.1331, 33.2148], // starting position [lng, lat]
    zoom: 11 // starting zoom
});

var restaurants = [
    {name: "Sidewalk Cafe", address: "2900 Wind River Ln # 130, Denton, TX 76210", info: "Great Breakfast Food!"},
    {name: "Raising Canes", address: "1511 S Loop 288, Denton, TX 76205", info: "Great Fried Chicken!"},
    {name: "Pi Squared Pizza", address: "3200 S Interstate 35 #1150, Denton, TX 76210", info: "Great Pizza!"}
]

restaurants.forEach(function (restaurant) {
    console.log('In the forEach', restaurant);
    geocode(restaurant.address, mapboxToken)
        .then(function (result) {

            var popup = new mapboxgl.Popup()
                .setHTML(restaurant.name)
                // .addTo(map);

            var marker = new mapboxgl.Marker()
                .setLngLat(result)
                .addTo(map)
                .setPopup(popup);

            // popup.addTo(map);


            // marker.setPopup(popup);
            // marker.togglePopup(popup);

        });
});

