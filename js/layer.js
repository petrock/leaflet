var mapCenter = [35.994033, -78.898619];
var map = L.map('map').setView(mapCenter, 13);
var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

var merge = L.marker([35.997057, -78.899455],
        {draggable: true,
        title: 'Merge Records',
        opacity: 0.75}
        ).bindPopup('Merge Records');
var places = L.layerGroup([merge]);

var imageUrl = 'images/security_savings.jpg',
    imageBounds = [[35.950781,-78.975652],[35.990924,-78.927136]];

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

var polyline = L.polyline([
      [35.986132, -78.916297],
      [36.000368, -78.904967],
      [35.997869, -78.879476]
      ],
      {
          color: '#FFB45D',
        weight: 8,
        opacity: 0.7
      }).addTo(map);
