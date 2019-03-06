angular.module('starter').controller('tabelaController', function($scope, $location, consultaMovimentosService, $ionicPopup){

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

    $scope.excluir = function(movimentoSelecionado) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Excluir Movimento',
            template: 'Tem certeza que deseja excluir esse movimento?'
          });
       
          confirmPopup.then(function(res) {
            if(res) {
                consultaMovimentosService.apagar(movimentoSelecionado.id)
            } 
          });
    }
})