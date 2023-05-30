// change colour of lighsaber
function corrupt() {

    let blade = document.querySelector(".blade");
    blade.style.background = "linear-gradient(180deg, white, red 20%, orange 50%, red 80%, white)";
    blade.style.boxShadow = "0 0 50px 20px red";

}


// turn lightsaber on/off
let isOn = false;

function turnOnOff() {

    isOn = !isOn;
    let blade = document.querySelector('.blade');
    blade.style.display = isOn ? 'inline-block' : 'none';

}


// retrieve API planet data and put into card template
axios('http://localhost:3000/planets/control')
    .then(axiosData => { console.log(axiosData); addCards(axiosData.data) });


function addCards(axiosData) {

    axiosData.results.forEach(entry => {
        const template = document.getElementById("card-template").content.cloneNode(true);
        template.querySelector(".card-title").innerText = entry.name;
        template.querySelector(".card-climate").innerText = entry.climate;
        template.querySelector(".card-terrain").innerText = entry.terrain;
        template.querySelector(".card-population").innerText = entry.population;
        document.querySelector("#card-list").appendChild(template);
    });

}


// display user name that was entered in the form
function printName(event) {

    event.preventDefault();
    let name = document.getElementById('name').value;
    if (name) {
        document.getElementById('print-greeting').innerHTML = `May the force be with you, ${name}!`;
    } else {
        document.getElementById('print-greeting').innerHTML = '';
    };

}
