/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// Get the average of all rates with 2 decimals 

// Get the average of Drama Movies

function dramaMoviesRate (movies) {
  
  var dramaMovies = movies.filter(function(item){
    return item.genre.find(function(element){
      return element === "Drama"
    });
  });
  
  return dramaMovies.length ? Math.round(( dramaMovies.reduce(function(accumulator, item){
    return (accumulator + item.rate)
  }, 0) ) / dramaMovies.length * 100 ) / 100 : undefined;

};

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

function howManyMovies (movies) {

  var dramaMovies = movies.filter(function(item){
    return item.genre.find(function(element){
      return element === "Drama"
    });
  });

  var spielbergMovies = dramaMovies.filter(function(item){
    return item.director === "Steven Spielberg"
  });

  return spielbergMovies.length ? "Steven Spielberg directed " + spielbergMovies.length + " drama movies!" : (movies.length ? "Steven Spielberg directed 0 drama movies!" : undefined);
}

// Order by title and print the first 20 titles

function orderAlphabetically (movies) {
  
  var sortedMovies = movies.sort(function(item1, item2){
    return item1.title < item2.title ? -1 : 1;
  });
  
  var filteredMovies = sortedMovies.splice(0, 20)

  return filteredMovies.map(function(item){
    return item.title
  });
}

// Best yearly rate average

function bestYearAvg (movies) {

  basicAvg = 0;
  basicYear = 0;

  if (movies.length > 1){
    for (var x=1972; x<= 2018; x++) {
      var moviesByYear = movies.filter(function(item){
        return item.year === x
      })

      if (moviesByYear.length) {
        var moviesAvg = Math.round(( moviesByYear.reduce(function(accumulator, item){
          return (accumulator + item.rate)
        }, 0) ) / moviesByYear.length * 100 ) / 100

        if (moviesAvg > basicAvg) { 
          basicAvg = moviesAvg 
          basicYear = x          
        }
      }
    }
  } 

  if (movies.length) {
    return movies.length === 1 ? "The best year was " + movies[0].year + " with an average rate of " + movies[0].rate : 
    "The best year was " + basicYear + " with an average rate of " + basicAvg;
  } else {
    undefined;
  }
  
}