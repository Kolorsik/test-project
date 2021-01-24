"use strict";

const numberOfFilms = +prompt('Сколько фильмом Вы посмотрели?', '');

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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка')
}

console.log(personalMovieDB)