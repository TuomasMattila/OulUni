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
listOfAdjectives.push(new AdjectiveText('Fun', '#7FD387'));
listOfAdjectives.push(new AdjectiveText('Drunk', '#D37F98'));
listOfAdjectives.push(new AdjectiveText('Drunker', '#AE7FD3'));
listOfAdjectives.push(new AdjectiveText('Extra-<br>ordinary', '#7F91D3', 'var(--font-2xl)'));

let listIndex = 0;
let adjectiveText = document.querySelector('#adjective > h2');
let adjective = document.querySelector('#adjective');
adjectiveText.innerHTML = `${listOfAdjectives[listIndex].text}`;
adjectiveText.style.color = `${listOfAdjectives[listIndex].color}`;
adjectiveText.style.fontSize = `${listOfAdjectives[listIndex].fontSize}`;



// Interates throught a list of adjectives and changes the adjective
// in home screen every 3 seconds.
//
function changeAdjective() {
    let listLength = listOfAdjectives.length;

    adjective.classList.add('hide');

    setTimeout(() => {
        adjective.classList.remove('hide');
        listIndex += 1;
        if (listIndex >= listLength) {
            listIndex = 0;
        }
        adjectiveText.innerHTML = `${listOfAdjectives[listIndex].text}`;
        adjectiveText.style.color = `${listOfAdjectives[listIndex].color}`;
        adjectiveText.style.fontSize = `${listOfAdjectives[listIndex].fontSize}`;
        //console.log(listIndex);
    }, 500);


}



// Starts changing the adjectives
//
setInterval(changeAdjective, 3000);




