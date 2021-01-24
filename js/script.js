"use strict";

const numberOfFilms = +prompt('Сколько фильмом Вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film1 = prompt('Один из последних просмотренных фильмов?', ''),
      rating1 = prompt('На сколько вы оцените этот фильм?', ''),
      film2 = prompt('Один из последних просмотренных фильмов?', ''),
      rating2 = prompt('На сколько вы оцените этот фильм?', '');

personalMovieDB.movies[film1] = rating1;
personalMovieDB.movies[film2] = rating2;

console.log(personalMovieDB)