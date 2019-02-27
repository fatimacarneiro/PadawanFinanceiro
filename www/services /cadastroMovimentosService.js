// angular.module('starter')
//   .service('movimentosService', function() {

//     $http.defaults.headers.common.Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9';

//     var urlRequisicao = 'https://padawan-finance.herokuapp.com/transactions';

//     var apiEndpoint ='http://localhost:8200';

//     $http.get(apiEndpoint, urlRequisicao).then(function successCallback(responseData) {
//       console.log(responseData)
//     }), function errorCallback(responseData) {
//       console.log(responseData)
//     }
// });

angular.module('starter.services', [])

.factory('Api', function($http, $q, ApiEndpoint) {
  console.log('ApiEndpoint', ApiEndpoint)

  var getApiData = function() {
    var q = $q.defer();

    $http.get(ApiEndpoint.url)
    .success(function(data) {
      console.log('Got some data: ', data)
      q.resolve(data);
    })
    .error(function(error){
      console.log('Had an error')
      q.reject(error);
    })

    return q.promise;
  }

  return {
    getApiData: getApiData
  };
})
