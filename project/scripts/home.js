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
        genre: "",
        imageUrl: ""
    },
    {
        name: "Nueve Reinas",
        year: "2000",
        director: "Fabián Bielinsky",
        cast: "Gastón Pauls, Ricardo Darín, Leticia Brédice, Tomás Fonzi, Ignasi Abadal",
        genre: "",
        imageUrl: ""
    },
    {
        name: "La Ciénaga",
        year: "2001",
        director: "Lucrecia Martel",
        cast: "Mercedes Morán, Graciela Borges, Martín Adjemián, Leonora Balcarce, Silvia Baylé",
        genre: "",
        imageUrl: ""
    },
    {
        name: "Diarios de Motocicleta",
        year: "2004",
        director: "Walter Salles",
        cast: "Gael García Bernal, Rodrigo de la Serna, Mía Maestro, Mercedes Morán",
        genre: "",
        imageUrl: ""
    },
    {
        name: "La Antena",
        year: "2007",
        director: "Esteban Sapir",
        cast: "Valeria Bertuccelli, Alejandro Urdapilleta, Julieta Cardinali, Florencia Raggi, Rafael Ferro",
        genre: "",
        imageUrl: ""
    },
    {
        name: "El Secreto de sus Ojos",
        year: "2009",
        director: "Juan José Campanella",
        cast: "Ricardo Darín, Soledad Vilamil, Guillermo Francella, Pablo Rago, Javier Godino",
        genre: "",
        imageUrl: ""
    },
    {
        name: "Relatos salvajes",
        year: "2014",
        director: "Damián Szifrón",
        cast: "Ricardo Darín, Darío Grandinetti, Leonardo Sbaraglia, Érica Rivas, Julieta Zylberberg",
        genre: "",
        imageUrl: ""
    },
    {
        name: "El Ángel",
        year: "2018",
        director: "Luis Ortega",
        cast: "Lorenzo Ferro, Chino Darín, Cecilia Roth, Daniel Fanego, Mercedes Morán",
        genre: "",
        imageUrl: ""
    },
    {
        name: "Los Sonámbulos",
        year: "2019",
        director: "Paula Hernández",
        cast: "Érica Rivas, Ornella D’Elía, Daniel Hendler, Luis Ziembrowski, Rafael Federman",
        genre: "",
        imageUrl: ""
    },
    {
        name: "Argentina 1985",
        year: "2022",
        director: "Santiago Mitre",
        cast: "Ricardo Darín, Peter Lanzani, Alejandra Flechner, Carlos Portaluppi, Norman Briski",
        genre: "",
        imageUrl: ""
    },
    {
        name: "Los Delincuentes",
        year: "2023",
        director: "Rodrigo Moreno",
        cast: "Esteban Bigliardi, Daniel Elías, Laura Paredes, Sergio Hernández, Germán de Silva",
        genre: "",
        imageUrl: ""
    }
]

function displayMovies(movies, movieSection) {
    movies.forEach(movie => {
        let movieCard = document.createElement('div');
        movieCard.setAttribute('class', 'movie-box');

        let movieImage = document.createElement('img');
        let movieName = document.createElement('p');
        let movieYear = document.createElement('p');
        let movieDirector = document.createElement('p');
        let movieCast = document.createElement('p');
        let movieGenre = document.createElement('p');

        movieName.innerHTML = `<span class="highlight">${movie.name}</span>`;
        movieYear.textContent = movie.year;
        movieDirector.textContent = `Directed by ${movie.director}`;
        movieCast.textContent = `Cast: ${movie.cast}`;
        movieGenre.innerHTML = `<span class="highlight">${movie.genre}</span>`;

        movieImage.setAttribute('src', movie.imageUrl);
        movieImage.setAttribute('alt', `"${movie.name} poster"`);
        movieImage.setAttribute('loading', 'lazy');

        movieCard.appendChild(movieImage);
        movieCard.appendChild(movieName);
        movieCard.appendChild(movieYear);
        movieCard.appendChild(movieDirector);
        movieCard.appendChild(movieCast);
        movieCard.appendChild(movieGenre);

        movieSection.appendChild(movieCard);
    })
}

displayMovies(movies, movieList);

