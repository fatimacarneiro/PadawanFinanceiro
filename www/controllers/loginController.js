angular.module('starter').controller('loginController', function ($scope, cadastroUsuarioService, $state, $ionicPopup, $http) {
  $scope.apareceMensagem = false;

  $scope.capturaDadosUsuario = {
    username: null,
    password: null,
  };

  $scope.salvar = function () {
    if (!$scope.formLogin.$valid) {
      $scope.apareceMensagem = true;
      $ionicPopup.alert({
        title: 'Erro!',
        template: 'Informações inválidas. Preencher formulário corretamente.'
      })
      return
    }

    cadastroUsuarioService.salvarUsuario(this.capturaDadosUsuario).then(function (response) {

    $scope.apareceMensagem = false;
    $state.go('app.movimentos');
    }).catch(function errorCallback() {
      $ionicPopup.alert({
        title: 'Erro!',
        template: 'Não foi possível salvar o usuário.'
      })
    })

}

  $scope.validar = function () {
    if (!$scope.formLogin.$valid) {
      $scope.apareceMensagem = true;

      $ionicPopup.alert({
        title: 'Erro!',
        template: 'Campos preenchidos incorretamente'
      })

      return;
    }

    cadastroUsuarioService.validaUsuario(this.capturaDadosUsuario)
      .then(function (response) {
      $scope.apareceMensagem = false;
      $http.defaults.headers.common.Authorization = response.headers('authorization');



      $state.go('app.movimentos');
      console.log(response);
      $ionicPopup.alert({
        title: 'Bem vindo!',
        template: 'Agora você pode controlar as suas finanças.'
      })

    }).catch(function errorCallback() {
      $ionicPopup.alert({
        title: 'Erro!',
        template: 'Login ou senha inválido.'
      })
    })
  }

   $scope.logout = function(){
    $http.defaults.headers.common.Authorization = '';

   }
})
