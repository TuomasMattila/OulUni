function toggleButton(elementId) {
    let btn = document.getElementById(elementId);
    let selector;
    if(elementId == "campuses-button") {
        selector = '.' + elementId.replace("es-button", "-box");
    } else {
        selector = '.' + elementId.replace("s-button", "-box");
    }
    let elements = document.querySelectorAll(selector);
    if(btn.innerHTML.includes("✓")) {
        btn.innerHTML = btn.innerHTML.replace(" ✓", "");
        btn.style.backgroundColor = "darkgrey";
        btn.style.color = "grey";
        hideElements(elements);
    } else {
        btn.innerHTML += " ✓";
        btn.style.color = "black";
        switch(elementId) {
            case "attractions-button":  btn.style.backgroundColor = "rgba(211, 192, 127, 1)";
                                        showElements(elements);
                                        break;
            case "restaurants-button":  btn.style.backgroundColor = "rgba(211, 127, 127, 1)";
                                        showElements(elements);
                                        break;
            case "partyspots-button":   btn.style.backgroundColor = "rgba(127, 211, 176, 1)";
                                        showElements(elements);
                                        break;
            case "clubs-button":        btn.style.backgroundColor = "rgba(199, 127, 211, 1)";
                                        showElements(elements);
                                        break;
            case "campuses-button":     btn.style.backgroundColor = "rgb(80, 170, 255)";
                                        showElements(elements);
                                        break;
            default: break;
        }
    }
}

function hideElements(elements) {
    elements.forEach(function(box) {
        box.style.display = 'none';
    }); 
}

function showElements(elements) {
    elements.forEach(function(box) {
        box.style.display = 'block';
    }); 
}

function search() {
    const results = document.querySelector('#categories');
    console.log(results);
    results.scrollIntoView({behavior: "smooth", block: "start"});
}


/*Popups*/

let overlay = document.getElementById('overlay');
let apinapatsasDescription = 'The monkey statue or by its official name:"The thirst of knowledge" is a cast bronze statue of an orangutan reading a book.';
let apinapatsasText = 'It was designed by a local comic artist Raimo Mersänheimo in 1987 and according to him it depicts an animal becoming a thinking being. It is located near the Linnanmaa campus and is popular gathering spot among students.';
let hoyhtyaDescription = 'In finnish night culture grills are a mainstay. The best fix for midnight hunger in Oulu is the grill at Höyhtyä.';
let hoyhtyaText = 'It boasts a large collection of  greasy delights such as burgers and stick kebabs.';
let kauppuri5Description = 'A legendary burger joint located in the centrum.';
let kauppuri5Text = 'Located in its namesake Kauppurienkatu 5. It\'s legend is made of it\'s special attitude to making food as well as providing the best burgers in the city. The small burger restaurant\'s interior is covered from floor to ceiling in greetings and messages of its many customers with special places reserved for those of celebrities such as rockstars.<br/>- Their slogan goes " Kauppuri 5! Nursing and aquiring hangovers since 2010!".<br/>- Their menu includes hits like: "Blue cheese PERKELE!", "Angry Chicken", Kauppuri 5 and "The Butcher" line of burgers, largest of which contains an entire kilo of pulled pork, roast beef, minced meat and bacon.';
let kontinkangasDescription = 'The secondary campus in Oulu. Medical and biochemical from the university and some from applied sciences dwell here.';
let kontinkangasText = 'Specializes in helping people due to being semi attached to the city\'s hospital.';
let kulumaDescription = 'Some drinking spots pride themselves for having a specialty, some trick or gimmick that separates them form the mass. Others offer a steady mix of all aspects, Jacks of all trades  if one may. To stand out among these unspecial kinds is rare.';
let kulumaText = 'To be do this requires a good location and highly skilled staff. Located in a key point in the city KULuMa does this and stands as one of the best overall drinking spots in Oulu.';
let lipastoDescription = 'Lipasto(the dresser) is the University of oulu\'s and the Oulu university of applied sciences shared primary campus at linnanmaa.';
let lipastoText = 'As such it is the primary center of learning and student activities in Oulu.<br/>- The large buildings sheer area works as a good exercise when two lectures are on opposite ends and there is just 15 minutes between them.<br/>- Cheap and decent food, quiet places for studying, others less so for spending time.';
let mallaskellariDescription = 'For bars and such there exist those of two kinds. Others for partying and others for spending an evening. Of this latter kind one of the best in Oulu is the Alehouse known as Mallaskellari.';
let mallaskellariText = 'Roughly translating to Maltcellar it offers the largest selection beers within the city. Friendly and skilled staff and a helping of retro consoles for spending time make it an amazing fit for a relaxing evening.';
let paskakaupunniDescription = 'How often does a piece of graphiti end up on a city\'s list of sights? Oulu is one of such and the spray in question is on the wall of uusikatu 22 in central Oulu.';
let paskakaupunniText = 'It is a stylized text that simply states: "Shitty city." It is inspired by a rocksong of the same name by Kauko Röyhkä who wrote the song to lovingly commemorate his youth in Oulu. It appeared on the wall in the mid eighties and despite several dozens of attempts to remove it from then to now, it allways seems to reappear sooner or later.<br/>- It is also the namesake and logo of a local culture organization since 2007.<br/>- A protected and reapplied landmark nowadays.<br/>- Kinda has a point when it is made into an attraction?';
let teekkaritaloDescription = 'The official clubspot of the engineering students or more commonly the teekkaris in oulu.';
let teekkaritaloText = 'This partyhouse is often rented by other guilds too making it the premier place for student parties in Oulu.<br/>- Has a great sauna because the idea of building it was concieved beer in hand in a sauna.<br/>- Built by the teekkaris and by providing work for unemployed people in 1992.';
let toripolliisiDescription = 'Toripolliisi or in english: Bobby at the market place is possibly the most popular and quintessential landmark in Oulu.';
let toripolliisiText = 'It can be concidered an icon of the city itself. It is a bronze sculpture of a caricaturized policeman displayed at the edge of the market square.<br/>- Made via charity in 1985, unveiled in 1987.<br/>- Stands in honour of the 3 bobbies who stood watch in the square for 44 years in the mid 20th century.<br/>- Nothing special, yet the city\'s symbol and a must see for anyone visiting or new here.';

function openPopup(placeName, placeAddress, image) {
    let placeDescription;
    let placeText;
    switch(placeName) {
        case 'Apinapatsas':                     placeDescription = apinapatsasDescription;
                                                placeText = apinapatsasText;
                                                break;
        case 'Höyhtyän grilli':                 placeDescription = hoyhtyaDescription;
                                                placeText = hoyhtyaText;
                                                break;
        case 'Kauppuri 5':                      placeDescription = kauppuri5Description;
                                                placeText = kauppuri5Text;
                                                break;
        case 'Kontinkangas':                    placeDescription = kontinkangasDescription;
                                                placeText = kontinkangasText;
                                                break;
        case 'KULuMA':                          placeDescription = kulumaDescription;
                                                placeText = kulumaText;
                                                break;
        case 'Lipasto':                         placeDescription = lipastoDescription;
                                                placeText = lipastoText;
                                                break;
        case 'Mallaskellari':                   placeDescription = mallaskellariDescription;
                                                placeText = mallaskellariText;
                                                break;
        case 'Paska kaupunni':                  placeDescription = paskakaupunniDescription;
                                                placeText = paskakaupunniText;
                                                break;
        case 'Teekkaritalo':                    placeDescription = teekkaritaloDescription;
                                                placeText = teekkaritaloText;
                                                break;
        case 'Toripolliisi':                    placeDescription = toripolliisiDescription;
                                                placeText = toripolliisiText;
                                                break;
        default:                                console.log('None of the switch cases happened.');
                                                break;
        
    }
    var infoPopup = `
    <div id="infoPopup">
        <div id="topbar">
            <div id="titleContainer">
                <span id="placeName">${placeName}</span>
                <span id="placeAddress">${placeAddress}</span>
            </div>
            <button id="exitButton" onclick="closePopup()"><span class="material-icons">close</span></button>
        </div>

        <div id="popupContent">

            <div id="popupBanner" style="background-image: url(${image});">
                <div id="bannerBox">
                    <div id="shortDesc">
                        <p>${placeDescription}</p>
                    </div>
                    <button id="showOnMapButton" onclick="showOnMapButton('${placeName}')">SHOW ON MAP</button>
                </div>
            </div>

            <div id="popupText">
                <p>${placeText}</p>
            </div>
        
        </div>

    </div>`;
    overlay.innerHTML = infoPopup;
    overlay.style.display = 'block';
}

function closePopup() {
    overlay.style.display = 'none';
}

function showOnMapButton(placeName) {
    sessionStorage.setItem('placeToBeShown', placeName);
    window.location.href = "../map/map.html"
}