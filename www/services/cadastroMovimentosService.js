angular.module('starter')
  .service('cadastroMovimentosService', function ($http) {

    var url = 'http://localhost:8100/'

    return {
      salvarMovimento: function (movimento) {

        var urlRequisicao = 'api/transactions';

        return $http.post(url + urlRequisicao, movimento).then(function (response) {
          return setTimeout(function () {}, 1000);
        }).catch(function errorCallback() {
          alert('Não foi possível conectar ao servidor, por favor verifique sua conexão com a internet');
        })
      }
    }
  });
