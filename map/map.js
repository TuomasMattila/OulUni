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
const kulumaLoc = { lat: 65.01289495311028, lng: 25.46660501938745 };
const mallaskellariLoc = { lat: 65.01206702055481, lng: 25.471256488516314 };

const apinapatsasAddress = 'Kalevalantie 5, 90570 Oulu';
const hoyhtyanGrilliAddress = 'Latokartanontie 1, 90150 Oulu';
const laakisAddress = 'Aapistie 5 A, 90220 Oulu';
const kauppuri5Address = 'Kauppurienkatu 5, 90100 Oulu';
const kontinkangasAMKAddress = 'Kiviharjuntie 4, 90220 Oulu';
const paskaKaupunniAddress = 'Uusikatu 22, 90100 Oulu';
const teekkaritaloAddress = 'Kalervontie 7, 90570 Oulu';
const toripolliisiAddress = 'Rantakatu 6, 90100 Oulu';
const yliopistoAddress = 'Pentti Kaiteran katu 1, 90570 Oulu';
const kulumaAddress = 'Pentti Kaiteran katu 1, 90570 Oulu';
const mallaskellariAddress = 'Kirkkokatu 17, 90100 Oulu';

const apinapatsasDesc = 'The monkey statue or by its official name: "The thirst for knowledge" is a cast bronze statue of an orangutan reading a book. '
const apinapatsasCont = 'It was designed by a local comic artist Raimo Mersänheimo in 1987 and according to him it depicts an animal becoming a thinking being. ' +
  'The statue is located next to Kaijonharju library, near the Linnanmaa campus and is popular gathering spot among students.';

const hoyhtyanGrilliDesc = 'In finnish night culture grills are a mainstay. The best fix for midnight hunger in Oulu is the grill at Höyhtyä.';
const hoyhtyanGrilliCont = 'It boasts a large collection of  greasy delights such as burgers and stick kebabs.';

const kauppuri5Desc = 'A legendary burger joint located in the centrum. Located in its namesake Kauppurienkatu 5.';
const kauppuri5Cont = 'It\'s legend is made of it\'s special attitude to making food as well as providing the best burgers in the city. ' +
  'The small burger restaurant\'s interior is covered from floor to ceiling in greetings and messages of its many customers with ' +
  'special places reserved for those of celebrities such as rockstars. ' +
  'Their slogan goes " Kauppuri 5! Nursing and aquiring hangovers since 2010!" ' +
  'Their menu includes hits like: "Blue cheese PERKELE!", "Angry Chicken", Kauppuri 5 and "The Butcher" line of burgers, ' +
  'largest of which contains an entire kilo of pulled pork, roast beef, minced meat and bacon.';

const kontinkangasAMKDesc = 'Desc'
const kontinkangasAMKCont = 'University of Applied Sciences campus at Kontinkangas.';

const laakisDesc = 'The secondary campus in Oulu. Medical and biochemical from the university and some from applied sciences dwell here.';
const laakisCont =
  'Specializes in helping people due to being semi attached to the city\'s hospital.';

const paskakaupunniDesc = 'How often does a piece of graphiti end up on a city\'s list of sights? Oulu is one of such and the spray in question is on the' +
  ' wall of uusikatu 22 in central Oulu. ';
const paskaKaupunniCont = 'It is a stylized text that simply states: "Shitty city." It is inspired by a rocksong of the same name by Kauko Röyhkä who wrote ' +
  'the song to lovingly commemorate his youth in Oulu.' +
  'It appeared on the wall in the mid eighties and despite several dozens of attempts to remove it from then to now, it always seems ' +
  'to reappear sooner or later.' +
  'It is also the namesake and logo of a local culture organization since 2007. ' +
  'A protected and reapplied landmark nowadays. ' +
  'Kinda has a point when it is made into an attraction?';

const teekkaritaloDesc = 'The official clubspot of the engineering students or more commonly the teekkaris in Oulu.'
const teekkaritaloCont = 'This partyhouse is often rented by other guilds too making it the premier place for student parties in Oulu. ' +
  'Has a great sauna because the idea of building it was concieved beer in hand in a sauna. ' +
  'Built by the teekkaris and by providing work for unemployed people in 1992.';

const toripolliisiDesc = 'Toripolliisi or in English: "Bobby at the market place" is possibly the most popular and quintessential landmark in Oulu.';
const toripolliisiCont = 'It can be concidered an icon of the city itself. It is a bronze sculpture of a caricaturized policeman displayed at the edge of the market square.' +
  'Made via charity in 1985, unveiled in 1987. ' +
  'Stands in honour of the 3 bobbies who stood watch in the square for 44 years in the mid 20th century. ' +
  'Nothing special, yet the city\'s symbol and a must see for anyone visiting or new here. ';

const yliopistoDesc = 'Lipasto (the dresser) is the University of Oulu\'s and the Oulu University of Applied Sciences shared primary campus at Linnanmaa.';
const yliopistoCont = 'As such it is the primary center of learning and student activities in Oulu. ' +
  'The large buildings sheer area works as a good exercise when two lectures are on opposite ends and there is just 15 minutes between them. ' +
  'Cheap and decent food, quiet places for studying, others less so for spending time';

  const kulumaDesc = 'Needs a fitting short description';
  const kulumaCont = 'Some drinking spots pride themselves for having a specialty, some trick or gimmick that separates them form the mass. Others offer a steady mix of all aspects, Jacks of all trades  if one may. To stand out among these unspecial kinds is rare. To be do this requires a good location and highly skilled staff. Located in a key point in the city KULuMa does this and stands as one of the best overall drinking spots in Oulu.';

  const mallaskellariDesc = 'For bars and such there exist those of two kinds. Others for partying and others for spending an evening. Of this latter kind one of the best in Oulu is the Alehouse known as Mallaskellari.';
  const mallaskellariCont = 'Roughly translating to Maltcellar it offers the largest selection beers within the city. Friendly and skilled staff and a helping of retro consoles for spending time make it an amazing fit for a relaxing evening.';

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
    ['Teekkaritalo', '../img/teekTal.jpg', teekkaritaloCont, '../img/mapIcons/teekkaritalo.svg', teekkaritaloLoc, map, 'partyspots', teekkaritaloDesc, teekkaritaloAddress],
    ['Toripolliisi', '../img/torpo.jpg', toripolliisiCont, '../img/mapIcons/toripolliisi.svg', toripolliisiLoc, map, 'attractions', toripolliisiDesc, toripolliisiAddress],
    ['Paska kaupunni', '../img/paskaKaup.jpg', paskaKaupunniCont, '../img/mapIcons/paskakaupunni.svg', paskaKaupunniLoc, map, 'attractions', paskakaupunniDesc, paskaKaupunniAddress],
    ['Apinapatsas', '../img/tiedonjano.jpg', apinapatsasCont, '../img/mapIcons/apinapatsas.svg', apinapatsasLoc, map, 'attractions', apinapatsasDesc, apinapatsasAddress],
    ['Höyhtyän grilli', '../img/hoyhtyanGrilli.jpg', hoyhtyanGrilliCont, '../img/mapIcons/hoyhtyangrilli.svg', hoyhtyanGrilliLoc, map, 'restaurants', hoyhtyanGrilliDesc, hoyhtyanGrilliAddress],
    ['Kauppuri 5', '../img/kau5.jpg', kauppuri5Cont, '../img/mapIcons/kauppuri5.svg', kauppuri5Loc, map, 'restaurants', kauppuri5Desc, kauppuri5Address],
    ['Lipasto', '../img/yliopisto.jpg', yliopistoCont, '../img/mapIcons/yliopisto.svg', yliopistoLoc, map, 'campuses', yliopistoDesc,yliopistoAddress],
    ['Kontinkangas', '../img/konKam.jpg', kontinkangasAMKCont, '../img/mapIcons/kontinkangas.svg', kontinkangasAMKLoc, map, 'campuses', kontinkangasAMKDesc, kontinkangasAMKAddress],
    ['KULuMA', '../img/kuluma.jpg', kulumaCont, '../img/mapIcons/kuluma.svg', kulumaLoc, map, 'clubsAndBars', kulumaDesc, kulumaAddress],
    ['Mallaskellari', '../img/mallaskellari.jpg', mallaskellariCont, '../img/mapIcons/mallaskellari.svg', mallaskellariLoc, map, 'clubsAndBars', mallaskellariDesc, mallaskellariAddress]
    /* ['Lääkis', '../img/mallaskellari.jpg' , laakisCont, '../img/mapIcons/laakis.svg', laakisLoc, map, 'campuses', laakisDesc, laakisAddress] */
  ];

  for (let index = 0; index < markers.length; index++) {
    addMarkerWithWindow(markers[index]);

  }

  myLocation = new google.maps.InfoWindow();
  const locationButton = document.querySelector("#locationButton");
  locationButton.classList.add("custom-map-control-button");
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
          map.setCenter(pos);
          map.setZoom(12);
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
  let desc = markerInfo[7];
  let address = markerInfo[8];


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
          <span id="placeAddress">${address}</span>
      </div>
      <button id="exitButton" onclick="closePopup()"><span class="material-icons">close</span></button>
    </div>

    <div id="popupContent">

      <div id="popupBanner" style="background-image: url(${image});">
      </div>

      <div id="bannerBox">
              <div id="shortDesc">
                  <p>${desc}</p>
              </div>
              <button id="showOnMapButton" onclick="navigateTo('${address}')">NAVIGATE TO</button>
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

  let filters = document.querySelectorAll('.filterLabel > input');
  let categoriesToShow = [];


  for (let index = 0; index < filters.length; index++) {
    const element = filters[index];
    if (element.checked) {
      categoriesToShow.push(element.value);
    }

  }

  console.log('should show ' + categoriesToShow.toString());

  /*   if (categoriesToShow.length == 0) {
  
      for (let index = 0; index < markersOnMap.length; index++) {
        markersOnMap[index].setVisible(true);
      }
  
    } else { */

  for (let index = 0; index < markersOnMap.length; index++) {
    const marker = markersOnMap[index];

    if (categoriesToShow.includes(marker.category)) {
      marker.setVisible(true);
    } else {
      marker.setVisible(false);
    }
  }

  /*   } */

}

function selectAllFilters() {
  for (let index = 0; index < markersOnMap.length; index++) {
    const marker = markersOnMap[index];
    marker.setVisible(true);
    filterButtons[index].checked = true;
  }
}

function deselectAllFilters() {
  for (let index = 0; index < markersOnMap.length; index++) {
    const marker = markersOnMap[index];
    marker.setVisible(false);
    filterButtons[index].checked = false;
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
  if (sessionStorage.getItem('placeToBeShown') != null) {
    for (let index = 0; index < markersOnMap.length; index++) {
      if (markersOnMap[index].title == sessionStorage.getItem('placeToBeShown')) {
        let place = markersOnMap[index];
        new google.maps.event.trigger(place, 'click');
      }
    }
    sessionStorage.removeItem('placeToBeShown');
  }
}

function navigateTo(destination) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const destLoc = destination.replace(/\s/g, '+');
        var navLink = 'https://www.google.fi/maps/dir/' + pos.lat + ',' + pos.lng + '/' + destination;
        window.open(navLink, '_blank');
      },
      () => {
        handleLocationError(true, myLocation, map.getCenter());
      }
    ); 
    
  }
  else {
    handleLocationError(false, myLocation, map.getCenter());
  }
  
}