angular.module('starter').controller('movimentosDetalhadosController', function($scope, $stateParams, movimentoService, $location){
    $scope.movimentoEscolhido = movimentoService.obter($stateParams.movimento);

    $scope.excluir = function() {
        movimentoService.apagar($scope.movimentoEscolhido)
       $location.path('/movimentos');
    }
})