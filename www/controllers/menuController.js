angular.module('starter').controller('menuController', function ($scope, $state){
   $scope.mudaTela = function (caminho) {
     $state.go(caminho);
    console.log("entrei")
     }
})
