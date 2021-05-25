function toggleButton(elementId) {
    let btn = document.getElementById(elementId);
    let selector;
    console.log(elementId);
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

function initPopups() {

}

function openPopup() {
    console.log("Initiated openPopup() -function");

}
