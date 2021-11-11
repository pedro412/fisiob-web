// Initialize and add the map
function initMap() {
  // The location of Uluru
  const clinic = { lat: 19.4194357, lng: -99.1693372 };
  // The map, centered at clinic
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 16,
    center: clinic,
  });

  // The marker, positioned at clinic
  const marker = new google.maps.Marker({
    position: clinic,
    map: map,
  });
}
