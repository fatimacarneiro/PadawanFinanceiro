angular.module('starter').config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('movimentos')
  $stateProvider
  .state('movimentos',{
    url : '/movimentos',
    templateUrl : 'templates/movimentos.html',
    controller: 'movimentoController'
    })
    .state('cadastroMovimentos',{
      url : '/cadastroMovimentos',
      templateUrl : 'templates/cadastroMovimentos.html',
      controller: 'cadastroMovimentosController'
     });
})
