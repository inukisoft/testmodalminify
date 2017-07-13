angular.module('comun').controller('HomeCtrl',function($scope,agilservice,demorososervice,$log,$uibModal){

	// servicio que viene en onpromise (porque es un retorno de un $http.get)
	$scope.resultadoAgil = [];
	$scope.bandera = null;

	$scope.llamar = function() {

		$scope.resultadoAgil = [];
		var promise = agilservice.currentWeather();
		
		promise.then(
			function (answer) {
				$scope.resultadoAgil = answer; 
			},
			function(error) {
				$log.info("el error :" + JSON.stringify(error) );
			},
			function(progress) {
				$scope.resultadoAgil = { mensaje:"en espera"};	
				$log.info("cargando o en progreso :" + JSON.stringify(progress) );
			}
		);
	};

	$scope.abrirModal = function() {

        $scope.selectedPerson = "passed in person";
        console.log($scope.selectedPerson);

        var modalInstance = $uibModal.open({
            templateUrl: 'comun/partial/avisos-modal/avisos-modal.html',
            controller: 'AvisosModalCtrl',
            resolve: {
                selectedPerson: function() {
                    return $scope.selectedPerson;
                }
            }
        });
	};


	// y el combito? data contiene tanto las opciones como el elemento
	// que está seleccionado. El binding está en home.html, usando el 
	// ng-model="data.model" y los valores se logran por medio de una iteración
	$scope.data = {
		model: null,
		availableOptions: [
			{value: null, name: 'cargando ... '}
		]
	};

	demorososervice.listaPaisesEuropa().then(
		function(data){
			console.log("salida del servicio de países: " + JSON.stringify(data));
			// el trabajo sucio consiste en tomar todos los países que vienen en el json
			$scope.data.availableOptions = [];
			for (var i=0; i < data.length; i++) {
				$scope.data.availableOptions.push({name:data[i].name, value:data[i].alpha2Code});
			}

		},
		function (response) {
			console.log("el servicio ha dado ataos!");
			// acá podemos mostrar algún texto y botón que permita la recarga
			// de los países. 
		}
	);

	$scope.actualizarBandera = function() {
		// la idea es actualizar la bandera, obteniendo el código ISO alpha2
		// almacenado por la selección del combo de países
		if ($scope.data.model != null) {
			// se invoca al servicio para traer el país según código
			demorososervice.getPaisPorIsoAlpha2Code($scope.data.model).then(
				function(data){
					console.log("Recuperando país con iso " + $scope.data.model);
					$scope.bandera = data.flag;
				},
				function(response){
					console.log("ha ocurrido un error misterioso: " + JSON.stringify(response));
				}
			);
		}
	};


});