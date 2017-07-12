angular.module('comun').controller('HomeCtrl',function($scope,agilservice,$log,$uibModal){

	// servicio que viene en onpromise (porque es un retorno de un $http.get)
	$scope.resultadoAgil = [];

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

	$scope.modal = function() {

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


	} 


});