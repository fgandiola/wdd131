const currentyear = document.querySelector("#current-year")
const lastmodified = document.querySelector("#lastModified")

const today = new Date ()

currentyear.innerHTML = today.getFullYear()
document.getElementById("lastModified").innerHTML = document.lastModified;