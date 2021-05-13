var cssRoot = document.querySelector(':root');
var header = document.querySelector('header');

var heyText = document.getElementById('heyBox').children[0];
var heyTextList = ['Hey Stu&shy;dent!', 'Hei Op&shy;is&shy;ke&shy;li&shy;ja!', 'Hej Stu&shy;de&shy;ran&shy;de!']
var selectedHeyListIndex = 0;
heyText.innerHTML = `${heyTextList[selectedHeyListIndex]}`;

var adjectiveText = document.getElementById('adjective').children[0];
var adjectiveList = ['Wacky', 'Fun', 'Drunken']
var selectedAdjListIndex = 0;
adjectiveText.innerHTML = `${adjectiveList[selectedHeyListIndex]}`;

var body = document.body;
var lastScrollPos = 0;
var timerId;


// Interates throught a list of adjectives and changes the adjective
// in home screen every 3 seconds.
//
function changeText() {
    let interval = 3000;
    let listLength = heyTextList.length;
    let adjListLength = adjectiveList.length;

    setInterval(() => {
        selectedHeyListIndex += 1;
        selectedAdjListIndex += 1;
        /* if (selectedHeyListIndex >= 0 && selectedHeyListIndex < listLength) {
            heyText.innerHTML = `${heyTextList[selectedHeyListIndex]}`;
        }
        if (selectedHeyListIndex >= listLength) {
            selectedHeyListIndex = 0;
            heyText.innerHTML = `${heyTextList[selectedHeyListIndex]}`;
        } */
        if (selectedAdjListIndex >= 0 && selectedAdjListIndex < adjListLength) {
            adjectiveText.innerHTML = `${adjectiveList[selectedAdjListIndex]}`;
        }
        if (selectedAdjListIndex >= adjListLength) {
            selectedAdjListIndex = 0;
            adjectiveText.innerHTML = `${adjectiveList[selectedAdjListIndex]}`;
        }

    }, interval);
}

// Starts changing the adjectives
//
changeText();


// Controls the height of the header. Makes header smaller when scrolling down
// and bigger when scrollnig up. Doesn't do anything when screen width is bigger
// than 768px.
//
function headerHeightControl() {
    console.log('fired')
    var scrollPos = -body.getBoundingClientRect().top;
    //console.log(scrollPos);
    if (scrollPos < lastScrollPos || scrollPos == 0) {
        header.classList.remove('minimized');
        document.querySelector('#logoContainer').classList.remove('minimized');
        lastScrollPos = scrollPos;
        return;
    }
    header.classList.add('minimized');
    document.querySelector('#logoContainer').classList.add('minimized');
    lastScrollPos = scrollPos;
}

// Throttles the calling of a method. For example when parameters are (headerHeightControl, 200),
// headerHeightControl is called only once per 200ms.

var throttleFunction = function (func, delay) {
    // If setTimeout is already scheduled, no need to do anything
    if (timerId) {
        return
    }

    // Schedule a setTimeout after delay seconds
    timerId = setTimeout(function () {
        func();

        // Once setTimeout function execution is finished, timerId = undefined so that in <br>
        // the next scroll event function execution can be scheduled by the setTimeout
        timerId = undefined;
    }, delay)
}

// Listens for window scrolls. Calls headerHeightControl() every 
// 200ms even if scrolling happens all the time. Saves performance.
// 
window.addEventListener('scroll', () => throttleFunction(headerHeightControl, 200));

class OneDialog extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<h1>Hello, World!</h1>`;
    }
  }
  
  customElements.define('one-dialog', OneDialog);



