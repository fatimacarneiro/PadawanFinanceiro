angular.module('starter').controller('movimentosDetalhadosController', function($scope, $stateParams){

    $scope.movimentoEscolhido = angular.fromJson($stateParams.movimento);

})