var mapCenter = [35.994033, -78.898619];

var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
    thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>',
    mapquestLink = '<a href="http://www.mapquest.com//">MapQuest</a>',
    mapquestPic = '<img src="http://developer.mapquest.com/content/osm/mq_logo.png\
">';

var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    osmAttrib = '&copy; ' + osmLink + ' Contributors',
    bwUrl = 'http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
    landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
    cycleUrl = 'http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
    transportUrl = 'http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png',
    aerialUrl = 'http://otile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png',
    thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink,
    mapquestAttrib = 'Portions Courtesy NASA/JPL-Caltech and U.S. Dept. of Agriculture, Farm Service Agency. Tiles courtesy of ' + mapquestLink + ' ' + mapquestPic;

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
    landMap = L.tileLayer(landUrl, {attribution: thunAttrib}),
    cycleMap = L.tileLayer(cycleUrl, {attribution: thunAttrib}),
    transportMap = L.tileLayer(transportUrl, {attribution: thunAttrib}),
    aerialMap = L.tileLayer(aerialUrl, {attribution: mapquestAttrib, maxZoom: 18, subdomains: '1234'});

var map = L.map('map', {
    layers: [osmMap]
})
.setView(mapCenter, 13);


// circle
var circle = L.circle(mapCenter, 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
});

var shapes = L.layerGroup([circle]);

// add base layers
var baseMaps = {
    "OSM Map": osmMap,
    "B&W Map": bwMap,
    "Landscape": landMap,
    "Cycle paths": cycleMap,
    "Public Transportation": transportMap,
    "Aerial Map": aerialMap
};

// image overlay
var image = L.imageOverlay(imageUrl, imageBounds, {
    opacity: 0.7
});

var images = L.layerGroup([image]);

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
      });

var lines = L.layerGroup([polyline]);

// add marker, circle and image layers
var overlayMaps = {
    "Places": places,
    "Shapes": shapes,
    "Images": images,
    "Lines": lines
};

L.control.layers(baseMaps,overlayMaps).addTo(map);

