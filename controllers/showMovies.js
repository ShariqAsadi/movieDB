myApp.controller('showMovies', ['$scope', '$http', '$localStorage', '$location', '$state', '$stateParams', 'movieService', function($scope, $http, $localStorage, $location, $state, $stateParams, movieService){
    $http.get('/js/movieData.json').then(function(response){
        console.log(response);
        for(var i in response.data.movies){
            var timestamp = Math.ceil(new Date().valueOf() + Math.random() * 1000);
            response.data.movies[i].MovieID = timestamp;
            console.log('Response' + ' ' + response.data.movies);
        }
        if($localStorage.myMovies === undefined){        
            $localStorage.myMovies = response.data.movies;
            console.log($localStorage.myMovies);
            $scope.myMovies = $localStorage.myMovies;
        }else{
            $scope.myMovies = $localStorage.myMovies;
        }
    });
    
        $scope.DeleteData = function(mov){
            console.log("Entered in the delete function")
            var record = $scope.myMovies.indexOf(mov);
            console.log("check delete:: ",record, mov);
            $localStorage.myMovies.splice(record, 1);           
        };
    
        $scope.UpdateData = function(mov){
            var record = $scope.myMovies.indexOf(mov);
            console.log(record);
            movieService.MovieID = $scope.myMovies[record].MovieID;
            movieService.MovieName = $scope.myMovies[record].MovieName;
            movieService.MovieGenre = $scope.myMovies[record].MovieGenre;
            movieService.MovieReviews = $scope.myMovies[record].MovieReviews;
            movieService.MovieRating = $scope.myMovies[record].MovieRating;
            console.log(movieService);
            console.log($scope.myMovies);
            $stateParams.mID = record;
            $state.go('updateMovie', {'mID':record});
        }
}]);
