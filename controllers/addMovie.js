myApp.controller('addMovie', ['$scope', '$localStorage', '$http', '$location', '$state', function($scope, $localStorage, $http, $location, $state){
    $scope.myMoviesList = {};
    $scope.submitForm = function(){
        var timestamp = Math.ceil(new Date().valueOf() + Math.random() * 1000); 
        $scope.myMoviesList.MovieID = timestamp;
        $localStorage.myMovies.push($scope.myMoviesList);
        alert('Movie has been added!');
        $state.go('root');
    };
}]);