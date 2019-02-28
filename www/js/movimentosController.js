angular.module('starter').controller('tabelaController', function($scope, movimentoService, $location){
    $scope.filtra = function(event){

        this.tabelaExibida = this.dadosTabela.filter((itemTabela) => itemTabela.descricao.match(event, 'i'));
    }
    function init() {

        $scope.dadosTabela = movimentoService.obterDados();
    
        $scope.tabelaExibida = $scope.dadosTabela;
    }

    init();
    $scope.mudaTelaCadastro = function (){
        $location.path('/cadastroMovimentos');
    }
    
})