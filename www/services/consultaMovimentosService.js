(function () {
  'use strict';

  angular.module('starter').service('consultaMovimentosService', function ($http) {

    var url = 'http://localhost:8100/'

    return {
      listarMovimentos,
      apagar
    }

    function listarMovimentos() {

      var urlRequisicao = 'api/transactions';

      var raiz = 'http://localhost:8100/';

      return $http.get(raiz + urlRequisicao);
    }

    function apagar(id) {
      var urlRequisicao = 'api/transactions/';

      var raiz = 'http://localhost:8100/';

      return $http.delete(raiz + urlRequisicao + id);
    }
  })

})();
