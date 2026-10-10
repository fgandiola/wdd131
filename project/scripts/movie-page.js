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
        description: "*Nine Queens* is a 2000 Argentine crime-thriller film written and directed by Fabián Bielinsky. It stars Ricardo Darín and Gastón Pauls, with supporting roles played by José Ignacio Abadal, Tomás Fonzi, Graciela Tenenbaum, Oscar Núñez, Alejandro Awada, and Jorge Noya. It also features special appearances by Leticia Brédice and veteran actress Elsa Berenguer, as well as a cameo by Roly Serrano. The film tells the story of two con artists who meet by chance and decide to team up. Following its release, it was nominated for twenty-nine international awards, winning twenty-one of them. It is considered the director's masterpiece and an essential classic of Argentine cinema. In a 2022 poll ranking the 100 best Argentine films, it placed tenth. Also in 2022, the film was included in the Spanish magazine *Fotogramas*' list of the 20 best Argentine films of all time.",
        banner: 'images/nueve-reinas-hero.webp',
        image: "images/poster-nueve.webp",
    },
    {
        name: "La Ciénaga",
        year: "2001",
        director: "Lucrecia Martel",
        cast: "Mercedes Morán, Graciela Borges, Martín Adjemián, Leonora Balcarce, Silvia Baylé",
        genre: "Drama",
        description: "*La Ciénaga* is a 2001 drama film written and directed by Lucrecia Martel. It is a co-production between Argentina, Spain, and France. Executive producers included Ana Aizenberg, Diego Guebel, and Mario Pergolini, with Lita Stantic serving as producer. The film stars Graciela Borges, Mercedes Morán, Martín Adjemián, and Daniel Valenzuela in the lead roles. Set in northwestern Argentina, the plot centers on two families linked by kinship—specifically, the mothers are cousins: one family is middle-class, while the other consists of wealthy rural producers who are in a state of decline. The film received positive reviews, particularly for Martel's direction and Borges's performance. It earned eight nominations from the Argentine Film Critics Association and won awards at the Havana Film Festival, the Berlin Film Festival, and others. In 2022, *La Ciénaga* took first place in the Argentine Cinema Poll conducted by the Pablo Ducrós Hicken Film Museum, being voted the best Argentine film of all time by a wide margin.",
        banner: 'images/cienaga-hero.webp',
        image: "images/poster-cienaga.webp"
    },
    {
        name: "Diarios de Motocicleta",
        year: "2004",
        director: "Walter Salles",
        cast: "Gael García Bernal, Rodrigo de la Serna, Mía Maestro, Mercedes Morán",
        genre: "Drama, Biography",
        description: "*The Motorcycle Diaries* is a biographical film based on the travel journals of Che Guevara and Alberto Granado; directed by Walter Salles, it stars Gael García Bernal and Rodrigo de la Serna. It won the 2005 Academy Award for Best Original Song for *Al otro lado del río* by Jorge Drexler, in addition to 21 other international awards. The film chronicles the journey Che and Granado took across South America in 1952. Along the way, Guevara finds himself transformed by his observations of the lives of impoverished indigenous peasants. Through the people they meet, they learn about the injustices faced by the poor and experience a range of situations, from the most joyful to the most heartbreaking. The experience reveals the true nature of Latin American identity to Guevara and Granado and changes the course of their lives forever.",
        banner: 'images/diarios-moto-hero.webp',
        image: "images/poster-motocicleta.webp"
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