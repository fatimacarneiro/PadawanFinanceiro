angular.module('starter').config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('cadastroUsuario');

    $stateProvider

    .state('login',{
      url : '/login',
      templateUrl : 'templates/login.html',
      //controller: 'LoginController'
      })

    .state('movimentos',{
      url : '/movimentos',
      templateUrl : 'templates/movimentos.html',
      //controller: 'MovimentosController'
      })

    .state('cadastroUsuario',{
      url : '/cadastroUsuario',
      templateUrl : 'templates/cadastroUsuario.html',
      //controller: 'CadastroUsuarioController'
    });
  })
