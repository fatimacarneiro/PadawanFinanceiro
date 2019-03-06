angular.module('starter').service('consultaMovimentosService', function($http) {
    
    var lista = [];
    var url ='http://localhost:8100/'
    $http.defaults.headers.common.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU1MjczNTc4Mn0.v6pmDNuYW2F-iWB7096nv8tlW31NkFsFkRk_fvebY6o7GboGLWoIOrvCjuXNWhGpkEMy01Le_y9piqNooUfDyA';
  
    return {
        listarMovimentos,
        apagar
    }
    
    function listarMovimentos() {

        var urlRequisicao = 'api/transactions';
  
        var raiz ='http://localhost:8100/';
  
         return $http.get(raiz + urlRequisicao).then(function successCallback(responseData) {
          return responseData.data
        })
    }

    function apagar(id){
        for(let i = 0; i < movimentos.length; i++){
            if (movimentos[i].id === id.id){
                return movimentos.splice(movimentos[i],1);
            }
        }
    }
})