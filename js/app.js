var app = angular.module('app', []);

app.directive('header',function(){
	return {
		restrict: 'E',
		templateUrl: 'template/header.html'
	};
});