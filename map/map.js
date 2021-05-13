let map;

const yliopistoLoc = { lat: 65.059316, lng: 25.466266};

//  Maps stuff
//
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: '4c04de1daa64bb31',
    center: { lat: 65.05637, lng: 25.468308 },
    zoom: 15,
    disableDefaultUI: true,
    gestureHandling: 'greedy'
  });
  
  const svgMarker = {
    path:
      "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "green",
    fillOpacity: 0.5,
    strokeWeight: 1,
    rotation: 0,
    scale: 3,
    anchor: new google.maps.Point(15, 30),
  };

  // The marker, positioned at Uluru
/*   const marker = new google.maps.Marker({
    position: yliopistoLoc,
    map: map,
    label: {
      text : "Oulun yliopisto",
      fontSize: "14pt",
      color: "white",
      background: "black"
    },
    fontSize: "24px",
    animation: google.maps.Animation.DROP,
    icon: svgMarker
  }); */

  /* map.set('styles',customStyled);  */
}



