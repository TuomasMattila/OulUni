// Class that has the adjectives text and color.
//
class AdjectiveText {
    constructor(text, color, fontSize) {
        this.text = text;
        this.color = color;
        if(fontSize == null) {
            this.fontSize = 'var(--font-3xl)';
        } else {
            this.fontSize = fontSize;
        }
    }

}

// Creating an array which has the adjectives and their colors.
//
let listOfAdjectives = [];
listOfAdjectives.push(new AdjectiveText('Wacky', 'var(--color-primary)'));
listOfAdjectives.push(new AdjectiveText('Amusing', '#7FD387'));
listOfAdjectives.push(new AdjectiveText('Drunken', '#D37F98'));
listOfAdjectives.push(new AdjectiveText('Drunker', '#AE7FD3'));
listOfAdjectives.push(new AdjectiveText('Extra-<br>ordinary', '#7F91D3', 'var(--font-2xl)'));
listOfAdjectives.push(new AdjectiveText('Sensual', '#D37F98'));
listOfAdjectives.push(new AdjectiveText('Wild', '#AE7FD3'));
listOfAdjectives.push(new AdjectiveText('Extra-<br>Terrestrial', '#7FD387', 'var(--font-2xl)'));

let listIndex = 0;
let previousIndex = 0;
let adjective = document.querySelector('#adjective');
let adjectiveText = document.querySelector('#adjective > h2');
let adjectiveGhost = document.querySelector('#adjectiveGhost');
let adjectiveGhostText = document.querySelector('#adjectiveGhost > h2');

adjectiveText.classList.add('anim');
adjectiveText.innerHTML = `${listOfAdjectives[listIndex].text}`;
adjectiveText.style.color = `${listOfAdjectives[listIndex].color}`;
adjectiveText.style.fontSize = `${listOfAdjectives[listIndex].fontSize}`;

adjectiveGhostText.innerHTML = `${listOfAdjectives[listIndex].text}`;
adjectiveGhostText.style.color = `${listOfAdjectives[listIndex].color}`;
adjectiveGhostText.style.fontSize = `${listOfAdjectives[listIndex].fontSize}`;



// Interates throught a list of adjectives and changes the adjective
// in home screen every 3 seconds.
//
function changeAdjective() {
    let listLength = listOfAdjectives.length;
    adjective.classList.add('hide');
    adjectiveText.classList.remove('anim');
    adjective.classList.add('anim');

    setTimeout(() => {
        adjective.classList.remove('hide');
        adjectiveText.classList.add('anim');
        adjective.classList.remove('anim');
        
        //listIndex = getRandomInt(listLength);
        listIndex += 1;

        if (listIndex >= listLength) {
            listIndex = 0;
        }

        adjectiveText.innerHTML = `${listOfAdjectives[listIndex].text}`;

        if (adjectiveText.innerHTML == 'Drunker') {
            adjective.classList.add('drunker');
        } else {
            adjective.classList.remove('drunker');
        }


        adjectiveText.style.color = `${listOfAdjectives[listIndex].color}`;
        adjectiveText.style.fontSize = `${listOfAdjectives[listIndex].fontSize}`;

        adjectiveGhostText.innerHTML = `${listOfAdjectives[listIndex].text}`;
        adjectiveGhostText.style.color = `${listOfAdjectives[listIndex].color}`;
        adjectiveGhostText.style.fontSize = `${listOfAdjectives[listIndex].fontSize}`;
        console.log(listIndex);
        let nextWidth = adjectiveText.offsetWidth;
        console.log(nextWidth);
        adjective.style.width = `${nextWidth}px`;
    }, 500);


}

function getRandomInt(max) {
    let value = Math.floor(Math.random() * max);
    if (value == previousIndex) {
        value += 1;
        if (value == max) {
            value = 0;
        }
    }
    previousIndex = value;
    console.log(value);
    return value;
}



// Starts changing the adjectives
//
setInterval(changeAdjective, 4000);
let nextWidth = adjectiveText.offsetWidth;
adjective.style.width = `${nextWidth}px`;



