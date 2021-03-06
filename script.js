var cssRoot = document.querySelector(':root');
var header = document.querySelector('header');
var timerId;
var body = document.body;
var lastScrollPos = 0;


// Controls the height of the header. Makes header smaller when scrolling down
// and bigger when scrollnig up. Doesn't do anything when screen width is bigger
// than 768px.
//
function headerHeightControl() {
    console.log('Checking if scrolled on top of site')
    var scrollPos = -body.getBoundingClientRect().top;
    //console.log(scrollPos);
    if (/* scrollPos < lastScrollPos || scrollPos == 0 */ scrollPos == 0 && document.title != 'Map') {
        console.log(scrollPos);
        header.classList.remove('minimized');
        lastScrollPos = scrollPos;
        return;
    }
    header.classList.add('minimized');
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

setTimeout(() => {
    if(document.title == 'Map') {
        header.classList.add('minimized');
    }
}, 1000);


