var app = angular.module('app', ['ngRoute','ngAnimate','ngMap']);

app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:'content/home.html'
	})
	.when("/nosotros",{
		templateUrl:'content/nosotros.html'
	})
	.when("/propuesta-empresarial",{
		templateUrl:'content/propuesta-empresarial.html'
	})
	.when("/hoja-de-vida",{
		templateUrl:'content/hoja-de-vida.html'
	})
	.when("/contable-tributario",{
		templateUrl:'content/contable-tributario.html'
	})
	.when("/auditorias",{
		templateUrl:'content/auditoria.html'
	})
	.when("/derecho-civil-laboral",{
		templateUrl:'content/derecho-civil-laboral.html'
	})
	.when("/clientes",{
		templateUrl:'content/clientes.html'
	})
	.when("/noticias",{
		templateUrl:'content/noticias.html'
	})
	.when("/enlaces",{
		templateUrl:'content/enlaces.html'
	})
	.when("/contacto",{
		templateUrl:'content/contacto.html'
	})
})

app.directive('header',function(){

	function link($scope,$element,$attrs){
		$element.on('load',function(){
			//$element.add
		})
	}


	return {
		link:link,
		restrict: 'E',
		templateUrl: 'template/header.html'
	};
});

app.directive('footer',function(){
	return {
		restrict:'E',
		templateUrl:'template/footer.html'
	}
})

app.controller('MapController',function(NgMap){
	NgMap.getMap().then(function(){
		
	})
})

