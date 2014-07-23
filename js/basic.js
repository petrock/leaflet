var map = L.map('map').setView([35.994033, -78.898619], 14);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/petrock.j1ce2b33/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var circle = L.circle([35.994033, -78.898619], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

var container = map.getContainer();

console.log(container);
