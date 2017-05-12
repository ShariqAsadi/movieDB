myApp.controller('addMovie', ['$scope', '$localStorage', '$http', '$location', '$state', 'movieService', function($scope, $localStorage, $http, $location, $state, movieService){
    $scope.myMoviesList = {};
    $scope.submitForm = function(){
        var timestamp = Math.ceil(new Date().valueOf() + Math.random() * 1000); 
        $scope.myMoviesList.MovieID = timestamp;
        $localStorage.myMovies.push($scope.myMoviesList);
        alert('Movie has been added!');
        var currentState = movieService.currentState;
        console.log(currentState);
        if(movieService.currentState == 'gridView'){
            $state.go('gridView');
        }else{
            $state.go('root');    
        }
    };
}]);