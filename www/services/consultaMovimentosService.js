angular.module('starter').service('consultaMovimentosService', function ($http) {

  var url = 'http://localhost:8100/'

  return {
    listarMovimentos,
    apagar
  }

  function listarMovimentos() {

    var urlRequisicao = 'api/transactions';

    var raiz = 'http://localhost:8100/';

    return $http.get(raiz + urlRequisicao).then(function successCallback(responseData) {
      return responseData.data
    })
  }

  function apagar(id) {
    var urlRequisicao = 'api/transactions/';

    var raiz = 'http://localhost:8100/';

    return $http.delete(raiz + urlRequisicao + id).then(function successCallback(responseData) {
    }).catch(function errorCallback() {
      alert('Não foi possível conectar ao servidor, por favor verifique sua conexão com a internet');
    })
  }
})
