angular.module('starter')
  .service('cadastroMovimentosService', function ($http, $rootScope) {

    var url = 'http://localhost:8100/'

    $http.defaults.headers.common.Authorization = $rootScope.token;

    return {
      salvarMovimento: function (movimento) {

        var urlRequisicao = 'api/transactions';

        return $http.post(url + urlRequisicao, movimento).then(function(){
          return setTimeout(function() {
            window.location.reload()
          },500);
        }).catch(function errorCallback (){

          alert('Não foi possível conectar ao servidor, por favor verifique sua conexão com a internet');
        })
      }
    }
  });
