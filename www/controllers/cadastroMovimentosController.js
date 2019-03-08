(function () {
  'use strict';

  angular.module('starter')
    .controller('cadastroMovimentosController', function (cadastroMovimentosService, $state, $ionicPopup) {
      var vm = this;

      function init() {
        vm.date = null
        vm.data = null
        vm.apareceMensagem = false;
        vm.capturaDadosCadMovimento = {
          description: null,
          value: null,
          date: null,
          type: null,
        };
      }

      init();

      vm.mudaTela = function (caminho) {
        $state.go(caminho);
      }

      vm.salvarMovimento = function () {
        if (vm.formCadMovimento.$valid) {
          let dia = vm.date.getDate();
          let mes = vm.date.getMonth();
          let ano = vm.date.getFullYear();

          let date = dia + '/' + (mes++) + '/' + ano;

          vm.capturaDadosCadMovimento.date = date;

          //vm.capturaDadosCadMovimento.value = vm.capturaDadosCadMovimento.value.replace(',', '.');

          cadastroMovimentosService.salvarMovimento(vm.capturaDadosCadMovimento);

          $state.go('app.movimentos');

          $ionicPopup.alert({
            title: 'Salvo!',
            template: 'Movimento cadastrado com sucesso'

          })
        } else {
          vm.apareceMensagem = true;

          $ionicPopup.alert({
            title: 'Erro!',
            template: 'Informações inválidas. Preencher formulário corretamente.'

          })
        }
      }
    })
})();
