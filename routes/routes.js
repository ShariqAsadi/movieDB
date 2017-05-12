myApp.config(function($stateProvider, $urlRouterProvider){
   var rootState = {
       name: 'root',
       templateUrl: 'views/getMovie.html',
       controller: 'showMovies',
       url: '/'
   }
   var addMovieState = {
       name: 'addMovie',
       templateUrl: 'views/newMovie.html',
       controller: 'addMovie',
       url: '/newMovie'
   }
   var updateMovie = {
       name: 'updateMovie',
       templateUrl: 'views/updateMovie.html',
       controller: 'updateMovie',
       url: '/updateMovie/:mID',
       
   }
   var gridView = {
       name: 'gridView',
       templateUrl: 'views/gridView.html',
       controller: 'showMovies',
       url: '/gridView'
   }
    
    $stateProvider.state(rootState);
    $stateProvider.state(addMovieState);
    $stateProvider.state(updateMovie);
    $stateProvider.state(gridView);
    $urlRouterProvider.otherwise('/');
});