angular.module('starter').controller('tabelaController', function($rootScope, $scope, $location, consultaMovimentosService){

    $scope.filtra = function(event){

        this.tabelaExibida = this.listaMovimento.filter((itemTabela) => itemTabela.description.match(event, 'i'));
    }
    $scope.movimentoSelecionado = function (movimentoSelecionado){
        $rootScope.obj = movimentoSelecionado
        $location.path('/movimentosDetalhados');
    }

    function init() {
        consultaMovimentosService.listarMovimentos().then(function successCallback(dados){
            $scope.listaMovimento = dados;
            $scope.tabelaExibida = $scope.listaMovimento;
        });
    }

    init();
    $scope.mudaTelaCadastro = function (){
        $location.path('/cadastroMovimentos');
    }
})