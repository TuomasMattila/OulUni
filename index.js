var heyText = document.getElementById('heyBox').children[0];
var heyTextList = ['Hey Stu&shy;dent!', 'Hei Op&shy;is&shy;ke&shy;li&shy;ja!', 'Hej Stu&shy;de&shy;ran&shy;de!']
var selectedHeyListIndex = 0;
heyText.innerHTML = `${heyTextList[selectedHeyListIndex]}`;

var adjectiveText = document.getElementById('adjective').children[0];
var adjectiveList = ['Wacky', 'Fun', 'Drunken']
var selectedAdjListIndex = 0;
adjectiveText.innerHTML = `${adjectiveList[selectedHeyListIndex]}`;


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




