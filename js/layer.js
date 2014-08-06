var mapCenter = [35.994033, -78.898619];

var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
    thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';

var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    osmAttrib = '&copy; ' + osmLink + ' Contributors',
    bwUrl = 'http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
    landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
    thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink;

// marker
var merge = L.marker([35.997057, -78.899455],
        {draggable: true,
        title: 'Merge Records',
        opacity: 0.75}
        ).bindPopup('Merge Records');

var places = L.layerGroup([merge]);

var imageUrl = 'images/security_savings.jpg',
    imageBounds = [[35.950781,-78.975652],[35.990924,-78.927136]];

// add map tiles layers
var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}),
    bwMap = L.tileLayer(bwUrl, {attribution: osmAttrib}),
    landMap = L.tileLayer(landUrl, {attribution: thunAttrib});

var map = L.map('map', {
    layers: [osmMap]
})
.setView(mapCenter, 13);


// circle
var circle = L.circle(mapCenter, 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

// add base layers
var baseMaps = {
    "OSM Map": osmMap,
    "B&W Map": bwMap,
    "Landscape": landMap
};


// add marker layer
var overlayMaps = {
    "Places": places
};

L.control.layers(baseMaps,overlayMaps).addTo(map);

// image overlay
L.imageOverlay(imageUrl, imageBounds, {
    opacity: 0.7
}).addTo(map);

// polyline
var polyline = L.polyline([
      [35.986132, -78.916297],
      [36.000368, -78.904967],
      [35.997869, -78.879476]
      ],
      {
        color: '#FFB45D',
        weight: 8,
        opacity: 0.9,
        dashArray: '25, 20'
      }).addTo(map);
