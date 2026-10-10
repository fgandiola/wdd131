// footer

const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = today.getFullYear()
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`

// movie list

const movieList = document.querySelector('#movie-list');

const movies = [
    {
        name: "Los Tallos Amargos",
        year: "1956",
        director: "Fernando Ayala",
        cast: "Carlos Cores, Carmen Giménez, George Hilton, Vassili Lambrinos, Adolfo Linvel",
        genre: "Drama",
        description: "The protagonist, a journalist, is offered a business opportunity to make easy money by scamming people via mail. At first, everything seems like a dream, but then suspicions begin to arise.",
        imageUrl: "images/poster-tallos.webp",
        page: "tallos-amargos.html"
    },
    {
        name: "Nueve Reinas",
        year: "2000",
        director: "Fabián Bielinsky",
        cast: "Gastón Pauls, Ricardo Darín, Leticia Brédice, Tomás Fonzi, Ignasi Abadal",
        genre: "Thriller, Crime",
        description: "Juan and Marcos are two small-time con artists—one young, the other a veteran of the trade—who unexpectedly find themselves caught up in a scheme that could make them millionaires: they have less than a day to pull off a scam that cannot fail.",
        imageUrl: "images/poster-nueve.webp",
        page: "nueve-reinas.html"
    },
    {
        name: "La Ciénaga",
        year: "2001",
        director: "Lucrecia Martel",
        cast: "Mercedes Morán, Graciela Borges, Martín Adjemián, Leonora Balcarce, Silvia Baylé",
        genre: "Drama",
        description: "Two families—one urban middle-class and the other consisting of struggling rural producers—cross paths amidst the provincial lethargy of a chaotic yet unchanging Salta, where nothing happens, yet everything is on the verge of exploding.",
        imageUrl: "images/poster-cienaga.webp",
        page: "la-cienaga.html"
    },
    {
        name: "Diarios de Motocicleta",
        year: "2004",
        director: "Walter Salles",
        cast: "Gael García Bernal, Rodrigo de la Serna, Mía Maestro, Mercedes Morán",
        genre: "Drama, Biography",
        description: "A dramatization of the youthful road trip that changed Ernesto Che Guevara's life.",
        imageUrl: "images/poster-motocicleta.webp",
        page: "diarios-motocicleta.html"
    },
    {
        name: "La Antena",
        year: "2007",
        director: "Esteban Sapir",
        cast: "Valeria Bertuccelli, Alejandro Urdapilleta, Julieta Cardinali, Florencia Raggi, Rafael Ferro",
        genre: "Sci-fi, Drama, Fantastic",
        description: "An entire city has been rendered voiceless and endures a long, harsh winter. A wicked, unscrupulous man—Mr. T.V., the absolute owner of the images that animate the city and of a vast line of products bearing his personal brand—is carrying out a sinister secret plan to eternally subjugate every soul living there.",
        imageUrl: "images/poster-antena.webp",
        page: "#"
    },
    {
        name: "El Secreto de sus Ojos",
        year: "2009",
        director: "Juan José Campanella",
        cast: "Ricardo Darín, Soledad Vilamil, Guillermo Francella, Pablo Rago, Javier Godino",
        genre: "Thriller, Drama",
        description: "A retired legal advisor writes a novel in the hope of finding closure regarding the unsolved homicide cases that still haunt him.",
        imageUrl: "images/poster-secreto.webp",
        page: "#"
    },
    {
        name: "Relatos salvajes",
        year: "2014",
        director: "Damián Szifrón",
        cast: "Ricardo Darín, Darío Grandinetti, Leonardo Sbaraglia, Érica Rivas, Julieta Zylberberg",
        genre: "Thriller, Drama, Dark Comedy",
        description: "Six standalone stories combining suspense, humor, and violence, based on *Amazing Stories* (1985-1987), the television series created by Steven Spielberg.",
        imageUrl: "images/poster-relatos.webp",
        page: "#"
    },
    {
        name: "El Ángel",
        year: "2018",
        director: "Luis Ortega",
        cast: "Lorenzo Ferro, Chino Darín, Cecilia Roth, Daniel Fanego, Mercedes Morán",
        genre: "Thriller, Drama, Crime",
        description: "Carlitos is a seventeen-year-old with movie-star looks, blond curls, and a baby face. He discovered his true calling—to be a thief—in his early teens. When he meets Ramón at his new school, Carlitos is immediately drawn to him and wants to catch his eye. Together, they embark on a journey of discovery, love, and crime.",
        imageUrl: "images/poster-angel.webp",
        page: "#"
    },
    {
        name: "Los Sonámbulos",
        year: "2019",
        director: "Paula Hernández",
        cast: "Érica Rivas, Ornella D'Elía, Daniel Hendler, Luis Ziembrowski, Rafael Federman",
        genre: "Drama, Family",
        description: "A woman and her 14-year-old daughter—a sleepwalker—poised on the verge of waking.",
        imageUrl: "images/poster-sonambulos.webp",
        page: "#"
    },
    {
        name: "Argentina 1985",
        year: "2022",
        director: "Santiago Mitre",
        cast: "Ricardo Darín, Peter Lanzani, Alejandra Flechner, Carlos Portaluppi, Norman Briski",
        genre: "Drama, Crime, Historic",
        description: "During the 1980s, a group of lawyers investigates and brings to trial those responsible for the Argentine civic-military dictatorship.",
        imageUrl: "images/poster-argentina.webp",
        page: "#"
    },
    {
        name: "Los Delincuentes",
        year: "2023",
        director: "Rodrigo Moreno",
        cast: "Esteban Bigliardi, Daniel Elías, Laura Paredes, Sergio Hernández, Germán de Silva",
        genre: "Crime, Dark Comedy",
        description: "Two bank employees question the routine lives they lead. One of them finds a solution: committing a crime.",
        imageUrl: "images/poster-delicuentes.webp",
        page: "#"
    }
]

function displayMovies(movies, movieSection) {
    movieSection.innerHTML = "";
    movies.forEach(movie => {
        let movieCard = document.createElement('div');
        movieCard.setAttribute('class', 'movie-box');
        let movieData = document.createElement('div');
        movieData.setAttribute('class', 'movie-box-info');


        let movieImage = document.createElement('img');
        let movieName = document.createElement('li');
        let movieInfo = document.createElement('p');
        let movieDirector = document.createElement('p');
        let movieCast = document.createElement('p');
        let movieDescription = document.createElement('p');

        movieName.innerHTML = `<a href="${movie.page}">${movie.name}</a>`;
        movieInfo.textContent = `${movie.year} | ${movie.genre}`;
        movieDirector.textContent = `Directed by ${movie.director}`;
        movieCast.textContent = `Cast: ${movie.cast}`;
        movieDescription.innerHTML = `<span class="movie-summary">${movie.description}</span>`

        movieImage.setAttribute('src', movie.imageUrl);
        movieImage.setAttribute('alt', `"${movie.name} poster"`);
        movieImage.setAttribute('loading', 'lazy');

        movieCard.appendChild(movieImage);


        movieData.appendChild(movieName);
        movieData.appendChild(movieInfo);
        movieData.appendChild(movieDirector);
        movieData.appendChild(movieCast);
        movieData.appendChild(movieDescription);

        movieCard.appendChild(movieData);

        movieSection.appendChild(movieCard);
    })
}

displayMovies(movies, movieList);

const filterTitle = document.querySelector("#genre-heading");

const allFilter = document.querySelector("#all-filter");
const comedyFilter = document.querySelector("#comedy-filter");
const crimeFilter = document.querySelector("#crime-filter");
const dramaFilter = document.querySelector("#drama-filter");
const fantasyFilter = document.querySelector("#fantasy-filter");
const sciFiFilter = document.querySelector("#scifi-filter");
const thrillerFilter = document.querySelector("#thriller-filter");

allFilter.addEventListener("click", () => {
    displayMovies(movies, movieList);
    filterTitle.textContent = "";
});

comedyFilter.addEventListener("click", () => {
    displayMovies(movies.filter(movie => movie.genre.includes("Comedy")), movieList);
    filterTitle.textContent = "for Comedy";
});

crimeFilter.addEventListener("click", () => {
    displayMovies(movies.filter(movie => movie.genre.includes("Crime")), movieList);
    filterTitle.textContent = "for Crime";
});

dramaFilter.addEventListener("click", () => {
    displayMovies(movies.filter(movie => movie.genre.includes("Drama")), movieList);
    filterTitle.textContent = "for Drama";
});

fantasyFilter.addEventListener("click", () => {
    displayMovies(movies.filter(movie => movie.genre.includes("Fantastic")), movieList);
    filterTitle.textContent = "for Fantasy";
});

sciFiFilter.addEventListener("click", () => {
    displayMovies(movies.filter(movie => movie.genre.includes("Sci-fi")), movieList);
    filterTitle.textContent = "for Sci-Fi";
});

thrillerFilter.addEventListener("click", () => {
    displayMovies(movies.filter(movie => movie.genre.includes("Thriller")), movieList);
    filterTitle.textContent = "for Thriller";
});

// filter button

const filterButton = document.querySelector("#movie-filter");
const movieFilters = document.querySelector("nav");
filterButton.addEventListener("click", () => {
    movieFilters.classList.toggle('open');
    filterButton.classList.toggle('open');
});