angular.module('starter').config(function($stateProvider, $urlRouterProvider){
   
  $urlRouterProvider.otherwise('movimentos');
    
    $stateProvider
 
    .state('movimentos',{
      url : '/movimentos',
      templateUrl : 'templates/movimentos.html',
      controller: 'tabelaController'
    })
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
      },

      })
      
    .state('cadastroMovimentos',{
      url : '/cadastroMovimentos',
      templateUrl : 'templates/cadastroMovimentos.html',
      controller: 'cadastroMovimentosController'
     })
  })
