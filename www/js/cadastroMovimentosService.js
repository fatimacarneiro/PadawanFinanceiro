angular.module('starter')
  .service('movimentosService', function($http) {
      var url ='http://localhost:8100/'
      $http.defaults.headers.common.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU1MjIxODY4M30.ilZIkB87_1D3MvgV_8abXcLl1ghs2SHSLARcXZekyECS-9_NgI9uSHYFlMB2jIKEhhGzIPV8imZnFdcREe_ORQ';
    return {
      listar,
      salvarMovimento: function(movimento)
      {

        var urlRequisicao = 'api/transactions';
        return $http.post(url + urlRequisicao, movimento).then(function(response){
          return "Deu certo."
          });
      }
    }

    function listar() {

      var urlRequisicao = 'api/transactions';

      var raiz ='http://localhost:8100/';

      $http.get(raiz + urlRequisicao).then(function successCallback(responseData) {
        console.log(responseData)
      }), function errorCallback(responseData) {
        console.log(responseData)
      }
    }





});
