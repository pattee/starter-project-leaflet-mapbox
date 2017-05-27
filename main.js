/*
 * Application Variables
 */
// Access token
L.mapbox.accessToken = 'pk.abunchoflettersandnuberyougetfrommapboxaccountaccesstoken';


/*
 * Application Init
 */
var mymap = L.mapbox.map('map', 'username.createaprojectandputidhere', {
  center: [51.505, -0.09],
  zoom: 13
});

L.mapbox.tileLayer('mapbox.streets', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

var oneplace = L.marker([51.505, -0.09]).addTo(mymap);
oneplace.bindPopup("<b>Place one</b><br>I am a popup.").openPopup();

var twoplace = L.marker([51.5, -0.09]).addTo(mymap);
twoplace.bindPopup("<b>Place two</b><br>I a place with a popup");

var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
circle.bindPopup("I am a circle.");

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);
polygon.bindPopup("I am a polygon.");

var popup = L.popup();

//provides a popup when you click
function onMapClick(e) {
  popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(mymap);
}

mymap.on('click', onMapClick);
