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



function changeText() {
    let interval = 3000;
    let listLength = heyTextList.length;
    let adjListLength = adjectiveList.length;

    setInterval(() => {
        selectedHeyListIndex += 1;
        selectedAdjListIndex += 1;
        if (selectedHeyListIndex >= 0 && selectedHeyListIndex < listLength) {
            heyText.innerHTML = `${heyTextList[selectedHeyListIndex]}`;
        }
        if (selectedHeyListIndex >= listLength) {
            selectedHeyListIndex = 0;
            heyText.innerHTML = `${heyTextList[selectedHeyListIndex]}`;
        }
        if (selectedAdjListIndex >= 0 && selectedAdjListIndex < adjListLength) {
            adjectiveText.innerHTML = `${adjectiveList[selectedAdjListIndex]}`;
        }
        if (selectedAdjListIndex >= adjListLength) {
            selectedAdjListIndex = 0;
            adjectiveText.innerHTML = `${adjectiveList[selectedAdjListIndex]}`;
        }

    }, interval);
}

changeText();

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

window.addEventListener('scroll', () => throttleFunction(headerHeightControl, 200));
