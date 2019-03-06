angular.module('starter').controller('tabelaController', function($scope, $location, consultaMovimentosService, $ionicPopup){
    
    $scope.filtraDescricao = function(event){

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

    $scope.filtroAvancado = function(){
        
        $scope.movimento = {}

        $ionicPopup.show({
            templateUrl: 'templates/filtroAvancado.html',
            title: 'Filtro Avançado',
            subTitle: 'Selecione os dados para filtrar',
            scope: $scope,
            buttons: [
            { text: 'Cancelar' },
            {
                text: '<b>Filtrar</b>',
                type: 'button-positive',
                onTap: function() {
                    if ($scope.movimento.date) {
                        let dia=$scope.movimento.date.getDate();
                        let mes=$scope.movimento.date.getMonth();
                        let ano=$scope.movimento.date.getFullYear();
                        $scope.data = dia + '/' + (mes++) + '/' + ano;
                        
                        console.log($scope.movimento.value)
                        console.log($scope.tabelaExibida = $scope.listaMovimento.filter((itemTabela) => itemTabela.date.match($scope.movimento.date, 'g')));
                    }
                    if ($scope.movimento.value){
                        console.log($scope.tabelaExibida = $scope.listaMovimento.filter((itemTabela) => itemTabela.value.match($scope.movimento.value, 'g')));
                    }
                    if ($scope.movimento.type){
                        console.log($scope.tabelaExibida = $scope.listaMovimento.filter((itemTabela) => itemTabela.type.match($scope.movimento.type, 'g')));
                    }
                }
            }
            ]
        })
    }
})