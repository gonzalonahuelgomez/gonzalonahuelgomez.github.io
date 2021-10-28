const map = L.map('mapa')

L.tileLayer(  
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 3,
  maxZoom: 18,
}).addTo(map);

map.fitBounds([[-34.59579487753128, -58.387669130980846],[-34.57338613460507, -58.43791178865469]], { padding: [20, 20], maxZoom: 13 })

var locales = [{
  "type": "Feature",
  "properties": {
      "name": "Berta Colegiales",
      "adress": "Av. Federico Lacroze 3333, CABA",
      "attention": "Horario de atención: Lun. a Sáb. de 09 a 19hs"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-58.450381828478456, -34.57918481582553]
  }}, {"type": "Feature",
  "properties": {
      "name": "Berta Palermo",
      "adress": "Av. Cabildo 169, CABA",
      "attention": "Horario de atención: Lun. a Sáb. de 10 a 19hs"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-58.43791178865469, -34.57338613460507]
  }}, {"type": "Feature",
  "properties": {
      "name": "Berta Recoleta",
      "adress": "Av. Santa Fe 1430, CABA",
      "attention": "Horario de atención: Lun. a Sáb. de 10 a 20hs"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-58.387669130980846, -34.59579487753128]
  }}, {"type": "Feature",
  "properties": {
      "name": "Berta Villa Crespo",
      "adress": "Av. Warnes 980, CABA",
      "attention": "Horario de atención: Lun. a Sáb. de 10 a 19hs"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [-58.450555359817336, -34.599483553650465]
  }
}];

const geoJSONlocal = L.geoJSON(locales, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng);
  },
  onEachFeature: function (feature, layer) {
    layer._leaflet_id = feature.properties.name;
    layer.bindPopup(
      `<div style="text-align:center; font-family:'Raleway'"><h4 style="">${feature.properties.name} </h4>
       <p>${feature.properties.adress}</p>
       <p>${feature.properties.attention}</p></div>`
    );
  },
}).addTo(map);

function setMapa(local) {
    map.flyTo(geoJSONlocal._layers[local]._latlng, 15)
    geoJSONlocal._layers[local].openPopup()
}