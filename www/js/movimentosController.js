angular.module('starter').controller('tabelaController', function($scope, $state){

    $scope.dadosTabela = [
        { id: 1 ,descricao : 'Supermercado', valor : 'R$ 999', data : '02/03/2005', tipo : 'Despesa' },
        { id: 2, descricao : 'Empresa', valor : 'R$ 500', data : '02/03/2002', tipo : 'Receita' }
    ];

    $scope.tabelaExibida = $scope.dadosTabela;

    $scope.filtra = function(event){

        this.tabelaExibida = this.dadosTabela.filter((itemTabela) => itemTabela.descricao.match(event, 'i'));
    }

    
})