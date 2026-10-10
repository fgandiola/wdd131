// review counter

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