(function () {
  'use strict';

  angular.module('starter').controller('tabelaController', function ($state, consultaMovimentosService, $ionicPopup) {
    var vm = this;

    vm.filtraDescricao = function (event) {
      vm.tabelaExibida = vm.listaMovimento.filter((itemTabela) => itemTabela.description.match(event, 'i'));
    }

    let atualizarMovimentos = res => {
      vm.listaMovimento = res.data

      vm.tabelaExibida = vm.listaMovimento;

      for (let i = 0; i < vm.tabelaExibida.length; i++) {
        if (vm.tabelaExibida[i].type === "EXPENSE") {
          vm.tabelaExibida[i].type = "Despesa"
        } else if (vm.tabelaExibida[i].type === "REVENUE") {
          vm.tabelaExibida[i].type = "Receita"
        }
      }
    }

    function init() {
      consultaMovimentosService.listarMovimentos().then(atualizarMovimentos);
    }

    init();

    vm.mudaTelaCadastro = function (caminho) {
      $state.go('app.cadastroMovimentos');
    }

    vm.excluir = function (movimentoSelecionado) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Excluir Movimento',
        template: 'Tem certeza que deseja excluir esse movimento?'
      });

      confirmPopup.then(function (res) {
        if (res) {
          consultaMovimentosService.apagar(movimentoSelecionado.id)
            .then(consultaMovimentosService.listarMovimentos())
            .then(atualizarMovimentos);
        }
      });
    }

    vm.filtroAvancado = function () {

      vm.movimento = {}

      $ionicPopup.show({
        templateUrl: 'templates/filtroAvancado.html',
        title: 'Filtro Avançado',
        subTitle: 'Selecione os dados para filtrar',
        buttons: [{
            text: 'Cancelar'
          },
          {
            text: '<b>Filtrar</b>',
            type: 'button-positive',
            onTap: function () {
              if (vm.movimento.date) {
                let dia = vm.movimento.date.getDate();
                let mes = vm.movimento.date.getMonth();
                let ano = vm.movimento.date.getFullYear();
                vm.data = dia + '/' + (mes++) + '/' + ano;

                console.log(vm.movimento.value)
                console.log(vm.tabelaExibida = vm.listaMovimento.filter((itemTabela) => itemTabela.date.match(vm.movimento.date, 'g')));
              }
              if (vm.movimento.value) {
                console.log(vm.tabelaExibida = vm.listaMovimento.filter((itemTabela) => itemTabela.value.match(vm.movimento.value, 'g')));
              }
              if (vm.movimento.type) {
                console.log(vm.tabelaExibida = vm.listaMovimento.filter((itemTabela) => itemTabela.type.match(vm.movimento.type, 'g')));
              }
            }
          }
        ]
      })
    }
  })
})();
