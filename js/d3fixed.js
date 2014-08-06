var map = L.map('map').setView([-41.2858, 174.7868], 13);

mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; ' + mapLink + ' Contributors',
    maxZoom: 18,
    }).addTo(map);
    
map._initPathRoot()

var svg = d3.select("#map").select("svg"),
    g = svg.append("g");

d3.json("circles.json", function(collection) {
    collection.objects.forEach( function(d) {
        d.LatLng = new L.LatLng(d.circle.coordinates[0],d.circle.coordinates[1])
    })

    var feature = g.selectAll("circle")
        .data(collection.objects)
        .enter().append("circle")
        .style("opacity", .6)
        .style("fill", "red")
        .attr("r", 20);

    map.on("viewreset", update);
    update();

    function update() {
        feature.attr("transform",
        function(d) {
            return "translate("+
                map.latLngToLayerPoint(d.LatLng).x +","+
                map.latLngToLayerPoint(d.LatLng).y +")";
            }
        )
    }
})
