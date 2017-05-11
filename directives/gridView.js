myApp.directive("gridList", function(){
   return{
       restrict: 'AE',
       templateUrl: 'directives/gridViewDirective.html',
       scope:{
           serialNo: "=",
           movies: "=",
           deleteDataFunc: "&",
           updateDataFunc: "&"
       }
       
   } 
});