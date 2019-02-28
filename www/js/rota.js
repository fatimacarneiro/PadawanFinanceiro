angular.module('starter').config(function($stateProvider, $urlRouterProvider){
   
  $urlRouterProvider.otherwise('movimentos');
    
    $stateProvider
    
    .state('login',{
      url : '/login',
      templateUrl : 'templates/login.html',
      //controller: 'LoginController'
      })

    .state('movimentos',{
      url : '/movimentos',
      templateUrl : 'templates/movimentos.html',
      controller: 'tabelaController'
      })
    
    .state('movimentosDetalhados', {
      url : '/movimentosDetalhados/:movimento',
      templateUrl : 'templates/movimentosDetalhados.html',
      controller : 'movimentosDetalhadosController'
    })

    .state('cadastroUsuario',{
      url : '/cadastroUsuario',
      templateUrl : 'templates/cadastroUsuario.html',
      //controller: 'CadastroUsuarioController'
    });
  })
