// footer

const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = today.getFullYear()
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`

// navigation button

const navButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
navButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    navButton.classList.toggle("open");
});
