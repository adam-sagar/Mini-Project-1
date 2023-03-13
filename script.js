function corrupt() {
    let lightsaber = document.getElementById("change-colour");
    let blade = document.querySelector(".blade");
    blade.style.background = "linear-gradient(180deg, white, red 20%, orange 50%, red 80%, white)";
    blade.style.boxShadow = "0 0 50px 20px red";
}

let isOn = true;

function turnOnOff() {
    let blade = document.querySelector(".blade");
    if (blade.style.visibility == "hidden") {
        blade.style.visibility = "visible";
    } else {
        blade.style.visibility = "hidden";
    }
}




function printName(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    if (name) {
        document.getElementById('print-greeting').innerHTML = `May the force be with you, ${name}!`;
    } else {
        document.getElementById('print-greeting').innerHTML = '';
    };
}