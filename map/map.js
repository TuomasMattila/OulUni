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

let map, myLocation;

let markersOnMap = [];

const apinapatsasLoc = { lat: 65.061260, lng: 25.480190 };
const hoyhtyanGrilliLoc = { lat: 64.997230, lng: 25.487076 };
const laakisLoc = { lat: 65.008626, lng: 25.521646 };
const kauppuri5Loc = { lat: 65.012821, lng: 25.466895 };
const kontinkangasAMKLoc = { lat: 65.008723, lng: 25.510686 };
const paskaKaupunniLoc = { lat: 65.012859, lng: 25.476885 };
const teekkaritaloLoc = { lat: 65.063879, lng: 25.484157 };
const toripolliisiLoc = { lat: 65.013306, lng: 25.464720 };
const yliopistoLoc = { lat: 65.059316, lng: 25.466266 };

const apinapatsasCont = 'The monkey statue or by its official name: "The thirst for knowledge" is a cast bronze statue of an orangutan reading a book. ' +
  'It was designed by a local comic artist Raimo Mersänheimo in 1987 and according to him it depicts an animal becoming a thinking being. ' +
  'The statue is located next to Kaijonharju library, near the Linnanmaa campus and is popular gathering spot among students.';
const hoyhtyanGrilliCont = 'In finnish night culture grills are a mainstay. The best fix for midnight hunger in Oulu is the grill at Höyhtyä. ' +
  'It boasts a large collection of  greasy delights such as burgers and stick kebabs.';
const kauppuri5Cont = 'A legendary burger joint located in the centrum. Located in its namesake Kauppurienkatu 5. ' +
  'It\'s legend is made of it\'s special attitude to making food as well as providing the best burgers in the city. ' +
  'The small burger restaurant\'s interior is covered from floor to ceiling in greetings and messages of its many customers with ' +
  'special places reserved for those of celebrities such as rockstars. ' +
  'Their slogan goes " Kauppuri 5! Nursing and aquiring hangovers since 2010!" ' +
  'Their menu includes hits like: "Blue cheese PERKELE!", "Angry Chicken", Kauppuri 5 and "The Butcher" line of burgers, ' +
  'largest of which contains an entire kilo of pulled pork, roast beef, minced meat and bacon.';
const kontinkangasAMKCont = 'University of Applied Sciences campus at Kontinkangas.';
const laakisCont = 'The secondary campus in Oulu. Medical and biochemical from the university and some from applied sciences dwell here. ' +
  'Specializes in helping people due to being semi attached to the city\'s hospital.';
const paskaKaupunniCont = 'How often does a piece of graphiti end up on a city\'s list of sights? Oulu is one of such and the spray in question is on the' +
  ' wall of uusikatu 22 in central Oulu. ' +
  'It is a stylized text that simply states: "Shitty city." It is inspired by a rocksong of the same name by Kauko Röyhkä who wrote ' +
  'the song to lovingly commemorate his youth in Oulu.' +
  'It appeared on the wall in the mid eighties and despite several dozens of attempts to remove it from then to now, it always seems ' +
  'to reappear sooner or later.' +
  'It is also the namesake and logo of a local culture organization since 2007. ' +
  'A protected and reapplied landmark nowadays. ' +
  'Kinda has a point when it is made into an attraction?';
const teekkaritaloCont = 'The official clubspot of the engineering students or more commonly the teekkaris in Oulu. ' +
  'This partyhouse is often rented by other guilds too making it the premier place for student parties in Oulu. ' +
  'Has a great sauna because the idea of building it was concieved beer in hand in a sauna. ' +
  'Built by the teekkaris and by providing work for unemployed people in 1992.';
const toripolliisiCont = 'Toripolliisi or in English: "Bobby at the market place" is possibly the most popular and quintessential landmark in Oulu. ' +
  'It can be concidered an icon of the city itself. It is a bronze sculpture of a caricaturized policeman displayed at the edge of the market square.' +
  'Made via charity in 1985, unveiled in 1987. ' +
  'Stands in honour of the 3 bobbies who stood watch in the square for 44 years in the mid 20th century. ' +
  'Nothing special, yet the city\'s symbol and a must see for anyone visiting or new here. ';
const yliopistoCont = '"Lipasto"  (the Linnanmaa campus) ' +
  'Lipasto(the dresser) is the University of Oulu\'s and the Oulu University of Applied Sciences shared primary campus at Linnanmaa. ' +
  'As such it is the primary center of learning and student activities in Oulu. ' +
  'The large buildings sheer area works as a good exercise when two lectures are on opposite ends and there is just 15 minutes between them. ' +
  'Cheap and decent food, quiet places for studying, others less so for spending time';

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

  const markers = [
    ['Teekkaritalo', '../img/teekTal.jpg', teekkaritaloCont, '../img/mapIcons/teekkaritalo.svg', teekkaritaloLoc, map, 'partyspots'],
    ['Toripolliisi', '../img/torpo.jpg', toripolliisiCont, '../img/mapIcons/toripolliisi.svg', toripolliisiLoc, map, 'attractions'],
    ['Paska kaupunni', '../img/paskaKaup.jpg', paskaKaupunniCont, '../img/mapIcons/paskakaupunni.svg', paskaKaupunniLoc, map, 'attractions'],
    ['Apinapatsas', '../img/tiedonjano.jpg', apinapatsasCont, '../img/mapIcons/apinapatsas.svg', apinapatsasLoc, map, 'attractions'],
    ['Höyhtyän grilli', '../img/hoyhtyanGrilli.jpg', hoyhtyanGrilliCont, '../img/mapIcons/hoyhtyangrilli.svg', hoyhtyanGrilliLoc, map, 'restaurants'],
    ['Kauppuri 5', null, kauppuri5Cont, '../img/mapIcons/kauppuri5.svg', kauppuri5Loc, map, 'restaurants']
  ];

  for (let index = 0; index < markers.length; index++) {
    addMarkerWithWindow(markers[index]);

  }

  /*   addMarkerWithWindow('Teekkaritalo', '../img/teekTal.jpg', teekkaritaloCont, '../img/mapIcons/teekkaritalo.svg', teekkaritaloLoc, map);
    addMarkerWithWindow('Toripolliisi', '../img/torpo.jpg', toripolliisiCont, '../img/mapIcons/toripolliisi.svg', toripolliisiLoc, map);
    addMarkerWithWindow('Paska Kaupunni', '../img/paskaKaup.jpg', paskaKaupunniCont, '../img/mapIcons/paskakaupunni.svg', paskaKaupunniLoc, map);
    addMarkerWithWindow('Apinapatsas', '../img/tiedonjano.jpg', apinapatsasCont, '../img/mapIcons/apinapatsas.svg', apinapatsasLoc, map);
  
    addMarkerWithWindow('Höyhtyän grilli', '../img/hoyhtyanGrilli.jpg', hoyhtyanGrilliCont, '../img/mapIcons/hoyhtyangrilli.svg', hoyhtyanGrilliLoc, map);
    addMarkerWithWindow('Kauppuri 5', null, kauppuri5Cont, '../img/mapIcons/kauppuri5.svg', kauppuri5Loc, map); */
  /*
addMarkerWithWindow('Lääketieteellinen Tiedekunta', '../img/konKam.jpg', laakisCont, '../img/campuses.svg', laakisLoc, map);
addMarkerWithWindow('Kauppuri 5', null, kauppuri5Cont, '../img/restaurants.svg', kauppuri5Loc, map);
addMarkerWithWindow('Kontinkankaan kampus (AMK)', null, kontinkangasAMKCont, '../img/campuses.svg', kontinkangasAMKLoc, map);
addMarkerWithWindow('Yliopisto', '../img/yliopisto.jpg', yliopistoCont, '../img/campuses.svg', yliopistoLoc, map); */

  myLocation = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "My location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(locationButton);
  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          myLocation.setPosition(pos);
          myLocation.setContent("Your current location");
          myLocation.open(map);
        },
        () => {
          handleLocationError(true, myLocation, map.getCenter());
        }
      );
    }
    else {
      handleLocationError(false, myLocation, map.getCenter());
    }
  });


  var myoverlay = new google.maps.OverlayView();
  myoverlay.draw = function () {
    this.getPanes().markerLayer.id = 'markerLayer';
  };
  myoverlay.setMap(map);

}

function addMarkerWithWindow(markerInfo) {
  let name = markerInfo[0];
  let image = markerInfo[1];
  let content = markerInfo[2];
  let icon = markerInfo[3];
  let coordinate = markerInfo[4];
  let map = markerInfo[5];
  let category = markerInfo[6];


  let marker = new google.maps.Marker({
    title: name,
    content: content,
    icon: {
      url: icon,
      size: new google.maps.Size(162.5, 45),
      scaledSize: new google.maps.Size(162.5, 45),
    },
    position: coordinate,
    map: map,
    category: category,
    optimized: false,
    animation: google.maps.Animation.DROP
  });

  markersOnMap.push(marker);

  var popup = document.getElementById('popup');
  var popupText = document.getElementById('popupText');
  /*   if(image == null) {
      var popupContentText = `<h4>${name}</h4> <p>${content}</p> <button onclick="closePopup()">CLOSE</button>`;
    }
    else { */
  var popupContentText = `
  <div id="popupInside">
    <div id="topbar">
      <div id="titleContainer">
          <span id="placeName">${name}</span>
          <span id="placeAddress">Osoite 10, 90530 Oulu</span>
      </div>
      <button id="exitButton" onclick="closePopup()"><span class="material-icons">close</span></button>
    </div>

    <div id="popupContent">

      <div id="popupBanner" style="background-image: url(${image});">
      </div>

      <div id="bannerBox">
              <div id="shortDesc">
                  <p>Lyhyt kuvaus paikasta. Lyhyt kuvaus paikasta. Lyhyt kuvaus paikasta. Lyhyt kuvaus paikasta. Lyhyt kuvaus paikasta.</p>
              </div>
              <button id="showOnMapButton">NAVIGATE TO</button>
      </div>

      <div id="popupText">
      <p>${content}</p>
      </div>
    </div>
  </div>`;
  /*   } */

  google.maps.event.addListener(marker, 'click', function (e) {
    console.log('open');
    map.panTo(marker.getPosition());
    popup.innerHTML = popupContentText;
    popup.classList.add('open');

    if (map.getZoom() < 15) {
      map.setZoom(15);
    }

  });
}

function closePopup() {
  let popupText = document.getElementById('popupText');
  popupText.innerHTML = "";
  const popup = document.getElementById('popup');
  popup.classList.remove('open');
}

function handleLocationError(browserHasGeolocation, myLocation, pos) {
  myLocation.setPosition(pos);
  myLocation.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error Your browser doesn't support geolocation."
  );
  myLocation.open(map);
}

function filter() {

  let category = this.value;

/* 
  for (let index = 0; index < markersOnMap.length; index++) {
    markerCand = markersOnMap[index];

    if (markerCand.category == category) {
      var isChecked = this.checked;

      if (isChecked) {
        markerCand.setVisible(true);
      } else {
        markerCand.setVisible(false);
      }
    }

  } */

  let filters = document.querySelectorAll('.filterLabel > input');
  let categoriesToShow = [];


  for (let index = 0; index < filters.length; index++) {
    const element = filters[index];
    if (element.checked) {
      categoriesToShow.push(element.value);
    }

  }

  console.log('should show ' + categoriesToShow.toString());

  if (categoriesToShow.length == 0) {

    for (let index = 0; index < markersOnMap.length; index++) {
      markersOnMap[index].setVisible(true);
    }

  } else {

    for (let index = 0; index < markersOnMap.length; index++) {
      const marker = markersOnMap[index];
      
      if (categoriesToShow.includes(marker.category)) {
        marker.setVisible(true);
      } else {
        marker.setVisible(false);
      }
    }

  }

}

const filterButtons = document.querySelectorAll('.filterLabel > input');
console.log(filterButtons);

filterButtons.forEach(element => {
  element.addEventListener('click', filter);
});

function toggleFilters() {
  const input = document.querySelector('.filterboxToggleLabel input');

  const filterbox = document.querySelector('#filtersContainer');
  const filtersToggleText = document.querySelector('#showFiltersText');

  if (input.checked) {
    filterbox.classList.add('open');
    filtersToggleText.innerHTML = 'Hide Filters';
  } else {
    filterbox.classList.remove('open');
    filtersToggleText.innerHTML = 'Show Filters';
  }
  
}

/*'Show on map' -button related function*/
function onLoad() {
  if(sessionStorage.getItem('placeToBeShown') != null) {
    for (let index = 0; index < markersOnMap.length; index++) {
      if(markersOnMap[index].title == sessionStorage.getItem('placeToBeShown')) {
        let place = markersOnMap[index];
        new google.maps.event.trigger(place, 'click');
      }
    }
    sessionStorage.removeItem('placeToBeShown');
  }
}