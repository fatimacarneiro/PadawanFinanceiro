(function () {
  'use strict';

  angular.module('starter')
    .controller('loginController', loginController);

  loginController.$inject = ['cadastroUsuarioService', '$state', '$ionicPopup', '$http', '$window'];

  function loginController(cadastroUsuarioService, $state, $ionicPopup, $http, $window) {
    /* jshint validthis: true */
    var vm = this;

    function resetUsuario() {
      delete $window.localStorage.currentUser;
      $http.defaults.headers.common.Authorization = '';
    }

    vm.salvar = function () {
      if (!vm.formLogin.$valid) {
        vm.apareceMensagem = true;
        $ionicPopup.alert({
          title: 'Erro!',
          template: 'Informações inválidas. Preencher formulário corretamente.'
        })
        return
      }

      cadastroUsuarioService.salvarUsuario(this.capturaDadosUsuario).then(function (response) {

        vm.apareceMensagem = false;
        $state.go('app.movimentos');
      }).catch(function errorCallback() {
        $ionicPopup.alert({
          title: 'Erro!',
          template: 'Não foi possível salvar o usuário.'
        })
      })

    }

    vm.validar = function () {
      if (!vm.formLogin.$valid) {
        vm.apareceMensagem = true;

        $ionicPopup.alert({
          title: 'Erro!',
          template: 'Campos preenchidos incorretamente'
        })

        return;
      }

      cadastroUsuarioService.validaUsuario(this.capturaDadosUsuario)
        .then(function (response) {
          vm.apareceMensagem = false;

          $window.localStorage.currentUser = {
            token: response.token
          };

          $http.defaults.headers.common.Authorization = 'Bearer ' + response.headers('authorization');

          $state.go('app.movimentos');

          console.log(response);

          $ionicPopup.alert({
            title: 'Bem vindo!',
            template: 'Agora você pode controlar as suas finanças.'
          })

        }).catch(function errorCallback() {
          $ionicPopup.alert({
            title: 'Erro!',
            template: 'Login ou senha inválido.'
          })
        })
    }

    vm.logout = function () {
      resetUsuario();
    }

    function init() {
      vm.apareceMensagem = false;
      vm.capturaDadosUsuario = {
        username: null,
        password: null,
      };

      resetUsuario();
    }

    init();
  }
})();
