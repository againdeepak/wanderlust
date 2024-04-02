mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style:"mapbox://styles/mapbox/standard",
    center: coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});

console.log(coordinates);
const marker=new mapboxgl.Marker({'color':"#b40219"})
.setLngLat(coordinates)
.setPopup(
    new mapboxgl.Popup({offset:25}).setHTML(
        "<h5 >This will be your location after booking...</h5>"
    )
)
.addTo(map);


