// Check what page the user is on and activate the link text
// accordingly.

let currentPageTitle = document.title;
console.log(currentPageTitle);

if (currentPageTitle == 'Home') {
    document.querySelector('#home').classList.add('active');
} else if (currentPageTitle == 'Places') {
    document.querySelector('#places').classList.add('active');
} else if (currentPageTitle == 'Map') {
    document.querySelector('#maps').classList.add('active');
}