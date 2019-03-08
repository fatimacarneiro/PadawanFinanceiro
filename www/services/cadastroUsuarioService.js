(function () {
  'use strict';

  angular.module('starter')
    .service('cadastroUsuarioService', function ($http) {

      var url = 'http://localhost:8100/'

      return {
        validaUsuario,
        salvarUsuario,
      }

      function salvarUsuario(usuario) {

        var urlRequisicao = 'api/users/sign-up';
        return $http.post(url + urlRequisicao, usuario);
      }

      function validaUsuario(usuario) {
        var urlRequisicao = 'api/login';

        return $http.post(url + urlRequisicao, usuario);
      }

    });

})();
