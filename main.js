  /*
   * Application Variables
   */
  // Access token
  L.mapbox.accessToken = 'pk.eyJ1IjoicGF0dGVlMTMiLCJhIjoiU01MUEZQRSJ9.GOzX8bvCA3k1xZ46RiYymA';


  /*
   * Application Init
   */
  var map = L.mapbox.map('map', 'pattee13.in2og2la', {
    center: [35.59, -82.56], // lat, long
    zoom: 13
  });

  L.mapbox.tileLayer('mapbox.pencil', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
  }).addTo(map);
