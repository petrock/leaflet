var map = L.map('map').setView([35.994033, -78.898619], 14);

mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
    
var osmGeocoder = new L.Control.OSMGeocoder();

map.addControl(osmGeocoder);
