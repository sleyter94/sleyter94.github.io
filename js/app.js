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
	.when("/notice/detail/id/:notice_id",{
		controller:'NoticeDetailController',
		templateUrl:'template/notice.html'
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

app.directive('slider-multiple',function($scope){
	return {
		restrict:'A',
		link: function(scope,elem,attrs){
			sliderMultiple();
		}
	}
})

app.directive('linkedin',function(){
	return {
		restrict:'E',
		transclude:true,
		template:'<script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: es_ES</script><script type="IN/Share" data-url="https://midori-makawa.wixsite.com/cesar/single-post/2015/11/27/Invest-Now-Earn-Later" data-counter="right"></script>'
	}
})

var notices = [
		{
			id:5,
			title:'Multas e infracciones Infórmate acerca de las condiciones y montos de las infracciones al no declarar la renta.',
			content:'Conforme a lo establecido en los artículos 176º y 178º del TUO del Código Tributario constituyen infracciones que guardan relación con la presentación de la declaración jurada anual, las siguientes:No presentar las declaraciones que contengan la determinación de la deuda tributaria dentro de los plazos establecidos, se sanciona con una multa de:',
			image:'../img/notice_1.png',
			day:'10',
			month:'Agosto',
			year:'2017',
			content_a:'Todos los contribuyentes que tengan ingresos superiores a las 150 UIT este año estarán obligados a dejar los comprobantes físicos desde el próximo año',
			content_b:'La Sunat estableció que las empresas que durante este año tengan ventas anuales superiores a las 150 UIT tendrán que emitir facturas electrónicas desde el próximo año en tres tandas: un grupo desde el 1 de enero, otro desde el 1 de mayo y un tercer grupo desde el 1 de noviembre.<br>"Con esta medida, las pequeñas, medianas y grandes empresas tendrán que emitir facturas electrónicas desde el próximo año", destacó Kenneth Bengtsson, gerente general del proveedor de servicios electrónicos Efact.<br>El soporte para la emisión de facturas electrónicas fue transferido el año pasado desde la Sunat a los Operadores de Servicios Electrónicos (OSE), firmas autorizadas por la Sunat.'
		},
		{
			id:4,
			title:'Sunat: ¿Cuánto podrá ahorrar un trabajador en impuestos si aprovecha el nuevo beneficio de la deducción de gastos?',
			content:'El ahorro variará de acuerdo al nivel de remuneración del trabajador, indicó la Sunat. En algunos casos se podrá solicitar la devolución total del impuesto pagado. Conozca aquí algunos ejemplos.Desde este año aplicará tanto para los trabajadores independientes y en planilla una deducción adicional de hasta 3 UIT en el pago del Impuesto a la Renta, si sustentan gastos en algunos de los cinco rubro...',
			image:'../img/notice_2.jpg',
			day:'26',
			month:'Julio',
			year:'2017',
			content_a:'El ahorro variará de acuerdo al nivel de remuneración del trabajador, indicó la Sunat. En algunos casos se podrá solicitar la devolución total del impuesto pagado. Conozca aquí algunos ejemplos.',
			content_b:'Desde este año aplicará tanto para los trabajadores independientes y en planilla una deducción adicional de hasta 3 UIT en el pago del Impuesto a la Renta, si sustentan gastos en algunos de los cinco rubros fijados por el Gobierno.<br>¿Cuánto podría ahorrar en impuestos al año el trabajador que logra sustentar las 3 UIT (S/ 12,150), adicionales a la deducción de 7 UIT (S/ 28,350) automáticas?<br>Para responder a esta pregunta, primero debe recordarse cómo se calcula el pago del IR: primero se suman los ingresos recibidos por el trabajador durante el año y se le deduce (resta) las 7 UIT automáticas.Al resultado se le aplica una tasa de IR que, según el monto de la diferencia obtenida, puede ser de 8% (si el resultado de la resta fue de hasta 5 UIT), 14% (para los resultados entre las 5 UIT hasta 20 UIT), 17% (entre 20 UIT y 25 UIT), 20% (entre 35 UIT y 45 UIT) o 30% (más de 45 UIT).'
		},
		{
			id:3,
			title:'Sunat: Mipymes podrán fraccionar deudas hasta el 31 de julio',
			content:'"Las mipymes pueden acogerse a este beneficio en caso tengan deudas tributarias que se encuentren tanto en reclamación ante la Sunat, como en apelación ante el Tribunal Fiscal, e inclusive se reconocerá las deudas que estén en el Poder Judicial o que se encuentren en cobranza coactiva", explicó Víctor Zavala, gerente del Centro Legal de la CCL. De acuerdo al Decreto Legislativo 1257, se entiende c...',
			image:'../img/notice_3.jpeg',
			day:'29',
			month:'Noviembre',
			year:'2015',
			content_a:'"Las mipymes pueden acogerse a este beneficio en caso tengan deudas tributarias que se encuentren tanto en reclamación ante la Sunat, como en apelación ante el Tribunal Fiscal, e inclusive se reconocerá las deudas que estén en el Poder Judicial o que se encuentren en cobranza coactiva", explicó Víctor Zavala, gerente del Centro Legal de la CCL.',
			content_b:'De acuerdo al Decreto Legislativo 1257, se entiende como microempresas a aquellas empresas que registran ventas anuales hasta por 150 UIT (S/607.500), mientras que pequeñas empresas son aquellas con ventas que oscilan entre 150 UIT y 1.700 UIT (más de S/6 millones).  Así también, las medianas empresas son aquellas con ventas por 1.700 UIT a 2.300 UIT (S/9 millones 315 mil).<br>Cabe recordar que según informó la Sunat, solo se extinguirá las deudas tributarias menores a S/3.950.<br>Las deudas de las mipymes que pueden ser fraccionadas comprenden tributos como: el impuesto a la renta, el IGV, el ISC, el impuesto especial a la minería, el arancel de aduanas, la regalía minera, el Fonavi por cuenta de terceros y el gravamen especial a la minería. '
		},
		{
			id:2,
			title:'Sunat: Pymes y grandes empresas deberán emitir facturas electrónicas desde el 2018',
			content:'Todos los contribuyentes que tengan ingresos superiores a las 150 UIT este año estarán obligados a dejar los comprobantes físicos desde el próximo año. La Sunat estableció que las empresas que durante este año tengan ventas anuales superiores a las 150 UIT tendrán que emitir facturas electrónicas desde el próximo año en tres tandas: un grupo desde el 1 de enero, otro desde el 1 de mayo y un tercer...',
			image:'../img/notice_4.jpeg',
			day:'28',
			month:'Noviembre',
			year:'2015',
			content_a:'Todos los contribuyentes que tengan ingresos superiores a las 150 UIT este año estarán obligados a dejar los comprobantes físicos desde el próximo año',
			content_b:'La Sunat estableció que las empresas que durante este año tengan ventas anuales superiores a las 150 UIT tendrán que emitir facturas electrónicas desde el próximo año en tres tandas: un grupo desde el 1 de enero, otro desde el 1 de mayo y un tercer grupo desde el 1 de noviembre.<br>"Con esta medida, las pequeñas, medianas y grandes empresas tendrán que emitir facturas electrónicas desde el próximo año", destacó Kenneth Bengtsson, gerente general del proveedor de servicios electrónicos Efact.<br>El soporte para la emisión de facturas electrónicas fue transferido el año pasado desde la Sunat a los Operadores de Servicios Electrónicos (OSE), firmas autorizadas por la Sunat.'
		},
		{
			id:1,
			title:'Sunat: ¿Qué datos de tu RUC puedes modificar desde Internet, sin salir de casa?',
			content:'Según la Sunat, más de 10,000 contribuyentes no tuvieron que ir a un centro de servicios en lo que va del año porque realizaron sus trámites a través de su smartphone. La Sunat informó que los contribuyentes pueden modificar los datos de sus RUC a través de su página web, utilizando la Clave SOL e ingresando al formulario Virtual N 3128 – Modificación de Datos del RUC....',
			image:'../img/notice_5.jpg',
			day:'27',
			month:'Noviembre',
			year:'2015',
			content_a:'Según la Sunat, más de 10,000 contribuyentes no tuvieron que ir a un centro de servicios en lo que va del año porque realizaron sus trámites a través de su smartphone.',
			content_b:'La Sunat informó que los contribuyentes pueden modificar los datos de sus RUC a través de su página web, utilizando la Clave SOL e ingresando al formulario Virtual N° 3128 – "Modificación de Datos del RUC".<br>Trámites del RUC que se realizan por Internet son:<ol><li>Domicilio fiscal.</li><li>Confirmación de domicilio.</li><li>Condición del inmueble declarado como domicilio fiscal.</li><li>Suspensión Temporal y/o Reinicio de actividades. </li><li>Alta de tributos.</li></ol>'
		}
	]

app.controller('NoticeController',function($scope,$routeParams){
	$scope.data = notices;
	
})

app.controller('NoticeDetailController',['$scope','$sce','$routeParams',function($scope,$sce,$routeParams){
	$scope.data = notices;
	$scope.notice_id = $routeParams.notice_id;
	$scope.selected = $scope.data.filter(function(item){
		return item.id == $scope.notice_id;
	})[0];
	$scope.content_b=$sce.trustAsHtml($scope.selected['content_b']);
}])

function sliderMultiple(){
	var $carouselMultiple = $('#carouselExample');
	$carouselMultiple.on('slide.bs.carousel', function (e) {
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 4;
		var totalItems = $carouselMultiple.find('.carousel-item').length;
		
		if (idx >= totalItems-(itemsPerSlide-1)) {
			var it = itemsPerSlide - (totalItems - idx);
			for (var i=0; i<it; i++) {
				// append slides to end
				if (e.direction=="left") {
					$carouselMultiple.find('.carousel-item').eq(i).appendTo($carouselMultiple.find('.carousel-inner'));
				}
				else {
					$carouselMultiple.find('.carousel-item').eq(0).appendTo($carouselMultiple.find('.carousel-inner'));
				}
			}
		}
	});	
}

app.filter('escape',function($sce){
	return function(html){
		return $sce.trustAsHtml(html);
	}
})
