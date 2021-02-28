'use strict';
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


 let numberOfCars;
  
function start() {
      numberOfCars = +prompt('How many cars do you have', '');

      while (numberOfCars == '' || numberOfCars == null || isNaN(numberOfCars)) {
            numberOfCars = +prompt('How many cars do you have', '');
      }
}

 start();

 const personalCarDB = {
       carcount: numberOfCars,
       cars: {} ,
       mark: [],
       cost: {},
       privat: true
 };




// console.log(personalCarDB);


function rememberMyFilms() {
      if (personalCarDB.carcount < 10) {
            console.log('You have classical amount of cars');
      } else if (personalCarDB.carcount > 30){
            console.log('You are obsesed with cars');
      } else {
            console.log('Errornot');
            i--;
      }
     for (let i = 0; i < 1; i++) {
           let a = prompt('The last car that you ride', '');
                 b = prompt('Describe your emotions', '');
           personalCarDB.mark [a] = b;
     }
}

// rememberMyFilms();


function detectPersonalLevel() {
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalCarDB.cars [a] = b;
            console.log('done');
      }   else {
            console.log('error');
            i--;
      } 
}
// detectPersonalLevel()
function showMyDB (hidden) {
     if (!hidden) {
        console.log(personalCarDB);
     }
}
showMyDB(personalCarDB.pri);

