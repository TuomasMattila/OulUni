/* // Check what page the user is on and activate the link text
// accordingly.

let currentPageTitle = document.title;
console.log(currentPageTitle);

if (currentPageTitle == 'Home') {
    document.querySelector('#home').classList.add('active');
} else if (currentPageTitle == 'Places') {
    document.querySelector('#places').classList.add('active');
} else if (currentPageTitle == 'Map') {
    document.querySelector('#maps').classList.add('active');
} */

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