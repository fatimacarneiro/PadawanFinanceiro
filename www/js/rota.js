angular.module('starter').config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('login');
  $stateProvider
  .state('login',{
  url : '/login',
  templateUrl : 'templates/login.html',
  controller: 'LoginController'
  }),
  $stateProvider
  .state('Movimentos',{
  url : '/Movimentos',
  templateUrl : 'templates/movimentos.html',
  controller: 'MovimentosController'
  }),
  $stateProvider
  .state('CadastroUsuario',{
  url : '/CadastroUsuario',
  templateUrl : 'templates/cadastroUsuario.html',
  controller: 'CadastroUsuarioController'
  });
  })
