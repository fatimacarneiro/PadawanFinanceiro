(function () {
  'use strict';

  angular.module('starter').controller('menuController', function ($state) {
    var vm = this;

    vm.mudaTela = function (caminho) {
      $state.go(caminho);
      console.log("entrei")
    }
  })
})();
