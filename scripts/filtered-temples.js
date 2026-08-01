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

// temples array

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, U.S.",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, U.S.",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, U.S.",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salta Argentina",
        location: "Salta, Salta, Argentina",
        dedicated: "2024, June, 16",
        area: "27000",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-main.jpg",
    },
    {
        templeName: "Okinawa Japan",
        location: "Okinawa, Okinawa, Japan",
        dedicated: "2023, November, 12",
        area: "12437",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg",
    },
    {
        templeName: "Taipei Taiwan",
        location: "Taipei, Taiwan",
        dedicated: "1984, November, 17-18",
        area: "9945",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/taipei-taiwan-temple/taipei-taiwan-temple-8296-main.jpg",
    }
];

// temple cards

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    document.querySelector("#temple-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `Location: ${temple.location}`;
        dedication.innerHTML = `Dedicated: ${temple.dedicated}`;
        area.innerHTML = `Area: ${temple.area} ft²`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector("#temple-grid").appendChild(card);
    })
}

const homeLink = document.querySelector("#home");
const oldTempleLink = document.querySelector("#old-temples");
const newTempleLink = document.querySelector("#new-temples");
const largeTempleLink = document.querySelector("#large-temples");
const smallTempleLink = document.querySelector("#small-temples");

homeLink.addEventListener("click", () => {
    createTempleCard(temples);
})

oldTempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.split(",")[0] < 1900));
});

newTempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.dedicated.split(",")[0] > 2000));
});

largeTempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallTempleLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});