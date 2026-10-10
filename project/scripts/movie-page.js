// footer

const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = today.getFullYear()
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`


// page specific content

const movies = [
    {
        name: "Los Tallos Amargos",
        year: "1956",
        director: "Fernando Ayala",
        cast: "Carlos Cores, Carmen Giménez, George Hilton, Vassili Lambrinos, Adolfo Linvel",
        genre: "Drama",
        description: "*Los tallos amargos* is a 1956 Argentine film directed by Fernando Ayala, starring Carlos Cores and Aída Luz, with a score by Astor Piazzolla. It premiered in Buenos Aires on June 21, 1956, and won the Silver Condor Award for Best Film of 1957. The screenplay, written by Sergio Leonardo, is based on the novel of the same name by Adolfo Jasca—which had previously won the Emecé Prize—and some scenes were filmed at the Ituzaingó station. The cinematography by Ricardo Younis is considered among the finest in the history of world cinema. In a 2022 poll of the 100 best Argentine films, presented at the Mar del Plata International Film Festival, the movie ranked 42nd.",
        banner: "images/tallos-amargos-hero.webp",
        image: "images/poster-tallos.webp"
    },
    {
        name: "Nueve Reinas",
        year: "2000",
        director: "Fabián Bielinsky",
        cast: "Gastón Pauls, Ricardo Darín, Leticia Brédice, Tomás Fonzi, Ignasi Abadal",
        genre: "Thriller, Crime",
        description: "Juan and Marcos are two small-time con artists—one young, the other a veteran of the trade—who unexpectedly find themselves caught up in a scheme that could make them millionaires: they have less than a day to pull off a scam that cannot fail.",
        banner: 'images/nueve-reinas-hero.webp',
        image: "images/poster-nueve.webp",
    },
    {
        name: "La Ciénaga",
        year: "2001",
        director: "Lucrecia Martel",
        cast: "Mercedes Morán, Graciela Borges, Martín Adjemián, Leonora Balcarce, Silvia Baylé",
        genre: "Drama",
        description: "Two families—one urban middle-class and the other consisting of struggling rural producers—cross paths amidst the provincial lethargy of a chaotic yet unchanging Salta, where nothing happens, yet everything is on the verge of exploding.",
        banner: ''
    },
    {
        name: "Diarios de Motocicleta",
        year: "2004",
        director: "Walter Salles",
        cast: "Gael García Bernal, Rodrigo de la Serna, Mía Maestro, Mercedes Morán",
        genre: "Drama, Biography",
        description: "A dramatization of the youthful road trip that changed Ernesto Che Guevara's life.",
        banner: ''
    },
    {
        name: "La Antena",
        year: "2007",
        director: "Esteban Sapir",
        cast: "Valeria Bertuccelli, Alejandro Urdapilleta, Julieta Cardinali, Florencia Raggi, Rafael Ferro",
        genre: "Sci-fi, Drama, Fantastic",
        description: "An entire city has been rendered voiceless and endures a long, harsh winter. A wicked, unscrupulous man—Mr. T.V., the absolute owner of the images that animate the city and of a vast line of products bearing his personal brand—is carrying out a sinister secret plan to eternally subjugate every soul living there.",
        banner: ''
    },
    {
        name: "El Secreto de sus Ojos",
        year: "2009",
        director: "Juan José Campanella",
        cast: "Ricardo Darín, Soledad Vilamil, Guillermo Francella, Pablo Rago, Javier Godino",
        genre: "Thriller, Drama",
        description: "A retired legal advisor writes a novel in the hope of finding closure regarding the unsolved homicide cases that still haunt him.",
        banner: ''
    },
    {
        name: "Relatos salvajes",
        year: "2014",
        director: "Damián Szifrón",
        cast: "Ricardo Darín, Darío Grandinetti, Leonardo Sbaraglia, Érica Rivas, Julieta Zylberberg",
        genre: "Thriller, Drama, Dark Comedy",
        description: "Six standalone stories combining suspense, humor, and violence, based on *Amazing Stories* (1985-1987), the television series created by Steven Spielberg.",
        banner: ''
    },
    {
        name: "El Ángel",
        year: "2018",
        director: "Luis Ortega",
        cast: "Lorenzo Ferro, Chino Darín, Cecilia Roth, Daniel Fanego, Mercedes Morán",
        genre: "Thriller, Drama, Crime",
        description: "Carlitos is a seventeen-year-old with movie-star looks, blond curls, and a baby face. He discovered his true calling—to be a thief—in his early teens. When he meets Ramón at his new school, Carlitos is immediately drawn to him and wants to catch his eye. Together, they embark on a journey of discovery, love, and crime.",
        banner: ''
    },
    {
        name: "Los Sonámbulos",
        year: "2019",
        director: "Paula Hernández",
        cast: "Érica Rivas, Ornella D'Elía, Daniel Hendler, Luis Ziembrowski, Rafael Federman",
        genre: "Drama, Family",
        description: "A woman and her 14-year-old daughter—a sleepwalker—poised on the verge of waking.",
        banner: ''
    },
    {
        name: "Argentina 1985",
        year: "2022",
        director: "Santiago Mitre",
        cast: "Ricardo Darín, Peter Lanzani, Alejandra Flechner, Carlos Portaluppi, Norman Briski",
        genre: "Drama, Crime, Historic",
        description: "During the 1980s, a group of lawyers investigates and brings to trial those responsible for the Argentine civic-military dictatorship.",
        banner: ''
    },
    {
        name: "Los Delincuentes",
        year: "2023",
        director: "Rodrigo Moreno",
        cast: "Esteban Bigliardi, Daniel Elías, Laura Paredes, Sergio Hernández, Germán de Silva",
        genre: "Crime, Dark Comedy",
        description: "Two bank employees question the routine lives they lead. One of them finds a solution: committing a crime.",
        banner: ''
    }
]

const pageContent = document.querySelector('#page-content');
const pageMovieTitle = document.querySelector('#movie-name');
const heroImage = document.querySelector('#single-movie-hero');

function displayContent(movies, name, section, image) {
    movies.forEach(movie => {
        if (movie.name == name.textContent) {
            let movieInfo = document.createElement('p');
            let movieCast = document.createElement('p');
            let movieDescription = document.createElement('p');
            let movieImage = document.createElement('img');
            let movieImageSet = document.createElement('picture');
            let moviePoster = document.createElement('source');

            movieInfo.innerHTML = `${movie.year} | ${movie.genre} | Directed by ${movie.director}`;
            movieCast.innerHTML = `Cast: ${movie.cast}`;
            movieDescription.textContent = movie.description;
            movieDescription.setAttribute('id', 'movie-summary');

            movieImage.setAttribute('src', movie.banner);
            movieImage.setAttribute('alt', `Set of images from ${movie.name}`);
            movieImage.setAttribute('loading', 'lazy');
            movieImage.setAttribute('width', 800);
            movieImage.setAttribute('height', 300);

            moviePoster.setAttribute('srcset', movie.image);
            moviePoster.setAttribute('media', '(min-width: 1000px)');

            section.appendChild(movieInfo);
            section.appendChild(movieCast);
            section.appendChild(movieDescription)

            movieImageSet.appendChild(moviePoster);
            movieImageSet.appendChild(movieImage);

            image.appendChild(movieImageSet);
        }
    });
}

displayContent(movies, pageMovieTitle, pageContent, heroImage);