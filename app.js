var app=angular.module("myApp",['ngRoute']);
app.config(["$routeProvider","$locationProvider", function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix("");
    $routeProvider
.when("/Login",{
 
  templateUrl:"login.html",
  controller:"logincontroller"
})
.when("/Home",{
  
   templateUrl: "home.html",
 controller: "HomeController",
})

}])
// test
app.controller("logincontroller",["$scope",function($scope){
  $scope.title="Angulara js login form"

}])
app.controller("HomeController",["$scope",function($scope){
$scope.title="home page"
}])
$scope.formSubmit = function() {
      if(LoginService.login($scope.username, $scope.password)) {
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('home');
      } else {
        $scope.error = "Incorrect username/password !";
      }   
    };
