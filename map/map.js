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
const apinapatsasLoc = {lat: 65.061260, lng: 25.480190};
const hoyhtyanGrilliLoc = {lat: 64.997230, lng: 25.487076};
const laakisLoc = {lat: 65.008626, lng: 25.521646};
const kauppuri5Loc = {lat: 65.012821, lng: 25.466895};
const kontinkangasAMKLoc = {lat: 65.008723, lng: 25.510686};
const paskaKaupunniLoc = {lat: 65.012859, lng: 25.476885};
const teekkaritaloLoc = {lat: 65.063879, lng: 25.484157};
const toripolliisiLoc = {lat: 65.013306, lng: 25.464720};
const yliopistoLoc = { lat: 65.059316, lng: 25.466266};

const apinapatsasCont =     'The monkey statue or by its official name: "The thirst for knowledge" is a cast bronze statue of an orangutan reading a book. ' +
                            'It was designed by a local comic artist Raimo Mersänheimo in 1987 and according to him it depicts an animal becoming a thinking being. ' +
                            'The statue is located next to Kaijonharju library, near the Linnanmaa campus and is popular gathering spot among students.';
const hoyhtyanGrilliCont =  'In finnish night culture grills are a mainstay. The best fix for midnight hunger in Oulu is the grill at Höyhtyä. ' +
                            'It boasts a large collection of  greasy delights such as burgers and stick kebabs.';
const kauppuri5Cont =       'A legendary burger joint located in the centrum. Located in its namesake Kauppurienkatu 5. ' +
                            'It\'s legend is made of it\'s special attitude to making food as well as providing the best burgers in the city. ' +
                            'The small burger restaurant\'s interior is covered from floor to ceiling in greetings and messages of its many customers with ' +
                            'special places reserved for those of celebrities such as rockstars. ' +
                            'Their slogan goes " Kauppuri 5! Nursing and aquiring hangovers since 2010!" ' +
	                          'Their menu includes hits like: "Blue cheese PERKELE!", "Angry Chicken", Kauppuri 5 and "The Butcher" line of burgers, ' +
                            'largest of which contains an entire kilo of pulled pork, roast beef, minced meat and bacon.';
const kontinkangasAMKCont =  'University of Applied Sciences campus at Kontinkangas.';                          
const laakisCont =          'The secondary campus in Oulu. Medical and biochemical from the university and some from applied sciences dwell here. ' +
	                          'Specializes in helping people due to being semi attached to the city\'s hospital.';
const paskaKaupunniCont =   'How often does a piece of graphiti end up on a city\'s list of sights? Oulu is one of such and the spray in question is on the' + 
                            ' wall of uusikatu 22 in central Oulu. ' +
                            'It is a stylized text that simply states: "Shitty city." It is inspired by a rocksong of the same name by Kauko Röyhkä who wrote ' +
                            'the song to lovingly commemorate his youth in Oulu.' +
                            'It appeared on the wall in the mid eighties and despite several dozens of attempts to remove it from then to now, it always seems ' + 
                            'to reappear sooner or later.' + 
                            'It is also the namesake and logo of a local culture organization since 2007. ' + 
	                          'A protected and reapplied landmark nowadays. ' +
                            'Kinda has a point when it is made into an attraction?';
const teekkaritaloCont =    'The official clubspot of the engineering students or more commonly the teekkaris in Oulu. ' +
                            'This partyhouse is often rented by other guilds too making it the premier place for student parties in Oulu. ' +
                            'Has a great sauna because the idea of building it was concieved beer in hand in a sauna. ' +
                            'Built by the teekkaris and by providing work for unemployed people in 1992.';
const toripolliisiCont =    'Toripolliisi or in English: "Bobby at the market place" is possibly the most popular and quintessential landmark in Oulu. ' +
                            'It can be concidered an icon of the city itself. It is a bronze sculpture of a caricaturized policeman displayed at the edge of the market square.' +
                            'Made via charity in 1985, unveiled in 1987. ' +
                            'Stands in honour of the 3 bobbies who stood watch in the square for 44 years in the mid 20th century. ' +
                            'Nothing special, yet the city\'s symbol and a must see for anyone visiting or new here. ';
const yliopistoCont =       '"Lipasto"  (the Linnanmaa campus) ' + 
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

  addMarkerWithWindow('Apinapatsas', '../img/tiedonjano.jpg', apinapatsasCont, '../img/attractions.svg', apinapatsasLoc, map);
  addMarkerWithWindow('Höyhtyän grilli', '../img/hoyhtyanGrilli.jpg', hoyhtyanGrilliCont, '../img/restaurants.svg', hoyhtyanGrilliLoc, map);
  addMarkerWithWindow('Lääketieteellinen Tiedekunta', '../img/konKam.jpg', laakisCont, '../img/campuses.svg', laakisLoc, map);
  addMarkerWithWindow('Kauppuri 5', null, kauppuri5Cont, '../img/restaurants.svg', kauppuri5Loc, map);
  addMarkerWithWindow('Kontinkankaan kampus (AMK)', null, kontinkangasAMKCont, '../img/campuses.svg', kontinkangasAMKLoc, map);
  addMarkerWithWindow('Paska Kaupunni', '../img/paskaKaup.jpg', paskaKaupunniCont, '../img/attractions.svg', paskaKaupunniLoc, map);
  addMarkerWithWindow('Teekkaritalo', '../img/teekTal.jpg', teekkaritaloCont, '../img/partyspots.svg', teekkaritaloLoc, map);
  addMarkerWithWindow('Toripolliisi', '../img/torpo.jpg', toripolliisiCont, '../img/attractions.svg', toripolliisiLoc, map);
  addMarkerWithWindow('Yliopisto', '../img/yliopisto.jpg', yliopistoCont, '../img/campuses.svg', yliopistoLoc, map);
  
}

function addMarkerWithWindow(name, image, content, icon, coordinate, map) {
  var marker = new google.maps.Marker({
    title: name,
    content: content,   
    icon: icon,   
    position: coordinate,
    map: map
  });

  var popup = document.getElementById('popup');
  var popupContent = document.getElementById('popupContent');
  if(image == null) {
    var popupContentText = `<h4>${name}</h4> <p>${content}</p> <button onclick="closePopup()">CLOSE</button>`;
  }
  else {
    var popupContentText = `<h4>${name}</h4> <img src=${image} width ="400" height = "300"> <p>${content}</p> <button onclick="closePopup()">CLOSE</button>`;
  }

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



