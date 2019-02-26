angular.module('starter').controller('tabelaController', function( $scope){

    $scope.tabelaTeste = [
        { descricao : 'Supermercado', valor : 'R$ 999', data : '02/03/2005', tipo : 'Despesa' },
        { descricao : 'Empresa', valor : 'R$ 500', data : '02/03/2002', tipo : 'Receita' }
    ]
})