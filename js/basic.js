var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/petrock.j1ce2b33/{z}/{x}/{y}.png').addTo(map);

var circle = L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);
