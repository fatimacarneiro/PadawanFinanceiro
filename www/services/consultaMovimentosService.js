angular.module('starter').service('consultaMovimentosService', function($http) {

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
        var urlRequisicao = 'api/transactions/';
  
        var raiz ='http://localhost:8100/';
  
            return $http.delete(raiz + urlRequisicao + id).then(function successCallback(responseData) {
                return window.location.reload();
        }).catch(function errorCallback (){
            alert('Não foi possível conectar ao servidor, por favor verifique sua conexão com a internet');
        })
    }
})