"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмом Вы посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмом Вы посмотрели?', '');
    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*
do {

    const film = prompt('Один из последних просмотренных фильмов?', '');
    const rating = prompt('На сколько вы оцените этот фильм?', '');

    if (film != null && rating != null && film != '' && rating != '' && film.length < 50 && rating.length < 50) {
        personalMovieDB.movies[film] = rating;
        console.log('Done');
    } else {
        console.log('Error');
    }

} while (Object.keys(personalMovieDB.movies).length != 2)

while (Object.keys(personalMovieDB.movies).length != 2) {

    const film = prompt('Один из последних просмотренных фильмов?', '');
    const rating = prompt('На сколько вы оцените этот фильм?', '');

    if (film != null && rating != null && film != '' && rating != '' && film.length < 50 && rating.length < 50) {
        personalMovieDB.movies[film] = rating;
        console.log('Done');
    } else {
        console.log('Error');
    }

}
*/

function rememberMyFilms() {

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

}

rememberMyFilms();

function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка')
    }
}

detectPersonalLevel();

function showMyDB(privat) {
    if (!privat) {
        console.log(personalMovieDB)
    } else {
        console.log('Профиль приватный')
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    
    for (let i = 0; i < 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i + 1}:`, '');
        personalMovieDB.genres.push(genre);
    }
}

writeYourGenres();

console.log(personalMovieDB)