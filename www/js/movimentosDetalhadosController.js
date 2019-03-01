angular.module('starter').controller('movimentosDetalhadosController', function($scope, $stateParams, movimentoService, $location,movimentosService){

    movimentosService.listar().then(function successCallback(dados){
        $scope.listaMovimento = dados;
    });
    
    $scope.movimentoEscolhido = movimentoService.obter($stateParams.movimento);

    $scope.excluir = function() {
        movimentoService.apagar($scope.movimentoEscolhido)
       $location.path('/movimentos');
    }
})