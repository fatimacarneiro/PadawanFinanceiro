angular.module('starter')
  .service('cadastroMovimentosService', function($http) {
      
    var url ='http://localhost:8100/'
      $http.defaults.headers.common.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU1MjgyMDkwOH0.8rGzX_tKkIxDVqYeCgCYdjJ-tkIcM0Cu3WfXoMA8G4zcygCZV0u8LDDSRTP4-f9q3Jj2x0YPjD7Q1QmXDz2Ghg';
    
      return {
      salvarMovimento: function(movimento)
      {

        var urlRequisicao = 'api/transactions';
        return $http.post(url + urlRequisicao, movimento).then(function(response){
          return setTimeout(function() {
            window.location.reload()
          },500);
        }).catch(function errorCallback (){
          alert('Não foi possível conectar ao servidor, por favor verifique sua conexão com a internet');
      })
      }
    }
});
