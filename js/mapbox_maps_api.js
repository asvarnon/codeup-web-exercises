mapboxgl.accessToken = mapboxToken;
geocode("2900 Wind River Ln # 130, Denton, TX 76210", mapboxToken)
    .then(function (result) {
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
            center: [-97.1331, 33.2148], // starting position [lng, lat]
            zoom: 11 // starting zoom
        });
        var popup = new mapboxgl.Popup()
            .setHTML("Sidewalk Cafe")
            .addTo(map);

        var marker = new mapboxgl.Marker()
            .setLngLat(result)
            .addTo(map);

        marker.setPopup(popup);
        marker.togglePopup(popup);


});