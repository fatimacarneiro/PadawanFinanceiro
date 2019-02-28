angular.module('starter').controller('tabelaController', function($scope, movimentoService){
    $scope.filtra = function(event){

        this.tabelaExibida = this.dadosTabela.filter((itemTabela) => itemTabela.descricao.match(event, 'i'));
    }
    function init() {

        $scope.dadosTabela = movimentoService.obterDados();
    
        $scope.tabelaExibida = $scope.dadosTabela;
    }

    init();
    
})