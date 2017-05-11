myApp.controller('updateMovie', ['$scope', '$localStorage', '$http', '$location', '$state', 'movieService', function($scope, $localStorage, $http, $location, $state, movieService){
    $scope.myMoviesList = {};
    $scope.myMoviesList.MovieID = movieService.MovieID; 
    $scope.myMoviesList.MovieName = movieService.MovieName; 
    $scope.myMoviesList.MovieGenre = movieService.MovieGenre; 
    $scope.myMoviesList.MovieReviews = movieService.MovieReviews;
    $scope.myMoviesList.MovieRating = movieService.MovieRating; 
    
    $scope.submitForm = function(){
        for(var i in $localStorage.myMovies){
            if($scope.myMoviesList.MovieID === $localStorage.myMovies[i].MovieID){
                $localStorage.myMovies[i].MovieID = $scope.myMoviesList.MovieID;
                $localStorage.myMovies[i].MovieName = $scope.myMoviesList.MovieName;
                $localStorage.myMovies[i].MovieGenre = $scope.myMoviesList.MovieGenre;
                $localStorage.myMovies[i].MovieReviews = $scope.myMoviesList.MovieReviews;
                $localStorage.myMovies[i].MovieRating = $scope.myMoviesList.MovieRating;
            }
       }
        alert('Movie has been Update!');
        $state.go('root');
    }
}]);