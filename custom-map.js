function initCustomMap() {
  const map = new google.maps.Map(document.getElementById("custom-map"), {
    center: { lat: 41.85, lng: 1.5 }, // Centro aproximado de Cataluña
    zoom: 8,
  });

  // Aquí añadiremos la capa del radar
  const radarImageUrl = "https://static-m.meteo.cat/ginys/mapaRadar?language=ca&color=2c3e50&target=_blank";
  const radarBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(40.3158, -0.7777), // Coordenadas aproximadas inferior izquierda
    new google.maps.LatLng(42.8611, 3.3342) // Coordenadas aproximadas superior derecha
  );

  const radarOverlay = new google.maps.GroundOverlay(radarImageUrl, radarBounds);
  radarOverlay.setMap(map);
}
