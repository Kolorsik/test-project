"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмом Вы посмотрели?', '');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмом Вы посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const film = prompt('Один из последних просмотренных фильмов?', '');
            const rating = prompt('На сколько вы оцените этот фильм?', '');
        
            if (film != null && rating != null && film != '' && rating != '' && film.length < 50 && rating.length < 50) {
                personalMovieDB.movies[film] = rating;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка')
        }
    },
    showMyDB: (privat) => {
        if (!privat) {
            console.log(personalMovieDB)
        } else {
            console.log('Профиль приватный')
        }
    },
    writeYourGenres: () => {
        for (let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i + 1}:`, '');

            if (genre === null || genre === '') {
                i--;
            }
            else {
                personalMovieDB.genres.push(genre);
            }
        }
        personalMovieDB.genres.forEach((x, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${x}`)
        })
    },
    toggleVisibleMyDB: () => {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);