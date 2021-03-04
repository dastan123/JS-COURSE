'use strict';
/* jshint node: true */
/* jshint browser: true */
// my project
//  const numberOfFilms = [];

//  numberOfFilms[0] = prompt('Сколько фильмов вы посморели?', '');

//  let whatisFilms = [];

//  whatisFilms[0] = prompt('Один из последних просмотренных фильмов', '');
//  whatisFilms[1] = prompt('На сколько оцените его?', '');
//  whatisFilms[2] = prompt('Один из последних просмотренных фильмов', '');
//  whatisFilms[3] = prompt('На сколько оцените его?', '');

//  const personalMovieDB = {
//      count: numberOfFilms[0],
//      movies: {
//             filmsname: whatisFilms[0],
//             rating: whatisFilms[1]
//              },
//      actors: {},
//      genres: [],
//      privat: false
// };

// console.log(personalMovieDB.count, personalMovieDB.movies.filmsname, personalMovieDB.movies.rating,  whatisFilms[0]);
/*jshint esversion: 6 */
// const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

// const personalMovieDB = {
//       count: numberOfFilms,
//       movies: {},
//       actors: {},
//       genre: [],
//       privar: false
// };

// const a = prompt('One of you last seen movies?', ''),
//       b = prompt('How would you rate it?', ''),
//       c = prompt('One of you last seen movies?', ''),
//       d = prompt('How would you rate it?', '');

// personalMovieDB.movies [a] = b;
// personalMovieDB.movies [c] = d;

// console.log(personalMovieDB.movies);

const personalCarDB = {
  carcount: 0,
  cars: {},
  mark: [],
  cost: {},
  privat: false,
  start: function () {
    personalCarDB.carcount = +prompt("HOw many cars do you have?", "");

    while (personalCarDB.carcount == "" || isNaN(personalCarDB.carcount)) {
      personalCarDB.carcount = +prompt("HOw many car do you have?", "");
    }
  },

  rememberMyFilms: function () {
    if (personalCarDB.carcount < 10) {
      console.log("You have classical amount of cars");
    } else if (personalCarDB.carcount > 30) {
      console.log("You are obsesed with cars");
    } else {
      console.log("Errornot");
    }
    for (let i = 0; i < 1; i++) {
      let a = prompt("The last car that you ride", "");
      b = prompt("Describe your emotions", "");
      personalCarDB.mark[a] = b;
    }
  },
  detectPersonalLevel: function () {
    while (a == null && b == null && a == "" && b == "" && a.length < 50) {
      personalCarDB.cars[a] = b;
      console.log("done");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalCarDB);
    }
  },

  toggleVisibleDB: function () {
    if (personalCarDB.privat) {
      personalCarDB.privat = false;
    } else {
      personalCarDB.privat = true;
    }
  },
  writeYourGenres: function () {
    let mark = prompt(`Write you dannasy`).toLocaleLowerCase();

    if (mark === "" || mark == null) {
      console.log("You writed no correct");
      i--;
    } else {
      personalCarDB.mark = mark.split(", ");
      personalCarDB.mark.sort();
    }

    personalCarDB.mark.forEach((item, i) => {
      console.log(`Любимый жанр # ${i + 1} - это название ${item}`);
    });
  },
};

