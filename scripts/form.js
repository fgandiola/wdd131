// footer

const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = today.getFullYear()
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`

// products

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function displayProducts(products, optionList) {
    products.forEach(product => {
        let option = document.createElement('option');
        option.textContent = product.name;
        option.setAttribute('value', product.id);

        optionList.append(option);
    });
};

const productList = document.querySelector('#product-list');

displayProducts(products, productList);

// reviews

let reviewCounter = getReviewCounter() || 0;

function setReviewCounter() {
    localStorage.setItem('TotalReviews', JSON.stringify(reviewCounter));
}

function getReviewCounter() {
    return JSON.parse(localStorage.getItem('TotalReviews'));
}

const form = document.querySelector('form');

form.addEventListener('submit', function () {
    reviewCounter += 1;
    setReviewCounter();
});
