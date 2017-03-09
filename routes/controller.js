var app = angular.module('signpost', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		//the timeline display
		.when('/', {
			templateUrl: 'index.html',
			controller: 'mainController'
		})
		//the login display
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'authController'
		})
		//the signup display
		.when('/register', {
			templateUrl: 'register.html',
			controller: 'authController'
		});
});


app.controller('authController', function($scope){
	$scope.user = {username: '', password: ''};
	$scope.error_message = '';

	$scope.login = function(){
		$scope.error_message = 'Login username: ' + $scope.user.username;
	};

	$scope.register = function(){
		$scope.error_message = 'Registration username ' + $scope.user.username;
	};
});