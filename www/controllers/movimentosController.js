angular.module('starter').controller('tabelaController', function($scope, $location, consultaMovimentosService){

    $scope.filtra = function(event){

        this.tabelaExibida = this.listaMovimento.filter((itemTabela) => itemTabela.description.match(event, 'i'));
    }

    function init() {
        consultaMovimentosService.listarMovimentos().then(function successCallback(dados){
            $scope.listaMovimento = dados;
            $scope.tabelaExibida = $scope.listaMovimento;
            
            for(let i=0; i < $scope.tabelaExibida.length;i++){
                if($scope.tabelaExibida[i].type === "EXPENSE"){
                    $scope.tabelaExibida[i].type = "Despesa"
                } else if ($scope.tabelaExibida[i].type === "REVENUE"){
                    $scope.tabelaExibida[i].type = "Receita"
                }
            }
        });
    }

    init();
    
    $scope.mudaTelaCadastro = function (){
        $location.path('/cadastroMovimentos');
    }

    $scope.excluir = function() {
        consultaMovimentosService.apagar($scope.movimentoEscolhido)
       $location.path('/movimentos');
    }
})