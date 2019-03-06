angular.module('starter').config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('cadastroMovimentos');

    $stateProvider
    .state('app',{
      url : '/app',
      templateUrl : 'templates/menu.html',
      abstract : true
    })
    .state('app.movimentos',{
      url : '/movimentos',
      views : {
        'menuContent': {
          templateUrl : 'templates/movimentos.html',
          controller: 'movimentoController'
        }
      },
      })
    .state('cadastroMovimentos',{
      url : '/cadastroMovimentos',
      templateUrl : 'templates/cadastroMovimentos.html',
      controller: 'cadastroMovimentosController'
     });
  })
