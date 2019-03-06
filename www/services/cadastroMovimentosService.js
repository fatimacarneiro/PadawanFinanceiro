angular.module('starter')
  .service('cadastroMovimentosService', function($http) {
      
    var url ='http://localhost:8100/'
      $http.defaults.headers.common.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU1MjczNTc4Mn0.v6pmDNuYW2F-iWB7096nv8tlW31NkFsFkRk_fvebY6o7GboGLWoIOrvCjuXNWhGpkEMy01Le_y9piqNooUfDyA';
    
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
});
