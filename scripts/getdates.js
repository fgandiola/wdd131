// copyright year

const year = document.querySelector("#currentYear");
const today = new Date();

year.innerHTML = today.getFullYear()

// last modification

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`