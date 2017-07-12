angular.module('comun').controller('AvisosModalCtrl',function($scope,$uibModalInstance, selectedPerson){

    $scope.selectedPerson = selectedPerson;

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

});