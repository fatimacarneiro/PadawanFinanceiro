angular.module('starter').controller('tabelaController', function($scope, movimentoService, $location, movimentosService){

     

    $scope.filtra = function(event){

        this.tabelaExibida = this.listaMovimento.filter((itemTabela) => itemTabela.description.match(event, 'i'));
    }
    function init() {
        movimentosService.listar().then(function successCallback(dados){
            $scope.listaMovimento = dados;
            $scope.tabelaExibida = $scope.listaMovimento;
        });
    }

    init();
    $scope.mudaTelaCadastro = function (){
        $location.path('/cadastroMovimentos');
    }
    
})