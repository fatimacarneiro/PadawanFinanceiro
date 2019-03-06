angular.module('starter').config(function($stateProvider, $urlRouterProvider){
   
  $urlRouterProvider.otherwise('movimentos');
    
    $stateProvider
 
    .state('movimentos',{
      url : '/movimentos',
      templateUrl : 'templates/movimentos.html',
      controller: 'tabelaController'
      })
    
    .state('movimentosDetalhados', {
      url : '/movimentosDetalhados',
      templateUrl : 'templates/movimentosDetalhados.html',
      controller : 'movimentosDetalhadosController'
    })
    .state('cadastroMovimentos',{
      url : '/cadastroMovimentos',
      templateUrl : 'templates/cadastroMovimentos.html',
      controller: 'cadastroMovimentosController'
     });
  })
