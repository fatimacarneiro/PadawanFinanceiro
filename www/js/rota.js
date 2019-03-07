angular.module('starter').config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('login');

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
          controller: 'tabelaController'
        }
      }
    })
    .state('login',{
       url : '/login',
       templateUrl : 'templates/login.html',
       controller : 'loginController'
       })
    .state('cadastroMovimentos',{
      url : '/cadastroMovimentos',
      templateUrl : 'templates/cadastroMovimentos.html',
      controller: 'cadastroMovimentosController'
     })
  })
