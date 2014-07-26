var mapCenter = [35.994033, -78.898619];
var map = L.map('map').setView(mapCenter, 14);
var merge = L.marker([35.997057, -78.899455]).bindPopup('Merge Records')
var places = L.layerGroup([merge]);

var imageUrl = 'images/security_savings.jpg',
    imageBounds = [[36.020781,-78.935652],[35.990924,-78.887136]];

L.tileLayer('https://{s}.tiles.mapbox.com/v3/petrock.j1ce2b33/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var circle = L.circle(mapCenter, 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

var overlayMaps = {
    "Places": places
};

L.control.layers(overlayMaps).addTo(map);

L.imageOverlay(imageUrl, imageBounds, {
    opacity: 0.3
}).addTo(map);
