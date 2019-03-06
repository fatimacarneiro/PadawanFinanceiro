angular.module('starter').controller('movimentosDetalhadosController', function($rootScope, $scope, $stateParams, consultaMovimentosService, $location){

    consultaMovimentosService.listarMovimentos().then(function successCallback(dados){
        $scope.listaMovimento = dados;
    });
    
    $scope.movimento = $rootScope.obj;
    
    if($scope.movimento.type === "EXPENSE"){
        $scope.movimento.type = "Despesa"
    } else if ($scope.movimento.type === "REVENUE"){
        $scope.movimento.type = "Receita"
    }

    $scope.excluir = function() {
        consultaMovimentosService.apagar($scope.movimentoEscolhido)
       $location.path('/movimentos');
    }
})