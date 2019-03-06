angular.module('starter').controller('cadastroMovimentosController', function ($scope, movimentosService,$location, $ionicPopup, $state){

 console.log(movimentosService.listar()); //  pi escreveu essa linha para testar a API José e Camila irão precisar
 $scope.date = null;

  $scope.mudaTela = function (caminho) {
    $state.go(caminho);
    }

  $scope.capturaDadosCadMovimento = {
    description: null,
    value: null,
    date: null,
    type: null,
  };

  $scope.apareceMensagem = false;

  $scope.salvarMovimento = function(){
    if ($scope.formCadMovimento.$valid) {
      var dia=this.date.getDate();
      var mes=this.date.getMonth();
      var ano=this.date.getFullYear();
      let date = dia + '/' + (mes++) + '/' + ano;
      this.capturaDadosCadMovimento.date = date;

      //this.capturaDadosCadMovimento.value = this.capturaDadosCadMovimento.value.replace(',', '.');

      movimentosService.salvarMovimento(this.capturaDadosCadMovimento);

      $state.go('app.movimentos');

      $ionicPopup.alert({
        title : 'Salvo!',
        template : 'Movimento cadastrado com sucesso'

      })


    } else {
      $scope.apareceMensagem = true;
      $ionicPopup.alert({
        title : 'Erro!',
        template : 'Informações inválidas. Preencher formulário corretamente.'

      })
    }

  }


})
