angular.module('starter').service('consultaMovimentosService', function($http) {

    var url ='http://localhost:8100/'
    $http.defaults.headers.common.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU1MjgyMDkwOH0.8rGzX_tKkIxDVqYeCgCYdjJ-tkIcM0Cu3WfXoMA8G4zcygCZV0u8LDDSRTP4-f9q3Jj2x0YPjD7Q1QmXDz2Ghg';
  
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