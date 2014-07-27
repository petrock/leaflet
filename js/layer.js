var mapCenter = [35.994033, -78.898619];
var map = L.map('map').setView(mapCenter, 11);
var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

var merge = L.marker([35.997057, -78.899455]).bindPopup('Merge Records')
var places = L.layerGroup([merge]);

var imageUrl = 'images/security_savings.jpg',
    imageBounds = [[36.020781,-78.935652],[35.990924,-78.887136]];

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; ' + mapLink,
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
    opacity: 0.7
}).addTo(map);
