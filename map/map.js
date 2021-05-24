// For adjusting the header so that it doesn't shift without scrollwheel on the map page
function adjustHeader() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  const header = document.querySelector('header');
  header.style.paddingRight = `${scrollbarWidth}px`;
}

adjustHeader();

let map;
const kaijonkipsaLoc = {lat: 65.059605, lng: 25.491829};
const koskelanloistoLoc = {lat: 65.057279, lng: 25.401728};
const teekkaritaloLoc = {lat: 65.063879, lng: 25.484157};
const toripoliisiLoc = {lat: 65.013306, lng: 25.464720};
const yliopistoLoc = { lat: 65.059316, lng: 25.466266};


//  Maps stuff
//
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    mapId: '4c04de1daa64bb31',
    center: { lat: 65.05637, lng: 25.468308 },
    zoom: 12,
    disableDefaultUI: true,
    gestureHandling: 'greedy'
  });

  addMarkerWithWindow('Kaijon Kipsa', '../img/restaurants.svg', kaijonkipsaLoc, map);
  addMarkerWithWindow('Koskelan loisto', '../img/attractions.svg', koskelanloistoLoc, map);
  addMarkerWithWindow('Teekkaritalo', '../img/partyspots.svg', teekkaritaloLoc, map);
  addMarkerWithWindow('Toripoliisi', '../img/attractions.svg', toripoliisiLoc, map);
  addMarkerWithWindow('Yliopisto', '../img/campuses.svg', yliopistoLoc, map);
  
}

function addMarkerWithWindow(name, image, coordinate, map) {
  var marker = new google.maps.Marker({
    map: map,
    icon: image,
    title: name,
    position: coordinate
  });

  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popupContent');
  const popupContentText = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi libero quas dolorem velit alias debitis. Officiis rem distinctio ipsam deleniti dicta fugit, excepturi veniam repudiandae voluptatum earum similique aliquam.</p><button onclick="closePopup()">CLOSE</button>';


 google.maps.event.addListener(marker, 'click', function(e) {
  console.log('open');
  map.panTo(marker.getPosition());
  popupContent.innerHTML = popupContentText;
  popup.classList.remove('closed');
 });
}

function closePopup() {
  let popupContent = document.getElementById('popupContent');
  popupContent.innerHTML = "";
  const popup = document.getElementById('popup');
  popup.classList.add('closed');
}



