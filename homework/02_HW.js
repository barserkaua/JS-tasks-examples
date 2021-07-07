"use strict";


let numberOfFilm = +prompt("How many films you watch?", "");

console.log(numberOfFilm)



const personalMovieDb = {
    count: numberOfFilm,
    movies: {},
    actors: {}, // об'єкт
    genres: [], // масив
    privat: false,
};

let first_movie = prompt("Your last movie?", ""),
    rating1 = prompt("Rating?", ""),
    last_movie = prompt("Your last movie?", ""),
    rating2 = prompt("Rating?", "");


personalMovieDb.movies[first_movie] = rating1;
personalMovieDb.movies[last_movie] = rating2;

console.log(personalMovieDb)

