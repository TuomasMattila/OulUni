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

  addMarkerWithWindow('Yliopisto', yliopistoLoc, map);


}

function addMarkerWithWindow(name, coordinate, map) {
  var image = '../img/attractions.svg';
  var marker = new google.maps.Marker({
    map: map,
    icon: image,
    title: name,
    position: coordinate
  });

  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popupText');
  const popupContentText = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eligendi libero quas dolorem velit alias debitis. Officiis rem distinctio ipsam deleniti dicta fugit, excepturi veniam repudiandae voluptatum earum similique aliquam.</p>';


 google.maps.event.addListener(marker, 'click', function(e) {
  console.log('open');
  map.panTo(marker.getPosition());
  popupText.innerHTML = popupContentText;
  popup.classList.remove('closed');
 });
}

function closePopup() {
  let popupText = document.getElementById('popupText');
  popupText.innerHTML = "";
  const popup = document.getElementById('popup');
  popup.classList.add('closed');
}



