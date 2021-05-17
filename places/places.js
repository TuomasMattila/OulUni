function toggleButton(elementId) {
    var btn = document.getElementById(elementId);
    if(btn.innerHTML.includes("✓")) {
        btn.innerHTML = btn.innerHTML.replace(" ✓", "");
        btn.style.backgroundColor = "darkgrey";
        btn.style.color = "grey";
    } else {
        btn.innerHTML += " ✓";
        btn.style.color = "black";
        switch(elementId) {
            case "attractions-button":  btn.style.backgroundColor = "rgba(211, 192, 127, 1)";
                                        break;
            case "restaurants-button":  btn.style.backgroundColor = "rgba(211, 127, 127, 1)";
                                        break;
            case "partyspots-button":   btn.style.backgroundColor = "rgba(127, 211, 176, 1)";
                                        break;
            case "clubs-button":        btn.style.backgroundColor = "rgba(199, 127, 211, 1)";
                                        break;
            case "campuses-button":     btn.style.backgroundColor = "rgb(82, 94, 160)";
                                        break;
            default: break;
        }
    }
}