const map = L.map('mapa').setView([-34.608266, -58.406024], 13);

L.tileLayer(  
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 3,
  maxZoom: 18,
}).addTo(map);

var marker = L.marker([-34.608266, -58.406024]).addTo(map)