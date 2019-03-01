angular.module('starter').controller('cadastroMovimentosController', function ($scope, movimentosService,$location){

  // movimentosService.listar(); //  pi escreveu essa linha para testar a API José e Camila irão precisar
  $scope.date = null
  $scope.data = null

  $scope.mudaTela = function (caminho) {
    $location.path(caminho);
    }

  $scope.capturaDadosCadMovimento = {
    description: null,
    value: null,
    date: null,
    type: null,
  };

  $scope.salvarMovimento = function(){
   var dia=this.data.getDate();
   var mes=this.data.getMonth();
   var ano=this.data.getFullYear();
   this.date = dia + '/' + (mes++) + '/' + ano;

   this.capturaDadosCadMovimento.date = this.date;
    console.log(this.date);
   movimentosService.salvarMovimento(this.capturaDadosCadMovimento);

  }


})
