// copyright year and last modified date

const currentyear = document.querySelector("#current-year")
const lastModified = document.querySelector("#lastModified")
const today = new Date()
currentyear.innerHTML = today.getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;

// responsive menu

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});