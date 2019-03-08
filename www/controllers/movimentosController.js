angular.module('starter').controller('tabelaController', function($scope, $state, consultaMovimentosService, $ionicPopup){
    
    $scope.movimento = {}
    $scope.saldoAtual = null;
    $scope.saldoReceita = null;
    $scope.saldoDespesa = null;
    

    $scope.filtraDescricao = function(event){

        $scope.tabelaExibida = $scope.listaMovimento.filter((item) => item.description.match(event, 'i'));
    }

   
    
    function init() {
        consultaMovimentosService.listarMovimentos().then(function successCallback(dados){
            $scope.listaMovimento = dados;
            $scope.tabelaExibida = $scope.listaMovimento;

            calculaSaldoAtual($scope.listaMovimento);
            
            for(let i=0; i < $scope.tabelaExibida.length;i++){
                if($scope.tabelaExibida[i].type === "EXPENSE"){
                    $scope.tabelaExibida[i].type = "Despesa"
                } else if ($scope.tabelaExibida[i].type === "REVENUE"){
                    $scope.tabelaExibida[i].type = "Receita"
                }
            }
        });
        
        function calculaSaldoAtual (lista){
            for(let i = 0; i < lista.length; i++){
                if(lista[i].type === 'REVENUE'){    
                    $scope.saldoReceita = $scope.saldoReceita + lista[i].value;
                }
                else {
                    $scope.saldoDespesa = $scope.saldoDespesa + lista[i].value;
                }
            }
            $scope.saldoAtual = $scope.saldoReceita - $scope.saldoDespesa;
        } 
    }

    init();

    $scope.mudaTelaCadastro = function (){
        $state.go('app.cadastroMovimentos');
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

    $scope.filtroAvancado = function(){
        
        $scope.filtra = function (){
            $scope.tabelaExibida = $scope.listaMovimento
                .filter(filtraValor)
                .filter(filtraData)
                .filter(filtraTipo);
        }

        $ionicPopup.show({
            templateUrl: 'templates/filtroAvancado.html',
            title: 'Filtro Avançado',
            subTitle: 'Selecione os dados para filtrar',
            scope: $scope,
            buttons: [

           {
                text: '<b>Fechar</b>',
                type: 'button-positive'    
            }
            ]
        })
    }
    
    let filtraData = item => !$scope.movimento.date || item.date.match($scope.movimento.date, 'i')
        
    let filtraValor = item => !$scope.movimento.value || item.value === $scope.movimento.value
    
    let filtraTipo = item => !$scope.movimento.type || item.type === $scope.movimento.type
}) 

